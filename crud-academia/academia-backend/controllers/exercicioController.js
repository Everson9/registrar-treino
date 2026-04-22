const Exercicio = require('../models/Exercicio');

exports.listarExercicios = async (req, res) => {
  try {
    const exercicios = await Exercicio.find().sort({ grupoMuscular: 1, nome: 1 });
    res.json(exercicios);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao listar exercícios.', error: err.message });
  }
};

exports.buscarExercicio = async (req, res) => {
  try {
    const exercicio = await Exercicio.findById(req.params.id);
    if (!exercicio) return res.status(404).json({ message: 'Exercício não encontrado.' });
    res.json(exercicio);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar exercício.', error: err.message });
  }
};

exports.criarExercicio = async (req, res) => {
  try {
    const exercicio = await Exercicio.create(req.body);
    res.status(201).json(exercicio);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar exercício.', error: err.message });
  }
};

exports.atualizarExercicio = async (req, res) => {
  try {
    const exercicio = await Exercicio.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!exercicio) return res.status(404).json({ message: 'Exercício não encontrado.' });
    res.json(exercicio);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao atualizar exercício.', error: err.message });
  }
};

exports.excluirExercicio = async (req, res) => {
  try {
    const exercicio = await Exercicio.findByIdAndDelete(req.params.id);
    if (!exercicio) return res.status(404).json({ message: 'Exercício não encontrado.' });
    res.json({ message: 'Exercício excluído com sucesso.' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao excluir exercício.', error: err.message });
  }
};
