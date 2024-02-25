// PropriedadeController.js
const Propriedade = require('../models/Propriedade');
const Usuario = require('../models/Usuario');


const PropriedadeController = {

  async self(req, res) {
    const { id } = req.params;
    try {
      const entidade = await Propriedade.findByPk(id);
      if (!entidade) {
        return res.status(404).send('Propriedade não encontrada');
      }
      res.json(entidade);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  },

    // Listar todos os usuários
  async listar(req, res) {
    try {
      const propriedades = await Propriedade.findAll();
      res.json(propriedades);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  },

  // Listar todas as propriedades de um usuário
  async listarByUsuarioId(req, res) {
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
  async criar(req, res) {
    try {
      const usuarioId = req.params.usuarioId;
      const { nome, Localizacao_GPS, Tamanho_Area, Tipo_Solo, Altitude } = req.body;
      
      const usuario = await Usuario.findByPk(usuarioId);

      if (usuario) {
        const propriedade = await Propriedade.create({
          nome,
          Localizacao_GPS,
          Tamanho_Area,
          Tipo_Solo,
          Altitude,
          UsuarioId: usuarioId,
        });

        res.json(propriedade);
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao criar propriedade para o usuário:', error);
      res.status(500).json({ error: 'Erro ao criar propriedade para o usuário' });
    }
  },
  // Atualizar uma propriedade por ID
  async atualizar(req, res) {
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
  async excluir(req, res) {
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

  // Rota para renderizar o formulário de cadastro de propriedade
  renderizarCadastro(req, res) {
    // Lógica para renderizar o formulário de cadastro de propriedade
    res.send('Formulário de Cadastro de Propriedade');
  },

  // Rota para cadastrar uma propriedade a partir do formulário
  cadastrar(req, res) {
    // Lógica para processar o formulário e cadastrar a propriedade
    res.send('Propriedade cadastrada com sucesso');
  },
};

module.exports = PropriedadeController;
