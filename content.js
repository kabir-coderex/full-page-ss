async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function captureVisible() {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({ action: 'capture' }, resolve);
  });
}

async function startFullPageCapture(name) {
  const style = document.createElement('style');
  style.innerHTML = `
    #wpadminbar { display: none !important; }
    html { margin: 0 !important; }
  `;
  document.head.appendChild(style);

  await sleep(500);

  const totalHeight = document.body.scrollHeight;
  const viewportHeight = window.innerHeight;

  let scrollY = 0;
  const images = [];

  while (scrollY < totalHeight) {
    window.scrollTo(0, scrollY);
    await sleep(500);

    const img = await captureVisible();
    images.push(img);

    scrollY += viewportHeight;
  }

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const imgElements = await Promise.all(
    images.map(src => {
      return new Promise(res => {
        const img = new Image();
        img.src = src;
        img.onload = () => res(img);
      });
    })
  );

  canvas.width = imgElements[0].width;
  canvas.height = totalHeight;

  let y = 0;

  for (let img of imgElements) {
    ctx.drawImage(img, 0, y);
    y += img.height;
  }

  const finalImage = canvas.toDataURL('image/png');

  chrome.runtime.sendMessage({
    action: 'download',
    url: finalImage,
    filename: `${name}-checkout-full.png`
  });

  window.scrollTo(0, 0);
}

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === 'startCapture') {
    startFullPageCapture(msg.name);
  }
});