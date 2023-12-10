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

      <p>
        I'm a <span class="color-primary">Full-Stack JavaScript Developer</span> based out of
        Chandler, Arizona.
      </p>

      <p>
        Passionate about all things JavaScript. Experienced in building sites from scratch with no
        frameworks/libraries, and just as experienced in doing the same using the latest
        technologies and abstractions. Avid WCAG follower.
      </p>
    </div>
  </section>
</template>

<script>
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { TextPlugin } from 'gsap/TextPlugin';
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  export default {
    name: 'About',
    methods: {
      configureScrollTrigger() {
        const cursor = gsap.fromTo(
          '#cursor',
          { autoAlpha: 0, x: -10 },
          {
            autoAlpha: 1,
            duration: 0.5,
            repeat: 8,
            ease: 'steps(1)',
            onComplete: function () {
              if (document.getElementById('cursor'))
                document.getElementById('cursor').style.opacity = '0';
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

<style lang="scss">
  .about {
    margin-top: 3rem;
    max-width: 1100px;

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

      .heading {
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
