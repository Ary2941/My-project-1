const express = require('express');
const router = express.Router();

// Função utilitária para criar rotas CRUD com base no controlador fornecido
function criarRotasCrud(basePath, controller) {
  router.get(`${basePath}`, controller.listar);
  router.get(`${basePath}/:id`, controller.self);
  router.post(`${basePath}`, controller.criar);
  router.put(`${basePath}/:id`, controller.atualizar);
  router.delete(`${basePath}/:id`, controller.excluir);
}

// Rotas para CRUD de Usuário
const UsuarioController = require('../controllers/UsuarioController');
criarRotasCrud('/usuarios', UsuarioController);

// Rotas para CRUD de Propriedade
const PropriedadeController = require('../controllers/PropriedadeController');
criarRotasCrud('/propriedades', PropriedadeController);

// Rotas para CRUD de Cultura
const CulturaController = require('../controllers/CulturaController');
criarRotasCrud('/culturas', CulturaController);

// Rotas para CRUD de Clima
const ClimaController = require('../controllers/ClimaController');
criarRotasCrud('/climas', ClimaController);

// Rotas para CRUD de Solo
const SoloController = require('../controllers/SoloController');
criarRotasCrud('/solos', SoloController);

// Rotas para CRUD de Problema
const ProblemaController = require('../controllers/ProblemaController');
criarRotasCrud('/problemas', ProblemaController);

// Rotas para CRUD de Solucões
const SolucaoController = require('../controllers/SolucaoController');
criarRotasCrud('/solucoes', SolucaoController);


// Rota para o formulário de cadastro de usuário
router.get('/cadastro', UsuarioController.renderizarCadastro);
router.post('/cadastro', UsuarioController.cadastrar);

// Rota para o formulário de cadastro de propriedade
router.get('/usuarios/:usuarioId/cadastro-propriedade', PropriedadeController.renderizarCadastro);
router.post('/usuarios/:usuarioId/cadastro-propriedade', PropriedadeController.cadastrar);

module.exports = router;
