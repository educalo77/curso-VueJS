import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    nombre: "Edu",
    edad: 43,
    usuarios: [
      {
        nombre: "Edu",
        edad: 43,
        activo: false,
      },
      {
        nombre: "Ami",
        edad: 10,
        activo: true,
      },
      {
        nombre: "Azu",
        edad: 7,
        activo: true,
      },
      {
        nombre: "Joan",
        edad: 78,
        activo: false,
      },
      {
        nombre: "Miguel",
        edad: 83,
        activo: false,
      },
      {
        nombre: "Cari",
        edad: 48,
        activo: false,
      },
    ],
  },
  getters: {
    listadoactivos: (state) => {
      return state.usuarios.filter((usuario) => usuario.activo).length;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
});
store.commit("increment");
store.commit("decrement");
