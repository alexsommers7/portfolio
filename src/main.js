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
      meta: {
        NoLoadIn: false,
        noScrollArrow: false,
        scrollPos: {
          top: 0,
          left: 0,
        },
      },
    },
    {
      path: "/project-showcase",
      name: "Projects",
      component: Projects,
      meta: {
        NoLoadIn: true,
        noScrollArrow: true,
        scrollPos: {
          top: 0,
          left: 0,
        },
      },
    },
    { path: "/thanks", name: "Thanks!", component: formSuccess, meta: { NoLoadIn: true, noScrollArrow: true } },
    { path: "/error", name: "", component: formFailure, meta: { NoLoadIn: true, noScrollArrow: true } },
    { path: "*", name: "", component: Homepage, meta: { NoLoadIn: true, noScrollArrow: false } },
  ],
  scrollBehavior(to, from, savedPosition) {
    // scroll to top if on same route
    if (to.name === from.name) {
      to.meta?.scrollPos && (to.meta.scrollPos.top = 0);
      return { left: 0, top: 0 };
    }
    const scrollpos = savedPosition || to.meta?.scrollPos || { left: 0, top: 0 };
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(scrollpos);
      }, 600); // transition just before 600ms
    });
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
