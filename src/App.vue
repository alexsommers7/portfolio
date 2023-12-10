<script setup>
  import { ref, provide, onMounted, onUnmounted, watch, nextTick } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import Nav from '@/components/layout/Nav.vue';
  import Sidebar from '@/components/layout/Sidebar.vue';
  import Footer from '@/components/layout/Footer.vue';

  const route = useRoute();
  const router = useRouter();

  const mainEl = ref(null);
  const onMobile = ref(false);

  provide('onMobile', onMobile);

  const observerTargets = ref([]);
  const observeSections = ref(true);
  const noScrollArrow = router.resolve(route).meta.noScrollArrow || false;

  const checkScreenSize = () => {
    onMobile.value = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 1200;
  };

  const updateTargets = () => {
    observeSections.value = true;
    observerTargets.value = [...mainEl.value.querySelectorAll('section.track')];
  };

  const fixCrappyScrollBehavior = () => {
    // safari scroll jump bug
    mainEl.value.scrollIntoView();
  };

  onMounted(() => {
    checkScreenSize();
    updateTargets();
    window.addEventListener('resize', checkScreenSize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkScreenSize);
  });

  watch(
    () => route.name,
    (to, from) => {
      if (to !== from && !route.hash) {
        fixCrappyScrollBehavior();
      }

      nextTick(() => {
        route.name === 'Home' ? updateTargets() : (observeSections.value = false);
      });
    }
  );
</script>

<template>
  <div>
    <Nav />

    <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
      <main id="main" ref="mainEl">
        <router-view></router-view>
      </main>
    </transition>

    <Sidebar
      :observerTargets="observerTargets"
      :observeSections="observeSections"
      :noScrollArrow="noScrollArrow"
    ></Sidebar>

    <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
      <Footer />
    </transition>
  </div>
</template>
