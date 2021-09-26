const puppeteer = require('puppeteer');

module.exports = {
  async run(endereco) {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto(endereco);
      //await page.screenshot({ path: 'teste.png' });

      const result = await page.evaluate(() => {
        const nodeList = document.querySelectorAll('.f1-article--content p');
        const paragrafos = [...nodeList];

        return paragrafos.map(item => ({
          texto: item.innerHTML
        }));
      });

      console.log('result', result);

      await browser.close();

      return result;
    }
    catch (error) {

    }

  }
}