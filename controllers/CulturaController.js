// CulturaController.js
const Cultura = require('../models/Cultura');
const Propriedade = require('../models/Propriedade');


const CulturaController = {
  // Listar todas as Culturas de um usuário
  async listar(req, res) {
    try {
      const propriedadeId = req.params.propriedadeId;
      const Culturas = await Cultura.findAll({ where: { propriedadeId: propriedadeId } });
      res.json(Culturas);
    } catch (error) {
      console.error('Erro ao obter Culturas:', error);
      res.status(500).json({ error: 'Erro ao obter Culturas' });
    }
  },

  // Criar uma nova Cultura para um usuário
  async criar(req, res) {
    try {
      const propriedadeId = req.params.propriedadeId;
      const {nome_Cultura,ciclo_Crescimento,espacamento_Entre_Plantas,profundidade_Plantio} = req.body;
      
      const propriedade = await Propriedade.findByPk(propriedadeId);

      if (propriedade) {
        const cultura = await Cultura.create({
          nome_Cultura,
          ciclo_Crescimento,
          espacamento_Entre_Plantas,
          profundidade_Plantio,
          propriedadeId: propriedadeId,
        });

        res.json(cultura);
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
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
        Cultura.nome_Cultura = nome;
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
