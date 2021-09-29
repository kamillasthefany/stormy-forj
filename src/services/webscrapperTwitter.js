const puppeteer = require('puppeteer');
const fs = require('fs');

module.exports = {
  async run(endereco) {
    try {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      console.log('endereco', enderece);
      await page.goto(endereco);
      await page.screenshot({ path: 'teste.png' });

      const result = await page.evaluate(() => {
        const nodeList = document.querySelectorAll('[aria-label="Timeline: Conversa"]');
        console.log('nodelist', nodeList);
        const paragrafos = [...nodeList];

        return paragrafos.map(item => ({
          texto: item.innerHTML
        }));
      });

      fs.writeFile('resultado.json', JSON.stringify(result, null, 2), erro => {
        if (erro) throw new Error(`Erro: ${erro}`);
        console.log('ok');
      });
      console.log('result', result);

      await browser.close();

      return result;
    }
    catch (error) {

    }

  }
}