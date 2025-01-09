// Store tabs with detected videos: tabId -> { detected: boolean, blurred: boolean }
let detectedVideoTabs = new Map();

// Helper function to check if URL is a video player page
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
  if (isVideoPlayerURL(details.url)) {
    console.log('[URL Change] New video page:', details.url);
    // Reset detection state as video reference is lost
    detectedVideoTabs.delete(details.tabId);
  }
});

// Handle page refresh
chrome.webNavigation.onCompleted.addListener((details) => {
  if (details.frameId === 0 && isVideoPlayerURL(details.url)) {
    console.log('[Page Load] Video page loaded:', details.url);
    // Reset detection state as video reference is lost
    detectedVideoTabs.delete(details.tabId);
  }
});

// Listen for video detection from content script
chrome.runtime.onMessage.addListener((message, sender) => {
  const tabId = sender.tab.id;

  switch(message.type) {
    case 'VIDEO_DETECTED':
      detectedVideoTabs.set(tabId, { 
        detected: true, 
        blurred: false  // Start unblurred
      });
      // // Send back initial state to content script
      // chrome.tabs.sendMessage(tabId, { 
      //   type: 'APPLY_BLUR',
      //   shouldBlur: true
      // });
      break;
      
    case 'TOGGLE_BLUR':
      if (detectedVideoTabs.has(tabId)) {
        const state = detectedVideoTabs.get(tabId);
        state.blurred = !state.blurred;
        detectedVideoTabs.set(tabId, state);
        // Inform content script of new state
        chrome.tabs.sendMessage(tabId, {
          type: 'APPLY_BLUR',
          shouldBlur: state.blurred
        });
      }
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