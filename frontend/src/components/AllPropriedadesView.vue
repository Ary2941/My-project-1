
<template>
  <div>
    <h2>Lista de Propriedades</h2>
    <ul>
      <li v-for="propriedade in propriedades" :key="propriedade.id">
        {{ propriedade.nome }}
      </li>
    </ul>
  </div>
</template>

<script>
// Importe o Axios
import axios from 'axios';

export default {
  data() {
    return {
      propriedades: [] // Armazenará os usuários obtidos da API
    };
  },
  mounted() {
    // Quando o componente for montado, faça uma solicitação à API
    this.carregarPropriedades();
  },
  methods: {
    
    carregarPropriedades() {
      // Faça uma solicitação GET para a API de usuários
      axios.get('http://localhost:3000/propriedades')
        .then(response => {
          // Atualize a variável de dados 'propriedades' com os dados recebidos
        
          this.propriedades = response.data;
        })
        
        .catch(error => {
          console.error('Erro ao carregar propriedades:', error);
        });
    }
  }
};
</script>

<style>
/* Estilos opcionais para o componente */
</style>
