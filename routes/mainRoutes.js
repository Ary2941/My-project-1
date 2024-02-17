const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Rota para a página inicial
router.get('/', mainController.index);

// Rota para outra página
router.get('/outra-pagina', mainController.outraPagina);

// Exemplo de rota com parâmetros
router.get('/usuario/:id', mainController.visualizarUsuario);

// Rota para processar dados do formulário
router.post('/formulario', mainController.processarFormulario);

module.exports = router;
