import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Homepage from "./components/Home.vue";
import Projects from "./components/ProjectShowcase.vue";
import formSuccess from "./components/FormSuccess";
import formFailure from "./components/FormFailure";
import pageNotFound from "./components/The404";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: "/", name: "Home", component: Homepage, meta: { NoLoadIn: false, noScrollArrow: false } },
    {
      path: "/project-showcase",
      name: "Projects",
      component: Projects,
      meta: { NoLoadIn: true, noScrollArrow: true },
    },
    { path: "/thanks", name: "thanks!", component: formSuccess, meta: { NoLoadIn: true, noScrollArrow: true } },
    { path: "/404", name: "", component: formFailure, meta: { NoLoadIn: true, noScrollArrow: true } },
    { path: "*", component: pageNotFound, meta: { NoLoadIn: true, noScrollArrow: true } },
  ],
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
