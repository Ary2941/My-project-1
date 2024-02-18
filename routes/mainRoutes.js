const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const UsuarioController = require('../controllers/UsuarioController');
const PropriedadeController = require('../controllers/PropriedadeController');

// Rotas para a página principal
router.get('/', mainController.index);
router.get('/outra-pagina', mainController.outraPagina);
router.get('/usuario/:id', mainController.visualizarUsuario);
router.post('/formulario', mainController.processarFormulario);

// Rotas para CRUD de Usuário
router.get('/usuarios', UsuarioController.listar);
router.post('/usuarios', UsuarioController.criar);
router.put('/usuarios/:id', UsuarioController.atualizar);
router.delete('/usuarios/:id', UsuarioController.excluir);

// Rota para o formulário de cadastro de usuário
router.get('/cadastro', UsuarioController.renderizarCadastro);
router.post('/cadastro', UsuarioController.cadastrar);

// Rotas para CRUD de Propriedade
router.get('/usuarios/:usuarioId/propriedades', PropriedadeController.listar);
router.post('/usuarios/:usuarioId/propriedades', PropriedadeController.criar);
router.put('/propriedades/:id', PropriedadeController.atualizar);
router.delete('/propriedades/:id', PropriedadeController.excluir);

// Rota para o formulário de cadastro de propriedade
router.get('/usuarios/:usuarioId/cadastro-propriedade', PropriedadeController.renderizarCadastro);
router.post('/usuarios/:usuarioId/cadastro-propriedade', PropriedadeController.cadastrar);

module.exports = router;
