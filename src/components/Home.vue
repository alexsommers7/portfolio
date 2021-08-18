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
import Hero from "./HomeHero";
import About from "./HomeAbout";
import Projects from "./HomeProjects";
import Resume from "./HomeResume";
import Toolbox from "./HomeToolbox";
import Contact from "./HomeContact";

export default {
  name: "Home",
  data() {
    return {};
  },
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

<style scoped></style>
