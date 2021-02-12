const puente = new Vue({
  data: {
    datogenerico: "Es un string compartido",
  },
});

const app = new Vue({
  el: "#main",
  data: {
    titulo: "Instancia #1",
    dato: 35,
    datogenerico: puente.datogenerico,
  },
});

const app2 = new Vue({
  el: "#app2",
  data: {
    titulo: "Instancia #2",
    dato: 45,
    datogenerico: puente.datogenerico,
  },
});
