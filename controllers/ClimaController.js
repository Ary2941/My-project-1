// ClimaController.js
const Clima = require('../models/Clima');
const Propriedade = require('../models/Propriedade');


const ClimaController = {
  // Listar todas as Climas de um usuário
  async listar(req, res) {
    try {
      const propriedadeId = req.params.propriedadeId;
      const Climas = await Clima.findAll({ where: { propriedadeId: propriedadeId } });
      res.json(Climas);
    } catch (error) {
      console.error('Erro ao obter Climas:', error);
      res.status(500).json({ error: 'Erro ao obter Climas' });
    }
  },

  // Criar uma nova Clima para um usuário
  async criar(req, res) {
    console.log(req.params.propriedadeId);
    try {
      const propriedadeId = req.params.propriedadeId;
      const {
        temperatura_Media,
        precipitacao_Anual,
        umidade_Relativa,
        horas_sol_diarias} = req.body;
      
      const propriedade = await Propriedade.findByPk(propriedadeId);

      if (propriedade) {
        const novaclima = await Clima.create({
          temperatura_Media,
          precipitacao_Anual,
          umidade_Relativa,
          horas_sol_diarias,
          PropriedadeId: propriedadeId,
        });

        res.json(novaclima);
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao criar Clima para o usuário:', error);
      res.status(500).json({ error: 'Erro ao criar Clima para o usuário' });
    }
  },
  // Atualizar uma Clima por ID
  async atualizar(req, res) {
    try {
      const { nome } = req.body;
      const Clima = await Clima.findByPk(req.params.id);
      if (Clima) {
        Clima.nome_Clima = nome;
        await Clima.save();
        res.json(Clima);
      } else {
        res.status(404).json({ error: 'Clima não encontrada' });
      }
    } catch (error) {
      console.error('Erro ao atualizar Clima:', error);
      res.status(500).json({ error: 'Erro ao atualizar Clima' });
    }
  },

  // Excluir uma Clima por ID
  async excluir(req, res) {
    try {
      const Clima = await Clima.findByPk(req.params.id);
      if (Clima) {
        await Clima.destroy();
        res.json({ message: 'Clima excluída com sucesso' });
      } else {
        res.status(404).json({ error: 'Clima não encontrada' });
      }
    } catch (error) {
      console.error('Erro ao excluir Clima:', error);
      res.status(500).json({ error: 'Erro ao excluir Clima' });
    }
  },

  // Rota para renderizar o formulário de cadastro de Clima
  renderizarCadastro(req, res) {
    // Lógica para renderizar o formulário de cadastro de Clima
    res.send('Formulário de Cadastro de Clima');
  },

  // Rota para cadastrar uma Clima a partir do formulário
  cadastrar(req, res) {
    // Lógica para processar o formulário e cadastrar a Clima
    res.send('Clima cadastrada com sucesso');
  },
};

module.exports = ClimaController;
