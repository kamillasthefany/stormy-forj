const scrapper = require('../services/webscrapper');

module.exports = {
  async index(request, response) {
    try {
      const { endereco } = request.body;

      const teste = await scrapper.run(endereco);
      return response.status(200).json(`sucesso${teste}`);
    }
    catch (exc) {
      return response.status(400).json(`erro: ${exc}`);
    }
  }
}
