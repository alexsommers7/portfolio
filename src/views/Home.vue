<script setup>
  import Hero from '@/components/sections/Hero.vue';
  import About from '@/components/sections/About.vue';
  import Projects from '@/components/sections/ProjectsOverview.vue';
  import Resume from '@/components/sections/Resume.vue';
  import Contact from '@/components/sections/Contact.vue';
</script>

<template>
  <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
    <div>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Resume></Resume>
      <Contact></Contact>
    </div>
  </transition>
</template>
