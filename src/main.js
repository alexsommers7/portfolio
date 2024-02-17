import { ref, createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import Homepage from '@/views/Home.vue';
import Projects from '@/views/ProjectShowcase.vue';
import formSuccess from '@/views/FormSuccess.vue';
import formFailure from '@/views/FormFailure.vue';
import icon from '@/components/Icon.vue';

const app = createApp(App);
app.component('Icon', icon);

const onMobile = ref(false);
app.provide('onMobile', onMobile);

const checkScreenSize = () => {
  onMobile.value = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 1200;
};
checkScreenSize();

window.addEventListener('resize', checkScreenSize);

window.addEventListener('unload', () => {
  window.removeEventListener('resize', checkScreenSize);
});

const router = createRouter({
  routes: [
    { path: '/', name: 'Home', component: Homepage, meta: { scrollArrow: true } },
    {
      path: '/project-showcase',
      name: 'Projects',
      component: Projects,
      meta: { scrollArrow: false },
    },
    { path: '/thanks', name: 'Thanks!', component: formSuccess, meta: { scrollArrow: false } },
    { path: '/error', name: '', component: formFailure, meta: { scrollArrow: false } },
    { path: '/:pathMatch(.*)*', name: '', component: Homepage, meta: { scrollArrow: true } },
  ],
  scrollBehavior(to, _, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, top: onMobile.value ? 75 : 0 };
    }
    return { left: 0, top: 0 };
  },
  history: createWebHistory(),
});

app.use(router);

app.mount('#app');
