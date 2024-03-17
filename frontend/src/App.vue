<template>
  <header>
    <h3>Meu Aplicativo</h3>
    <p v-if="isAuthenticated">Você está logado!</p>
    <p v-else>Você não está logado. Faça login para acessar recursos. <button @click="Logar">logar</button>
</p>
    <button v-if="isAuthenticated" @click="voltarParaPerfil">Perfil</button>
    <button v-if="isAuthenticated" @click="Deslogar">Sair</button>


  </header>

  <main>
    <div id="app">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import store from './store';

export default {
  name: 'App',
  computed: {
    isAuthenticated() {
      return store.state.isAuthenticated;
    },
  },
  methods: {
    voltarParaPerfil() {
      // Volta para a rota de perfil do usuário
      this.$router.push({ name: 'perfil', params: { UsuarioId: store.state.usuarioId } });
    },

    Logar() {
      // Volta para a rota de perfil do usuário
      this.$router.push({ name: 'login', params: { } });
    },

    Deslogar() {
      // Volta para a rota de perfil do usuário
      store.commit('setAuthentication', false);
      store.commit('setUsuarioId', NaN);
      this.$router.push({ name: 'login', params: { } });
    },
  },
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
  /* Estilos para o cabeçalho */
  header {
    display: flex; /* Usar flexbox */
    justify-content: space-between; /* Alinhar elementos à esquerda e à direita */
    align-items: center; /* Centralizar verticalmente os itens */
    background-color: #3b5998; /* Cor de fundo do Facebook */
    color: #fff; /* Cor do texto */
    padding: 20px; /* Espaçamento interno */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave */
  }

  /* Estilos para o título */
  h3 {
    margin: 0; /* Remover margens padrão */
    font-size: 24px; /* Tamanho da fonte */
    margin-right: auto; /* Mover para a direita */
  }

  /* Estilos para os parágrafos */
  p {
    margin: 10px 0; /* Margem superior e inferior */
    font-size: 16px; /* Tamanho da fonte */
  }

  /* Estilos para o botão */
  button {
    background-color: #4c69ba; /* Cor de fundo do botão */
    color: #fff; /* Cor do texto do botão */
    border: none; /* Remover borda */
    padding: 10px 20px; /* Espaçamento interno do botão */
    margin: 5px;
    border-radius: 5px; /* Bordas arredondadas */
    cursor: pointer; /* Mostrar cursor ao passar por cima */
  }

  /* Estilos para o botão quando hover */
  button:hover {
    background-color: #5b7bd5; /* Alterar cor de fundo no hover */
  }
</style>