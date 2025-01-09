const { isVideoPlayerURL } = require('../src/content.js');
const { checkForVideo } = require('../src/content.js');

describe('Video Detection Extension', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
    // Reset module state to ensure fresh variables for each test
    jest.resetModules();
    global.lastDetectionTime = 0;
    global.videoDetectionAttempts = 0;
    window.location.href = 'about:blank';
  });

  describe('URL Detection', () => {
    test('should identify video pages correctly', () => {
      const testCases = [
        // YouTube
        { url: 'https://www.youtube.com/watch?v=12345', expected: 'default' },
        { url: 'https://www.youtube.com/feed', expected: '' },
        
        // Netflix
        { url: 'https://www.netflix.com/watch/12345', expected: 'default' },
        { url: 'https://www.netflix.com/browse', expected: '' },
        { url: 'https://www.netflix.com/watch/12345?miniDpPlayButton', expected: '' },
        
        // Prime
        { url: 'https://www.primevideo.com/detail/12345', expected: 'amazon' },
        { url: 'https://www.primevideo.com/browse', expected: '' }
      ];

      testCases.forEach(({ url, expected }) => {
        expect(isVideoPlayerURL(url)).toBe(expected);
      });
    });
  });

  describe('Video Detection', () => {
    test('should detect first video element on YouTube/Netflix pages', () => {
      window.location.href = 'https://www.youtube.com/watch?v=12345';
      document.body.innerHTML = '<video src="test.mp4"></video>';
      
      const result = checkForVideo();
      expect(result).toBe(true);
      expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({ 
        type: 'VIDEO_DETECTED' 
      });
    });

    test('should detect second video element on Prime Video pages', (done) => {
      window.location.href = 'https://www.primevideo.com/detail/12345';
      
      // Initially only one video
      document.body.innerHTML = '<video src="test1.mp4"></video>';
      
      // First check - no second video yet
      checkForVideo();
      
      // Let the retry mechanism work
      setTimeout(() => {
        // Add second video before retry happens
        document.body.innerHTML = `
          <video src="test1.mp4"></video>
          <video src="test2.mp4"></video>
        `;
      }, 2000);

      // Check final state after retries
      setTimeout(() => {
        expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({ 
          type: 'VIDEO_DETECTED' 
        });
        done();
      }, 6000);
    }, 7000);

    test('should not detect video on non-video pages', () => {
      window.location.href = 'https://www.youtube.com/feed';
      document.body.innerHTML = '<video src="test.mp4"></video>';
      
      const result = checkForVideo();
      expect(result).toBeUndefined();
      expect(chrome.runtime.sendMessage).not.toHaveBeenCalled();
    });
  });

  describe('Blur Functionality', () => {
    test('should toggle blur on "b" keypress', () => {
      window.location.href = 'https://www.youtube.com/watch?v=12345';
      document.body.innerHTML = '<video src="test.mp4"></video>';
      
      // Detect video first
      checkForVideo();
      
      // Simulate 'b' keypress
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'b' }));
      expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({ 
        type: 'TOGGLE_BLUR' 
      });
    });

    test('should apply blur state from background', () => {
      window.location.href = 'https://www.youtube.com/watch?v=12345';
      document.body.innerHTML = '<video src="test.mp4"></video>';
      
      // Detect video first
      checkForVideo();
      
      // Simulate message from background
      chrome.runtime.onMessage.listener({
        type: 'APPLY_BLUR',
        shouldBlur: true
      });

      const video = document.querySelector('video');
      expect(video.style.filter).toBe('blur(50px)');
    });

    test('should not attach multiple blur listeners', () => {
      // Mock Date.now to control cooldown timing
      const realDateNow = Date.now.bind(global.Date);
      let currentTime = 0;
      const dateNowStub = jest.fn(() => currentTime);
      global.Date.now = dateNowStub;
      
      window.location.href = 'https://www.youtube.com/watch?v=12345';
      document.body.innerHTML = '<video src="test.mp4"></video>';
      
      // Get fresh instance after module reset to ensure clean state
      const { checkForVideo } = require('../src/content.js');
      
      // First detection
      checkForVideo();
      currentTime = 2000;  // Advance time past cooldown
      
      // Second detection
      checkForVideo();
      
      // Simulate 'b' keypress - should only trigger once
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'b' }));
      expect(chrome.runtime.sendMessage).toHaveBeenCalledTimes(3); // 2 VIDEO_DETECTED + 1 TOGGLE_BLUR
      
      // Restore original Date.now
      global.Date.now = realDateNow;
    });

    test('should maintain blur state on video source change', () => {
      window.location.href = 'https://www.youtube.com/watch?v=12345';
      document.body.innerHTML = '<video src="test1.mp4"></video>';
      
      // Initial detection
      checkForVideo();
      
      // Apply blur
      chrome.runtime.onMessage.listener({
        type: 'APPLY_BLUR',
        shouldBlur: true
      });

      // Change video source and reapply state
      document.body.innerHTML = '<video src="test2.mp4"></video>';
      global.lastDetectionTime = 0;  // Reset cooldown
      checkForVideo();  // Re-detect after source change
      chrome.runtime.onMessage.listener({
        type: 'APPLY_BLUR',
        shouldBlur: true
      });
      
      const video = document.querySelector('video');
      expect(video.style.filter).toBe('blur(50px)');
    });

    test('should handle Prime Video second player blur', () => {
      window.location.href = 'https://www.primevideo.com/detail/12345';
      document.body.innerHTML = `
        <video src="test1.mp4"></video>
        <video src="test2.mp4"></video>
      `;
      
      // Detect video first
      checkForVideo();
      
      // Apply blur
      chrome.runtime.onMessage.listener({
        type: 'APPLY_BLUR',
        shouldBlur: true
      });

      const videos = document.querySelectorAll('video');
      expect(videos[0].style.filter).toBe('');  // First video unchanged
      expect(videos[1].style.filter).toBe('blur(50px)');  // Second video blurred
    });
  });
});
