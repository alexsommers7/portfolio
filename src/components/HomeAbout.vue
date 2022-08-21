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
      <p>
        Currently, I work remotely for <span class="color-primary">Retailer Web Services</span> - an Arizona-based
        company who provides digital marketing solutions to 2,700+ independent retailers across North America. There, I
        work on the front end of products that are interacted with by thousands of users daily. These include our
        proprietary CMS, as well as the platform that consumes the CMS API to power each retailer's website.
      </p>
    </div>
    <div class="about__lately">
      <h3 class="heading heading--4">What I've Been Building With Lately</h3>
      <ul class="tools">
        <li v-for="tool in recentTools" :key="tool.title">
          <div>
            <img
              :src="tool.icon"
              :alt="`${tool.alt ? tool.alt : tool.title} Icon`"
              :class="`${tool.class ? tool.class : ''}`"
            />
            <p>{{ tool.title }}</p>
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
import tools from '@/utils/tools';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, TextPlugin);

export default {
  name: 'About',
  computed: {
    recentTools: function() {
      return tools.filter((tool) => tool.usingLately);
    },
  },
  methods: {
    onAnchorClick(e) {
      gsap.to(window, {
        duration: 1.2,
        ease: 'expo.inOut',
        scrollTo: { y: `#${e.target.dataset.section}`, offsetY: -20 },
      });
      // a bit hacky here, but ...
      // let gsap.to start running, then while it is, set hash so tabindex moves to the appropriate element
      setTimeout(function() {
        window.location = `#${e.target.dataset.section}`;
      }, 500);
    },
    configureScrollTrigger() {
      const cursor = gsap.fromTo(
        '#cursor',
        { autoAlpha: 0, x: -10 },
        {
          autoAlpha: 1,
          duration: 0.5,
          repeat: 8,
          ease: 'steps(1)',
          onComplete: function() {
            if (document.getElementById('cursor')) document.getElementById('cursor').style.opacity = '0';
          },
        }
      );

      const tl = gsap.timeline();
      tl.to('.typewriter-1', {
        text: { value: 'Hey there, ' },
        duration: 1.15,
        delay: 0.6,
      }).to('.typewriter-2', {
        text: { value: "I'm Alex." },
        duration: 1.15,
        delay: 0.4,
      });

      ScrollTrigger.create({
        animation: tl,
        trigger: '.typewriter-1',
        start: 'top 75%',
      });

      ScrollTrigger.create({
        animation: cursor,
        trigger: '.typewriter-1',
        start: 'top 70%',
      });
    },
  },
  mounted() {
    this.configureScrollTrigger();
  },
};
</script>

<style scoped lang="scss">
.about {
  margin-top: 3rem;
  max-width: 1600px;

  @include respond(desk-large) {
    margin-top: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__intro,
  &__lately {
    @include respond(desk-large) {
      flex-basis: 50%;
    }
  }

  &__intro {
    padding: 0 1rem;

    @include respond(desk-large) {
      flex: 2 0 45%;
      padding: 1rem 3rem 1rem 1rem;
    }
  }

  &__lately {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @include respond(desk-large) {
      flex: 1 0 500px;
      border-left: 2px solid $color-background-light;
      padding: 1rem 2rem;
    }

    .heading,
    .tools {
      width: 100%;
    }

    .heading {
      text-align: center;
      margin-top: 4rem;

      @include respond(desk-large) {
        margin-top: 0;
      }
    }

    .btn {
      margin: auto;
      max-width: 19rem;
      width: 75%;
      display: block;

      @include respond(desk-large) {
        margin-top: 3px;
      }
    }

    .tools {
      list-style: none;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 1.75rem 0 1.75rem;

      @include respond(desk-large) {
        margin: 0.5rem 0 0;
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
