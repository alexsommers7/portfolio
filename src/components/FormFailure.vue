<template>
  <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
    <div class="wrapper">
      <h1 class="heading heading--2">
        <strong>Whoops, looks like something went wrong.</strong>
      </h1>
      <h2>Please try again</h2>
      <router-link to="/">
        <button class="btn btn--secondary" @click="snapToTop">Return to Home Page</button>
      </router-link>
    </div>
  </transition>
</template>

<script>
export default {
  name: "formFailure",
  methods: {
    snapToTop() {
      window.scrollTo({ top: 0 });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_mixins";
@import "@/scss/_variables";

.wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1,
  h2 {
    text-align: center;
    margin-bottom: 2.5rem;
  }

  h2 {
    font-weight: 400;
  }
}
</style>
