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

import { store } from "../src/store/store";

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
