const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  quantidade: { type: Number, default: 0 },
  preco: Number,
}, {
  timestamps: true
});

const produtos = mongoose.model('Produto', DataSchema);
module.exports = produtos;