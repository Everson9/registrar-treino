const express = require('express');
const router = express.Router();
const treinoController = require('../controllers/treinoController');

router.get('/', treinoController.listarTreinos);
router.get('/:id', treinoController.buscarTreino);
router.post('/', treinoController.criarTreino);
router.put('/:id', treinoController.atualizarTreino);
router.delete('/:id', treinoController.excluirTreino);

module.exports = router;
