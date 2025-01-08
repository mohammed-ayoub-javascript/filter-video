const { isVideoPlayerURL } = require('../src/content.js');
const { checkForVideo } = require('../src/content.js');

describe('Video Detection Extension', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    jest.clearAllMocks();
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
    test('should detect video element on video pages', () => {
      // Simulate page load
      window.location.href = 'https://www.youtube.com/watch?v=12345';
      document.body.innerHTML = '<video src="test.mp4"></video>';
      
      // Initial detection
      const result = checkForVideo();
      expect(result).toBe(true);
      expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({ 
        type: 'VIDEO_DETECTED' 
      });
    });

    test('should not detect video on non-video pages', () => {
      window.location.href = 'https://www.youtube.com/feed';
      document.body.innerHTML = '<video src="test.mp4"></video>';
      
      const result = checkForVideo();
      expect(result).toBeUndefined();
      expect(chrome.runtime.sendMessage).not.toHaveBeenCalled();
    });
  });
});