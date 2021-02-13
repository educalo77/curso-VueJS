<template>
  <div>
    <ul>
      <li v-for="usuario in usuarios" v-bind:key="usuario.nombre">
        {{ usuario.nombre }}
      </li>
    </ul>
    <ListadoActivos></ListadoActivos>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListadoActivos from "./ListadoActivos";

export default {
  name: "Usuarios",
  computed: mapState(["usuarios"]),
  components: {
    ListadoActivos,
  },
};
</script>

<style></style>
