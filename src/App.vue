<script setup>
  import { ref } from 'vue';
  import Nav from '@/components/layout/Nav.vue';
  import Sidebar from '@/components/layout/Sidebar.vue';
  import Footer from '@/components/layout/Footer.vue';
  import useScrollTracker from '@/composables/useScrollTracker.js';

  const mainEl = ref(null);
  const scrollTracker = useScrollTracker(mainEl);
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
