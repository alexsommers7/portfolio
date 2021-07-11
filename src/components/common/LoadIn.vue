<template>
  <section :class="['wrapper', contentLoaded ? '' : 'loading']" id="load-in">
    <div class="wrapper__content">
      <strong>
        <span class="wrapper__word"
          >Developer<span class="wrapper__dot">.<span class="wrapper__spaces">&nbsp;&nbsp;</span></span></span
        >
        <span class="wrapper__word"
          >Designer<span class="wrapper__dot">.<span class="wrapper__spaces">&nbsp;&nbsp;</span></span></span
        >
        <span class="wrapper__word"
          >Creator<span class="wrapper__dot">.<span class="wrapper__spaces">&nbsp;&nbsp;</span></span></span
        >
        <div class="wrapper__cliff"></div>
      </strong>
      <div class="wrapper__steamroller wrapper__steamroller--1">
        <svg class="logo" viewBox="0 0 125 105.4">
          <polygon class="cls-1" points="62.5 6.47 23.46 49.34 101.54 49.34 62.5 6.47" />
          <polygon class="cls-1" points="62.5 99.62 101.54 56.75 23.46 56.75 62.5 99.62" />
          <polygon class="cls-1" points="62.5 25.63 40.9 49.34 84.1 49.34 62.5 25.63" />
          <polygon class="cls-1" points="62.5 80.47 84.1 56.75 40.9 56.75 62.5 80.47" />
          <line class="cls-1" x1="62.5" y1="25.63" x2="62.5" y2="80.47" />
        </svg>
      </div>
      <div class="wrapper__steamroller wrapper__steamroller--2"></div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "LoadIn",
  props: {
    contentLoaded: Boolean,
    onMobile: Boolean,
  },
  mounted() {
    let introContent = document.querySelectorAll(".wrapper__dot, .wrapper__word");
    let timeline = gsap.timeline({ onComplete: this.onLoadInFinish });
    timeline.from(introContent, { duration: 0.9, opacity: 0, y: 150, stagger: 0.2, ease: "back.out(1.7)" });
    timeline.to(".wrapper__dot", { duration: 0.25, opacity: 0 }, "+=1.25");
    timeline.to(introContent, { duration: 0.3, opacity: 0, y: 150, stagger: 0.1 }, "+=0.15");
    timeline.to(".wrapper__steamroller", { duration: 0.75, width: "105%", stagger: 0.75, ease: "expo.out" });
    timeline.from(".wrapper__steamroller svg", { duration: 0.4, opacity: 0 }, "<+.2");
    timeline.add(this.onHideLoadIn);
    timeline.from("nav.navigation", { duration: 0.5, width: 0, opacity: 0, ease: "expo.out" });
    if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) > 1200) {
      timeline.from(".sidebar", { duration: 0.5, width: 0, opacity: 0, ease: "expo.out" }, "<");
      timeline.from(".sidebar svg", { duration: 0.5, opacity: 0, stagger: 0.15, ease: "expo.out" }, "<");
    }
    timeline.from("#hero > .intro", { duration: 0.5, opacity: 0 });
    timeline.from("#hero > .intro > .heading--2", {
      duration: 0.5,
      opacity: 0,
      transform: "translateY(-4rem)",
    });
    timeline.from("#hero figure", { duration: 0.8, opacity: 0, delay: 0.4 });
    timeline.from("#about", { duration: 0.8, opacity: 0 }, "<");
  },
  methods: {
    onHideLoadIn() {
      this.$emit("onHideLoadIn");
    },
    onLoadInFinish() {
      this.$emit("onLoadInFinish");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../scss/_mixins";
@import "../../scss/_variables";
@import "../../scss/_transitions";

.wrapper {
  &__content {
    @include ieOnly {
      /* need !important because JS doesn't work to remove loading class */
      display: none !important;
    }

    & strong {
      position: relative;
      display: flex;
      flex-flow: row wrap;
    }

    & > strong > span {
      font-size: 4rem;
      width: 100%;
      background-color: $color-background;

      @include respond(tab-port) {
        width: auto;
      }
    }
  }
}

.wrapper.loading {
  .wrapper__content {
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: $color-background;
    z-index: 400;

    @include respond(tab-land) {
      text-align: left;
    }

    .wrapper__cliff {
      height: 500%;
      width: 100%;
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 20;
      background-color: $color-background;
    }

    .wrapper__steamroller {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      transform: skew(-20deg);

      &--1 {
        background-color: $color-primary;
        z-index: 30;
      }

      &--2 {
        background-color: $color-background;
        z-index: 40;
        height: 100%;
      }

      .logo {
        width: 75%;
        height: 75%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) skew(20deg);
      }

      .cls-1 {
        fill: none;
        stroke: $color-background-light;
        stroke-miterlimit: 10;
        stroke-width: 2px;
      }
    }

    .wrapper__dot,
    .wrapper__word {
      display: inline-block;
      z-index: 10;
      position: relative;
    }

    .wrapper__dot {
      color: $color-primary;
      font-size: 3rem;
    }

    .wrapper__spaces {
      display: none;

      @include respond(tab-port) {
        display: inline-block;
      }
    }
  }
}
</style>
