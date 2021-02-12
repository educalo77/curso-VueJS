<template>
  <div id="app">
    <Persona nombre="Edu" edad="43"></Persona>
    <hr />
    <Persona nombre="Ami" edad="10"></Persona>
  </div>
</template>

<script>
import Persona from "./components/Persona";

export default {
  name: "App",
  components: {
    Persona,
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
