<template>
  <section class="hero" id="hero">
    <div class="intro">
      <h1 class="heading heading--1">Alex <strong>Sommers</strong></h1>
      <h2 class="heading heading--2">Front-End Web Developer</h2>
      <div class="intro__buttons">
        <a href="#projects" class="btn btn--primary"><strong>My Work</strong></a>
        <a href="#contact" class="btn btn--secondary"><strong>Contact Me</strong></a>
      </div>
    </div>
    <figure>
      <img class="photo" src="../../../assets/alex-sommers.png" alt="Alex Sommers | Front-End Web Developer" />
    </figure>
  </section>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import "../../../scss/_mixins";
@import "../../../scss/_variables";

section.hero {
  padding: 0 1rem;
  display: grid;
  grid-template-rows: 1fr 318px;
  overflow: hidden;

  @include respond(tab-land) {
    min-height: 100vh;
    grid-template-rows: 1fr;
    grid-template-columns: minmax(450px, 60%) minmax(350px, 33%);
    align-items: center;
    justify-content: center;
    padding: 0 4rem;
  }

  @include respond(desk-medium) {
    grid-template-columns: minmax(450px, 45%) minmax(350px, 40%);
  }

  @include respond(desk-xlarge) {
    grid-template-columns: minmax(450px, 33%) minmax(350px, 40%);
  }

  .intro {
    text-align: center;
    padding: 15% 0;

    @include respond(tab-land) {
      text-align: left;
    }

    @include respond(desk-small) {
      padding: 20% 0;
    }

    .heading--2 {
      padding: 1.25rem 0;

      @include respond(desk-small) {
        padding: 1rem 0 2.75rem;
      }
    }

    &__buttons {
      width: 100%;
      margin-top: 1rem;
      display: flex;
      justify-content: center;

      @include respond(tab-land) {
        display: block;
      }

      @include respond(desk-small) {
        margin-top: 0.5rem;
      }

      a {
        width: 45%;
        max-width: 10rem;
        text-decoration: none;
        padding: 0.5rem 0.8rem;
        height: 100%;

        @include respond(desk-small) {
          max-width: 12rem;
          padding: 0.25rem 0.25rem;
        }

        &:first-child {
          margin-right: 1.75rem;
        }
      }
    }
  }

  figure {
    margin: 0;
    position: relative;

    &::after {
      content: "";
      display: block;
      width: 86%;
      height: 30%;
      position: absolute;
      bottom: 0;
      left: 50%;
      z-index: 20;
      transform: translate(-50%, 30%);
      background-image: linear-gradient(180deg, rgba(18, 18, 18, 0) 1%, $color-background 37%);
    }

    .photo {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
