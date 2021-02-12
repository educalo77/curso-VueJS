<template>
  <div>
    <h1 style="color:red">
      <slot>
        Hola como andas?
      </slot>
    </h1>
    <hr />
    <h2>
      <slot name="slotdos">
        Hola desde el slot 2 slot
      </slot>
    </h2>
    <hr />
    <h3>
      <slot name="slottres">
        Hola desde el slot 3 por defecto
      </slot>
    </h3>
  </div>
</template>
<script>
export default {
  name: "Slot",
};
</script>

<style scoped></style>
