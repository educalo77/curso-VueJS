<template>
  <div>
    <h1 v-alerta="50">Blog</h1>
    <!-- aqui le sumamos una directiva que creamos. cambia color del font y el size -->
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
