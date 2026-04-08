# Advanced Full Page Screenshot Tool

A Chrome extension that captures full-page screenshots with flexible naming, optional suffix labels, automatic device detection, and a responsive screenshot mode that captures all three breakpoints in one click.

---

## Features

- **Full-page capture** — scrolls the entire page and stitches all visible segments into a single PNG, regardless of page height.
- **Custom file naming** — set a base name before capturing; the last used name is remembered across sessions.
- **Optional suffix** — add a suffix between the name and the device label (e.g. `homepage-v2-desktop.png`). Also remembered across sessions.
- **Automatic device label** — the device type is appended to the filename based on the current window width:
  - `> 991px` → `-desktop`
  - `> 575px` and `≤ 991px` → `-tablet`
  - `≤ 575px` → `-mobile`
- **Responsive screenshot mode** — a single checkbox triggers three sequential captures, automatically resizing the browser window to:
  - `1920px` → saves as `-desktop`
  - `991px` → saves as `-tablet`
  - `575px` → saves as `-mobile`
  - The window is restored to its original width when done.
- **Keyboard shortcut** — trigger a capture without opening the popup.
- **Auto content script injection** — works on tabs that were open before the extension was installed or reloaded, with no manual page refresh needed.

---

## File Naming

| Condition | Filename |
|---|---|
| Name only | `[name]-desktop.png` |
| Name + suffix | `[name]-[suffix]-desktop.png` |
| Responsive mode | `[name]-desktop.png`, `[name]-tablet.png`, `[name]-mobile.png` |
| Responsive + suffix | `[name]-[suffix]-desktop.png`, `[name]-[suffix]-tablet.png`, `[name]-[suffix]-mobile.png` |

---

## Installation

1. Open Chrome and go to `chrome://extensions/`.
2. Enable **Developer mode** (toggle in the top-right corner).
3. Click **Load unpacked** and select the `fullpage-extension-v2` folder.
4. The extension icon will appear in the toolbar.

---

## Usage

### Basic screenshot

1. Navigate to the page you want to capture.
2. Click the extension icon in the toolbar.
3. Enter a **name** (required).
4. Optionally enter a **suffix**.
5. Click **Capture**.

The file is saved automatically to your default Downloads folder.

### Responsive screenshot (all three breakpoints)

1. Click the extension icon.
2. Enter a **name** and optional **suffix**.
3. Check **Responsive screenshot**.
4. Click **Capture**.

The extension will resize the browser window to 1920px, 991px, and 575px in sequence, capturing a full-page screenshot at each size. Three files will be saved automatically.

### Keyboard shortcut

Press **Cmd+Shift+S** (Mac) or **Ctrl+Shift+S** (Windows/Linux) on any tab to start a capture using the last saved name, suffix, and responsive setting — no popup required.

To change the shortcut, go to `chrome://extensions/shortcuts`.

---

## Permissions

| Permission | Reason |
|---|---|
| `tabs` | Query and message the active tab |
| `scripting` | Inject the content script on demand |
| `activeTab` | Access the currently active tab |
| `downloads` | Save screenshots to disk |
| `storage` | Remember name, suffix, and responsive preference |
| `windows` | Resize the browser window for responsive mode |
