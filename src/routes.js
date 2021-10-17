const express = require('express');

const routes = express.Router();
// const Usuario = require('./controllers/usuarios.controller');
// const Produto = require('./controllers/produtos.controller');
const WebScrapper = require('./controllers/webscrapper.controller');


const CarsController = require('./controllers/Cars');

routes.get("/cars", CarsController.all);
routes.post("/cars", CarsController.create);


routes.get('/', function (request, response) {
  response.json('Olá');
});

//Usuário
// routes.post('/usuario', Usuario.create);
// routes.get('/usuario', Usuario.index);
// routes.get('/usuario.details/:_id', Usuario.details);
// routes.delete('/usuario/:_id', Usuario.delete);
// routes.put('/usuario', Usuario.update);

//Produto
// routes.post('/produto', Produto.create);
// routes.get('/produto', Produto.index);
// routes.get('/produto.details/:_id', Produto.details);
// routes.delete('/produto/:_id', Produto.delete);
// routes.put('/produto', Produto.update);

//Scrapper
routes.post('/scrapper', WebScrapper.index);

module.exports = routes;