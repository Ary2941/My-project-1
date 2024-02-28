<!-- PropriedadeView.vue -->

<template>
  <div class="entity-view-container">
    <h2>Detalhes da Propriedade</h2>

    <div v-if="propriedade">
      <h3>{{ propriedade.nome }}</h3>
      <div v-if="proprietário">
      <p>proprietário: {{ proprietário.nome }} ({{ proprietário.email }})</p>
      </div>
      <p>Localização GPS: {{ propriedade.Localizacao_GPS }}</p>
      <p>Tamanho da Área: {{ propriedade.Tamanho_Area }}</p>
      <p>Tipo de Solo: {{ propriedade.Tipo_Solo }}</p>
      <p>Altitude: {{ propriedade.Altitude }}</p>
    </div>



    <div class="data-container">
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

    </div>

    <div v-if="culturas.length > 0">
      <h3>Culturas</h3>
      <ul class="entity-list" id="culturas">
        <li v-for="cultura in culturas" :key="cultura.id" @click="verDetalhesCultura(cultura.id)">
          <p>{{ cultura.nome }}</p>

        </li>
      </ul>
    </div>
    <button @click="NovaCultura(propriedade.id)">nova cultura</button>

    <div v-if="problemas.length > 0">
      <h3>Problemas</h3>
      <ul class="entity-list" id="problemas">
        <li v-for="problema in problemas" :key="problema.id" @click="verDetalhesProblema(problema.id)">
          <p>{{ problema.descricao }}</p>
        </li>
      </ul>
    </div>

  </div>

  <button @click="voltar">Voltar </button>
</template>
  
<script>
import axios from 'axios';
export default {
  data() {
    return {
      propriedade: null,
      proprietário: null,
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
    this.carregarPropriedade(propriedadeId)
      .then(() => {
        this.carregarProprietário(this.propriedade.UsuarioId);
        console.log(this.proprietário);
      });

    this.carregarClima(propriedadeId);
    this.carregarSolo(propriedadeId);
    this.carregarCulturas(propriedadeId);
    this.carregarProblemas(propriedadeId);

  },


  methods: {
    carregarPropriedade(propriedadeId) {
      return new Promise((resolve, reject) => {

        axios.get(`http://localhost:3000/propriedades/${propriedadeId}`)
          .then(response => {
            this.propriedade = response.data;
            resolve(); 
          })
          .catch(error => {
            console.error('Erro ao carregar propriedade:', error);
          reject(error);

          });
      });
    },

    carregarProprietário(propriedadeId) {
      axios.get(`http://localhost:3000/usuarios/${propriedadeId}`)
        .then(response => {
          this.proprietário = response.data;
          console.log(this.proprietário);
        })
        .catch(error => {
          console.error('Erro ao carregar proprietário:', error);
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
    },
    voltar() {
      this.$router.back();
    },

    NovaCultura(propriedadeId) {
      this.$router.push({ name: 'novaCultura', params: { PropriedadeId: propriedadeId } });
    },


  }
};
</script>
  
<style scoped>
.data-container {
  display: flex;
  justify-content: space-between;
}

.entity-view-container {
  background-color: lightblue;

  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2,
h3 {
  color: #333;
}

.entity-list,
.entity-list {
  list-style: none;
  padding: 0;
}

.entity-list li {
  cursor: pointer;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  transition: background-color 0.3s;
}

.entity-list li:hover {
  background-color: #e0e0e0;
}


#culturas li  {
  background-color: rgb(202, 202, 177);
}

#culturas button  {
  background-color: rgb(202, 202, 177);
}

#culturas li:hover {
  background-color: lightyellow;
}


#problemas li {
  background-color: rgb(219, 159, 168);
}

#problemas li:hover {
  background-color: lightpink;
}
</style>
  