import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Homepage from "./views/Home.vue";
import Projects from "./views/ProjectShowcase.vue";
import formSuccess from "./views/FormSuccess";
import formFailure from "./views/FormFailure";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Homepage,
      meta: { NoLoadIn: false, noScrollArrow: false, scrollToTop: true },
    },
    {
      path: "/project-showcase",
      name: "Projects",
      component: Projects,
      meta: { NoLoadIn: true, noScrollArrow: true, scrollToTop: true },
    },
    { path: "/thanks", name: "Thanks!", component: formSuccess, meta: { NoLoadIn: true, noScrollArrow: true } },
    { path: "/error", name: "", component: formFailure, meta: { NoLoadIn: true, noScrollArrow: true } },
    { path: "*", name: "", component: Homepage, meta: { NoLoadIn: true, noScrollArrow: false } },
  ],
  scrollBehavior: (to, from, savedPosition) =>
    new Promise((resolve) => {
      const position = savedPosition || {};
      if (!savedPosition) {
        if (to.hash) {
          position.selector = to.hash;
        }
        if (to.matched.some((m) => m.meta.scrollToTop)) {
          position.x = 0;
          position.y = 0;
        }
      }
      router.app.$root.$once("triggerScroll", () => {
        router.app.$nextTick(() => resolve(position));
      });
    }),
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
