// ProblemaController.js
const Problema = require('../models/Problema');
const Propriedade = require('../models/Propriedade');
const Cultura = require('../models/Cultura');

const ProblemaController = {

  async self(req, res) {
    const { id } = req.params;
    try {
      const entidade = await Problema.findByPk(id);
      if (!entidade) {
        return res.status(404).send('Problema não encontrado');
      }
      res.json(entidade);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  },

  // Listar todas as Culturas de um usuário
  async listar(req, res) {
    try {
      const problemas = await Problema.findAll();
      res.json(problemas);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  },

  async listarbyPropriedadeId(req, res) {
    try {
      const PropriedadeId = req.params.PropriedadeId;
      const problemas = await Problema.findAll({ where: { PropriedadeId: PropriedadeId } });
      res.json(problemas);
    } catch (error) {
      console.error('Erro ao obter problemas:', error);
      res.status(500).json({ error: 'Erro ao obter problemas' });
    }
  },

  async listarbyCulturaId(req, res) {
    try {
      const CulturaId = req.params.CulturaId;
      const culturas = await Problema.findAll({ where: { CulturaId: CulturaId } });
      res.json(culturas);
    } catch (error) {
      console.error('Erro ao obter problemas:', error);
      res.status(500).json({ error: 'Erro ao obter problemas' });
    }
  },

  async criar(req, res) {
    try {
      const PropriedadeId = req.body.PropriedadeId;
      const CulturaId = req.body.CulturaId;

      const { 
        descricao, 
        observacoes
      } = req.body;
      
      const propriedade = await Propriedade.findByPk(PropriedadeId);
      const cultura = await Cultura.findByPk(CulturaId);


      if (propriedade && cultura) {
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
