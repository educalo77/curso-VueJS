<template>
  <div>
    <h2>Soy el componente hijo</h2>
    <button @click="emitirEvento">
      Cerrar Hijo
    </button>
  </div>
</template>
<script>
export default {
  name: "HijoPadre",
  methods: {
    emitirEvento() {
      this.$emit("cerrar");
    },
  },
};
</script>

<style scoped></style>
