<!-- CadastroSolucoes.vue -->

<template>
    <div>
      <h2>Cadastro de Soluções</h2>
      <form @submit.prevent="salvarSolucao">
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
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente, se necessário */
  </style>
  