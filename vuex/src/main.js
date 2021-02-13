import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

import { store } from "../src/store/store";

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
