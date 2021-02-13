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
};
</script>

<style></style>
