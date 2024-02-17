// controllers/UsuarioController.js
const Usuario = require('../models/Usuario');

const UsuarioController = {
  // Listar todos os usuários
  async listar(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      res.json(usuarios);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  },

  // Criar um novo usuário
  async criar(req, res) {
    const { nome, email, senha } = req.body;

    try {
      const novoUsuario = await Usuario.create({ nome, email, senha });
      res.json(novoUsuario);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  },

  // Atualizar um usuário existente
  async atualizar(req, res) {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    try {
      const usuario = await Usuario.findByPk(id);

      if (!usuario) {
        return res.status(404).send('Usuário não encontrado');
      }

      await usuario.update({ nome, email, senha });
      res.json(usuario);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  },

  // Excluir um usuário
  async excluir(req, res) {
    const { id } = req.params;

    try {
      const usuario = await Usuario.findByPk(id);

      if (!usuario) {
        return res.status(404).send('Usuário não encontrado');
      }

      await usuario.destroy();
      res.send('Usuário excluído com sucesso');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  },
};

module.exports = UsuarioController;
