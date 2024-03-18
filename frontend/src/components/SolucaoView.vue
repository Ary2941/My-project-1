<!-- Solucoes.vue -->

<template>
    <div class="entity-view-container">
      <h3>Detalhes da Solução</h3>
      <div v-if="solucao">
        <h2>{{ solucao.diagnóstico }}</h2>
        <p>Ações Recomendadas: {{ solucao.acoes_recomendadas }}</p>
        <p>Monitoramentos: {{ solucao.monitoramentos }}</p>
        <p>Observações: {{ solucao.observacoes }}</p>      
      </div>
      <div v-if="usuario">
        <p>Sugerido por: {{ usuario.email }}</p>
      </div>
      <p v-else>Nenhum usuário associado a esta solução.</p>
    </div>

    <button @click="voltar">Voltar </button>

  </template>
  
  <script>
  import axios from 'axios';
  import store from '../store.js';

  
  export default {
    data() {
      return {
        solucao: {},
        usuario: null
      };
    },
    mounted() {
      // Obtém o ID da solução da rota
      const solucaoId = this.$route.params.SolucaoId;
      this.usuario = store.state.usuarioId;
  
      // Faz solicitações para obter dados da solução e do usuário associado
      this.carregarSolucao(solucaoId);
      this.carregarUsuario(this.usuario)
    },
    methods: {
      carregarSolucao(solucaoId) {
        axios.get(`http://localhost:3000/solucoes/${solucaoId}`)
          .then(response => {
            this.solucao = response.data;
  
            // Carrega o usuário associado à solução
            this.carregarUsuario(this.solucao.UsuarioId);
          })
          .catch(error => {
            console.error('Erro ao carregar solução:', error);
          });
      },
      carregarUsuario(usuarioId) {
        axios.get(`http://localhost:3000/tecnicos/${usuarioId}`)
          .then(response => {
            this.usuario = response.data;
          })
          .catch(error => {
            console.error('Erro ao carregar usuário associado à solução:', error);
          });
      },
      voltar(){
        this.$router.back();
      }
    }
  };
  </script>
  
  <style scoped>
  .data-container {
  display: flex;
  justify-content: space-between;
}

  .entity-view-container {
    background-color: lightgreen;

    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h2{
    color: #333;
  }
  
  h3 {
    display: flex;
    margin: 0; /* Remover margens padrão */
    font-size: 24px; /* Tamanho da fonte */
    margin-right: auto; /* Mover para a direita */
  }
  
  .entity-list, .entity-list {
    list-style: none;
    padding: 0;
  }
  
  .entity-list li, .entity-list li {
    cursor: pointer;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
    transition: background-color 0.3s;
  }
  
  .entity-list li:hover, .entity-list li:hover {
    background-color: #e0e0e0;
  }
  </style>
  