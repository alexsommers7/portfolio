<template>
  <div>
    <Hero></Hero>
    <About></About>
    <Projects></Projects>
    <Resume></Resume>
    <Toolbox></Toolbox>
    <Contact></Contact>
  </div>
</template>

<script>
import Hero from "./children/Hero";
import About from "./children/About";
import Projects from "./children/Projects";
import Resume from "./children/Resume";
import Toolbox from "./children/Toolbox";
import Contact from "./children/Contact";

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
