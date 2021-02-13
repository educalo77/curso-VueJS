<template>
  <div id="app">
    <h1>Ejemplo de vuex basico</h1>
    <Contador></Contador>
    <LeerStore></LeerStore>
    <hr />
    <h1>Ejemplo de Vuex MapState</h1>
    <p>Mi nombre viene del estado global y es {{ this.$store.state.nombre }}</p>
    <p>
      Mi nombre viene del mapState y es {{ nombre }} y mi edad es de {{ edad }}
    </p>
    <hr />
    <hr />
    <h1>Ejemplo de Vuex Getters</h1>
    <Usuarios></Usuarios>
    <hr />
    <hr />
    <h1>Vuex Mutations</h1>
    <Counter></Counter>
    <hr />
    <hr />
    <h1>Action Vuex</h1>
    <Home></Home>
    <hr />
    <hr />
    <h1>6 pasos para aprender a trabajar con rutas en VUE</h1>
    <router-link active-class="activo" tag="li" exact to="/inicio"
      >Inicio</router-link
    >
    <router-link active-class="activo" exact to="/blog">Blog</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Contador from "./components/Contador";
import LeerStore from "./components/LeerStore";
import Usuarios from "./components/Usuarios";
import Counter from "./components/Counter";
import Home from "./components/Home";
export default {
  name: "App",
  components: {
    Contador,
    LeerStore,
    Usuarios,
    Counter,
    Home,
  },
  computed: mapState(["nombre", "edad"]),
  /**   
  computed: mapState({
    nombre: (state) => state.nombre,
    edad: (state) => state.edad, 
  }),*/
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.activo {
  text-decoration: none;
  color: orange;
}
a {
  text-decoration: none;
  color: black;
}
</style>
