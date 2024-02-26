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




const routes = [
  // Outras rotas podem estar aqui...


  { path: '/propriedades', component: Principal },

  {
    path: '/propriedades/:PropriedadeId',
    name: 'propriedade',
    component: Propriedade
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
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
