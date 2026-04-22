const mongoose = require('mongoose');

const treinoSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true, trim: true },
    descricao: { type: String, required: true, trim: true },
    realizadoEm: { type: Date, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Treino', treinoSchema);
