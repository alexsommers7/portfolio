<script setup>
  useHead({
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Alex Sommers | Full-Stack Javascript Developer',
    meta: [
      {
        name: 'description',
        content: 'Alex Sommers - Full-stack Javascript Developer based out of Greater Cleveland.',
      },
      {
        name: 'keywords',
        content:
          'Alex Sommers, Full-stack Developer, Javascript Developer, Cleveland Developer, Cleveland Freelance Developer',
      },
      {
        name: 'author',
        content: 'Alex Sommers',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
      },
      {
        name: 'og:title',
        content: 'Alex Sommers | Full-Stack Javascript Developer',
      },
      {
        name: 'og:description',
        content: 'Alex Sommers - Full-stack Javascript Developer based out of Greater Cleveland.',
      },
      {
        name: 'og:image',
        content: '/images/hero.webp',
      },
      {
        name: 'og:url',
        content: 'https://alexsommers.com',
      },
      {
        name: 'og:type',
        content: 'website',
      },
      {
        name: 'og:site_name',
        content: 'Alex Sommers',
      },
      {
        name: 'og:locale',
        content: 'en_US',
      },
      {
        name: 'og:image:width',
        content: '1200',
      },
      {
        name: 'og:image:height',
        content: '630',
      },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }],
  });

  const mainEl = ref(null);
  const scrollTracker = useScrollTracker(mainEl);

  const onMobile = ref(false);
  provide('onMobile', onMobile);

  const route = useRoute();

  onMounted(() => {
    if (route.hash) {
      const el = document.getElementById(route.hash.slice(1));
      if (el) {
        el.scrollIntoView();
      }
    }

    const checkScreenSize = () => {
      onMobile.value =
        Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 1200;
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkScreenSize);
  });
</script>

<template>
  <Nav />

  <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
    <main id="main" ref="mainEl">
      <NuxtPage />
    </main>
  </transition>

  <Sidebar v-bind="scrollTracker" />

  <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
    <Footer />
  </transition>
</template>
