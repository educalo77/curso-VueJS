import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

Vue.directive("alerta", {
  //esto crea una directiva tipo v-show v-for etc en este caso v-alerta
  bind(el, binding) {
    el.style.color = "red";
    el.style.fontSize = binding.value + "px";
  },
});
Vue.directive("topfixed", {
  bind(el, binding) {
    // bind es un hook de vue
    console.log(el, binding);
    el.style.color = "blue";
    el.style.position = "fixed";
    if (binding.expression) {
      el.style.top = binding.expression + "%";
    }
    if (binding.arg) {
      let color = "red";
      let modificadores = Object.keys(binding.modifiers);
      if (modificadores.length > 0) {
        color = modificadores[0];
      }
      el.style.backgroundColor = color;
    }
  },
});

import { store } from "../src/store/store";

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
