<!-- Solucoes.vue -->

<template>
    <div>
      <h2>Detalhes da Solução</h2>
      <div v-if="solucao">
        <h3>Solução</h3>
        <p>Diagnóstico: {{ solucao.diagnostico }}</p>
        <p>Ações Recomendadas: {{ solucao.acoes_recomendadas }}</p>
        <p>Monitoramentos: {{ solucao.monitoramentos }}</p>
        <p>Observações: {{ solucao.observacoes }}</p>
      </div>
  
      <h3>Usuário que Sugeriu a Solução</h3>
      <div v-if="usuario">
        <p>Nome: {{ usuario.nome }}</p>
        <p>Email: {{ usuario.email }}</p>
      </div>
      <p v-else>Nenhum usuário associado a esta solução.</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
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
  
      // Faz solicitações para obter dados da solução e do usuário associado
      this.carregarSolucao(solucaoId);
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
        axios.get(`http://localhost:3000/usuarios/${usuarioId}`)
          .then(response => {
            this.usuario = response.data;
          })
          .catch(error => {
            console.error('Erro ao carregar usuário associado à solução:', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos opcionais para o componente */
  </style>
  