/**
 * Popup Script: Manages the extension's popup UI and user interactions
 * Responsibilities:
 * - Displays and updates video detection status
 * - Handles shortcut key customization
 * - Controls blur intensity slider
 * - Manages extension enable/disable toggle
 */

// ===== Initialization =====
// Query current tab for video status
chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
  // ===== UI Elements =====
  const status = document.getElementById('status');
  const shortcutContainer = document.getElementById('shortcut-container');
  const shortcutKey = document.getElementById('shortcut-key');
  const intensityContainer = document.getElementById('intensity-container');
  const intensitySlider = document.getElementById('blur-intensity');
  const intensityValue = document.getElementById('intensity-value');
  const enableSwitch = document.getElementById('enableSwitch');
  
  // ===== Event Handlers =====
  // Add intensity slider handler
  intensitySlider.addEventListener('input', () => {
    const value = intensitySlider.value;
    intensityValue.textContent = `${value}%`;
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

  // ===== Message Listeners =====
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

  // ===== Shortcut Key Management =====
  // Get current shortcut from background
  console.log('[Popup] Requesting current shortcut');
  chrome.runtime.sendMessage({ type: 'GET_SHORTCUT' }, (response) => {
    console.log('[Popup] Received shortcut response:', response);
    
    if (chrome.runtime.lastError) {
      console.log('[Popup] Error getting shortcut:', chrome.runtime.lastError);
      shortcutKey.textContent = ',';  // fallback to default
      return;
    }
    if (response?.key) {
      shortcutKey.textContent = response.key;
    }
  });

  // Handle shortcut key changes
  shortcutKey.addEventListener('click', () => {
    shortcutKey.classList.add('listening');
    shortcutKey.textContent = 'key'; // Shorter message

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
              shortcutKey.textContent = ',';  // fallback to default
            }
          });
        }
      });

      // Remove listener
      document.removeEventListener('keydown', keyHandler);
    };

    document.addEventListener('keydown', keyHandler);
  });

  // ===== Initial State Setup =====
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
      intensityValue.textContent = `${response.intensity}%`;
    }
  });

  // ===== Extension State Management =====
  // Load initial extension enabled state and show/hide UI accordingly
  chrome.runtime.sendMessage({ type: 'GET_IS_ENABLED' }, (response) => {
    enableSwitch.checked = response.isEnabled;
    if (response.isEnabled) {
      status.classList.remove('hidden');
    }
  });
  
  // Handle enable/disable switch
  enableSwitch.addEventListener('change', (e) => {
    console.log('[Popup] Switch toggled:', e.target.checked);
    if (!e.target.checked) {
      status.classList.add('hidden');
      shortcutContainer.classList.add('hidden');
      intensityContainer.classList.add('hidden');
    } else {
      status.classList.remove('hidden');
    }
    chrome.runtime.sendMessage({ 
      type: 'TOGGLE_EXTENSION',
      enabled: e.target.checked 
    }, (response) => {
      if (chrome.runtime.lastError) {
        console.error('[Popup] Toggle error:', chrome.runtime.lastError);
        return;
      }
      console.log('[Popup] Extension toggled response:', response);
    });
  });
}); 