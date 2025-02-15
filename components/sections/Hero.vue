<template>
  <section class="hero full-width" id="hero">
    <div class="intro">
      <h1 class="heading heading--1">Alex <strong>Sommers</strong></h1>
      <h2 class="heading heading--2">Full-Stack Javascript Developer</h2>

      <div class="intro__buttons">
        <AnchorButton class="btn--primary" section="projects">My Work</AnchorButton>
        <AnchorButton class="btn--secondary" section="contact">Contact Me</AnchorButton>
      </div>
    </div>

    <picture>
      <source srcset="@images/alex-sommers.webp" type="image/webp" />
      <img
        class="photo"
        src="@images/alex-sommers.png"
        alt="Alex Sommers | Full-Stack Javascript Developer"
        height="373"
      />
    </picture>
  </section>
</template>

<style scoped lang="scss">
  @use '@scss/mixins';

  section.hero {
    padding: 0 1rem;
    display: grid;
    gap: 2rem;

    @include mixins.respond(tab-land) {
      height: Min(100vh, 1080px);
      grid-template-columns: minmax(450px, 60%) minmax(350px, 30%);
      align-items: center;
      justify-content: center;
      padding: 0 4rem;
    }

    @include mixins.respond(desk-medium) {
      grid-template-columns: minmax(450px, 45%) minmax(350px, 30%);
    }

    @include mixins.respond(desk-xlarge) {
      grid-template-columns: minmax(450px, 40%) minmax(350px, 35%);
    }

    .intro {
      text-align: center;
      padding: 15% 0;

      @include mixins.respond(tab-land) {
        text-align: left;
      }

      @include mixins.respond(desk-small) {
        padding: 20% 0;
      }

      .heading--2 {
        padding: 1.25rem 0;

        @include mixins.respond(desk-small) {
          padding: 1rem 0 2.75rem;
        }
      }

      &__buttons {
        width: 100%;
        margin-top: 1rem;
        display: flex;
        justify-content: center;

        @include mixins.respond(tab-land) {
          display: block;
        }

        @include mixins.respond(desk-small) {
          margin-top: 0.5rem;
        }

        a {
          width: 45%;
          max-width: 10rem;

          @include mixins.respond(desk-small) {
            max-width: 12rem;
          }

          &:first-child {
            margin-right: 1.75rem;
          }
        }
      }
    }

    picture {
      position: relative;
      max-width: 600px;
      margin: auto;

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 20%;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 20;
        transform: translateY(30%);
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#121212+1,272727+57,272727+62&0+1,1+49 */
        background: -moz-linear-gradient(
          top,
          rgba(18, 18, 18, 0) 1%,
          rgba(36, 36, 36, 1) 49%,
          rgba(39, 39, 39, 1) 57%,
          rgba(39, 39, 39, 1) 62%
        ); /* FF3.6-15 */
        background: -webkit-gradient(
          linear,
          left top,
          left bottom,
          color-stop(1%, rgba(18, 18, 18, 0)),
          color-stop(49%, rgba(36, 36, 36, 1)),
          color-stop(57%, rgba(39, 39, 39, 1)),
          color-stop(62%, rgba(39, 39, 39, 1))
        ); /* Chrome4-9,Safari4-5 */
        background: -webkit-linear-gradient(
          top,
          rgba(18, 18, 18, 0) 1%,
          rgba(36, 36, 36, 1) 49%,
          rgba(39, 39, 39, 1) 57%,
          rgba(39, 39, 39, 1) 62%
        ); /* Chrome10-25,Safari5.1-6 */
        background: -o-linear-gradient(
          top,
          rgba(18, 18, 18, 0) 1%,
          rgba(36, 36, 36, 1) 49%,
          rgba(39, 39, 39, 1) 57%,
          rgba(39, 39, 39, 1) 62%
        ); /* Opera 11.10-11.50 */
        background: linear-gradient(
          to bottom,
          rgba(18, 18, 18, 0) 1%,
          rgba(36, 36, 36, 1) 49%,
          rgba(39, 39, 39, 1) 57%,
          rgba(39, 39, 39, 1) 62%
        ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      }

      .photo {
        width: 100%;
        height: auto;
      }
    }
  }
</style>
