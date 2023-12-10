<template>
  <aside class="sidebar">
    <div class="mail">
      <a
        href="mailto:alex@alexsommers.com"
        class="flex-center"
        aria-label="Send Email to Alex Sommers"
      >
        <Icon name="mail" />
        <p>Email</p>
      </a>
    </div>

    <div class="social">
      <a
        href="https://github.com/alexsommers7"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to Github Profile"
      >
        <Icon name="github" />
        <p>Github</p>
      </a>

      <a
        href="https://www.linkedin.com/in/alex-sommers-15561a10a/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to LinkedIn Profile"
      >
        <Icon name="linkedin" />
        <p>LinkedIn</p>
      </a>

      <a
        :href="resumeLink"
        aria-label="Link to Download Resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="document" />
        <p>Resume</p>
      </a>
    </div>

    <div class="current-section">
      <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
        <p v-if="!noScrollArrow">
          <button
            aria-label="Go to Main Content"
            data-section="about"
            class="btn"
            @click="onAnchorClick"
          >
            <Icon name="down-arrow" />
          </button>
        </p>

        <p v-else>{{ this.$route.name || ' ' }}</p>
      </transition>
    </div>
  </aside>
</template>

<script>
  import { gsap } from 'gsap';
  import { TextPlugin } from 'gsap/TextPlugin';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { resumeLink } from '@/utils/data/jobs';

  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);

  export default {
    name: 'Sidebar',
    data() {
      return {
        resumeLink,
      };
    },
    props: {
      observeSections: Boolean,
      observerTargets: Array,
      onMobile: Boolean,
      noScrollArrow: Boolean,
    },
    methods: {
      updateText(triggerObj) {
        let textEl = this.$el.querySelector('.current-section p');
        gsap.to(textEl, {
          duration: 0.75,
          text: {
            value: `${triggerObj.trigger.dataset.sidebar}`,
            padSpace: true,
          },
          ease: 'power1.out',
        });
      },
      configureScrollTrigger() {
        if (!this.observeSections) {
          if (ScrollTrigger.getById('sidebar')) ScrollTrigger.getById('sidebar').kill(true);
          return (this.$el.querySelector('.current-section p').innerText = this.$route.name);
        }

        this.observerTargets.forEach(section => {
          ScrollTrigger.create({
            id: 'sidebar',
            trigger: section,
            start: 'top 55%',
            end: 'center 20%',
            toggleActions: 'play restart play reverse',
            onEnter: self => {
              if (this.observeSections) {
                this.updateText(self);
              }
            },
            onEnterBack: self => {
              if (this.observeSections) this.updateText(self);
            },
          });
        });
      },
      onAnchorClick(e) {
        gsap.to(window, {
          duration: 1.2,
          ease: 'expo.inOut',
          scrollTo: `#${e.target.dataset.section}`,
        });
      },
    },
    watch: {
      observerTargets: function (newArr) {
        if (newArr.length && !this.onMobile) {
          this.configureScrollTrigger();
        }
      },
      observeSections: function (newVal) {
        if (!newVal) this.configureScrollTrigger();
      },
      onMobile: function (newVal) {
        if (!newVal) this.configureScrollTrigger();
      },
    },
  };
</script>

<style scoped lang="scss">
  .no-scroll .sidebar {
    // prevent slight jump when scrollbar goes in/out
    margin-right: var(--scrollbar-width);
  }

  .sidebar {
    display: none;

    @include respond(desk-small) {
      position: fixed;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      width: var(--nav-desktop-width);
      transform: scale(1);
      transform-origin: top;
      height: Max(100vh, 500px); // make sure to capitalize Max or it will run as SCSS function
      background-color: $color-primary;

      .mail,
      .social {
        svg {
          width: 2rem;
          height: 2rem;
          transition: all 0.25s ease;

          @include respond(desk-xlarge) {
            width: 2.5rem;
            height: 2.5rem;
          }
        }

        a {
          position: relative;
          overflow: hidden;

          &:hover {
            overflow: visible;

            svg {
              transform: translateX(200%);
            }

            p {
              opacity: 1;
              visibility: visible;
              transform: translate(-50%, -50%);
            }
          }
        }

        a p {
          font-size: 1.2rem;
          position: absolute;
          color: $color-text-light;
          top: 50%;
          left: 50%;
          opacity: 0;
          visibility: hidden;
          transform: translate(-80%, -50%);
          transition: all 0.25s ease;
        }
      }
    }

    .mail,
    .social {
      background-color: $color-background-light;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0.5rem 0;
      transition: all 0.2s ease;
    }

    .mail {
      flex-basis: 80px;

      svg {
        fill: $color-text-light;
        margin: 0.5rem;
      }
    }

    .social {
      flex: 0 1 200px;
      border-top: 1px solid $color-text-light;

      @include respond(desk-xlarge) {
        flex-basis: 240px;
      }

      svg {
        fill: $color-primary;
        margin: 0.5rem auto;

        @include respond(desk-xlarge) {
          margin: 0.75rem auto;
        }

        &#github {
          margin-top: 12px; // adjusting for svg not being totally centered
        }

        &#resume {
          margin-top: 18px;
        }
      }
    }

    .current-section {
      flex-grow: 1;
      display: flex;
      align-items: flex-end;
      justify-content: center;

      p {
        font-size: 3rem;
        font-weight: 700;
        text-transform: uppercase;
        color: $color-background;
        writing-mode: vertical-lr;
        transform: rotate(-180deg);
        padding-right: 5px;
        padding-bottom: 1.25rem;

        @include respond(desk-medium) {
          font-size: 4rem;
        }

        button {
          appearance: none;
          background: transparent;
          border: none;
          cursor: pointer;
          width: 6rem;
          height: 6rem;
          transform: translateY(-10px);

          &:hover {
            svg {
              transform: rotate(180deg);
            }
          }

          svg {
            width: 100%;
            height: 100%;
            pointer-events: none;
            fill: $color-background-light;
            transform: rotate(-180deg);
            transition: transform 0.25s ease;
            // offset 5px padding on container
            // was needed to horizontally center text
            margin-right: -5px;
          }
        }
      }
    }
  }

  body.no-scroll {
    // nav open state
    .mail,
    .social {
      background-color: $color-background;
    }
  }
</style>
