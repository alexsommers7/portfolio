<script setup>
  import { ref, provide, onMounted, onBeforeUnmount } from 'vue';
  import Nav from '@/components/layout/Nav.vue';
  import Sidebar from '@/components/layout/Sidebar.vue';
  import Footer from '@/components/layout/Footer.vue';
  import useScrollTracker from '@/composables/useScrollTracker.js';

  const mainEl = ref(null);
  const scrollTracker = useScrollTracker(mainEl);

  const onMobile = ref(false);
  provide('onMobile', onMobile);

  const checkScreenSize = () => {
    onMobile.value = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 1200;
  };

  onMounted(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkScreenSize);
  });
</script>

<template>
  <Nav />

  <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
    <main id="main" ref="mainEl">
      <RouterView />
    </main>
  </transition>

  <Sidebar v-bind="scrollTracker" />

  <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
    <Footer />
  </transition>
</template>
