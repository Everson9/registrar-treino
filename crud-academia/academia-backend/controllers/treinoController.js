const Treino = require('../models/Treino');

exports.listarTreinos = async (req, res) => {
  try {
    const treinos = await Treino.find().sort({ realizadoEm: -1 });
    res.json(treinos);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao listar treinos.', error: err.message });
  }
};

exports.buscarTreino = async (req, res) => {
  try {
    const treino = await Treino.findById(req.params.id);
    if (!treino) return res.status(404).json({ message: 'Treino não encontrado.' });
    res.json(treino);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar treino.', error: err.message });
  }
};

exports.criarTreino = async (req, res) => {
  try {
    const treino = await Treino.create(req.body);
    res.status(201).json(treino);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao criar treino.', error: err.message });
  }
};

exports.atualizarTreino = async (req, res) => {
  try {
    const treino = await Treino.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!treino) return res.status(404).json({ message: 'Treino não encontrado.' });
    res.json(treino);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao atualizar treino.', error: err.message });
  }
};

exports.excluirTreino = async (req, res) => {
  try {
    const treino = await Treino.findByIdAndDelete(req.params.id);
    if (!treino) return res.status(404).json({ message: 'Treino não encontrado.' });
    res.json({ message: 'Treino removido com sucesso.' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao excluir treino.', error: err.message });
  }
};
