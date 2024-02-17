const express = require('express');
const router = express.Router();


// Rotas para a página 
const mainController = require('../controllers/mainController');
router.get('/', mainController.index); 
router.get('/outra-pagina', mainController.outraPagina); // Rota para outra página
router.get('/usuario/:id', mainController.visualizarUsuario); // Exemplo de rota com parâmetros
router.post('/formulario', mainController.processarFormulario); // Rota para processar dados do formulário

// Rotas para CRUD de Usuario
const UsuarioController = require('../controllers/UsuarioController');
router.get('/usuarios', UsuarioController.listar);
router.post('/usuarios', UsuarioController.criar);
router.put('/usuarios/:id', UsuarioController.atualizar);
router.delete('/usuarios/:id', UsuarioController.excluir);

module.exports = router;