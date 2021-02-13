<template>
  <dir>
    <ul>
      <li v-for="user in users" v-bind:key="user.id">
        {{ user.name }} / {{ user.email }}
      </li>
    </ul>
  </dir>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapState(["users"]),
  },
  methods: {
    ...mapActions(["getusuarios"]),
  },
  mounted() {
    this.getusuarios();
  },
};
</script>

<style></style>
