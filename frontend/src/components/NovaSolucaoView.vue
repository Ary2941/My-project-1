<!-- CadastroSolucoes.vue -->

<template>
    <div class="cadastro-container">
      <h2>Cadastro de Soluções</h2>
      <form @submit.prevent="salvarSolucao"  class="cadastro-form">
        <div>
          <label for="diagnostico">Diagnóstico:</label>
          <textarea v-model="solucao.diagnóstico" required></textarea>
        </div>
  
        <div>
          <label for="acoes_recomendadas">Ações Recomendadas:</label>
          <textarea v-model="solucao.acoes_recomendadas" required></textarea>
        </div>
  
        <div>
          <label for="monitoramentos">Monitoramentos:</label>
          <textarea v-model="solucao.monitoramentos"></textarea>
        </div>
  
        <div>
          <label for="observacoes">Observações:</label>
          <textarea v-model="solucao.observacoes"></textarea>
        </div>
  
        <button type="submit">Salvar Solução</button>
      </form>
      <button  @click="voltar">voltar</button>

    </div>
  </template>
  
  <script>
    import axios from 'axios';
    import store from '../store.js';

  export default {
    data() {
      return {
        solucao: {
        diagnóstico: '',
        acoes_recomendadas: '',
        monitoramentos: '',
        observacoes: '',
        ProblemaId: parseInt(this.$route.params.ProblemaId),
        UsuarioId: store.state.usuarioId
        }
      };
    },
    methods: {
      salvarSolucao() {
        console.log(this.solucao);
        axios.post('http://localhost:3000/solucoes/', this.solucao)
           .then(response => {
            console.log(response.status)
            if (response.status === 200) {
                alert('solucao cadastrado com sucesso!');
                this.solucao = {
                diagnóstico:'',
                acoes_recomendadas:'',
                monitoramentos:'',
                observacoes:'',
                }
                
            }
            else{
                console.error('Erro ao cadastrar solucao:', response.status);
            }
           })
           .catch(error => {
                console.error('Erro ao cadastrar solucao:', error);
           });
      },
      voltar(){
        this.$router.back();
      }
    }
  };
  </script>
  
  <style>  
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
  textarea {
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