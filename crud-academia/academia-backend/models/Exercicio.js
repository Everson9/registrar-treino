const mongoose = require('mongoose');

const exercicioSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true, trim: true },
    grupoMuscular: { type: String, required: true, trim: true },
    series: { type: Number, required: true, min: 1 },
    repeticoes: { type: Number, required: true, min: 1 },
    carga: { type: Number, default: 0, min: 0 },
    observacao: { type: String, trim: true, default: '' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Exercicio', exercicioSchema);
