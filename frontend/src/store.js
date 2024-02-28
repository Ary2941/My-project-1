// src/store/index.js

import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthenticated: false, // Variável que indica se o usuário está logado
    usuarioId: NaN,
  },
  mutations: {
    setAuthentication(state, status) {
      state.isAuthenticated = status;
    },
    setUsuarioId(state, valueId) {
      state.usuarioId = valueId;
    },
    
  },
  actions:{
    AOBA() {
      console.log("AOBAAA");
    }
  }
});