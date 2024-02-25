// SolucaoController.js
const Solucao = require('../models/solucao');
const Problema = require('../models/Problema');
const Usuario = require('../models/Usuario');

const SolucaoController = {

  async self(req, res) {
    const { id } = req.params;
    try {
      const entidade = await Solucao.findByPk(id);
      if (!entidade) {
        return res.status(404).send('Solucao não encontrado');
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
        const solucoes = await Solucao.findAll();
        res.json(solucoes);
      } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
      }
    },
  
  // Listar todas as solucoes de um usuário
  async listarByProblemaId(req, res) {
    try {
      const problemaId = req.params.ProblemaId;
      const solucoes = await Solucao.findAll({ where: { ProblemaId: problemaId } });
      res.json(solucoes);
    } catch (error) {
      console.error('Erro ao obter solucoes:', error);
      res.status(500).json({ error: 'Erro ao obter solucoes' });
    }
  },

  // Criar uma nova solucao para uma problema
  async criar(req, res) {
    try {
      const problemaId = req.params.problemaId;
      const usuarioId = req.params.usuarioId;

      const { 
        diagnóstico, 
        acoes_recomendadas,
        monitoramentos,
        observacoes
      } = req.body;
      
      const problema = await Problema.findByPk(problemaId);
      const usuario = await Usuario.findByPk(usuarioId);


      if (problema && usuario) {
        const solucao = await Solucao.create({
          diagnóstico,
          acoes_recomendadas,
          monitoramentos,
          observacoes,
          ProblemaId: problemaId,
          UsuarioId: usuarioId,
        });

        res.json(solucao);
      } else {
        res.status(404).json({ error: 'Problema ou usuario não encontrada' });
      }
    } catch (error) {
      console.error('Erro ao criar solucao para o usuário:', error);
      res.status(500).json({ error: 'Erro ao criar solucao para o usuário' });
    }
  },
  // Atualizar uma solucao por ID
  async atualizar(req, res) {
    try {
      const { nome } = req.body;
      const solucao = await Solucao.findByPk(req.params.id);
      if (solucao) {
        solucao.nome = nome;
        await solucao.save();
        res.json(solucao);
      } else {
        res.status(404).json({ error: 'Solucao não encontrada' });
      }
    } catch (error) {
      console.error('Erro ao atualizar solucao:', error);
      res.status(500).json({ error: 'Erro ao atualizar solucao' });
    }
  },

  // Excluir uma solucao por ID
  async excluir(req, res) {
    try {
      const solucao = await Solucao.findByPk(req.params.id);
      if (solucao) {
        await solucao.destroy();
        res.json({ message: 'Solucao excluída com sucesso' });
      } else {
        res.status(404).json({ error: 'Solucao não encontrada' });
      }
    } catch (error) {
      console.error('Erro ao excluir solucao:', error);
      res.status(500).json({ error: 'Erro ao excluir solucao' });
    }
  },

  // Rota para renderizar o formulário de cadastro de solucao
  renderizarCadastro(req, res) {
    // Lógica para renderizar o formulário de cadastro de solucao
    res.send('Formulário de Cadastro de Solucao');
  },

  // Rota para cadastrar uma solucao a partir do formulário
  cadastrar(req, res) {
    // Lógica para processar o formulário e cadastrar a solucao
    res.send('Solucao cadastrada com sucesso');
  },
};

module.exports = SolucaoController;
