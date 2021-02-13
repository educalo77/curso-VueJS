<template>
  <div>
    <h1>Los activos son:</h1>
    <p>{{ listadoactivos }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ListadoActivos",
  computed: mapGetters(["listadoactivos"]),
};
</script>

<style></style>
