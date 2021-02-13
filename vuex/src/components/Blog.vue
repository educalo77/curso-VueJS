<template>
  <div>
    <h1>Blog</h1>
    <button @click="volverInicio">Volver a inicio</button>
  </div>
</template>

<script>
export default {
  name: "Blog",
  methods: {
    volverInicio() {
      this.$router.push("/inicio", () => console.log("has vuelto")); //el 2do y 3er parametro son opcionales //onCOmplete y onAbort
    },
  },
};
</script>

<style></style>
