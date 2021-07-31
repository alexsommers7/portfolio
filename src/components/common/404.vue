<template>
  <div class="wrapper">
    <p><strong>404</strong></p>
    <h1 class="heading heading--2">(It's ok, we all get lost sometimes)</h1>
    <router-link to="/">
      <button class="btn btn--secondary">Back to safety</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "pageNotFound",
};
</script>

<style scoped lang="scss">
@import "../../scss/_mixins";
@import "../../scss/_variables";

.wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    color: $color-primary;
    font-size: 12rem;
    line-height: 1;
    margin-top: calc(var(--nav-mobile-height) * -1);

    @include respond(desk-small) {
      margin-top: -2rem;
    }
  }

  h1 {
    text-align: center;
    margin-bottom: 2.5rem;
  }
}
</style>
