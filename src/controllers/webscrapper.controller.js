const scrapper = require('../services/webscrapper');

module.exports = {
  async index(request, response) {
    try {
      //const { endereco } = request.params;
      const endereco = 'https://www.formula1.com/en/latest/article.q3-was-definitely-on-the-cards-says-latifi-after-grid-penalties-put-him-18th.3SfcKRwb7m6XtKXQS6eMhX.html';

      const teste = await scrapper.run(endereco);
      return response.status(200).json(`sucesso${teste}`);
    }
    catch (exc) {
      return response.status(400).json(`erro: ${exc}`);
    }
  }
}
