import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    contador: 0,
    nombre: "Edu",
    edad: 43,
    users: null,
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
    aumentar: (state) => state.contador++,
    reducir: (state) => state.contador--,
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    obtenerusuarios(state) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((r) => (state.users = r.data));
    },
  },
  actions: {
    getusuarios(context) {
      context.commit("obtenerusuarios");
    },
  },
});
store.commit("increment");
store.commit("decrement");
