// router.js

import { createRouter, createWebHistory } from 'vue-router';

import Propriedade from './components/PropriedadeView.vue';
import Usuario from './components/UsuarioView.vue';
import Principal from './components/AllPropriedadesView.vue';
import Cultura from './components/CulturaView.vue';
import Problema from './components/ProblemaView.vue';
import Solucao from './components/SolucaoView.vue';
import Login from './components/LoginView.vue';
import Cadastro from './components/CadastroView.vue';
import NovaSolucao from './components/NovaSolucaoView.vue';
import NovaPropriedade from  './components/NovaPropriedadeView.vue';
import NovaCultura from  './components/NovaCulturaView.vue';
import NovoProblema from  './components/NovoProblemaView.vue';
import profile from  './components/PerfilView.vue';
import LoginX from  './components/LoginTecnico.vue';


const routes = [
  // Outras rotas podem estar aqui...
  {
    path: '/',
    redirect: '/perfil',
  },

  { path: '/propriedades', component: Principal },

  {
    path: '/propriedades/:PropriedadeId',
    name: 'propriedade',
    component: Propriedade
  },

  {
    path: '/perfil',
    name: 'perfil',
    component: profile
  },

  {
    path: '/usuarios/:UsuarioId',
    name: 'usuario',
    component: Usuario
  },

  {
    path: '/culturas/:CulturaId',
    name: 'cultura',
    component: Cultura
  },

  {
    path: '/problemas/:ProblemaId',
    name: 'problema',
    component: Problema
  },

  {
    path: '/solucoes/:SolucaoId',
    name: 'solucao',
    component: Solucao
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
  },

  {
    path: '/loginX',
    name: 'loginX',
    component: LoginX,
  },

  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro,
  },

  {
    path: '/novaSolucao/:ProblemaId',
    name: 'novaSolucao',
    component: NovaSolucao,
  },


  {
    path: '/novaPropriedade',
    name: 'novaPropriedade',
    component: NovaPropriedade,
  },

  {
    path: '/novaCultura/:PropriedadeId',
    name: 'novaCultura',
    component: NovaCultura,
  },

  {
    path: '/novoProblema/:CulturaId',
    name: 'novoProblema',
    component: NovoProblema,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
