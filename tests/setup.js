// Mock chrome API
global.chrome = {
  runtime: {
    sendMessage: jest.fn()
  },
  tabs: {
    onActivated: { addListener: jest.fn() },
    onRemoved: { addListener: jest.fn() },
    get: jest.fn()
  },
  webNavigation: {
    onHistoryStateUpdated: { addListener: jest.fn() },
    onCompleted: { addListener: jest.fn() }
  }
};

// Mock window.location
delete window.location;
window.location = new URL('https://www.youtube.com');

// Reset all mocks before each test
beforeEach(() => {
  jest.clearAllMocks();
}); 