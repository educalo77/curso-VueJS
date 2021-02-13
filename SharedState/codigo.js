const persona = {
  nombre: "Edu",
};

const app = new Vue({
  el: "#main",
  data: {
    persona: {
      nombre: persona,
    },
  },
});

const app2 = new Vue({
  el: "#main2",
  data: {
    persona: {
      nombre: persona,
    },
  },
});
