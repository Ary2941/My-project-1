<!-- PropriedadeView.vue -->

<template>
    <div>
      <h2>Detalhes da Propriedade</h2>
  
      <div v-if="propriedade">
        <h3>Propriedade</h3>
        <p>ID: {{ propriedade.id }}</p>
        <p>Nome: {{ propriedade.nome }}</p>
        <p>Localização GPS: {{ propriedade.Localizacao_GPS }}</p>
        <p>Tamanho da Área: {{ propriedade.Tamanho_Area }}</p>
        <p>Tipo de Solo: {{ propriedade.Tipo_Solo }}</p>
        <p>Altitude: {{ propriedade.Altitude }}</p>
      </div>
  
      <div v-if="clima">
        <h3>Clima</h3>
        <p>Temperatura Média: {{ clima.temperatura_Media }}</p>
        <p>Precipitação Anual: {{ clima.precipitacao_Anual }}</p>
        <p>Umidade Relativa: {{ clima.umidade_Relativa }}</p>
        <p>Horas de Sol Diárias: {{ clima.horas_sol_diarias }}</p>
      </div>
  
      <div v-if="solo">
        <h3>Solo</h3>
        <p>pH do Solo: {{ solo.pH_Solo }}</p>
        <p>Nível de Nitrogênio: {{ solo.Nivel_Nitrogenio }}</p>
        <p>Nível de Fósforo: {{ solo.Nivel_Fosforo }}</p>
        <p>Nível de Potássio: {{ solo.Nivel_Potassio }}</p>
      </div>
  
      <div v-if="culturas.length > 0">
        <h3>Culturas</h3>
        <ul>
          <li v-for="cultura in culturas" :key="cultura.id" @click="verDetalhesCultura(cultura.id)">
            <p>Nome da Cultura: {{ cultura.nome_Cultura }}</p>

          </li>
        </ul>
      </div>

      <div v-if="problemas.length > 0">
        <h3>Problemas</h3>
        <ul>
          <li v-for="problema in problemas" :key="problema.id" @click="verDetalhesProblema(problema.id)">
            <p>{{ problema.descricao }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        propriedade: null,
        clima: null,
        solo: null,
        culturas: [],
        problemas: []

      };
    },
    mounted() {
      // Obtém o ID da propriedade da rota
      const propriedadeId = parseInt(this.$route.params.PropriedadeId);
      console.log(propriedadeId)
  
      // Faz solicitações para obter dados da propriedade, solo, clima e culturas
      this.carregarPropriedade(propriedadeId);
      this.carregarClima(propriedadeId);
      this.carregarSolo(propriedadeId);
      this.carregarCulturas(propriedadeId);
      this.carregarProblemas(propriedadeId);

    },
    methods: {
      carregarPropriedade(propriedadeId) {
        axios.get(`http://localhost:3000/propriedades/${propriedadeId}`)
          .then(response => {
            this.propriedade = response.data;
          })
          .catch(error => {
            console.error('Erro ao carregar propriedade:', error);
          });
      },
      carregarClima(propriedadeId) {
        axios.get(`http://localhost:3000/propriedades/${propriedadeId}/clima`)
          .then(response => {
            this.clima = response.data;
          })
          .catch(error => {
            console.error('Erro ao carregar clima:', error);
          });
      },
      carregarSolo(propriedadeId) {
        axios.get(`http://localhost:3000/propriedades/${propriedadeId}/solo`)
          .then(response => {
            this.solo = response.data;
          })
          .catch(error => {
            console.error('Erro ao carregar solo:', error);
          });
      },
      carregarCulturas(propriedadeId) {
        axios.get(`http://localhost:3000/propriedades/${propriedadeId}/culturas`)
          .then(response => {
            this.culturas = response.data;
          })
          .catch(error => {
            console.error('Erro ao carregar culturas:', error);
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

      verDetalhesProblema(problemaId) {
      // Navegar para a rota de detalhes da propriedade
      this.$router.push({ name: 'problema', params: { ProblemaId: problemaId } });
    },
    verDetalhesCultura(culturaId) {
      // Navegar para a rota de detalhes da propriedade
      this.$router.push({ name: 'cultura', params: { CulturaId: culturaId } });
    }
    }
  };
  </script>
  
  <style>
  /* Estilos opcionais para o componente */
  </style>
  