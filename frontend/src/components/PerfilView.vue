<!-- Usuario.vue -->

<template>
    <div class="entity-view-container">
      <h3>Perfil</h3>

      <h2>{{ usuario.nome }}</h2>
      <p>Email: {{ usuario.email }}</p>
  
      <div v-if="!tecnico">
        <h3>Propriedades do Usuário</h3>
      <ul v-if="propriedades.length > 0" class="culturas-list">
        <li v-for="propriedade in propriedades" :key="propriedade.id" @click="verDetalhesPropriedade(propriedade.id)">
          {{ propriedade.nome }}
        </li>
      </ul>
      <p v-else>Nenhuma propriedade associada a este usuário.</p>
      <button @click="NovaPropriedade">Nova propriedade</button>
      </div>

      <div v-if="tecnico">
        <h3>Problemas</h3>
      <ul v-if="propriedades.length > 0" class="culturas-list">
        <li v-for="propriedade in propriedades" :key="propriedade.id" @click="verDetalhesProblema(propriedade.id)">
          {{ propriedade.descricao }}
        </li>
      </ul>
      <p v-else>Nenhum problema até agora.</p>
      </div>
      
  
    </div>
  </template>
    
  <script>
  import axios from 'axios';
  import store from'../store.js';

  
  export default {
    data() {
      return {
        usuario: {},
        propriedades: [],
        tecnico: false,
      };
    },
    mounted() {
      // Obtém o ID do usuário da rota
      const usuarioId = store.state.usuarioId;
      this.tecnico = store.state.isTechnician;
  
      // Faz solicitações para obter dados do usuário e suas propriedades
      if (store.state.isTechnician){
        this.carregarTecnico(usuarioId);
        this.carregarProblemas(usuarioId);

      } else {
        this.carregarUsuario(usuarioId);
        this.carregarPropriedades(usuarioId);
      }

    },
    methods: {

      carregarTecnico(usuarioId) {
        axios.get(`http://localhost:3000/tecnicos/${usuarioId}`)
          .then(response => {
            this.usuario = response.data;
          })
          .catch(error => {
            console.error('Erro ao carregar técnico:', error);
          });
      },
      
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

      carregarProblemas() {
        axios.get(`http://localhost:3000/problemas`)
          .then(response => {
            this.propriedades = response.data;
          })
          .catch(error => {
            console.error('Erro ao carregar problemas:', error);
          });
      },

      verDetalhesPropriedade(propriedadeId) {
        // Navegar para a rota de detalhes da propriedade
        this.$router.push({ name: 'propriedade', params: { PropriedadeId: propriedadeId } });
      },

      verDetalhesProblema(propriedadeId) {
        // Navegar para a rota de detalhes da propriedade
        this.$router.push({ name: 'problema', params: { ProblemaId: propriedadeId } });
      },

      NovaPropriedade() {
        // Navegar para a rota de detalhes da propriedade
        this.$router.push({ name: 'novaPropriedade' });
      }
    }
  };
  </script>
    
  <style scoped>
  /* Estilos para o componente PropriedadeView.vue */
  
  .data-container {
    display: flex;
    justify-content: space-between;
  }
  
  .entity-view-container {
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
  .culturas-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Cria colunas automáticas de tamanho mínimo de 200px */
      grid-gap: 20px; /* Espaçamento entre os itens */
      list-style-type: none; /* Remover marcadores de lista */
      padding: 0; /* Remover preenchimento padrão */
    }
  
    .culturas-list li {
      background-color: #f0f0f0; /* Cor de fundo dos itens */
      padding: 10px; /* Espaçamento interno dos itens */
      border-radius: 5px; /* Bordas arredondadas */
      cursor: pointer; /* Mostrar cursor ao passar por cima */
    }
  
    .culturas-list li:hover {
      background-color: #e0e0e0; /* Alterar cor de fundo no hover */
    }
  </style>
    