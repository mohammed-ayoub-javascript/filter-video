import { isVideoPlayerURL } from './utils/VideoDetection.js';

/**
 * Background Script: Manages extension state and coordinates between components
 * Responsibilities:
 * - Maintains video detection state across tabs
 * - Manages extension settings and persistence
 * - Coordinates messaging between popup and content scripts
 * - Keeps service worker alive for consistent functionality
 */

// ===== State Management =====
// Store tabs with detected videos: tabId -> { detected: boolean, filtered: boolean }
let detectedVideoTabs = new Map();

// Extension settings with defaults
let filterShortcut = ',';  // Default shortcut key
let filterIntensity = 50;  // Default filter intensity
let isExtensionEnabled = true; // Default to enabled
let filterType = 'blur'; // Default filter type

// ===== Initialization =====
// Function to manage alarm
function updateAlarm(enabled) {
  if (enabled) {
    chrome.alarms.create('keepAlive', { periodInMinutes: 0.05 }); // Every 3 seconds for better reliability across different systems to prevent the extension from being killed
  } else {
    chrome.alarms.clear('keepAlive');
  }
}

/**
 * Updates the extension icon based on enabled state
 * @param {boolean} enabled - Whether the extension is enabled
 */
function updateIcon(enabled) {
  const iconPath = enabled ? 'icons/icon32.png' : 'icons/icon32-disabled.png';
  chrome.action.setIcon({ path: iconPath });
}

// Load saved state and set up initial alarm
chrome.storage.local.get(['filterShortcut', 'filterIntensity', 'isEnabled', 'filterType'], (result) => {
  if (result.filterShortcut) {
    filterShortcut = result.filterShortcut;
    console.log('[Background] Loaded saved shortcut:', filterShortcut);
  }
  if (result.filterIntensity) {
    filterIntensity = result.filterIntensity;
    console.log('[Background] Loaded saved intensity:', filterIntensity);
  }
  if (result.filterType) {
    filterType = result.filterType;
    console.log('[Background] Loaded saved filter type:', filterType);
  }
  isExtensionEnabled = result.isEnabled ?? true;
  console.log('[Background] Loaded extension state:', isExtensionEnabled);
  updateAlarm(isExtensionEnabled); // Set initial alarm state
  updateIcon(isExtensionEnabled); // Set initial icon state
});

// ===== Helper Functions =====
/**
 * Safely sends a message to a tab with error handling
 * @param {number} tabId - Target tab ID
 * @param {object} message - Message to send
 */
function safeSendMessage(tabId, message) {
  // First check if the tab exists and is ready
  chrome.tabs.get(tabId).then(tab => {
    if (tab.status === 'complete' && !tab.url.startsWith('chrome://')) {
      return chrome.tabs.sendMessage(tabId, message).catch(() => {
        // Silently ignore connection errors
      });
    }
  }).catch(() => {
    // Silently ignore if tab doesn't exist
  });
}

/**
 * Safely broadcasts a message to the extension
 * @param {object} message - Message to broadcast
 */
function safeBroadcast(message) {
  chrome.runtime.sendMessage(message).catch(() => {
    // Silently ignore connection errors
  });
}

// ===== Tab Event Handlers =====
// Handle tab switching (instant check, no detection needed)
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  if (isVideoPlayerURL(tab.url)) {
    console.log('[Tab Switch] Video page:', tab.url);
    // Remove this log if tab is not yet detected
    if (detectedVideoTabs.has(tab.id)) {
      console.log('[Tab Switch] Video already detected in this tab');
    }
  }
});

// Handle URL changes within the same tab
chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
  // If NOT a video page, we should delete the entry
  if (!isVideoPlayerURL(details.url)) {
    console.log('[URL Change] Not a video page:', details.url);
    detectedVideoTabs.delete(details.tabId);
    // Notify about video status change
    safeBroadcast({ 
      type: 'VIDEO_STATUS_CHANGED',
      tabId: details.tabId,
      hasVideo: false 
    });
  }
});

// Handle page refresh
chrome.webNavigation.onCompleted.addListener((details) => {
  if (details.frameId === 0) {
    console.log('[Page Load] Page loaded:', details.url);
    if (!isVideoPlayerURL(details.url)) {
      console.log('[Page Load] Not a video page:', details.url);
    }
    detectedVideoTabs.delete(details.tabId);
  }
});

// ===== Message Handler =====
// Listen for messages
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('[Background] Received message:', message);
  console.log('[Background] From:', sender?.tab?.id);
  
  // Handle GET_VIDEO_STATUS (from popup) separately as it doesn't need tabId from sender
  if (message.type === 'GET_VIDEO_STATUS' && message.tabId) {
    const hasVideo = detectedVideoTabs.has(message.tabId);
    console.log('[Background] Video status request for tab:', message.tabId, 'Has video:', hasVideo);
    sendResponse({ hasVideo });
    return true;  // Keep message channel open
  }

  // Special handling for TOGGLE_EXTENSION as it comes from popup
  if (message.type === 'TOGGLE_EXTENSION') {
    isExtensionEnabled = message.enabled;
    chrome.storage.local.set({ isEnabled: isExtensionEnabled });
    console.log('[Background] Extension toggled to:', isExtensionEnabled);
    
    updateIcon(isExtensionEnabled); // Update icon when state changes
    
    if (!isExtensionEnabled) {
      // Unblur all detected videos when disabled
      for (const [tabId, state] of detectedVideoTabs.entries()) {
        console.log('[Background] Checking tab:', tabId, 'State:', state);
        // Only unblur if the video is currently blurred
        if (state.filtered) {
          console.log('[Background] Removing filter from tab:', tabId);
          safeSendMessage(tabId, {
            type: 'APPLY_FILTER',
            shouldFilter: false,
            intensity: filterIntensity,
            filterType: filterType
          });
        }
      }
      // Clear the detection map after sending unblur messages
      detectedVideoTabs.clear();
    } else {
      console.log('[Background] Extension enabled, starting video detection');
      // Start video detection in each tab
      chrome.tabs.query({}, (tabs) => {
        tabs.forEach(tab => safeSendMessage(tab.id, {
          type: 'TOGGLE_EXTENSION',
          enabled: true
        }));
      });
    }
    updateAlarm(isExtensionEnabled);
    sendResponse({ success: true, isEnabled: isExtensionEnabled });
    return true;
  }

  const tabId = sender.tab?.id;
  console.log('[Background] Processing message for tab:', tabId);
  
  // Handle content script messages
  switch(message.type) {
    case 'VIDEO_DETECTED':
      if (!isExtensionEnabled) {
        console.log('[Background] Extension disabled, ignoring video detection');
        return;
      }
      console.log('[Background] Video detected in tab:', tabId);
      // Initialize with both detected and blur state
      detectedVideoTabs.set(tabId, { 
        detected: true, 
        filtered: false  // Initialize filter state
      });
      // Broadcast to popup
      safeBroadcast({ 
        type: 'VIDEO_DETECTED',
        tabId: tabId
      });
      break;
      
    case 'TOGGLE_FILTER':
      const state = detectedVideoTabs.get(tabId);
      if (state) {
        state.filtered = !state.filtered;  // Toggle filter state
        detectedVideoTabs.set(tabId, state);
        console.log('[Background] Toggled filter state for tab:', tabId, 'New state:', state);
        safeSendMessage(tabId, {
          type: 'APPLY_FILTER',
          shouldFilter: state.filtered,
          intensity: filterIntensity,
          filterType: filterType
        });
      }
      break;

    case 'UPDATE_SHORTCUT':
      console.log('[Background] Updating shortcut key to:', message.key);
      filterShortcut = message.key;
      // Save to storage
      chrome.storage.local.set({ filterShortcut: message.key });
      // Notify only tabs with videos
      chrome.tabs.query({}, (tabs) => {
        console.log('[Background] Broadcasting shortcut update to video tabs');
        tabs.forEach(tab => {
          if (detectedVideoTabs.has(tab.id)) {
            safeSendMessage(tab.id, {
              type: 'UPDATE_SHORTCUT',
              key: filterShortcut
            });
          }
        });
      });
      break;

    case 'GET_SHORTCUT':
      sendResponse({ key: filterShortcut });
      return true;  // Keep message channel open

    case 'GET_IS_ENABLED':
      sendResponse({ isEnabled: isExtensionEnabled });
      return true;  // Keep message channel open

    case 'GET_FILTER_INTENSITY':
      sendResponse({ intensity: filterIntensity });
      return true;  // Keep message channel open

    case 'UPDATE_FILTER_INTENSITY':
      console.log('[Background] Updating filter intensity to:', message.intensity);
      filterIntensity = message.intensity;
      // Save to storage
      chrome.storage.local.set({ filterIntensity: message.intensity });
      // Update any active filtered videos
      chrome.tabs.query({}, (tabs) => {
        tabs.forEach(tab => {
          const state = detectedVideoTabs.get(tab.id);
          if (state?.filtered) {
            safeSendMessage(tab.id, {
              type: 'APPLY_FILTER',
              shouldFilter: true,
              intensity: filterIntensity,
              filterType: filterType
            });
          }
        });
      });
      break;

    case 'GET_FILTER_TYPE':
      sendResponse({ filterType });
      return true;  // Keep message channel open

    case 'UPDATE_FILTER_TYPE':
      console.log('[Background] Updating filter type to:', message.filterType);
      filterType = message.filterType;
      // Save to storage
      chrome.storage.local.set({ filterType: message.filterType });
      // Update any active filtered videos
      chrome.tabs.query({}, (tabs) => {
        tabs.forEach(tab => {
          const state = detectedVideoTabs.get(tab.id);
          if (state?.filtered) {
            safeSendMessage(tab.id, {
              type: 'APPLY_FILTER',
              shouldFilter: true,
              intensity: filterIntensity,
              filterType: filterType
            });
          }
        });
      });
      break;
  }
});

// ===== Cleanup and Maintenance =====
// Clean up when tab is closed
chrome.tabs.onRemoved.addListener((tabId) => {
  if (detectedVideoTabs.has(tabId)) {
    console.log('[Tab Closed] Removing detected video for tab:', tabId);
    detectedVideoTabs.delete(tabId);
  }
});

// Keep alive handler
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'keepAlive') {
    // Check if extension is enabled
    chrome.storage.local.get(['isEnabled'], (result) => {
      if (result.isEnabled) {
        console.log('[Background] Extension active');
      }
    });
  }
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    isVideoPlayerURL,
    detectedVideoTabs
  };
}