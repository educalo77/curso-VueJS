const app = new Vue({
  el: "#main",
  data: {
    tarea: null,
    tareas: [
      { titulo: "Titulo de la tarea 1", completado: false },
      { titulo: "Titulo de la tarea 2", completado: true },
      { titulo: "Titulo de la tarea 3", completado: false },
      { titulo: "Titulo de la tarea 4", completado: true },
      { titulo: "Titulo de la tarea 5", completado: false },
      { titulo: "Titulo de la tarea 6", completado: false },
    ],
  },
  methods: {
    agregarTarea() {
      this.tareas.unshift({ titulo: this.tarea, completado: false });
    },
  },
  computed: {
    mostrarCompletadas() {
      return this.tareas.filter((item) => item.completado);
    },
  },
});
