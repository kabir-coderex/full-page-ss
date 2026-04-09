// ── Collapsible triggers ──────────────────────────────────────────────────────
function initCollapsible(headId, bodyId) {
  const head = document.getElementById(headId);
  const body = document.getElementById(bodyId);
  head.addEventListener('click', () => {
    const opening = !body.classList.contains('open');
    head.classList.toggle('open', opening);
    body.classList.toggle('open', opening);
  });
}

// Advanced settings — pure CSS collapsible
initCollapsible('adv-trigger', 'adv-body');

// History — also syncs hidden checkbox so popup.js fires loadHistory()
const histHead = document.getElementById('hist-trigger');
const histBody = document.getElementById('hist-body');
histHead.addEventListener('click', () => {
  const opening = !histBody.classList.contains('open');
  histHead.classList.toggle('open', opening);
  histBody.classList.toggle('open', opening);
  const cb = document.getElementById('history-toggle');
  cb.checked = opening;
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
