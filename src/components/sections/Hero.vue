<template>
  <section class="hero full-width" id="hero">
    <div class="intro">
      <h1 class="heading heading--1">Alex <strong>Sommers</strong></h1>
      <h2 class="heading heading--2">Front-End Web Developer</h2>
      <div class="intro__buttons">
        <AnchorButton classes="btn--primary" section="projects" content="My Work" />
        <AnchorButton classes="btn--secondary" section="contact" content="Contact Me" />
      </div>
    </div>
    <picture>
      <source srcset="../../assets/alex-sommers.webp" type="image/webp" />
      <img
        class="photo"
        src="../../assets/alex-sommers.png"
        alt="Alex Sommers | Front-End Web Developer"
        height="373"
      />
    </picture>
  </section>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

import AnchorButton from '@/components/buttons/AnchorButton';

export default {
  name: 'Hero',
  methods: {
    onAnchorClick(e) {
      gsap.to(window, {
        duration: 1.2,
        ease: 'expo.inOut',
        scrollTo: `#${e.target.dataset.section}`,
      });
      // a bit hacky here, but ...
      // let gsap.to start running, then while it is, set hash so tabindex moves to the appropriate element
      setTimeout(function() {
        window.location = `#${e.target.dataset.section}`;
      }, 500);
    },
  },
  components: {
    AnchorButton,
  },
};
</script>

<style scoped lang="scss">
section.hero {
  padding: 0 1rem;
  display: grid;
  grid-gap: 2rem;

  @include respond(tab-land) {
    height: Min(100vh, 1080px);
    grid-template-columns: minmax(450px, 60%) minmax(350px, 30%);
    align-items: center;
    justify-content: center;
    padding: 0 4rem;
  }

  @include respond(desk-medium) {
    grid-template-columns: minmax(450px, 45%) minmax(350px, 30%);
  }

  @include respond(desk-xlarge) {
    grid-template-columns: minmax(450px, 40%) minmax(350px, 35%);
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

      button {
        width: 45%;
        max-width: 10rem;

        @include respond(desk-small) {
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
