<template>
  <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
    <div>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Resume></Resume>
      <Toolbox></Toolbox>
      <Contact></Contact>
    </div>
  </transition>
</template>

<script>
import Hero from '@/components/HomeHero';
import About from '@/components/HomeAbout';
import Projects from '@/components/HomeProjects';
import Resume from '@/components/HomeResume';
import Toolbox from '@/components/HomeToolbox';
import Contact from '@/components/HomeContact';

export default {
  name: 'Home',
  components: {
    Hero,
    About,
    Projects,
    Resume,
    Toolbox,
    Contact,
  },
};
</script>

<style scoped lang="scss"></style>
