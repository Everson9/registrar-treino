const express = require('express');
const router = express.Router();
const exercicioController = require('../controllers/exercicioController');

router.get('/', exercicioController.listarExercicios);
router.get('/:id', exercicioController.buscarExercicio);
router.post('/', exercicioController.criarExercicio);
router.put('/:id', exercicioController.atualizarExercicio);
router.delete('/:id', exercicioController.excluirExercicio);

module.exports = router;
