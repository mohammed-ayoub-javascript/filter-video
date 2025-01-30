import { isVideoPlayerURL } from './utils/VideoDetection.js';
import { getEquivalentKey } from './utils/KeyMapping.js';
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
const DETECTION_COOLDOWN = 500; // 0.5 second cooldown between detections
let filterListenerAttached = false;
let isExtensionEnabled = true; // Default to true
let currentKeydownHandler = null; // Store keydown handler reference for removal
let videoElement = null;
let currentLayout = "QWERTY";
let equivalentKey = null;
let instagramFeedObserver = null;
let videoCheckRunning = false;
let currentShortcutKey = null;
let currentHandling = isVideoPlayerURL(location.href); // Store current handling type

// ===== Initialization =====
// Get initial extension state and shortcut key
chrome.runtime.sendMessage({ type: 'GET_IS_ENABLED' }, (response) => {
  isExtensionEnabled = response?.isEnabled;
  console.log('[Content] Extension state:', isExtensionEnabled);
  
  // Get both layout and shortcut in parallel
  chrome.runtime.sendMessage({ type: 'GET_SHORTCUT' }, (shortcutResponse) => {
    currentShortcutKey = shortcutResponse?.key;
  });
  
  chrome.runtime.sendMessage({ type: 'CONTENT_GET_KEYBOARD_LAYOUT' }, (layoutResponse) => {
    currentLayout = layoutResponse?.layout;
  });
  
  if (isExtensionEnabled && currentHandling && currentHandling !== 5) {
    videoDetectionAttempts = 0;
    setTimeout(checkForVideo, 1000);
  }
});

// ===== Helper Functions =====
// Helper function to get video element using consistent logic
function getVideoElement() {
  if (!isExtensionEnabled) return null;
  
  switch (currentHandling) {
    case -1: // Iframe detection for non supported platforms or direct video URLs
      // Check if it's a direct video page (body has only one video element)
      const bodyChildren = document.body.children;
      if (bodyChildren.length === 1 && bodyChildren[0].tagName === 'VIDEO') {
        const video = bodyChildren[0];
        // Ensure video has a style attribute
        if (!video.hasAttribute('style')) {
          video.setAttribute('style', '');
        }
        return video;
      }
      // Otherwise, look for iframe
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
    case 5: // Instagram Feed special handling
      // Find article without the Play button div (currently playing video)
      const articles = document.querySelectorAll('article');
      for (const article of articles) {
        const playDiv = article.querySelector('div[aria-label="Play"]');
        if (!playDiv) {
          const video = article.querySelector('video');
          if (video && video !== videoElement) {
            console.log('[Content] Found Instagram Feed video element');
            return video;
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
  if (!isExtensionEnabled || videoCheckRunning) {
    console.log('[Content] Extension disabled or video check already running');
    return;
  }

  const currentTime = Date.now();  
  if (currentTime - lastDetectionTime < DETECTION_COOLDOWN) {
    console.log('[Content] Skipping detection - too soon after last detection');
    return;
  }
  
  videoCheckRunning = true;
  console.log('[Content] Checking for video on:', window.location.href);
  const video = getVideoElement(); 
  
  if (video) {
    if (video === videoElement && currentHandling !== 1) {
      console.log('[Content] Video already found');
      videoCheckRunning = false;
      // Re-attach filter if not attached (handles edge cases)
      if (!filterListenerAttached) {
        attachFilterToggle(videoElement);
      }
      return true;
    }
    
    videoElement = video;
    videoDetectionAttempts = 0;
    lastDetectionTime = currentTime;
    
    // Set up filter toggle FIRST
    attachFilterToggle(videoElement);
    
    // THEN notify background about video detection
    console.log('[Content] Video found:', videoElement);
    safeRuntime(() => {
      chrome.runtime.sendMessage({ type: 'VIDEO_DETECTED' });
    });
    
    videoCheckRunning = false;
    return true;
  }
  
  videoCheckRunning = false;
  videoDetectionAttempts++;
  if (videoDetectionAttempts < MAX_ATTEMPTS) {
    console.log('[Content] Video not found, retrying in 1 second');
    setTimeout(checkForVideo, 1000);
  } else {
    console.log('[Content] Max detection attempts reached');
  }
}

// ===== Filter Management =====
function attachFilterToggle(videoElement, key = null) {
  if (filterListenerAttached) return;
  
  const shortcutKey = (key || currentShortcutKey).toLowerCase();
  equivalentKey = getEquivalentKey(shortcutKey, currentLayout);
  
  currentKeydownHandler = (e) => {
    if (isExtensionEnabled && (e.key.toLowerCase() === shortcutKey || e.key.toLowerCase() === equivalentKey)) {
      e.preventDefault();
      chrome.runtime.sendMessage({ type: 'TOGGLE_FILTER' });
    }
  };
  
  console.log('[Content] Attaching filter toggle with shortcut:', shortcutKey);
  document.addEventListener('keydown', currentKeydownHandler);
  filterListenerAttached = true;
  console.log('[Content] Attached filter toggle with shortcut:', shortcutKey);
}

// ===== Message Handlers =====
chrome.runtime.onMessage.addListener((message) => {
  // Listen for extension state changes
  if (message.type === 'TOGGLE_EXTENSION') {
    console.log('[Content] Extension state changed:', message.enabled);
    isExtensionEnabled = message.enabled;
    
    if (!isExtensionEnabled) {
      // Clean up when disabled
      videoElement = null;
      if (currentKeydownHandler) {
        console.log('[Content] Extension disabled, cleaning up filter toggle');
        document.removeEventListener('keydown', currentKeydownHandler);
        filterListenerAttached = false;
      }
    } else {
      // Start fresh detection when enabled
      console.log('[Content] Extension enabled, starting video detection');
      videoCheckRunning = false;
      videoDetectionAttempts = 0;
      setTimeout(checkForVideo, 200); // Start detection
      if (currentHandling === 5) {
        startInstagramFeedObserver();
      }
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
      if (videoElement.style.filter !== filterValue) {
        videoElement.style.filter = filterValue;
        console.log('[Content] Video filter set to:', videoElement.style.filter);
      } else {
        console.log('[Content] Video filter already set to:', videoElement.style.filter);
      }
    } else {
      console.log('[Content] No video found to apply filter');
    }
  }

  if (message.type === 'UPDATE_SHORTCUT') {
    console.log('[Content] Updating shortcut to:', message.key);
    currentShortcutKey = message.key;
    
    // Remove old listener if exists
    if (currentKeydownHandler) {
      document.removeEventListener('keydown', currentKeydownHandler);
      filterListenerAttached = false;
      console.log('[Content] Removed old shortcut listener');
    }
    
    // Re-attach with new key if we have a video
    if (videoElement) {
      attachFilterToggle(videoElement, message.key);
      console.log('[Content] Attached new shortcut listener');
    } else {
      console.log('[Content] No video found for shortcut update');
    }
  }

  if (message.type === 'DETECTION_READY') {
    console.log('[Content] Detection ready signal received');
    if (currentHandling && currentHandling !== 5) {
      videoDetectionAttempts = 0;
      setTimeout(checkForVideo, 200);
    }
  }

  if (message.type === 'CONTENT_UPDATE_KEYBOARD_LAYOUT') {
    console.log('[Content] Updating keyboard layout to:', message.layout);
    currentLayout = message.layout;
    // If we have an active video and filter, update the key mapping
    if (videoElement && filterListenerAttached) {
      // Remove old listener
      document.removeEventListener('keydown', currentKeydownHandler);
      filterListenerAttached = false;
      // Re-attach with new layout
      attachFilterToggle(videoElement, currentShortcutKey);
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
    const newHandling = isVideoPlayerURL(currentUrl);
    
    if (newHandling !== currentHandling) currentHandling = newHandling;
    if (currentHandling === 4) {
      videoDetectionAttempts = 0;
      setTimeout(checkForVideo, 200);
    }
    if (currentHandling === 5) {
      startInstagramFeedObserver();
    }
  }
}).observe(document, {subtree: true, childList: true});

// ===== Instagram Feed Observer =====
if (currentHandling === 5) {
  startInstagramFeedObserver();
}

async function startInstagramFeedObserver() {
  // Setup observer for Instagram feed scrolling
  console.log('[Content] Setting up Instagram feed observer');
  let article, scrollContainer;
  while (!article) {
    article = document.querySelector('article');
  }
  scrollContainer = article.parentElement;
  if (scrollContainer) {
    instagramFeedObserver = new MutationObserver(async () => {
      const currentTime = Date.now();
      if (currentTime - lastDetectionTime < DETECTION_COOLDOWN) return;
      console.log('[Content] Instagram feed observer triggered');
      await checkForVideo();
    });
    
    instagramFeedObserver.observe(scrollContainer, {
      attributes: true,
      attributeFilter: ['style']
    });
  }
}

// ===== Export for Testing =====
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    isVideoPlayerURL,
    checkForVideo
  };
}