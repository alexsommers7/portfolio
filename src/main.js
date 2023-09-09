import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Homepage from './views/Home.vue';
import Projects from './views/ProjectShowcase.vue';
import formSuccess from './views/FormSuccess.vue';
import formFailure from './views/FormFailure.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: '/', name: 'Home', component: Homepage, meta: { noScrollArrow: false } },
    {
      path: '/project-showcase',
      name: 'Projects',
      component: Projects,
      meta: { noScrollArrow: true },
    },
    { path: '/thanks', name: 'Thanks!', component: formSuccess, meta: { noScrollArrow: true } },
    { path: '/error', name: '', component: formFailure, meta: { noScrollArrow: true } },
    { path: '*', name: '', component: Homepage, meta: { noScrollArrow: false } },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
  mode: 'history',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
