<!-- Cadastro.vue -->

<template>
    <div class="cadastro-container">
      <h2>Cadastro de Cultura</h2>
      <form @submit.prevent="cadastrarCultura" class="cadastro-form">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="cultura.nome" required>
  
        <label for="ciclo_Crescimento">Ciclo de crescimento:</label>
        <input type="number" id="ciclo_Crescimento" v-model="cultura.ciclo_Crescimento" required>
  
        <label for="espacamento_Entre_Plantas">Espacamento entre as plantas:</label>
        <input type="number" id="espacamento_Entre_Plantas" v-model="cultura.espacamento_Entre_Plantas" required>
  
        <label for="profundidade_Plantio">Profundidade de plantio:</label>
        <input type="number" id="profundidade_Plantio" v-model="cultura.profundidade_Plantio" required>
  
        <button type="submit">Cadastrar</button>
      </form>
      <button  @click="Voltar">voltar</button>

    </div>
  </template>
  
  <script>
  import axios from 'axios';

  
  export default {
    data() {
      return {
        cultura: {
        nome:null,
        ciclo_Crescimento: null,
        espacamento_Entre_Plantas: null,
        profundidade_Plantio: null,
        PropriedadeId: parseInt(this.$route.params.PropriedadeId)
        },
      };
    },
    methods: {
        cadastrarCultura() {
          console.log(this.cultura);


        axios.post('http://localhost:3000/culturas/', this.cultura)
          .then(response => {
            if (response.status === 200) {
              alert('cultura cadastrada com sucesso!');
              this.cultura = {
                nome:null,
                ciclo_Crescimento: null,
                espacamento_Entre_Plantas: null,
                profundidade_Plantio: null,
                PropriedadeId: null
              };
              this.$router.back();
            } else {
              console.error('Erro ao cadastrar cultura!:', response.status);
            }
          })
          .catch(error => {
            console.error('Erro ao cadastrar cultura:', error);
          });
      },

      Voltar(){
        this.$router.back();
      }
      
    },
  };
  </script>
  
  <style scoped>

.cadastro-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cadastro-form {
  display: grid;
  gap: 10px;
}

label {
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #45a049;
}
</style>  