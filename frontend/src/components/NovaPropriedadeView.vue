<!-- CadastroEntidade.vue -->

<template>
    <div class="cadastro-container">
        <h2>Cadastro de Propriedade</h2>
        <form @submit.prevent="salvarPropriedade" class="cadastro-form">

            <div>
                <div class="cadastro-form">
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" v-model="propriedade.nome" required>

                    <label for="Localizacao_GPS">Localizacao GPS:</label>
                    <input type="text" id="Localizacao_GPS" v-model="propriedade.Localizacao_GPS" required>

                    <label for="Tamanho_Area">Tamanho da área:</label>
                    <input type="number" id="Tamanho_Area" v-model="propriedade.Tamanho_Area" required>

                    <label for="Tipo_Solo">Tipo do solo:</label>
                    <input type="text" id="Tipo_Solo" v-model="propriedade.Tipo_Solo" required>

                    <label for="Altitude">Altitude:</label>
                    <input type="number" id="Altitude" v-model="propriedade.Altitude" required>
                </div>

                <div class="cadastro-form">
                    <label for="temperatura_Media">Temperatura média:</label>
                    <input type="number" id="Altitude" v-model="clima.temperatura_Media" required>

                    <label for="precipitacao_Anual">Precipitação anual:</label>
                    <input type="number" id="Altitude" v-model="clima.precipitacao_Anual" required>

                    <label for="umidade_Relativa">Umidade relativa:</label>
                    <input type="number" id="Altitude" v-model="clima.umidade_Relativa" required>

                    <label for="horas_sol_diarias">Horas de sol diárias:</label>
                    <input type="number" id="Altitude" v-model="clima.horas_sol_diarias" required>

                </div>

                <div class="cadastro-form">
                    <label for="pH_Solo">pH do solo:</label>
                    <input type="number" id="Altitude" v-model="solo.pH_Solo" required>

                    <label for="Nivel_Nitrogenio">Nivel de nitrogênio do solo:</label>
                    <input type="number" id="Altitude" v-model="solo.Nivel_Nitrogenio" required>

                    <label for="Profundidade_Plantio">Profundidade do plantio:</label>
                    <input type="number" id="Profundidade_Plantio" v-model="solo.Profundidade_Plantio" required>

                    <label for="Nivel_Fosforo">Nivel fosforo do solo:</label>
                    <input type="number" id="Nivel_Fosforo" v-model="solo.Nivel_Fosforo" required>

                    <label for="Nivel_Potassio">Nivel de potassio do solo:</label>
                    <input type="number" id="Nivel_Potassio" v-model="solo.Nivel_Potassio" required>


                </div>
                <button type="submit">Cadastrar</button>

            </div>

        </form>
        <button @click="voltar">Voltar</button>
    </div>
</template>
  
<script>

import axios from 'axios';
import store from '../store.js';


export default {
    data() {
        return {
            propriedade: {
                nome: '',
                Localizacao_GPS: '',
                Tamanho_Area: 0,
                Tipo_Solo: '',
                Altitude: 0,
                UsuarioId: store.state.usuarioId

            },
            clima: {
                temperatura_Media: 0,
                precipitacao_Anual: 0,
                umidade_Relativa: 0,
                horas_sol_diarias: 0,
                PropriedadeId: null
            },
            solo: {
                pH_Solo: 0,
                Nivel_Nitrogenio: 0,
                Nivel_Fosforo: 0,
                Profundidade_Plantio:0,
                Nivel_Potassio: 0,
                PropriedadeId: null
            }
        };
    },
    mounted() {
    },
    methods: {
        voltar() {
            this.$router.back();
        },

        cadastrarPropriedade() {
            return new Promise((resolve, reject) => {

                axios.post('http://localhost:3000/propriedades', this.propriedade)
                    .then(response => {
                        if (response.status === 200) {
                            this.clima.PropriedadeId = response.data.id;
                            this.solo.PropriedadeId = response.data.id;
                            this.propriedade = {
                                nome: null,
                                Localizacao_GPS: null,
                                Tamanho_Area: null,
                                Tipo_Solo: null,
                                Altitude: null
                            };
                            resolve();

                        } else {
                            console.error('Erro ao cadastrar propriedade:', response.status);
                            reject(response.status);

                        }
                    })
                    .catch(error => {
                        console.error('Erro ao cadastrar propriedade:', error);
                        reject(error);

                    });
            });

        },

        cadastrarClima() {
            axios.post('http://localhost:3000/climas', this.clima)
                .then(response => {
                    if (response.status === 200) {
                        // Limpar os campos após o cadastro (opcional)
                        this.clima = {
                            temperatura_Media: null,
                            precipitacao_Anual: null,
                            umidade_Relativa: null,
                            horas_sol_diarias: null,
                            PropriedadeId: null
                        };


                    } else {
                        console.error('Erro ao cadastrar clima:', response.status);
                    }
                })
                .catch(error => {
                    console.error('Erro ao cadastrar clima:', error);

                });
        },

        cadastrarSolo() {
            axios.post('http://localhost:3000/solos', this.solo)
                .then(response => {
                    if (response.status === 200) {
                        // Limpar os campos após o cadastro (opcional)
                        this.solo = {
                            pH_Solo: null,
                            Nivel_Nitrogenio: null,
                            Nivel_Fosforo: null,
                            Nivel_Potassio: null,
                            PropriedadeId: null
                        };

                    } else {
                        console.error('Erro ao cadastrar solos:', response.status);
                    }
                })
                .catch(error => {
                    console.error('Erro ao cadastrar solos:', error);

                });
        },


        salvarPropriedade() {
            this.cadastrarPropriedade(this.propriedade.UsuarioId).then(() => {
                this.cadastrarClima();
                this.cadastrarSolo();
                alert('propriedade cadastrada com sucesso!');

        });
        },

    },
};
</script>
  
  
<style scoped>
.data-container {
    display: flex;
    justify-content: space-between;
}

.entity-view-container {
    background-color: lightblue;

    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2,
h3 {
    color: #333;
}

.entity-list,
.entity-list {
    list-style: none;
    padding: 0;
}

.entity-list li {
    cursor: pointer;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
    transition: background-color 0.3s;
}

.entity-list li:hover {
    background-color: #e0e0e0;
}


#culturas li {
    background-color: rgb(202, 202, 177);
}

#culturas li:hover {
    background-color: lightyellow;
}


#problemas li {
    background-color: rgb(219, 159, 168);
}

#problemas li:hover {
    background-color: lightpink;
}
</style>
  