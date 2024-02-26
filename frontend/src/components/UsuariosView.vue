<!-- Usuarios.vue -->

<template>
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        <li v-for="usuario in usuarios" :key="usuario.id">
          {{ usuario.nome }}
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
        usuarios: [] // Armazenará os usuários obtidos da API
      };
    },
    mounted() {
      // Quando o componente for montado, faça uma solicitação à API
      this.carregarUsuarios();
    },
    methods: {
      
      carregarUsuarios() {
        // Faça uma solicitação GET para a API de usuários
        axios.get('http://localhost:3000/usuarios')
          .then(response => {
            // Atualize a variável de dados 'usuarios' com os dados recebidos
            this.usuarios = response.data;
          })
          .catch(error => {
            console.error('Erro ao carregar usuários:', error);
          });
      }
    }
  };
  </script>
  
  <style>
  /* Estilos opcionais para o componente */
  </style>
  