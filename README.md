# FilterVideo

We detect the video, You apply the filter (blur/opacity) using a customizable keyboard shortcut.

## Features

- Video filters with customizable keyboard shortcut:
  - Blur filter with adjustable intensity
  - Opacity filter with adjustable level
- Support for multiple streaming platforms:
  - YouTube
  - Netflix
  - Amazon Prime Video
  - Other platforms (iframe detection)
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

### Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run tests:

   ```bash
   npm run test
   ```

3. Build for production:
   ```bash
   npm run package
   ```
   This will create a production build in the `dist` directory and a ZIP file ready for the Chrome Web Store.

## Usage

1. Click the FilterVideo icon in your browser toolbar
2. Use the toggle switch to enable/disable the extension
3. Choose your preferred shortcut key (default: ',') because it's close to 'm' which is the mute shortcut, so you can mute and apply filter with close proximity.
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
