# LiveKit Meet Standalone JS

A standalone JavaScript implementation of the LiveKit meeting room. Just include the script and you're ready to go!

## Features

- Simple to integrate - just include the JS file and add a few divs
- Pre-join room setup with camera/mic testing
- Full video conferencing capabilities
- Optimized video quality settings
- Built-in error handling with alertify.js
- Support for return URLs after meeting

## Installation

1. Include the required files in your HTML:
```html
<script src="path/to/livekit-meet-standalone.js"></script>
<link rel="stylesheet" href="path/to/livekit-meet-standalone.css" />
```

2. Add the required container elements:
```html
<div id="prejoin" class="hide"></div>
<div id="livekitui-ui"></div>
```

3. Add some basic styling:
```css
body { margin: 0; padding: 0; width: 100%; height: 100vh; }
#livekitui-ui { width: 100%; height: 100vh; }
#prejoin { margin: 20px; }
```

## Usage

```javascript
// Start a meeting
window.livekit.preJoin(
  "your-token",      // LiveKit token
  "wss://your-url",  // LiveKit server URL
  "Room Name",       // Room name
  "https://your-return-url.com"  // Optional return URL
);
```

## Development

- `npm run watch` - Watch for changes and rebuild
- `npm run dev` - Build development version
- `npm run build` - Build production version
- `npm run serve` - Start development server

## Testing

- `test-dev.html` - Test the development build
- `test-build.html` - Test the production build

## Project Structure

- `livekit-meet-standalone.jsx` - Main source file
- `dist/prod/` - Production build
- `dist/watch/` - Development build with source maps

## Dependencies

- @livekit/components-react
- @livekit/components-styles
- alertifyjs
- react
- react-dom

## License

MPL-2.0