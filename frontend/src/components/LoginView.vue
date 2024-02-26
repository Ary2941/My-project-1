<!-- Login.vue -->

<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
  
        <label for="senha">Senha:</label>
        <input type="password" id="senha" v-model="senha" required>
  
        <button type="submit">Entrar</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  import store from'../store.js';
  import router from'../router.js';

  
  export default {
    setup() {
      const email = ref('');
      const senha = ref('');
  
      const login = () => {
        axios.get(`http://localhost:3000/usuarios/email/${email.value}`)
          .then(response => {
            const usuario = response.data;
  
            if (usuario) {
              if (usuario.senha === senha.value) {
                // Define o estado de autenticação como verdadeiro no Vuex
                store.commit('setAuthentication', true);
                console.log(usuario);
                store.commit('setUsuarioId', usuario.id);

  
                // Redireciona para a página de usuários após o login bem-sucedido
                router.push({ name: 'usuario', params: { UsuarioId: usuario.id } });
              } else {
                console.error('Credenciais inválidas. Por favor, tente novamente.');
              }
            } else {
              console.error('Usuário não encontrado. Por favor, verifique o email.');
            }
          })
          .catch(error => {
            console.error('Erro ao verificar credenciais:', error);
          });
      };
  
      return { email, senha, login };
    },
  };
  </script>
  
  <style scoped>
  /* Estilos opcionais para o componente */
  </style>
  