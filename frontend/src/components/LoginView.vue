<!-- Login.vue -->

<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login" class="login-form">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>

      <label for="senha">Senha:</label>
      <input type="password" id="senha" v-model="senha" required>

      <button type="submit">Entrar</button>
    </form>
    <button  @click="irParaCadastro">quero me cadastrar</button>
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
                router.push({ name: 'perfil', params: {  } });
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

    methods: {
      irParaCadastro(){
        this.$router.push({ name: 'cadastro' });
      }
      
    },
  };
</script>

<style scoped>
/* Estilos para o componente Login.vue */

.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.login-form {
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