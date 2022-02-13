const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://en.wikipedia.org/wiki/JavaScript');

  const results = await page.evaluate(() => {
    let headings = document.querySelectorAll(".mw-headline");
    const headingList = [...headings];
    return headingList.map(h => h.innerText);
  })

  console.log(results);

  await browser.close();
})();