const { isVideoPlayerURL } = require('../src/content.js');
const { checkForVideo } = require('../src/content.js');

describe('Video Detection Extension', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
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
});
