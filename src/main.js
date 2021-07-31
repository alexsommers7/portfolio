import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Homepage from "./components/home/Homepage.vue";
import Projects from "./components/projects/ProjectShowcasePage.vue";
import formSuccess from "./components/form_submit/success";
import formFailure from "./components/form_submit/failure";
import pageNotFound from "./components/common/404";

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
    { path: "/thanks", name: "success", component: formSuccess, meta: { NoLoadIn: true, NoScrollArrow: true } },
    { path: "/404", name: "fail", component: formFailure, meta: { NoLoadIn: true, NoScrollArrow: true } },
    { path: "*", component: pageNotFound, meta: { NoLoadIn: true, NoScrollArrow: true } },
  ],
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
