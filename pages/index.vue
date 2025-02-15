<script setup>
  definePageMeta({ scrollArrow: true });
</script>

<template>
  <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
    <div>
      <Hero />
      <About />
      <ProjectsOverview />
      <Resume />
      <Contact />
    </div>
  </transition>
</template>
