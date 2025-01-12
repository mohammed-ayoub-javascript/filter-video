# FilterVideo

A web extension that enhances your control while watching videos,
by allowing you to apply customizable filters to videos on popular streaming platforms, using a keyboard shortcut of your choice.

Currently supports blur and opacity filters on YouTube, Netflix,
and Prime Video platforms.

## Features

- Video filters with customizable keyboard shortcut:
  - Blur filter with adjustable intensity
  - Opacity filter with adjustable level
- Support for multiple streaming platforms:
  - YouTube
  - Netflix
  - Amazon Prime Video
- Global enable/disable switch
- Persistent settings across browser sessions

## Installation

### From Chrome Web Store

1. Visit the [Chrome Web Store page](https://chrome.google.com/webstore/)
2. Search for "FilterVideo" and click on the extension
3. Click "Add to Chrome"

### From Source

1. Clone this repository
2. Open Chrome and navigate to `chrome://extensions`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the `src` directory

## Usage

1. Click the FilterVideo icon in your browser toolbar
2. Use the toggle switch to enable/disable the extension
3. Choose your preferred shortcut key (default: ',')
4. Adjust filter intensity using the slider
5. Press the shortcut key while watching a video to toggle the filter

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Permissions Explanation

The extension requires the following permissions:

- `tabs`: Required to detect video players and apply filters
- `webNavigation`: Needed to track URL changes for video detection
- `storage`: Used to save user preferences
- `alarms`: Used to keep the service worker active for consistent functionality

## Privacy

This extension:

- Does not collect any user data
- Does not make any external network requests
- All processing happens locally in your browser
