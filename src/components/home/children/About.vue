<template>
  <section class="track" data-section="About">
    <span class="anchor-span" id="about"></span>
    <h3 class="heading heading--3 hide-for-large">ABOUT ME</h3>
    <p><strong class="typewriter">Hey there, I'm Alex.</strong></p>
    <p>I'm a <span class="color-primary">Front End Web Developer</span> based out of Tempe, Arizona.</p>
    <p>
      In both freelance and professional settings, I harness the power of modern web technologies to craft memorable,
      accessible user experiences.
    </p>
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  },
  /* 
      timeline.to("#about .typewriter", {
      text: { value: "Hey there, I'm Alex." },
      duration: 0.5,
      ease: "none",
    });  
  */
};
</script>

<style scoped lang="scss">
@import "../../../scss/_mixins";
@import "../../../scss/_variables";
</style>
