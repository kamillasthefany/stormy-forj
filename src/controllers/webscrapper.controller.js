const scrapper = require('../services/webscrapper');
//const scrapper = require('../services/webscrapperTwitter');

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
