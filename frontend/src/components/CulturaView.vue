<!-- Cultura.vue -->

<template>
    <div>
      <h2>Detalhes da Cultura</h2>
      <p>Nome da Cultura: {{ cultura.nome_Cultura }}</p>
      <p>Ciclo de Crescimento: {{ cultura.ciclo_Crescimento }}</p>
      <p>Espaçamento entre Plantas: {{ cultura.espacamento_Entre_Plantas }}</p>
      <p>Profundidade de Plantio: {{ cultura.profundidade_Plantio }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        cultura: {}
      };
    },
    mounted() {
      // Obtém o ID da cultura da rota
      const culturaId = this.$route.params.CulturaId;
  
      // Faz uma solicitação para obter dados da cultura
      this.carregarCultura(culturaId);
    },
    methods: {
      carregarCultura(culturaId) {
        axios.get(`http://localhost:3000/culturas/${culturaId}`)
          .then(response => {
            this.cultura = response.data;
          })
          .catch(error => {
            console.error('Erro ao carregar cultura:', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos opcionais para o componente */
  </style>
  