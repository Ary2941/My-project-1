// SoloController.js
const Solo = require('../models/solo');
const Propriedade = require('../models/Propriedade');


const SoloController = {
  
  async self(req, res) {
    const { id } = req.params;
    try {
      const entidade = await Solo.findByPk(id);
      if (!entidade) {
        return res.status(404).send('Solo não encontrado');
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
        const solo = await Solo.findAll();
        res.json(solo);
      } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
      }
    },
    


  // Listar todas as Solos de um usuário
  async listarbyPropriedadeId(req, res) {
    try {
      const propriedadeId = req.params.PropriedadeId;
      const Solos = await Solo.findOne({ where: { PropriedadeId: propriedadeId } });
      res.json(Solos);
    } catch (error) {
      console.error('Erro ao obter Solos:', error);
      res.status(500).json({ error: 'Erro ao obter Solos' });
    }
  },

  // Criar uma nova Solo para um usuário
  async criar(req, res) {
    try {
      const {
        pH_Solo,
        Nivel_Nitrogenio,
        Nivel_Fosforo,
        Profundidade_Plantio,
        Nivel_Potassio,
        PropriedadeId} = req.body;
      
      const propriedade = await Propriedade.findByPk(PropriedadeId);

      if (propriedade) {
        const novasolo = await Solo.create({
          pH_Solo,
          Nivel_Nitrogenio,
          Nivel_Fosforo,
          Profundidade_Plantio,
          Nivel_Potassio,
          PropriedadeId: PropriedadeId,
        });

        res.json(novasolo);
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao criar Solo para o usuário:', error);
      res.status(500).json({ error: 'Erro ao criar Solo para o usuário' });
    }
  },
  // Atualizar uma Solo por ID
  async atualizar(req, res) {
    try {
      const { nome } = req.body;
      const Solo = await Solo.findByPk(req.params.id);
      if (Solo) {
        Solo.nome_Solo = nome;
        await Solo.save();
        res.json(Solo);
      } else {
        res.status(404).json({ error: 'Solo não encontrada' });
      }
    } catch (error) {
      console.error('Erro ao atualizar Solo:', error);
      res.status(500).json({ error: 'Erro ao atualizar Solo' });
    }
  },

  // Excluir uma Solo por ID
  async excluir(req, res) {
    try {
      const Solo = await Solo.findByPk(req.params.id);
      if (Solo) {
        await Solo.destroy();
        res.json({ message: 'Solo excluída com sucesso' });
      } else {
        res.status(404).json({ error: 'Solo não encontrada' });
      }
    } catch (error) {
      console.error('Erro ao excluir Solo:', error);
      res.status(500).json({ error: 'Erro ao excluir Solo' });
    }
  },

  // Rota para renderizar o formulário de cadastro de Solo
  renderizarCadastro(req, res) {
    // Lógica para renderizar o formulário de cadastro de Solo
    res.send('Formulário de Cadastro de Solo');
  },

  // Rota para cadastrar uma Solo a partir do formulário
  cadastrar(req, res) {
    // Lógica para processar o formulário e cadastrar a Solo
    res.send('Solo cadastrada com sucesso');
  },
};

module.exports = SoloController;
