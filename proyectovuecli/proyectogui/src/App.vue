<template>
  <div id="app">
    <Persona nombre="Edu" edad="43"></Persona>
    <hr />
    <Persona nombre="Ami" edad="10"></Persona>
    <hr />
    <hr />
    <h1>Usuarios:</h1>
    <Usuarios
      v-for="usuario in usuarios"
      v-bind:key="usuario.id"
      :nombre="usuario.name"
      :email="usuario.email"
      :telefono="usuario.phone"
    >
    </Usuarios>
    <hr />
    <Slot>
      Hola desde el Slot
      <template slot="slotdos">
        Hola desde Slot 2
      </template>
    </Slot>
    <hr />
    <hr />
    <Padre></Padre>
    <hr />
    <hr />
    <Elemento tipo="h1">Texto de este elemento</Elemento>
    <Elemento tipo="h2">Texto de este elemento</Elemento>
    <Elemento tipo="h3">Texto de este elemento</Elemento>
  </div>
</template>

<script>
import Persona from "./components/Persona";
import axios from "axios";
import Usuarios from "./components/Usuarios";
import Slot from "./components/Slot";
import Padre from "./components/Padre";
import Elemento from "./components/Elemento";
export default {
  name: "App",
  components: {
    Persona,
    Usuarios,
    Slot,
    Padre,
    Elemento,
  },
  data() {
    return {
      usuarios: [],
    };
  },
  methods: {
    obtenerusuarios() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => (this.usuarios = res.data));
    },
  },
  mounted() {
    this.obtenerusuarios();
  },
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
</style>
