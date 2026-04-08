const input = document.getElementById('name');
const suffixInput = document.getElementById('suffix');

// Load saved name and suffix
chrome.storage.local.get(['lastName', 'lastSuffix'], (res) => {
  if (res.lastName) {
    input.value = res.lastName;
  }
  if (res.lastSuffix) {
    suffixInput.value = res.lastSuffix;
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

  const suffix = suffixInput.value.trim();

  chrome.storage.local.set({ lastName: name, lastSuffix: suffix });

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.tabs.sendMessage(tab.id, {
    action: 'startCapture',
    name,
    suffix
  });
}

document.getElementById('start').addEventListener('click', start);

// Enter key support
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    start();
  }
});

suffixInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    start();
  }
});