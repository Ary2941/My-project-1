// CulturaController.js
const Cultura = require('../models/cultura');
const Propriedade = require('../models/Propriedade');


const CulturaController = {

  async self(req, res) {
    const { id } = req.params;
    try {
      const entidade = await Cultura.findByPk(id);
      if (!entidade) {
        return res.status(404).send('Cultura não encontrada');
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
      const culturas = await Cultura.findAll();
      res.json(culturas);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  },

  async listarByPropriedadeId(req, res) {
    try {
      const propriedadeId = req.params.PropriedadeId;
      const Culturas = await Cultura.findAll({ where: { PropriedadeId: propriedadeId } });
      res.json(Culturas);
    } catch (error) {
      console.error('Erro ao obter Culturas:', error);
      res.status(500).json({ error: 'Erro ao obter Culturas' });
    }
  },

  // Criar uma nova Cultura para um usuário
  async criar(req, res) {
    try {
      const {
        nome,
        ciclo_Crescimento,
        espacamento_Entre_Plantas,
        profundidade_Plantio,
        PropriedadeId} = req.body;
      
      const propriedade = await Propriedade.findByPk(PropriedadeId);

      if (propriedade) {
        const novacultura = await Cultura.create({
          nome,
          ciclo_Crescimento,
          espacamento_Entre_Plantas,
          profundidade_Plantio,
          PropriedadeId: PropriedadeId,
        });

        res.json(novacultura);
      } else {
        res.status(404).json({ error: 'propriedade não encontrada!' });
      }
    } catch (error) {
      console.error('Erro ao criar Cultura para o usuário:', error);
      res.status(500).json({ error: 'Erro ao criar Cultura para o usuário' });
    }
  },
  // Atualizar uma Cultura por ID
  async atualizar(req, res) {
    try {
      const { nome } = req.body;
      const Cultura = await Cultura.findByPk(req.params.id);
      if (Cultura) {
        Cultura.nome = nome;
        await Cultura.save();
        res.json(Cultura);
      } else {
        res.status(404).json({ error: 'Cultura não encontrada' });
      }
    } catch (error) {
      console.error('Erro ao atualizar Cultura:', error);
      res.status(500).json({ error: 'Erro ao atualizar Cultura' });
    }
  },

  // Excluir uma Cultura por ID
  async excluir(req, res) {
    try {
      const Cultura = await Cultura.findByPk(req.params.id);
      if (Cultura) {
        await Cultura.destroy();
        res.json({ message: 'Cultura excluída com sucesso' });
      } else {
        res.status(404).json({ error: 'Cultura não encontrada' });
      }
    } catch (error) {
      console.error('Erro ao excluir Cultura:', error);
      res.status(500).json({ error: 'Erro ao excluir Cultura' });
    }
  },

  // Rota para renderizar o formulário de cadastro de Cultura
  renderizarCadastro(req, res) {
    // Lógica para renderizar o formulário de cadastro de Cultura
    res.send('Formulário de Cadastro de Cultura');
  },

  // Rota para cadastrar uma Cultura a partir do formulário
  cadastrar(req, res) {
    // Lógica para processar o formulário e cadastrar a Cultura
    res.send('Cultura cadastrada com sucesso');
  },
};

module.exports = CulturaController;
