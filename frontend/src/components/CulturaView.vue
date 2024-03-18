<!-- Cultura.vue -->

<template>
    <div class="entity-view-container">
      <h2>{{ cultura.nome }}</h2>
      <p>Ciclo de Crescimento: {{ cultura.ciclo_Crescimento }}</p>
      <p>Espaçamento entre Plantas: {{ cultura.espacamento_Entre_Plantas }}</p>
      <p>Profundidade de Plantio: {{ cultura.profundidade_Plantio }}</p>

    
      <div v-if="problemas.length > 0">
        <h3>Problemas</h3>
        <ul class="entity-list" id="problemas">
          <li v-for="problema in problemas" :key="problema.id" @click="verDetalhesProblema(problema.id)">
            <p>{{ problema.descricao }}</p>
          </li>
        </ul>
      </div>
    <button @click="NovoProblema(cultura.id)">novo problema</button>


    
    </div>
    <button @click="voltar">Voltar </button>

  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        cultura: {
          nome: null,
          ciclo_Crescimento: null,
          espacamento_Entre_Plantas: null,
          profundidade_Plantio: null
        },
        problemas: []
      };
    },
    mounted() {
  
      // Faz uma solicitação para obter dados da cultura
      this.carregarCultura()
      .then(() => {
        this.carregarProblemas(this.cultura.PropriedadeId);
      });


    },
    methods: {

      carregarCultura() {
      return new Promise((resolve, reject) => {

        axios.get(`http://localhost:3000/culturas/${parseInt(this.$route.params.CulturaId)}`)
          .then(response => {
            this.cultura = response.data;
            resolve();
          })
          .catch(error => {
            console.error('Erro ao carregar cultura:', error);
            reject(error);

          });

        
      });

    },

      carregarProblemas(propriedadeId) {
      axios.get(`http://localhost:3000/propriedades/${propriedadeId}/problemas`)
        .then(response => {
          this.problemas = response.data;
        })
        .catch(error => {
          console.error('Erro ao carregar culturas:', error);
        });
    },

      voltar(){
        this.$router.back();

      },
      NovoProblema(CulturaId) {
        this.$router.push({ name: 'novoProblema', params: {CulturaId } });
    },

    verDetalhesProblema(ProblemaId) {
        this.$router.push({ name: 'problema', params: { ProblemaId } });
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
    background-color: lightyellow;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h2, h3 {
    color: #333;
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
  