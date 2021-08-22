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
    timeline
      .from(introContent, {
        duration: 0.75,
        autoAlpha: 0,
        y: 150,
        stagger: 0.2,
        delay: 0.5,
        ease: "back.out(1.7)",
      })
      .to(".wrapper__dot", { duration: 0.25, autoAlpha: 0 }, "+=.8")
      .to(introContent, { duration: 0.5, autoAlpha: 0, y: 150, stagger: 0.15 }, "+=0.25")
      .add(this.onHideLoadIn)
      .from("nav.navigation", { duration: 0.3, width: 0, autoAlpha: 0, ease: "expo.out" }, "<")
      .from(".sidebar", { duration: 0.3, width: 0, autoAlpha: 0, ease: "expo.out" }, "<")
      .from("#hero", { duration: 0.6, autoAlpha: 0, ease: "expo.in" })
      .from("#about", { duration: 0.6, autoAlpha: 0, ease: "expo.in" }, "<");
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
@import "@/scss/_mixins";
@import "@/scss/_variables";
@import "@/scss/_transitions";

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
    transform: translateY(-50px);
    background-color: $color-background;
    z-index: 400;

    @include respond(tab-land) {
      text-align: left;
      transform: translateY(0);
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
