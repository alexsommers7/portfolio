<template>
  <section class="track about" data-sidebar="About">
    <span class="anchor-span" id="about"></span>
    <div class="about__intro">
      <h3 class="heading heading--3 hide-for-large">ABOUT ME</h3>
      <p>
        <strong class="about__heading typewriter-1"></strong>
        <strong class="about__heading typewriter-2"></strong>
        <span class="about__heading" id="cursor">|</span>
      </p>
      <p>I'm a <span class="color-primary">Front-End Web Developer</span> based out of Tempe, Arizona.</p>
      <p>
        In both freelance and professional settings, I harness the power of modern web technologies to create
        interactive, accessible user experiences.
      </p>
    </div>
    <div class="about__lately">
      <h4 class="heading heading--4">What I've Been Building With Lately</h4>
      <ul class="languages">
        <li v-for="lang in recentLanguages" :key="lang.title">
          <div>
            <img :src="lang.icon" :alt="`${lang.alt ? lang.alt : lang.title} Icon`" />
            <p>{{ lang.title }}</p>
          </div>
        </li>
      </ul>
      <button class="btn btn--secondary" data-section="toolbox" @click="onAnchorClick">
        <strong data-section="toolbox" @click="onAnchorClick">See What's in My Toolbox</strong>
      </button>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, TextPlugin);

export default {
  name: "About",
  data() {
    return {
      recentLanguages: [
        {
          title: "Vue.js",
          icon: require("@/assets/icons/vue.svg"),
          alt: "Vue JavaScript Framework",
        },
        {
          title: "SCSS",
          icon: require("@/assets/icons/sass.svg"),
          alt: "Sassy CSS (SCSS) Preprocessor",
        },
        {
          title: "GSAP",
          icon: require("@/assets/icons/gsap.svg"),
          alt: "Greensock Animation Platform (GSAP)",
        },
      ],
    };
  },
  methods: {
    onAnchorClick(e) {
      gsap.to(window, { duration: 0.8, scrollTo: { y: `#${e.target.dataset.section}`, offsetY: -20 } });
    },
    configureScrollTrigger() {
      // ScrollTrigger.defaults({
      //   markers: true,
      // });

      const cursor = gsap.fromTo(
        "#cursor",
        { autoAlpha: 0, x: -10 },
        {
          autoAlpha: 1,
          duration: 0.5,
          repeat: 8,
          ease: "steps(1)",
          onComplete: function() {
            if (document.getElementById("cursor")) document.getElementById("cursor").style.opacity = "0";
          },
        }
      );

      const tl = gsap.timeline();
      tl.to(".typewriter-1", {
        text: { value: "Hey there, " },
        duration: 1.15,
        delay: 0.6,
      }).to(".typewriter-2", {
        text: { value: "I'm Alex." },
        duration: 1.15,
        delay: 0.4,
      });

      ScrollTrigger.create({
        animation: tl,
        trigger: ".typewriter-1",
        start: "top 75%",
      });

      ScrollTrigger.create({
        animation: cursor,
        trigger: ".typewriter-1",
        start: "top 70%",
      });
    },
  },
  mounted() {
    this.configureScrollTrigger();
  },
};
</script>

<style scoped lang="scss">
@import "../../../scss/_mixins";
@import "../../../scss/_variables";
.about {
  margin-top: 3rem;
  max-width: 1350px;

  @include respond(desk-small) {
    margin-top: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__intro,
  &__lately {
    @include respond(desk-small) {
      flex-basis: 50%;
    }
  }

  &__intro {
    padding: 0 1rem;

    @include respond(desk-small) {
      flex: 2 0 45%;
      padding-top: 1rem;
    }
  }

  &__lately {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @include respond(desk-small) {
      flex: 1 0 500px;
      border-left: 2px solid $color-background-light;
      padding: 1rem 2rem;
    }

    .heading,
    .languages {
      width: 100%;
    }

    .heading {
      text-align: center;
      margin-top: 4rem;

      @include respond(desk-small) {
        margin-top: 0;
      }
    }

    .btn {
      margin: auto;
      max-width: 19rem;
      width: 75%;
      display: block;

      @include respond(desk-small) {
        margin-top: 3px;
      }
    }

    .languages {
      list-style: none;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 2rem 0;

      @include respond(desk-small) {
        margin: 2rem 0;
      }

      li {
        margin: 0.5rem;
        padding: 1rem;
        width: 8rem;
        height: 8rem;
        flex: 0 0 8rem;
        background-color: $color-background-light;
        text-align: center;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: $design-border-radius-default;

        div {
          img {
            width: 3.5rem;
            height: 3.5rem;
            display: block;
            margin: auto;
          }

          p {
            margin-bottom: 0;
            margin-top: 1rem;
            line-height: 1;
          }
        }
      }
    }
  }

  &__heading {
    font-size: clamp(1.8rem, calc(-0.875rem + 8.333vw), 2rem);
    line-height: 1;
    margin-bottom: 1.5rem;
  }

  #cursor {
    margin: 0;
    display: inline-block;
    margin-left: 8px;
    opacity: 0;
  }
}
</style>
