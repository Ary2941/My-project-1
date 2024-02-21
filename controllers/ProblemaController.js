// ProblemaController.js
const Problema = require('../models/Problema');
const Usuario = require('../models/Propriedade');
const Usuario = require('../models/Cultura');


const ProblemaController = {
  // Listar todas as problemas de um usuário
  async listar(req, res) {
    try {
      const usuarioId = req.params.usuarioId;
      const problemas = await Problema.findAll({ where: { UsuarioId: usuarioId } });
      res.json(problemas);
    } catch (error) {
      console.error('Erro ao obter problemas:', error);
      res.status(500).json({ error: 'Erro ao obter problemas' });
    }
  },

  // Criar uma nova problema para uma propriedade
  async criar(req, res) {
    try {
      const usuarioId = req.params.usuarioId;
      const { descricao, observacoes} = req.body;
      
      const usuario = await Usuario.findByPk(usuarioId);

      if (usuario) {
        const problema = await Problema.create({
          descricao,
          observacoes,
          PropriedadeId: PropriedadeId,
          CulturaId: CulturaId,
        });

        res.json(problema);
      } else {
        res.status(404).json({ error: 'Propriedade ou cultura não encontrada' });
      }
    } catch (error) {
      console.error('Erro ao criar problema para o usuário:', error);
      res.status(500).json({ error: 'Erro ao criar problema para o usuário' });
    }
  },
  // Atualizar uma problema por ID
  async atualizar(req, res) {
    try {
      const { nome } = req.body;
      const problema = await Problema.findByPk(req.params.id);
      if (problema) {
        problema.nome = nome;
        await problema.save();
        res.json(problema);
      } else {
        res.status(404).json({ error: 'Problema não encontrada' });
      }
    } catch (error) {
      console.error('Erro ao atualizar problema:', error);
      res.status(500).json({ error: 'Erro ao atualizar problema' });
    }
  },

  // Excluir uma problema por ID
  async excluir(req, res) {
    try {
      const problema = await Problema.findByPk(req.params.id);
      if (problema) {
        await problema.destroy();
        res.json({ message: 'Problema excluída com sucesso' });
      } else {
        res.status(404).json({ error: 'Problema não encontrada' });
      }
    } catch (error) {
      console.error('Erro ao excluir problema:', error);
      res.status(500).json({ error: 'Erro ao excluir problema' });
    }
  },

  // Rota para renderizar o formulário de cadastro de problema
  renderizarCadastro(req, res) {
    // Lógica para renderizar o formulário de cadastro de problema
    res.send('Formulário de Cadastro de Problema');
  },

  // Rota para cadastrar uma problema a partir do formulário
  cadastrar(req, res) {
    // Lógica para processar o formulário e cadastrar a problema
    res.send('Problema cadastrada com sucesso');
  },
};

module.exports = ProblemaController;
