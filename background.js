chrome.runtime.onMessage.addListener(async (msg) => {
  if (msg.action === 'capture') {
    const image = await chrome.tabs.captureVisibleTab(null, { format: 'png' });
    return Promise.resolve(image);
  }

  if (msg.action === 'download') {
    chrome.downloads.download({
      url: msg.url,
      filename: msg.filename,
      saveAs: false
    });
  }
});

// Hotkey trigger
chrome.commands.onCommand.addListener(async (command) => {
  if (command === 'start-capture') {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.storage.local.get(['lastName', 'lastSuffix'], (res) => {
      const name = res.lastName || 'screenshot';
      const suffix = res.lastSuffix || '';

      chrome.tabs.sendMessage(tab.id, {
        action: 'startCapture',
        name,
        suffix
      });
    });
  }
});