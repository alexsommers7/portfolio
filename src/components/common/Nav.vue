<template>
  <header>
    <nav class="navigation" aria-label="Site Navigation">
      <a class="skip-link" href="#main">Skip to content</a>
      <svg
        role="button"
        aria-label="Scroll to Top"
        class="navigation__logo"
        viewBox="0 0 125 105.4"
        @click="scrollToTop"
      >
        <polygon class="cls-1" points="62.5 6.47 23.46 49.34 101.54 49.34 62.5 6.47" />
        <polygon class="cls-1" points="62.5 99.62 101.54 56.75 23.46 56.75 62.5 99.62" />
        <polygon class="cls-1" points="62.5 25.63 40.9 49.34 84.1 49.34 62.5 25.63" />
        <polygon class="cls-1" points="62.5 80.47 84.1 56.75 40.9 56.75 62.5 80.47" />
        <line class="cls-1" x1="62.5" y1="25.63" x2="62.5" y2="80.47" />
      </svg>
      <button class="navigation__toggle tab-focus" aria-label="Toggle Navigation" @click="toggleNav">
        <span class="navigation__hamburger navigation__hamburger--1"></span>
        <span class="navigation__hamburger navigation__hamburger--2"></span>
        <span class="navigation__hamburger navigation__hamburger--3"></span>
      </button>
      <ul class="navigation__list">
        <li><a href="/#projects" class="js-nav-link" data-section-name="projects" @click="toggleNav">PROJECTS</a></li>
        <li><a href="/#resume" class="js-nav-link" data-section-name="resume" @click="toggleNav">RESUME</a></li>
        <li><a href="/#toolbox" class="js-nav-link" data-section-name="toolbox" @click="toggleNav">TOOLBOX</a></li>
        <li><a href="/#contact" class="js-nav-link" data-section-name="contact" @click="toggleNav">CONTACT</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "Nav",
  data() {
    return {};
  },
  props: {
    onMobile: Boolean,
  },
  methods: {
    toggleNav() {
      let timeline = gsap.timeline();
      if (this.onMobile) {
        this.$el.querySelector("nav").classList.contains("open")
          ? timeline.to(".navigation__list", { duration: 0.6, top: "100%", ease: "back.in(1)" })
          : timeline.to(".navigation__list", { duration: 0.6, top: "0", ease: "back.out(1)" });
      } else {
        this.$el.querySelector("nav").classList.contains("open")
          ? timeline.to(".navigation__list", { duration: 0.5, left: "-100%", ease: "expo.in" })
          : timeline.to(".navigation__list", { duration: 0.5, left: "95px", ease: "expo.out" });
      }
      this.$el.querySelector("nav").classList.toggle("open");
    },
    scrollToTop() {
      let currentPage = window.location.pathname;
      currentPage == "/" ? window.scrollTo({ top: 0, behavior: "smooth" }) : (window.location.href = "/");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../scss/_mixins";
@import "../../scss/_variables";
@import "../../scss/_transitions";

a.skip-link {
  background: $color-primary;
  color: $color-text-dark;
  font-weight: 700;
  width: 100%;
  text-align: center;
  left: 50%;
  top: 0;
  padding: 0.15rem;
  position: absolute;
  opacity: 0;
  transform: translate(-50%, -200%);
  transition: all 0.3s;

  &:focus {
    transform: translate(-50%, 0%);
    opacity: 1;
  }
}

header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: $nav-mobile-height;
  z-index: 50;

  @include respond(desk-small) {
    height: 100vh;
    width: $nav-desktop-width;
  }
}

.navigation {
  width: 100%;
  height: 100%;
  background-color: $color-background-light;
  padding: 0 1rem 0 0.25rem; // less on left to align logo
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  transition: background-color 0.25s 0.25s ease;
  transform: none;

  @include respond(desk-small) {
    padding: 0 0.5rem;
    justify-content: center;
  }

  &.open {
    background-color: $color-background;

    .navigation__list {
      visibility: visible;

      li {
        opacity: 1;
      }
    }

    .navigation__hamburger {
      &--2 {
        transform: translateX(200%);
        opacity: 0;

        @include respond(desk-small) {
          transform: translateX(-300%);
        }
      }

      &--1,
      &--3 {
        width: 100%;
        top: 50%;
      }

      &--1 {
        transform: rotate(-675deg);
      }

      &--3 {
        transform: rotate(135deg);
      }
    }
  }

  &__logo {
    height: 80%;
    width: auto;

    @include respond(desk-small) {
      display: none;
    }
  }

  &__toggle {
    margin-right: 0.5rem;
    position: relative;
    appearance: none;
    border: none;
    width: 3.5rem;
    height: 3.5rem;
    background-color: transparent;
    cursor: pointer;

    @include respond(desk-small) {
      width: 80%;
      margin-right: 0;
    }

    &:hover {
      .navigation__hamburger {
        background-color: rgba($color-primary, 0.8);
      }
    }
  }

  &__hamburger {
    transition: all 0.5s;
    position: absolute;
    height: 2px;
    background-color: $color-primary;

    @include respond(desk-small) {
      height: 3px;
    }

    &--2 {
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &--1,
    &--3 {
      width: 40%;
    }

    &--1 {
      top: 25%;
      left: 0;
    }

    &--3 {
      bottom: 25%;
      right: 0;
    }
  }

  &__list {
    visibility: hidden;
    top: 100%;
    position: fixed;
    height: 100%;
    width: 100vw;
    left: 0;
    list-style: none;
    z-index: 40;
    background-color: $color-background-light;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: center;
    text-align: center;
    z-index: -1;
    font-weight: 700;
    transform: translateY($nav-mobile-height); // nav height
    transition: visibility 1s, height 0.8s;

    @include respond(desk-small) {
      top: 0;
      left: -100%;
      height: 100vh;
      width: calc(100% - (#{$nav-desktop-width} * 2));
      transform: translateY(0);
      flex-direction: column;
      flex-wrap: nowrap;
    }

    li {
      flex: 0 0 75%;
      margin: 1rem auto;
      font-size: 2.5rem;
      opacity: 0;
      background-color: $color-background;
      border-bottom: 2px solid $color-primary;
      transform: translateY(calc(#{$nav-mobile-height} / -2)); // -nav height / 2
      transition: all 0.3s;

      @include respond(desk-small) {
        flex-basis: auto;
        transform: translateY(0);
        font-size: 3.5rem;
        width: 30%;
      }

      @include respond(desk-medium) {
        margin: 2rem auto;
      }

      &:hover {
        transform: translate(1rem, calc(#{$nav-mobile-height} / -2));
        border-bottom: 2px solid transparent;

        @include respond(desk-small) {
          transform: translate(0.75rem, 0);
        }
      }

      a {
        padding: 0.5rem 1rem;
        text-decoration: none;
        color: $color-text-light;
        width: 100%;
        height: 100%;
        display: inline-block;
        background-image: linear-gradient(120deg, transparent 0%, transparent 50%, $color-primary 50%);
        background-size: 230%;
        transition: all 0.5s;

        &:hover,
        &:active {
          background-position: 100%;
          color: $color-text-dark;
        }
      }
    }
  }
}
.cls-1 {
  fill: none;
  stroke: $color-primary;
  stroke-miterlimit: 10;
  stroke-width: 2px;
}
</style>
