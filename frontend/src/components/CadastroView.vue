<!-- Cadastro.vue -->

<template>
    <div class="cadastro-container">
      <h2>Cadastro de Usuário</h2>
      <form @submit.prevent="cadastrarUsuario" class="cadastro-form">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="usuario.nome" required>
  
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="usuario.email" required>
  
        <label for="senha">Senha:</label>
        <input type="password" id="senha" v-model="usuario.senha" required>
  
        <label for="confirmaSenha">Confirme a Senha:</label>
        <input type="password" id="confirmaSenha" v-model="confirmaSenha" required>
  
        <button type="submit">Cadastrar</button>
      </form>
      <button  @click="voltarParaLogin">logar em conta já existente</button>

    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import router from'../router.js';

  
  export default {
    data() {
      return {
        usuario: {
          nome: '',
          email: '',
          senha: ''
        },
        confirmaSenha: '',
      };
    },
    methods: {
      cadastrarUsuario() {
        if (this.usuario.senha !== this.confirmaSenha) {
          alert('A senha e a confirmação de senha não coincidem.');
          return;
        }
        axios.post('http://localhost:3000/usuarios/', this.usuario)
          .then(response => {
            if (response.status === 200) {
              alert('Usuário cadastrado com sucesso!');
              // Limpar os campos após o cadastro (opcional)
              this.usuario = {
                nome: '',
                email: '',
                senha: '',
              };
              this.confirmaSenha = '';
              router.push({ name: 'login'});
            } else {
              console.error('Erro ao cadastrar usuário:', response.status);
            }
          })
          .catch(error => {
            console.error('Erro ao cadastrar usuário:', error);
          });
      },

      voltarParaLogin(){
        this.$router.push({ name: 'login' });
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