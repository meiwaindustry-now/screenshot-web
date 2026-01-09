const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // ブラウザのサイズを固定（コンテンツサイズに合わせる）
  await page.setViewport({ width: 1920, height: 1080 });

  // 自社サイトを開く
  await page.goto('https://solar-carport.meiwajp-dev.link/meiwa-niigata-factory', { waitUntil: 'networkidle0' });

  // スクリーンショット取得（1枚でフル）
  await page.screenshot({ path: 'screenshot.png', fullPage: false });

  await browser.close();
})();
