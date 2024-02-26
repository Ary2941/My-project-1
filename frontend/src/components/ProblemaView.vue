<!-- Problema.vue -->

<template>
    <div>
      <h2>Detalhes do Problema</h2>
      <p>Descrição do Problema: {{ problema.descricao }}</p>
      <p>Observações: {{ problema.observacoes }}</p>
  
      <h3>Soluções</h3>
      <div v-if="solucoes.length > 0">
        <div v-for="solucao in solucoes" :key="solucao.id" @click="verDetalhesSolucao(solucao.id)">
          <p>Diagnóstico: {{ solucao.diagnóstico }}</p>
        </div>
      </div>
      <p v-else>Nenhuma solução associada a este problema.</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        problema: {},
        solucoes: []
      };
    },
    mounted() {
      // Obtém o ID do problema da rota
      const problemaId = this.$route.params.ProblemaId;
  
      // Faz solicitações para obter dados do problema e suas soluções
      this.carregarProblema(problemaId);
      this.carregarSolucoes(problemaId);
    },
    methods: {
      carregarProblema(problemaId) {
        axios.get(`http://localhost:3000/problemas/${problemaId}`)
          .then(response => {
            this.problema = response.data;
          })
          .catch(error => {
            console.error('Erro ao carregar problema:', error);
          });
      },
      carregarSolucoes(problemaId) {
        axios.get(`http://localhost:3000/problemas/${problemaId}/Solucoes`)
          .then(response => {
            this.solucoes = response.data;
          })
          .catch(error => {
            console.error('Erro ao carregar soluções do problema:', error);
          });
      },
      verDetalhesSolucao(solucaoId) {
      // Navegar para a rota de detalhes da propriedade
      this.$router.push({ name: 'solucao', params: { SolucaoId: solucaoId } });
    }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos opcionais para o componente */
  </style>
  