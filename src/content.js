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
const DETECTION_COOLDOWN = 400; // 0.4 second cooldown between detections
let filterListenerAttached = false;
let isExtensionEnabled = true; // Default to true
let currentKeydownHandler = null; // Store keydown handler reference for removal
let videoElement = null;

// ===== Initialization =====
// Get initial extension state
chrome.runtime.sendMessage({ type: 'GET_IS_ENABLED' }, (response) => {
  isExtensionEnabled = response?.isEnabled;
  console.log('[Content] Extension state:', isExtensionEnabled);
  if (isExtensionEnabled && isVideoPlayerURL(location.href)) {
    videoDetectionAttempts = 0;
    setTimeout(checkForVideo, 500);
  }
});

// ===== Helper Functions =====
// Helper function to get video element using consistent logic
function getVideoElement(url=window.location.href) {
  if (!isExtensionEnabled) return null;
  const handling = isVideoPlayerURL(url);

  switch (handling) {
    case -1: // Iframe detection for non supported platforms
      // it has to have allowfullscreen attribute and src attribute must NOT include 'youtube' (avoid trailers)
      return document.querySelector('iframe[src][allowfullscreen]');
    case 1: // First handling platform
      return document.querySelector('video[src]');
    case 2: // Second handling platform
      const videos = document.querySelectorAll('video[src]');
      return videos.length > 1 ? videos[1] : null;
    case 3: // TikTok special handling
      // First try to find active article (/foryou route)
      const container = document.querySelector('article[style=""]');
      const video = container?.querySelector('video') || document.querySelector('video');

      if (video) {
        // Go up three levels to find the container
        const videoContainer = video.parentElement?.parentElement?.parentElement;
        if (videoContainer) {
          // Remove background span
          const bgSpan = videoContainer.querySelector('span[style*="box-sizing: border-box"][style*="display: block"][style*="position: absolute"][style*="inset: 0px"]');
          if (bgSpan) {
            console.log('[Content] Found and removing TikTok background span in video container');
            bgSpan.remove();
          }
        }
        return video;
      }
      return null;
    case 4: // Instagram Reels special handling
      // Find the active image (one with xuzhngd class)
      const activeImg = document.querySelector('img.xz74otr.xuzhngd');
      if (activeImg) {
        // Go up to find the parent container and then find the video element
        const reelContainer = activeImg.parentElement;
        if (reelContainer) {
          const reelVideo = reelContainer.querySelector('video');
          if (reelVideo) {
            console.log('[Content] Found Instagram Reel video element');
            return reelVideo;
          }
        }
      }
      return null;
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
  
  const video = getVideoElement(); 
  
  if (video) {
    videoElement = video;
    console.log('[Content] Video found:', videoElement);
    const filtered = videoElement.style.filter;
    if (filtered) videoElement.style.filter = ''; // Reset filter to default
    safeRuntime(() => {
      chrome.runtime.sendMessage({ type: 'VIDEO_DETECTED' });
      lastDetectionTime = currentTime;
      videoDetectionAttempts = 0;  // Reset attempts when video is found
      attachFilterToggle(videoElement);
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
function attachFilterToggle(videoElement, key = null) {
  if (filterListenerAttached) return;
  
  const setupListener = (shortcutKey) => {
    currentKeydownHandler = (e) => {
      if (isExtensionEnabled && e.key.toLowerCase() === shortcutKey.toLowerCase()) {
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
        videoElement = video;
        // If video exists, attach listener immediately
        attachFilterToggle(videoElement);
      }
      setTimeout(checkForVideo, 500); // Start detection
    }
  }

  if (message.type === 'APPLY_FILTER') {
    if (videoElement) {
      console.log('[Content] Applying filter:', message);
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
      videoElement.style.filter = filterValue;
      console.log('[Content] Video filter set to:', videoElement.style.filter);
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
      videoElement = video;
      attachFilterToggle(videoElement, message.key);
      console.log('[Content] Attached new shortcut listener');
    } else {
      console.log('[Content] No video found for shortcut update');
    }
  }

  if (message.type === 'DETECTION_READY') {
    console.log('[Content] Detection ready signal received');
    if (isVideoPlayerURL(location.href)) {
      videoDetectionAttempts = 0;
      setTimeout(checkForVideo, 500);
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
    // Don't start detection here (unless Instagram Reels) - wait for background signal
    if (isVideoPlayerURL(currentUrl) === 4) {
      videoDetectionAttempts = 0;
      setTimeout(checkForVideo, 200);
    }
  }
}).observe(document, {subtree: true, childList: true});

// ===== Export for Testing =====
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    isVideoPlayerURL,
    checkForVideo
  };
}