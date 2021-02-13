<template>
  <div>
    <p>{{ contador }}</p>
    <button @click="aumentar">Aumentar</button>
    <button @click="reducir">Reducir</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Counter",
  computed: mapState(["contador"]),
  methods: {
    aumentar() {
      // this.$store.state.contador++;
      this.$store.commit("aumentar");
    },
    reducir() {
      // this.$store.state.contador--;
      this.$store.commit("reducir");
    },
  },
};
</script>

<style></style>
