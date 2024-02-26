<template>
  <header>
    <h1>Meu Aplicativo</h1>
    <p v-if="isAuthenticated">Você está logado!</p>
    <p v-else>Você não está logado. Faça login para acessar recursos.</p>
    <button v-if="isAuthenticated" @click="voltarParaPerfil">Voltar para o Perfil</button>

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
      this.$router.push({ name: 'usuario', params: { UsuarioId: store.state.usuarioId } });
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
  color: #2c3e50;
  margin-top: 60px;
}

button {
  margin-top: 20px;
  padding: 10px 15px;
  cursor: pointer;
}
</style>
