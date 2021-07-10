import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Homepage from "./components/home/Homepage.vue";
import Projects from "./components/projects/ProjectShowcasePage.vue";
import Success from "./components/success/SuccessPage.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: "/", component: Homepage, meta: { NoLoadIn: false, NoScrollArrow: false } },
    {
      path: "/project-showcase",
      name: "Projects",
      component: Projects,
      meta: { NoLoadIn: true, NoScrollArrow: true },
    },
    { path: "/success", component: Success, meta: { NoLoadIn: true, NoScrollArrow: true } },
  ],
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
