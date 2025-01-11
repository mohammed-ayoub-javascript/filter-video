// Query current tab for video status
chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
  const status = document.getElementById('status');
  const shortcutContainer = document.getElementById('shortcut-container');
  const shortcutKey = document.getElementById('shortcut-key');
  const intensityContainer = document.getElementById('intensity-container');
  const intensitySlider = document.getElementById('blur-intensity');
  const intensityValue = document.getElementById('intensity-value');
  
  // Add intensity slider handler
  intensitySlider.addEventListener('input', () => {
    const value = intensitySlider.value;
    intensityValue.textContent = `${value}px`;
    chrome.runtime.sendMessage({ 
      type: 'UPDATE_BLUR_INTENSITY',
      intensity: parseInt(value)
    });
  });

  console.log('[Popup] Opened for tab:', tab?.id);
  
  if (!tab) {
    status.textContent = 'Unable to determine video status';
    return;
  }

  // Listen for video status updates
  chrome.runtime.onMessage.addListener((message) => {
    console.log('[Popup] Received message:', message);
    
    if (message.tabId === tab.id) {
      console.log('[Popup] Message matches current tab');
      
      if (message.type === 'VIDEO_DETECTED') {
        console.log('[Popup] Updating status: Video detected');
        status.textContent = 'Video detected in this page';
        shortcutContainer.classList.remove('hidden');
        intensityContainer.classList.remove('hidden');
      } else if (message.type === 'VIDEO_STATUS_CHANGED' && !message.hasVideo) {
        console.log('[Popup] Updating status: No video');
        status.textContent = 'No video detected in this page';
        shortcutContainer.classList.add('hidden');
        intensityContainer.classList.add('hidden');
      }
    }
  });

  // Get current shortcut from background
  console.log('[Popup] Requesting current shortcut');
  chrome.runtime.sendMessage({ type: 'GET_SHORTCUT' }, (response) => {
    console.log('[Popup] Received shortcut response:', response);
    
    if (chrome.runtime.lastError) {
      console.log('[Popup] Error getting shortcut:', chrome.runtime.lastError);
      shortcutKey.textContent = 'b';  // fallback to default
      return;
    }
    if (response?.key) {
      shortcutKey.textContent = response.key;
    }
  });

  // Handle shortcut key changes
  shortcutKey.addEventListener('click', () => {
    shortcutKey.classList.add('listening');
    shortcutKey.textContent = 'Press a key';

    // One-time keyboard listener
    const keyHandler = (e) => {
      e.preventDefault();
      const newKey = e.key.toLowerCase();
      
      // Update UI immediately
      shortcutKey.textContent = newKey;
      shortcutKey.classList.remove('listening');

      // Inform background to update shortcut
      chrome.runtime.sendMessage({ 
        type: 'UPDATE_SHORTCUT',
        key: newKey
      }, () => {
        if (chrome.runtime.lastError) {
          console.log('[Popup] Error updating shortcut:', chrome.runtime.lastError);
          // Get current shortcut from background if update fails
          chrome.runtime.sendMessage({ type: 'GET_SHORTCUT' }, (response) => {
            if (response?.key) {
              shortcutKey.textContent = response.key;
            } else {
              shortcutKey.textContent = 'b';  // fallback to default
            }
          });
        }
      });

      // Remove listener
      document.removeEventListener('keydown', keyHandler);
    };

    document.addEventListener('keydown', keyHandler);
  });

  // Get initial status from background
  console.log('[Popup] Requesting initial video status');
  chrome.runtime.sendMessage({ 
    type: 'GET_VIDEO_STATUS',
    tabId: tab.id 
  }, (response) => {
    console.log('[Popup] Received status response:', response);
    
    if (chrome.runtime.lastError) {
      console.log('[Popup] Error getting status:', chrome.runtime.lastError);
      status.textContent = 'Unable to determine video status';
      return;
    }
    
    if (response?.hasVideo) {
      console.log('[Popup] Initial status: Video detected');
      status.textContent = 'Video detected in this page';
      shortcutContainer.classList.remove('hidden');
      intensityContainer.classList.remove('hidden');
    } else {
      console.log('[Popup] Initial status: No video');
      status.textContent = 'No video detected in this page';
      shortcutContainer.classList.add('hidden');
      intensityContainer.classList.add('hidden');
    }
  });

  // Get initial intensity value
  chrome.runtime.sendMessage({ type: 'GET_BLUR_INTENSITY' }, (response) => {
    if (response?.intensity) {
      intensitySlider.value = response.intensity;
      intensityValue.textContent = `${response.intensity}px`;
    }
  });
}); 