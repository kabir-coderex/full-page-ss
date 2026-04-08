const input = document.getElementById('name');

// Load saved name
chrome.storage.local.get(['lastName'], (res) => {
  if (res.lastName) {
    input.value = res.lastName;
  }
  input.focus();
});

// Handle start
async function start() {
  const name = input.value;
  if (!name) {
    alert('Enter a name');
    return;
  }

  chrome.storage.local.set({ lastName: name });

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.tabs.sendMessage(tab.id, {
    action: 'startCapture',
    name
  });
}

document.getElementById('start').addEventListener('click', start);

// Enter key support
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    start();
  }
});