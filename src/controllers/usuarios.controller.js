const Usuario = require('../models/usuario.model');

module.exports = {
  async index(request, response) {
    const usuario = await Usuario.find();
    return response.status(200).json(usuario);
  },
  async create(request, response) {
    const { nome, email, tipo, senha } = request.body;
    let data = {};
    let user = Usuario.findOne({ email });
    data = { nome, email, tipo, senha };
    user = await Usuario.create(data);
    return response.status(200).json(user);
  },
  async details(request, response) {
    const { _id } = request.params;
    const usuario = await Usuario.find({ _id });
    return response.json(usuario);
  },
  async delete(request, response) {
    console.log(request.params);
    const { _id } = request.params;
    const usuario = await Usuario.findByIdAndDelete({ _id });
    return response.status(200).json(`usuário removido com sucesso ${usuario}`);
  },
  async update(request, response) {
    const { _id, nome, email, tipo, senha } = request.body;
    const data = { nome, email, tipo, senha };
    const usuario = await Usuario.findOneAndUpdate({ _id }, data, { new: true });
    return response.status(200).json(`usuário atualizado com sucesso ${usuario}`);
  }
}