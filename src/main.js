import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Homepage from "./views/Home.vue";
import Projects from "./views/ProjectShowcase.vue";
import formSuccess from "./views/FormSuccess";
import formFailure from "./views/FormFailure";

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
    { path: "/thanks", name: "Thanks!", component: formSuccess, meta: { NoLoadIn: true, noScrollArrow: true } },
    { path: "/error", name: "", component: formFailure, meta: { NoLoadIn: true, noScrollArrow: true } },
    { path: "*", name: "", component: Homepage, meta: { NoLoadIn: true, noScrollArrow: false } },
  ],
  scrollBehavior() {
    // workaround - vue router scrollBehavior was being inconsistent
    document.getElementById("app").scrollIntoView();
  },
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
