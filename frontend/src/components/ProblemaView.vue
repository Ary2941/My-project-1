<!-- Problema.vue -->

<template>
  <div class="entity-view-container">
    <h3>Detalhes do Problema</h3>
    <h2>{{ problema.descricao }}</h2>
    <p>Observações: {{ problema.observacoes }}</p>
    <div>

    </div>
    <h3 v-if="solucoes.length > 0">Soluções</h3>
    <h3 v-else>Nenhuma solução ainda...</h3>

    <div>
      <ul  class="entity-list">

        <li v-for="solucao in solucoes" :key="solucao.id" @click="verDetalhesSolucao(solucao.id)">
          <p> {{ solucao.diagnóstico }}</p>
        </li>
      </ul>
      <button v-if="tecnico" @click="NovaSolucao(problema.id)">sugerir solucao</button>
    </div>

  </div>
  <button @click="voltar">Voltar </button>
</template>
  
<script>
import axios from 'axios';
import store from '../store.js';


export default {
  data() {
    return {
      problema: {},
      solucoes: [],
      tecnico: null
    };
  },
  mounted() {
    // Obtém o ID do problema da rota
    const problemaId = this.$route.params.ProblemaId;
    this.tecnico = store.state.isTechnician;

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
    },
    NovaSolucao(problemaId) {
      // Navegar para a rota de detalhes da propriedade
      this.$router.push({ name: 'novaSolucao', params: { ProblemaId: problemaId } });
    },
    voltar() {
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
  background-color: lightpink;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
}

h3 {
    display: flex;
    margin: 0; /* Remover margens padrão */
    font-size: 24px; /* Tamanho da fonte */
    margin-right: auto; /* Mover para a direita */
  }

.entity-list,
.entity-list {
  list-style: none;
  padding: 0;
}

.entity-list li,
.entity-list li {
  cursor: pointer;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: rgb(119, 199, 119);
  transition: background-color 0.3s;
}

.entity-list li:hover,
.entity-list li:hover {
  background-color: lightgreen;
}
</style>
  