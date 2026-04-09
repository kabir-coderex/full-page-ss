# 📸 Advanced Full Page Screenshot Tool

A powerful Chrome extension for capturing full-page screenshots with advanced features including multiple capture modes, annotation tools, cloud upload, and responsive testing capabilities.

---

## ✨ Key Features

### 🎯 Capture Modes
- **Full Page** — Automatically scrolls and stitches the entire page into one seamless screenshot
- **Visible Area** — Captures only what's currently visible in the viewport
- **Select Area** — Click and drag to select a custom area to capture
- **Select Element** — Point and click on any element to capture it precisely

### 🎨 Annotation Tools
Built-in editor with professional markup tools:
- **Arrows** — Draw directional arrows to highlight key areas
- **Rectangles** — Add boxes to frame important sections
- **Highlight** — Yellow highlighter for drawing attention
- **Blur** — Obscure sensitive information
- **Text** — Add custom text annotations with color options

### ☁️ Upload & Share
- **ImgBB Integration** — Upload screenshots instantly to the cloud
- **Direct URL Copying** — Get shareable links copied to clipboard automatically
- **User-configurable API Key** — Secure storage of your personal API key
- **History Tracking** — Access last 50 uploaded screenshots with timestamps

### ⚙️ Output Options
- **Download** — Save directly to your Downloads folder
- **Copy to Clipboard** — Paste screenshots directly into other apps
- **Edit** — Open in annotation editor before saving
- **Upload to ImgBB** — Share via cloud with instant URL
- **Upload & Copy URL** — One-click upload with automatic URL copying

### 📐 Format & Quality Control
- **PNG** — Lossless quality for crisp text and graphics
- **JPEG** — Smaller file size with adjustable quality (1-100)
- **WebP** — Modern format with adjustable quality (1-100)

### 📱 Responsive Testing
- **Multi-device Capture** — Automatically captures screenshots at multiple breakpoints:
  - **Desktop** (1920px) → `-desktop` suffix
  - **Tablet** (1024px, 991px) → `-tablet` suffix
  - **Mobile** (768px, 575px, 375px) → `-mobile` suffix
- **Custom Breakpoints** — Add your own device widths
- **Batch Capture** — Capture all selected devices in sequence

### ⏱️ Timing Control
- **Instant Capture** — Take screenshots immediately
- **Delay Options** — 3s, 5s, or 10s countdown
- **Custom Delay** — Set any delay duration
- Perfect for capturing hover states, animations, or dropdown menus

### 🏷️ Smart File Naming
Dynamic naming with multiple variables:
- **Domain** — Include website domain in filename
- **Page Title** — Add page title automatically
- **Timestamp** — ISO format timestamp for version control
- **Device Name** — Automatic device type suffix
- **Custom Name** — Your own custom prefix

### 📜 History Management
- **Last 50 Screenshots** — Automatic tracking with timestamps
- **Quick Actions** — Copy filename, open source page, or delete entries
- **Search & Filter** — Find screenshots by name or URL
- **One-click Clear** — Remove entire history at once

### 🎨 Modern UI/UX
- **Collapsible Sections** — Clean, organized interface
- **Purple Gradient Theme** — Attractive modern design
- **Smooth Animations** — Professional transitions and effects
- **Responsive Layout** — Optimized for popup dimensions
- **Status Indicators** — Color-coded feedback (success, error, info)
- **Keyboard Shortcut** — Quick capture with **Cmd+Shift+S** (Mac) or **Ctrl+Shift+S** (Windows/Linux)

---

## 📝 File Naming Examples

The extension supports flexible naming with multiple components:

| Configuration | Example Output |
|---|---|
| Custom name only | `my-screenshot-desktop.png` |
| Domain + timestamp | `example-com-2026-04-08T14-30-45-desktop.png` |
| Title + device | `About-Us-Page-tablet.png` |
| Custom + all options | `my-screenshot-example-com-About-Us-2026-04-08T14-30-45-mobile.png` |

**Responsive Mode with Multiple Devices:**
```
my-screenshot-desktop.png   (1920px)
my-screenshot-tablet.png    (991px)
my-screenshot-mobile.png    (575px)
```

---

## 🚀 Installation

### From Source

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** (toggle in the top-right corner)
4. Click **Load unpacked** and select the extension folder
5. The extension icon will appear in your toolbar

### Permissions Required

| Permission | Purpose |
|---|---|
| `tabs` | Query and message the active tab |
| `scripting` | Inject content script for screenshot capture |
| `activeTab` | Access current tab content |
| `downloads` | Save screenshots to disk |
| `storage` | Store preferences and API keys |
| `windows` | Resize window for responsive mode |
| `clipboardWrite` | Copy screenshots and URLs |
| `https://api.imgbb.com/*` | Upload screenshots to ImgBB |

---

## 📖 Usage Guide

### Basic Screenshot

1. Click the extension icon in your toolbar
2. Configure your preferences:
   - Choose **Capture Mode** (Full Page, Visible, Area, Element)
   - Select **File Format** (PNG, JPEG, WebP)
   - Pick **Output Action** (Download, Clipboard, Edit, Upload)
3. Customize the filename (optional):
   - Toggle naming options (domain, title, timestamp, device)
   - Add custom name prefix
4. Click **🚀 Capture Screenshot**

### Select Area Mode

1. Choose "Select Area" as capture mode
2. Click **Capture**
3. The popup closes automatically
4. Click and drag on the page to select the area
5. Release to capture the selected region

### Select Element Mode

1. Choose "Select Element" as capture mode
2. Click **Capture**
3. The popup closes automatically
4. Hover over page elements (they'll highlight)
5. Click the element you want to capture

### Using the Annotation Editor

1. Select "Edit" as output action
2. Capture your screenshot
3. The editor opens in a new tab with tools:
   - **Arrow Tool**: Draw directional arrows
   - **Rectangle Tool**: Add boxes and frames
   - **Highlight Tool**: Yellow highlighter
   - **Blur Tool**: Obscure sensitive data
   - **Text Tool**: Add text with color picker
4. Click **Save** to download the edited screenshot

### Uploading to ImgBB

**First-Time Setup:**
1. Get a free API key from [ImgBB](https://api.imgbb.com/)
2. Open the extension popup
3. Expand the **⚙️ Settings** section
4. Enter your API key in the "ImgBB API Key" field
5. Click **Save**

**Uploading Screenshots:**
1. Configure your screenshot settings
2. Select one of:
   - **Upload to ImgBB** — Uploads and opens in new tab
   - **Upload & Copy URL** — Uploads, copies URL, opens in new tab
3. Click **Capture**
4. Screenshot is automatically uploaded and URL is available

**Managing API Key:**
- Click **Clear** to remove stored API key
- Upload options are automatically disabled without an API key
- Your key is stored securely in Chrome's local storage

### Responsive Testing

1. Click the extension icon
2. Expand the **📱 Device Testing** section
3. Select device breakpoints to capture:
   - Check/uncheck predefined devices
   - Adjust widths if needed
   - Click **+ Add Custom Device** for custom breakpoints
4. Click **Capture**
5. Screenshots are captured sequentially for each selected device
6. Window is automatically restored to original size

### Using Capture Delay

1. Expand the **⏱️ Capture Delay** section
2. Select delay time:
   - None (instant)
   - 3 seconds
   - 5 seconds
   - 10 seconds
   - Custom (enter your own duration)
3. Click **Capture**
4. The countdown appears before capture

Perfect for capturing:
- Hover states and tooltips
- Dropdown menus
- Animations at specific frames
- Loading states

### Viewing History

1. Expand the **📜 History** section
2. View last 50 screenshots with:
   - Filename
   - Source URL
   - Capture timestamp
3. Actions available:
   - **Copy Name** — Copy filename to clipboard
   - **Open Page** — Navigate to source page
   - **Delete** — Remove from history
4. Click **Clear All History** to remove all entries

### Keyboard Shortcut

- **Mac**: `Cmd + Shift + S`
- **Windows/Linux**: `Ctrl + Shift + S`

Captures screenshot with last-used settings without opening popup.

**To customize:**
1. Go to `chrome://extensions/shortcuts`
2. Find "Advanced Full Page Screenshot Tool"
3. Click the pencil icon to change the shortcut

---

## 🛠️ Technical Details

### Architecture

- **Manifest V3** — Built with the latest Chrome extension architecture
- **Content Script** — Injected into pages for screenshot capture
- **Background Service Worker** — Handles uploads and downloads
- **Popup Interface** — Modern UI with collapsible sections
- **Editor Interface** — HTML5 Canvas-based annotation tools

### File Structure

```
├── manifest.json          # Extension configuration
├── popup.html            # Popup interface
├── popup.js              # Popup logic and controls
├── content.js            # Screenshot capture engine
├── background.js         # Service worker for uploads
├── editor.html           # Annotation editor interface
├── editor.js             # Drawing tools and canvas logic
├── config.js             # API configuration
└── icons/                # Extension icons
    ├── icon-16.png
    ├── icon-32.png
    ├── icon-48.png
    └── icon-128.png
```

### Browser Compatibility

- **Chrome**: Fully supported (v88+)
- **Edge**: Fully supported (Chromium-based)
- **Brave**: Fully supported
- **Opera**: Fully supported (Chromium-based)
- **Firefox**: Not supported (uses different extension API)

---

## 🐛 Troubleshooting

### Screenshots are blank or incomplete

- Try adding a delay (3-5 seconds) to allow page to fully load
- Some dynamic content may require waiting for animations to complete
- Refresh the page and try again

### Content script not injecting

- The extension auto-injects on first use
- If issues persist, manually refresh the page
- Check the console for any errors

### Upload to ImgBB failing

- Verify your API key is correct
- Check your internet connection
- Ensure you haven't exceeded ImgBB's rate limits (free tier: 10 images/hour)
- Get a new API key from [ImgBB](https://api.imgbb.com/)

### Area/Element selection not working

- Make sure you click **Capture** first
- The popup will close, then you can select
- Check that the page allows interaction (some sites may block it)

### History not showing

- History is stored in Chrome's local storage
- If storage is cleared, history is lost
- Make sure you have storage permissions enabled

### Keyboard shortcut not working

- Verify the shortcut is configured at `chrome://extensions/shortcuts`
- Check for conflicts with other extensions
- Some Chrome internal pages don't allow extension shortcuts

---

## 📊 Features Roadmap

### ✅ Completed Features

- [x] Full-page screenshot capture
- [x] Multiple capture modes (Full, Visible, Area, Element)
- [x] Advanced naming system
- [x] Format selection (PNG/JPEG/WebP)
- [x] Quality controls
- [x] Output actions (Download/Clipboard/Edit/Upload)
- [x] Capture delays
- [x] Screenshot history
- [x] Responsive device testing
- [x] Annotation editor with 5 tools
- [x] ImgBB cloud upload
- [x] User-configurable API keys
- [x] Modern UI/UX with collapsible sections
- [x] Status indicators and feedback
- [x] Keyboard shortcuts

### 🔮 Future Enhancements

- [ ] Additional cloud storage providers (Imgur, Cloudinary, S3)
- [ ] Batch mode for multiple pages
- [ ] Scheduled captures
- [ ] Video recording mode
- [ ] More annotation shapes (circles, lines, arrows styles)
- [ ] Undo/redo for annotations
- [ ] Export settings as presets
- [ ] Chrome sync for preferences across devices
- [ ] Dark mode toggle

---

## 💡 Tips & Best Practices

1. **Use delays for dynamic content** — Animations, lazy-loading images, and dropdown menus benefit from 3-5 second delays

2. **Select element mode for precision** — Perfect for capturing specific components without extra whitespace

3. **Upload & Copy URL for quick sharing** — Fastest way to share screenshots in Slack, Discord, or emails

4. **Use responsive mode for documentation** — Create multi-device screenshots for project documentation in one click

5. **Blur sensitive data before sharing** — Use the blur tool in the editor to hide passwords, PII, or confidential information

6. **Name screenshots descriptively** — Enable domain and timestamp for better organization in your downloads folder

7. **Check history for re-sharing** — Avoid duplicate uploads by checking your history first

8. **Custom breakpoints for specific testing** — Add your exact project breakpoints (e.g., 1366px, 1536px) for perfect QA screenshots

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

### Development Setup

1. Clone the repository
2. Make your changes
3. Load the extension in Chrome via `chrome://extensions/`
4. Test thoroughly across different websites
5. Submit a pull request with clear description

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👤 Author

Created by Kabir

---

## 🙏 Acknowledgments

- ImgBB for providing free image hosting API
- Chrome Extension documentation and community
- All users who provided feedback and feature requests

---

## 📞 Support

If you encounter any issues or have feature requests:
1. Check the [Troubleshooting](#-troubleshooting) section
2. Search existing issues on GitHub
3. Create a new issue with detailed information

---

**⭐ If you find this extension helpful, please consider starring the repository!**
