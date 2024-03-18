<!-- Cadastro.vue -->

<template>
    <div class="cadastro-container">
        <h2>Cadastro de Problema</h2>
        <form @submit.prevent="cadastrarProblema" class="cadastro-form">
            <label for="descricao">Descrição:</label>
            <input type="text" id="descricao" v-model="problema.descricao" required>

            <label for="observacoes">Observações:</label>
            <input type="text" id="observacoes" v-model="problema.observacoes" required>

            <button type="submit">Cadastrar</button>
        </form>
        <button @click="Voltar">voltar</button>

    </div>
</template>
  
<script>
import axios from 'axios';


export default {
    data() {
        return {
            problema: {
                descricao: null,
                observacoes: null,
                CulturaId: parseInt(this.$route.params.CulturaId),
                PropriedadeId: null
            },
        };
    },
    methods: {


        step1() {
            return new Promise((resolve, reject) => {
                console.log(this.problema.CulturaId)
                axios.get(`http://localhost:3000/culturas/${this.problema.CulturaId}`)
                    .then(response => {
                        if (response.status === 200) {
                            console.log(response.data,"x");
                            this.problema.PropriedadeId = response.data.PropriedadeId;
                            resolve();

                        } else {
                            console.error('Erro ao obter cultura!:', response.status);
                            reject(response.status);

                        }
                    })
                    .catch(error => {
                        console.error('Erro ao obter cultura:', error);
                        reject(error);

                    });
            });

        },

        step2() {
            console.log(this.problema);
            axios.post('http://localhost:3000/problemas', this.problema)
                .then(response => {
                    if (response.status === 200) {
                        // Limpar os campos após o cadastro (opcional)
                        this.problema = {
                            descricao: null,
                            observacoes: null,
                        };


                    } else {
                        console.error('Erro ao cadastrar problema!:', response.status);
                    }
                })
                .catch(error => {
                    console.error('Erro ao cadastrar problema:', error);

                });
        },


        cadastrarProblema() {
            this.step1().then(() => {
            this.step2();
            alert('Caso aberto com sucesso! aguarde por soluções');
            this.$router.back();

        });
        },

        Voltar() {
            this.$router.back();
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