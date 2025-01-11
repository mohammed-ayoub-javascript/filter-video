let videoDetectionAttempts = 0;
const MAX_ATTEMPTS = 3;
let lastDetectionTime = 0;
const DETECTION_COOLDOWN = 1000; // 1 second cooldown between detections
let blurListenerAttached = false;

// Store keydown handler reference for removal
let currentKeydownHandler = null;

// Helper function to check if current page is a video player page
function isVideoPlayerURL(url) {
  let handling = "";
  // For Netflix, specifically check for watch/ but not browse or home
  if (url.includes('youtube.com/watch') || (url.includes('netflix.com/watch') && !url.includes('miniDpPlayButton') && !url.includes('/browse'))) {
    handling = "default";
  }
  
  else if (url.includes('primevideo.com') && url.includes('detail')) {
    handling = "amazon";
  }
  return handling;
}

// Helper function to get video element using consistent logic
function getVideoElement(url=window.location.href) {
  const handling = isVideoPlayerURL(url);
  if (!handling) return null;
  
  if (handling === "amazon") {
    const videos = document.querySelectorAll('video');
    return videos.length > 1 ? videos[1] : null;
  }
  return document.querySelector('video');
}

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

function checkForVideo() {
  const currentUrl = window.location.href;
  const currentTime = Date.now();
  
  // Prevent detection if we're within cooldown period
  if (currentTime - lastDetectionTime < DETECTION_COOLDOWN) {
    console.log('[Content] Skipping detection - too soon after last detection');
    return;
  }
  
  let handling = isVideoPlayerURL(currentUrl);
  if (!handling) {
    console.log('[Content] Not a video page:', currentUrl);
    return;
  }

  console.log('[Content] Checking for video on:', currentUrl, 'handling:', handling);
  
  let video;
  if (handling === "amazon") {
    const videos = document.querySelectorAll('video');
    console.log('[Content] Found', videos.length, 'videos');
    video = videos.length > 1 ? videos[1] : null;
  } else {
    video = document.querySelector('video');
  }
  
  if (video) {
    console.log('[Content] Video found:', video);
    safeRuntime(() => {
      chrome.runtime.sendMessage({ type: 'VIDEO_DETECTED' });
      lastDetectionTime = currentTime;
      videoDetectionAttempts = MAX_ATTEMPTS;
      attachBlurToggle(video);
    });
    return true;
  }
  
  videoDetectionAttempts++;
  if (videoDetectionAttempts < MAX_ATTEMPTS) {
    console.log('[Content] Video not found, will retry in 5 seconds');
    setTimeout(checkForVideo, 5000);
  } else {
    console.log('[Content] Max detection attempts reached');
  }
}

function toggleBlur(video) {
  chrome.runtime.sendMessage({ type: 'TOGGLE_BLUR' });
}

function attachBlurToggle(video, key = null) {
  if (blurListenerAttached) {
    console.log('[Blur] Listener already attached');
    return;
  }

  // If no key provided, get it from background
  if (!key) {
    chrome.runtime.sendMessage({ type: 'GET_SHORTCUT' }, (response) => {
      if (response?.key) {
        attachBlurToggleWithKey(video, response.key);
      } else {
        attachBlurToggleWithKey(video, 'b');  // fallback
      }
    });
    return;
  }

  attachBlurToggleWithKey(video, key);
}

function attachBlurToggleWithKey(video, key) {
  currentKeydownHandler = (e) => {
    if (e.key.toLowerCase() === key.toLowerCase()) {
      toggleBlur(video);
    }
  };

  document.addEventListener('keydown', currentKeydownHandler);
  blurListenerAttached = true;
  console.log('[Blur] Attached blur toggle listener with key:', key);
}

// Update message listener
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'APPLY_BLUR') {
    console.log('[Content] Applying blur:', message);
    const video = getVideoElement();
    if (video) {
      video.style.filter = message.shouldBlur ? `blur(${message.intensity || 50}px)` : 'none';
      console.log('[Content] Video filter set to:', video.style.filter);
    } else {
      console.log('[Content] No video found to unblur');
    }
  }

  if (message.type === 'UPDATE_SHORTCUT') {
    console.log('[Content] Updating shortcut to:', message.key);
    
    // Remove old listener if exists
    if (currentKeydownHandler) {
      document.removeEventListener('keydown', currentKeydownHandler);
      blurListenerAttached = false;
      console.log('[Content] Removed old shortcut listener');
    }
    
    // Re-attach with new key if we have a video
    const video = getVideoElement();
    if (video) {
      attachBlurToggle(video, message.key);
      console.log('[Content] Attached new shortcut listener');
    } else {
      console.log('[Content] No video found for shortcut update');
    }
  }
});

// Initial check after 2 seconds
console.log('[Content] Starting initial video check');
setTimeout(() => {
  videoDetectionAttempts = 0;
  checkForVideo();
}, 2000);

// Watch for URL changes
let lastUrl = location.href;
new MutationObserver(() => {
  const currentUrl = location.href;
  if (currentUrl !== lastUrl) {
    console.log('[Content] URL changed from:', lastUrl, 'to:', currentUrl);
    lastUrl = currentUrl;
    // Only reset and check if it's a video page
    if (isVideoPlayerURL(currentUrl)) {
      videoDetectionAttempts = 0;
      setTimeout(checkForVideo, 2000);
    }
  }
}).observe(document, {subtree: true, childList: true});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    isVideoPlayerURL,
    checkForVideo
  };
}