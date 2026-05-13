# minimal-new-tab-page
minimalistic home page for browsers
# New Tab Page - Setup Guide

## Overview
This is a custom new tab page with a minimal design, live clock, search functionality, and quick links to popular media platforms.

## Quick Start

Simply open `newtabpage.html` in your browser to preview it.

## Browser Setup Instructions

### Brave Browser
1. Open Brave and navigate to `brave://newtab/`
2. Click the settings icon (gear) in the top-right corner
3. Under "Background," select the option to set a custom background page
4. Set the path to your `newtabpage.html` file (use the full file path: `file:///C:/Users/YourUsername/OneDrive/Documents/newtabpage.html`)
5. Alternatively, host the file online and use the HTTP URL

### Google Chrome
1. Go to Chrome Web Store and search for **"New Tab Redirect"** extension
2. Install the extension
3. Click the extension icon and set it to redirect to your HTML file
4. Use the file path: `file:///C:/Users/YourUsername/OneDrive/Documents/newtabpage.html`

### Microsoft Edge
1. Open Edge and go to `edge://newtab/`
2. Click the settings icon (gear icon)
3. Look for "Customize" or extension options
4. Install an extension like **"New Tab Page Modifier"** from the Edge Add-ons store
5. Configure it to point to your HTML file

### Firefox
1. Install the **"New Tab Override"** add-on from the Firefox Add-ons store
2. Go to the add-on settings
3. Choose "Local file" and select your `newtabpage.html`
4. Or use the file path directly

### Safari (macOS)
1. Safari doesn't natively support custom new tab pages
2. Alternative: Use the **"Start"** extension from the App Store
3. Or set up a local HTTP server and use that URL

## Hosting Online (Recommended)

For the best experience across all your devices:

1. **GitHub Pages** (Free)
   - Fork or create a repo with `newtabpage.html`
   - Enable GitHub Pages in repo settings
   - Use the GitHub Pages URL in your browser extension settings

2. **Netlify** (Free)
   - Drag and drop the file to netlify.com
   - Get a shareable URL

3. **Your Own Server**
   - Upload to your web server
   - Use the public URL

## Features

- ⏰ **Live Clock** - Shows current time and date
- 🔍 **Search** - Search Google directly from the new tab
- 🎬 **Quick Links** - Fast access to YouTube, TikTok, Instagram, Twitter
- 🎨 **Beautiful Design** - Catppuccin Mocha color scheme
- 📱 **Responsive** - Works on mobile and desktop
- 🌙 **Dark Theme** - Easy on the eyes

## Customization

You can easily customize:
- **Search engine** - Change `google.com/search` in the code to Bing, DuckDuckGo, etc.
- **Quick links** - Edit the `links` array to add your favorite websites
- **Colors** - Modify the CSS color values in the `<style>` section
- **Layout** - Adjust grid columns, padding, and spacing

## Troubleshooting

**Links not working from new tab?**
- Some browsers block file:// URLs for security. Use a hosted version instead.

**Clock not updating?**
- Make sure JavaScript is enabled in your browser settings.

**Extension not loading?**
- Clear browser cache and restart the browser.
- Check that the file path is correct.

## Browser Compatibility

✅ Brave, Chrome, Edge, Firefox, Safari (with extensions)
✅ Works on Windows, macOS, Linux
✅ Mobile browsers (iOS Safari, Chrome Mobile)

Enjoy your new minimal tab page!
