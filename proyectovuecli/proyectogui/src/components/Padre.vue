<template>
  <div>
    <button @click="mostrar = true">Mostrar componente Hijo</button>
    <HijoPadre @cerrar="mostrar = false" v-show="mostrar"></HijoPadre>
  </div>
</template>
<script>
import HijoPadre from "./HijoPadre";
export default {
  name: "Padre",
  components: {
    HijoPadre,
  },
  data() {
    return {
      mostrar: false,
    };
  },
};
</script>

<style scoped></style>
