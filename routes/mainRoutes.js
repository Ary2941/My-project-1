const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const UsuarioController = require('../controllers/UsuarioController');
const PropriedadeController = require('../controllers/PropriedadeController');
const CulturaController = require('../controllers/CulturaController');
const ClimaController = require('../controllers/ClimaController');
const SoloController = require('../controllers/SoloController');

// Função utilitária para criar rotas CRUD com base no controlador fornecido
function criarRotasCrud(basePath, controller) {
  router.get(`${basePath}`, controller.listar);
  router.post(`${basePath}`, controller.criar);
  router.put(`${basePath}/:id`, controller.atualizar);
  router.delete(`${basePath}/:id`, controller.excluir);
}

// Rotas para a página principal
router.get('/', mainController.index);
router.get('/outra-pagina', mainController.outraPagina);
router.get('/usuario/:id', mainController.visualizarUsuario);
router.post('/formulario', mainController.processarFormulario);

// Rotas para CRUD de Usuário
criarRotasCrud('/usuarios', UsuarioController);

// Rotas para CRUD de Propriedade
criarRotasCrud('/usuarios/:usuarioId/propriedades', PropriedadeController);

// Rotas para CRUD de Cultura
criarRotasCrud('/usuarios/:usuarioId/:propriedadeId/culturas', CulturaController);

// Rotas para CRUD de Clima
criarRotasCrud('/usuarios/:usuarioId/:propriedadeId/climas', ClimaController);

// Rotas para CRUD de Solo
criarRotasCrud('/usuarios/:usuarioId/:propriedadeId/solo', SoloController);

// Rota para o formulário de cadastro de usuário
router.get('/cadastro', UsuarioController.renderizarCadastro);
router.post('/cadastro', UsuarioController.cadastrar);

// Rota para o formulário de cadastro de propriedade
router.get('/usuarios/:usuarioId/cadastro-propriedade', PropriedadeController.renderizarCadastro);
router.post('/usuarios/:usuarioId/cadastro-propriedade', PropriedadeController.cadastrar);

module.exports = router;
