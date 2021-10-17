// const Produto = require('../models/produto.model');

// module.exports = {
//   async index(request, response) {
//     const produto = await Produto.find();
//     return response.status(200).json(produto);
//   },
//   async create(request, response) {
//     const { nome, descricao, preco, quantidade } = request.body;
//     let data = {};
//     let produto = Produto.findOne({ nome });
//     data = { nome, descricao, preco, quantidade };
//     produto = await Produto.create(data);
//     return response.status(200).json(produto);
//   },
//   async details(request, response) {
//     const { _id } = request.params;
//     const produto = await Produto.find({ _id });
//     return response.json(produto);
//   },
//   async delete(request, response) {
//     console.log(request.params);
//     const { _id } = request.params;
//     const produto = await Produto.findByIdAndDelete({ _id });
//     return response.status(200).json(`produto removido com sucesso ${produto}`);
//   },
//   async update(request, response) {
//     const { _id, nome, descricao, preco, quantidade } = request.body;
//     const data = { nome, descricao, preco, quantidade };
//     const produto = await Produto.findOneAndUpdate({ _id }, data, { new: true });
//     return response.status(200).json(`produto atualizado com sucesso ${produto}`);
//   }
// }