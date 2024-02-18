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


  // Renderizar a página de cadastro
  renderizarCadastro(req, res) {
    res.render('cadastro');
  },
  
  // Processar o formulário de cadastro
  async cadastrar(req, res) {
    const { nome, email, senha } = req.body;

    try {
      const novoUsuario = await Usuario.create({ nome, email, senha });
      res.json(novoUsuario);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  },

  // Listar todas as propriedades de um usuário
  async listPropriedades(req, res) {
    try {
      const usuarioId = req.params.usuarioId;
      const propriedades = await Propriedade.findAll({ where: { UsuarioId: usuarioId } });
      res.json(propriedades);
    } catch (error) {
      console.error('Erro ao obter propriedades:', error);
      res.status(500).json({ error: 'Erro ao obter propriedades' });
    }
  },

  // Criar uma nova propriedade para um usuário
  async createPropriedade(req, res) {
    try {
      const usuarioId = req.params.usuarioId;
      const { nome } = req.body;
      const propriedade = await Propriedade.create({ nome, UsuarioId: usuarioId });
      res.json(propriedade);
    } catch (error) {
      console.error('Erro ao criar propriedade:', error);
      res.status(500).json({ error: 'Erro ao criar propriedade' });
    }
  },

  // Obter uma propriedade por ID
  async showPropriedade(req, res) {
    try {
      const propriedade = await Propriedade.findByPk(req.params.id);
      if (propriedade) {
        res.json(propriedade);
      } else {
        res.status(404).json({ error: 'Propriedade não encontrada' });
      }
    } catch (error) {
      console.error('Erro ao obter propriedade por ID:', error);
      res.status(500).json({ error: 'Erro ao obter propriedade por ID' });
    }
  },

  // Atualizar uma propriedade por ID
  async updatePropriedade(req, res) {
    try {
      const { nome } = req.body;
      const propriedade = await Propriedade.findByPk(req.params.id);
      if (propriedade) {
        propriedade.nome = nome;
        await propriedade.save();
        res.json(propriedade);
      } else {
        res.status(404).json({ error: 'Propriedade não encontrada' });
      }
    } catch (error) {
      console.error('Erro ao atualizar propriedade:', error);
      res.status(500).json({ error: 'Erro ao atualizar propriedade' });
    }
  },

  // Excluir uma propriedade por ID
  async destroyPropriedade(req, res) {
    try {
      const propriedade = await Propriedade.findByPk(req.params.id);
      if (propriedade) {
        await propriedade.destroy();
        res.json({ message: 'Propriedade excluída com sucesso' });
      } else {
        res.status(404).json({ error: 'Propriedade não encontrada' });
      }
    } catch (error) {
      console.error('Erro ao excluir propriedade:', error);
      res.status(500).json({ error: 'Erro ao excluir propriedade' });
    }
  },
};

module.exports = UsuarioController;
