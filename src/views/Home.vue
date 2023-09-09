<template>
  <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
    <div>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Resume></Resume>
      <!-- <Toolbox></Toolbox> -->
      <Contact></Contact>
    </div>
  </transition>
</template>

<script>
import Hero from '@/components/sections/Hero.vue';
import About from '@/components/sections/About.vue';
import Projects from '@/components/sections/ProjectsOverview.vue';
import Resume from '@/components/sections/Resume.vue';
// import Toolbox from '@/components/sections/Toolbox.vue';
import Contact from '@/components/sections/Contact.vue';

export default {
  name: 'Home',
  components: {
    Hero,
    About,
    Projects,
    Resume,
    // Toolbox,
    Contact,
  },
};
</script>

<style scoped lang="scss"></style>
