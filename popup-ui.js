// ── View switching ────────────────────────────────────────────────────────────
const views = ['view-main', 'view-settings', 'view-history'];

function showView(id) {
  views.forEach(v => {
    document.getElementById(v).style.display = v === id ? 'block' : 'none';
  });
}

// Settings icon → open settings view
document.getElementById('btn-settings').addEventListener('click', () => {
  showView('view-settings');
  // Sync hidden checkbox so popup.js makes settings-panel visible
  const cb = document.getElementById('settings-toggle');
  cb.checked = true;
  cb.dispatchEvent(new Event('change'));
});

// Back from settings
document.getElementById('btn-back-settings').addEventListener('click', () => {
  showView('view-main');
  const cb = document.getElementById('settings-toggle');
  cb.checked = false;
  cb.dispatchEvent(new Event('change'));
});

// History icon → open history view + trigger loadHistory() via popup.js
document.getElementById('btn-history').addEventListener('click', () => {
  showView('view-history');
  const cb = document.getElementById('history-toggle');
  cb.checked = true;
  cb.dispatchEvent(new Event('change'));
});

// Back from history
document.getElementById('btn-back-history').addEventListener('click', () => {
  showView('view-main');
  const cb = document.getElementById('history-toggle');
  cb.checked = false;
  cb.dispatchEvent(new Event('change'));
});

// ── Filename preview ──────────────────────────────────────────────────────────
let _dom = 'site-domain';
let _ttl = 'page-title';

chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
  if (tab) {
    try {
      const u = new URL(tab.url);
      _dom = u.hostname.replace(/^www\./, '').replace(/\./g, '-');
    } catch (_) {}
    if (tab.title) {
      _ttl = tab.title.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 28) || 'page';
    }
  }
  refreshPreview();
});

function refreshPreview() {
  const fmt    = (document.querySelector('input[name="format"]:checked') || {}).value || 'png';
  const named  = document.getElementById('naming-toggle').checked;
  const incDom = document.getElementById('include-domain').checked;
  const incTtl = document.getElementById('include-title').checked;
  const incTs  = document.getElementById('include-time').checked;
  const custom = (document.getElementById('custom-name').value || '').trim();

  const parts = [];
  if (custom) parts.push(custom);
  if (!named || incDom) parts.push(_dom);
  if (!named || incTtl) parts.push(_ttl);
  if (!named || incTs) {
    const ts = new Date().toISOString().slice(0, 16)
      .replace('T', '_').replace(':', '-');
    parts.push(ts);
  }
  if (!parts.length) parts.push('screenshot');

  document.getElementById('filename-preview-value').textContent =
    parts.join('-') + '.' + fmt;
}

// Wire preview to relevant inputs
document.querySelectorAll('input[name="format"]').forEach(r =>
  r.addEventListener('change', refreshPreview));
['naming-toggle', 'include-domain', 'include-title', 'include-time',
 'include-device'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('change', refreshPreview);
});
document.getElementById('custom-name').addEventListener('input', refreshPreview);
