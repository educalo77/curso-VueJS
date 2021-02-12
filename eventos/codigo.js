const app = new Vue({
  el: "#main",
  data: {
    tarea: null,
    tareas: ["Aprender Vue", "Aprender Angular", "Aprender Typescript"],
  },
  methods: {
    agregarTarea() {
      this.tareas.unshift(this.tarea);
    },
  },
});
