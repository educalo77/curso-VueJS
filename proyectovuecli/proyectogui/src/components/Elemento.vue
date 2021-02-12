<script>
export default {
  name: "Elemento",
  props: ["tipo"],
  render(createElement) {
    // sudo tee /etc/modprobe.d/rtl8723be.conf <<< "options rtl8723be ant_sel=2"
    return createElement(this.tipo, this.$slots.default); //se borro el template y siguen apareciendo los elementos
  },
};
</script>

<style scoped>
* {
  color: limegreen;
}
</style>
