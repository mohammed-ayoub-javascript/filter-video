let videoDetectionAttempts = 0;
const MAX_ATTEMPTS = 2;
let lastDetectionTime = 0;
const DETECTION_COOLDOWN = 1000; // 1 second cooldown between detections

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
  console.log('[Content] Handling:', handling);
  return handling;
}

function checkForVideo() {
  const currentUrl = window.location.href;
  const currentTime = Date.now();
  
  // Prevent detection if we're within cooldown period
  if (currentTime - lastDetectionTime < DETECTION_COOLDOWN) {
    console.log('[Content] Skipping detection - too soon after last detection');
    return;
  }
  
  // Double check we're on a video page before proceeding
  if (!isVideoPlayerURL(currentUrl)) {
    console.log('[Content] Not a video page:', currentUrl);
    return;
  }

  console.log('[Content] Checking for video on:', currentUrl);
  const video = document.querySelector('video');
  
  if (video) {
    console.log('[Content] Video found:', video);
    chrome.runtime.sendMessage({ type: 'VIDEO_DETECTED' });
    lastDetectionTime = currentTime;
    videoDetectionAttempts = MAX_ATTEMPTS;
    return true;
  }
  
  videoDetectionAttempts++;
  if (videoDetectionAttempts < MAX_ATTEMPTS) {
    console.log('[Content] Video not found, will retry in 5 seconds');
    setTimeout(checkForVideo, 5000);
  } else {
    console.log('[Content] Max detection attempts reached');
  }
  return false;
}

// Initial check after 1 second
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