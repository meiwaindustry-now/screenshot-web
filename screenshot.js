// screenshot.js
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  try {
    // ブラウザ起動
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // 画面サイズ設定（任意）
    await page.setViewport({ width: 1280, height: 800 });

    // スクショ対象のURLを指定
    const url = 'https://solar-carport.meiwajp-dev.link/meiwa-rental'; // ←ここを書き換えて対象ページを指定
    await page.goto(url, { waitUntil: 'networkidle2' });

    /
