import { isVideoPlayerURL } from './utils/VideoDetection.js';

/**
 * Content Script: Handles video detection and blur functionality
 * Responsibilities:
 * - Detects video elements on supported streaming platforms
 * - Manages blur effect on detected videos
 * - Handles keyboard shortcuts for blur toggle
 * - Maintains connection with background script
 */

// ===== State Management =====
let videoDetectionAttempts = 0;
const MAX_ATTEMPTS = 60;
let lastDetectionTime = 0;
const DETECTION_COOLDOWN = 1000; // 1 second cooldown between detections
let filterListenerAttached = false;
let isExtensionEnabled = true; // Default to true
let currentKeydownHandler = null; // Store keydown handler reference for removal

// ===== Initialization =====

if (isVideoPlayerURL(window.location.href)) {
  videoDetectionAttempts = 0;
  setTimeout(checkForVideo, 1000);
}

// Get initial extension state
chrome.runtime.sendMessage({ type: 'GET_IS_ENABLED' }, (response) => {
  isExtensionEnabled = response?.isEnabled ?? true;
  console.log('[Content] Extension state:', isExtensionEnabled);
});

// ===== Helper Functions =====
// Helper function to get video element using consistent logic
function getVideoElement(url=window.location.href) {
  if (!isExtensionEnabled) return null;
  const handling = isVideoPlayerURL(url);

  switch (handling) {
    case 1: // Normal video player (YouTube, Netflix)
      return document.querySelector('video[src]');
    case 2: // Prime Video
      const videos = document.querySelectorAll('video[src]');
      return videos.length > 1 ? videos[1] : null;
    case 3: // Iframe detection for non supported platforms
      return document.querySelector('iframe[allowfullscreen]');
    default:
      return null;
  }
}

// Helper function for safe runtime operations
function safeRuntime(callback) {
  try {
    callback();
  } catch (e) {
    if (e.message.includes('Extension context invalidated')) {
      console.log('[Content] Extension context invalid - this is normal during updates');
    } else {
      console.error('[Content] Unexpected error:', e);
    }
  }
}

// ===== Video Detection =====
function checkForVideo() {
  if (!isExtensionEnabled) return null;
  const currentTime = Date.now();
  
  // Prevent detection if we're within cooldown period
  if (currentTime - lastDetectionTime < DETECTION_COOLDOWN) {
    console.log('[Content] Skipping detection - too soon after last detection');
    return;
  }
  
  console.log('[Content] Checking for video on:', window.location.href);
  
  let video = getVideoElement(); 
  
  if (video) {
    console.log('[Content] Video found:', video);
    safeRuntime(() => {
      chrome.runtime.sendMessage({ type: 'VIDEO_DETECTED' });
      lastDetectionTime = currentTime;
      videoDetectionAttempts = 0;  // Reset attempts when video is found
      attachFilterToggle(video);
    });
    return true;
  }
  
  videoDetectionAttempts++;
  if (videoDetectionAttempts < MAX_ATTEMPTS) {
    console.log('[Content] Video not found, will retry in 1 second');
    setTimeout(checkForVideo, 1000);
  } else {
    console.log('[Content] Max detection attempts reached');
  }
}

// ===== Filter Management =====
function attachFilterToggle(video, key = null) {
  if (filterListenerAttached) return;
  
  const setupListener = (shortcutKey) => {
    currentKeydownHandler = (e) => {
      if (e.key.toLowerCase() === shortcutKey.toLowerCase() && isExtensionEnabled) {
        chrome.runtime.sendMessage({ type: 'TOGGLE_FILTER' });
      }
    };
    document.addEventListener('keydown', currentKeydownHandler);
    filterListenerAttached = true;
  };

  // If no key provided, get it from background
  if (!key) {
    chrome.runtime.sendMessage({ type: 'GET_SHORTCUT' }, (response) => {
      setupListener(response?.key || ',');
    });
  } else {
    setupListener(key);
  }
}

// ===== Message Handlers =====
chrome.runtime.onMessage.addListener((message) => {
  // Listen for extension state changes
  if (message.type === 'TOGGLE_EXTENSION') {
    console.log('[Content] Extension state changed:', message.enabled);
    isExtensionEnabled = message.enabled;
    
    if (!isExtensionEnabled) {
      // Clean up when disabled
      if (currentKeydownHandler) {
        document.removeEventListener('keydown', currentKeydownHandler);
        filterListenerAttached = false;
      }
    } else {
      // Start fresh detection when enabled
      console.log('[Content] Extension enabled, starting video detection');
      videoDetectionAttempts = 0;
      const video = getVideoElement();
      if (video) {
        // If video exists, attach listener immediately
        attachFilterToggle(video);
      }
      setTimeout(checkForVideo, 1000); // Start detection
    }
  }

  if (message.type === 'APPLY_FILTER') {
    console.log('[Content] Applying filter:', message);
    const video = getVideoElement();
    if (video) {
      let filterValue = '';
      if (message.shouldFilter) {
        switch (message.filterType) {
          case 'blur':
            filterValue = `blur(${message.intensity}px)`;
            break;
          case 'opacity':
            filterValue = `opacity(${message.intensity}%)`;
            break;
        }
      }
      video.style.filter = filterValue;
      console.log('[Content] Video filter set to:', video.style.filter);
    } else {
      console.log('[Content] No video found to apply filter');
    }
  }

  if (message.type === 'UPDATE_SHORTCUT') {
    console.log('[Content] Updating shortcut to:', message.key);
    
    // Remove old listener if exists
    if (currentKeydownHandler) {
      document.removeEventListener('keydown', currentKeydownHandler);
      filterListenerAttached = false;
      console.log('[Content] Removed old shortcut listener');
    }
    
    // Re-attach with new key if we have a video
    const video = getVideoElement();
    if (video) {
      attachFilterToggle(video, message.key);
      console.log('[Content] Attached new shortcut listener');
    } else {
      console.log('[Content] No video found for shortcut update');
    }
  }

  if (message.type === 'DETECTION_READY') {
    console.log('[Content] Detection ready signal received');
    if (isVideoPlayerURL(window.location.href)) {
      videoDetectionAttempts = 0;
      setTimeout(checkForVideo, 1000);
    }
  }
});

// ===== URL Change Detection =====
let lastUrl = location.href;
new MutationObserver(() => {
  const currentUrl = location.href;
  if (currentUrl !== lastUrl) {
    console.log('[Content] URL changed from:', lastUrl, 'to:', currentUrl);
    lastUrl = currentUrl;
    // Don't start detection here - wait for background signal
  }
}).observe(document, {subtree: true, childList: true});

// ===== Export for Testing =====
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    isVideoPlayerURL,
    checkForVideo
  };
}