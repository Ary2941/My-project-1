<!-- Cadastro.vue -->

<template>
    <div>
      <h2>Cadastro de Usuário</h2>
      <form @submit.prevent="cadastrarUsuario">
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
    },
  };
  </script>
  
  <style scoped>
  /* Adicione estilos conforme necessário */
  </style>
  