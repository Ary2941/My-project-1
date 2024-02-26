<!-- Usuario.vue -->

<template>
    <div>
      <h2>Detalhes do Usuário</h2>
      <p>ID: {{ usuario.id }}</p>
      <p>Nome: {{ usuario.nome }}</p>
      <p>Email: {{ usuario.email }}</p>
  
      <h3>Propriedades do Usuário</h3>
      <ul v-if="propriedades.length > 0">
        <li v-for="propriedade in propriedades" :key="propriedade.id" @click="verDetalhesPropriedade(propriedade.id)">
          {{ propriedade.nome }}
        </li>
      </ul>
      <p v-else>Nenhuma propriedade associada a este usuário.</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        usuario: {},
        propriedades: []
      };
    },
    mounted() {
      // Obtém o ID do usuário da rota
      const usuarioId = this.$route.params.UsuarioId;
  
      // Faz solicitações para obter dados do usuário e suas propriedades
      this.carregarUsuario(usuarioId);
      this.carregarPropriedades(usuarioId);
    },
    methods: {
      carregarUsuario(usuarioId) {
        axios.get(`http://localhost:3000/usuarios/${usuarioId}`)
          .then(response => {
            this.usuario = response.data;
          })
          .catch(error => {
            console.error('Erro ao carregar usuário:', error);
          });
      },
      carregarPropriedades(usuarioId) {
        axios.get(`http://localhost:3000/usuarios/${usuarioId}/propriedades`)
          .then(response => {
            this.propriedades = response.data;
          })
          .catch(error => {
            console.error('Erro ao carregar propriedades do usuário:', error);
          });
      },
      verDetalhesPropriedade(propriedadeId) {
      // Navegar para a rota de detalhes da propriedade
      this.$router.push({ name: 'propriedade', params: { PropriedadeId: propriedadeId } });
    }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos opcionais para o componente */
  </style>
  