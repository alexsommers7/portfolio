import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Homepage from "./components/home/Homepage.vue";
import Projects from "./components/projects/ProjectShowcasePage.vue";
import formSubmit from "./components/form_submit/LandingPage.vue";

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
    { path: "/submit", component: formSubmit, meta: { NoLoadIn: true, NoScrollArrow: true } },
  ],
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
