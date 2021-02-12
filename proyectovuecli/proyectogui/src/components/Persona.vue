<template>
  <div>
    <p>EL nombre es: {{ nombre }}</p>
    <p>La edad es: {{ edad }}</p>
    <Hijo :nombre="nombre" :edad="edad"></Hijo>
  </div>
</template>
<script>
import Hijo from "./Hijo";

export default {
  name: "Persona",
  props: ["nombre", "edad"],
  components: {
    Hijo,
  },
};
</script>

<style scoped></style>
