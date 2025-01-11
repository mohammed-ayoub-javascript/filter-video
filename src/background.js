// Store tabs with detected videos: tabId -> { detected: boolean, blurred: boolean }
let detectedVideoTabs = new Map();

// Add at the top with other state
let blurShortcut = 'b';  // Default shortcut key
let blurIntensity = 50;  // Default blur intensity

// Load saved shortcut and intensity on startup
chrome.storage.local.get(['blurShortcut', 'blurIntensity'], (result) => {
  if (result.blurShortcut) {
    blurShortcut = result.blurShortcut;
    console.log('[Background] Loaded saved shortcut:', blurShortcut);
  }
  if (result.blurIntensity) {
    blurIntensity = result.blurIntensity;
    console.log('[Background] Loaded saved intensity:', blurIntensity);
  }
});

// Helper function to check if URL is a video player page
function isVideoPlayerURL(url) {
  let handling = "";
  // For Netflix, specifically check for watch/ but not browse or home
  if (url.includes('youtube.com/watch') ||
     (url.includes('netflix.com/watch') &&
      !url.includes('miniDpPlayButton') &&
      !url.includes('/browse'))) {
    handling = "default";
  }
  
  else if (url.includes('primevideo.com') && url.includes('detail')) {
    handling = "amazon";
  }
  return handling;
}

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
    chrome.runtime.sendMessage({ 
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

// Helper function for safe message sending
function safeSendMessage(tabId, message) {
  chrome.tabs.sendMessage(tabId, message).catch(error => {
    if (error.message.includes('receiving end does not exist')) {
      console.log('[Background] Tab not ready or closed:', tabId);
    } else {
      console.error('[Background] Message send error:', error);
    }
  });
}

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

  const tabId = sender.tab?.id;
  console.log('[Background] Processing message for tab:', tabId);
  
  switch(message.type) {
    case 'VIDEO_DETECTED':
      console.log('[Background] Video detected in tab:', tabId);
      detectedVideoTabs.set(tabId, { 
        detected: true, 
        blurred: false
      });
      // Broadcast to popup
      chrome.runtime.sendMessage({ 
        type: 'VIDEO_DETECTED',
        tabId: tabId
      });
      break;
      
    case 'TOGGLE_BLUR':
      if (detectedVideoTabs.has(tabId)) {
        // Toggle blur state
        const state = detectedVideoTabs.get(tabId);
        state.blurred = !state.blurred;
        detectedVideoTabs.set(tabId, state);
        // Inform content script of new state
        safeSendMessage(tabId, {
          type: 'APPLY_BLUR',
          shouldBlur: state.blurred,
          intensity: blurIntensity
        });
      }
      break;

    case 'UPDATE_SHORTCUT':
      console.log('[Background] Updating shortcut key to:', message.key);
      blurShortcut = message.key;
      // Save to storage
      chrome.storage.local.set({ blurShortcut: message.key });
      // Notify only tabs with videos
      chrome.tabs.query({}, (tabs) => {
        console.log('[Background] Broadcasting shortcut update to video tabs');
        tabs.forEach(tab => {
          if (detectedVideoTabs.has(tab.id)) {
            safeSendMessage(tab.id, {
              type: 'UPDATE_SHORTCUT',
              key: blurShortcut
            });
          }
        });
      });
      break;

    case 'GET_SHORTCUT':
      sendResponse({ key: blurShortcut });
      return true;  // Keep message channel open

    case 'GET_BLUR_INTENSITY':
      sendResponse({ intensity: blurIntensity });
      return true;  // Keep message channel open

    case 'UPDATE_BLUR_INTENSITY':
      console.log('[Background] Updating blur intensity to:', message.intensity);
      blurIntensity = message.intensity;
      // Save to storage
      chrome.storage.local.set({ blurIntensity: message.intensity });
      // Update any active blurred videos
      chrome.tabs.query({}, (tabs) => {
        tabs.forEach(tab => {
          const state = detectedVideoTabs.get(tab.id);
          if (state?.blurred) {
            safeSendMessage(tab.id, {
              type: 'APPLY_BLUR',
              shouldBlur: true,
              intensity: blurIntensity
            });
          }
        });
      });
      break;
  }
});

// Clean up when tab is closed
chrome.tabs.onRemoved.addListener((tabId) => {
  if (detectedVideoTabs.has(tabId)) {
    console.log('[Tab Closed] Removing detected video for tab:', tabId);
    detectedVideoTabs.delete(tabId);
  }
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    isVideoPlayerURL,
    detectedVideoTabs
  };
}