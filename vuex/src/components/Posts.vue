<template>
  <div>
    <h1>Estas en posts</h1>
    <p>{{ id }}</p>
  </div>
</template>

<script>
export default {
  name: "Posts",
  data() {
    const { id } = this.$route.params;
    return {
      id,
    };
  },
  watch: {
    $route(to) {
      // se usa to y for
      this.id = to.params.id;
    },
  },
};
</script>

<style></style>
