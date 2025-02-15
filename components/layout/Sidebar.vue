<script>
  const socialLinks = [
    {
      label: 'Github',
      icon: 'github',
      href: 'https://github.com/alexsommers7',
      ariaLabel: 'Github profile (opens in a new tab)',
    },
    {
      label: 'LinkedIn',
      icon: 'linkedin',
      href: 'https://www.linkedin.com/in/alex-sommers-15561a10a/',
      ariaLabel: 'LinkedIn profile (opens in a new tab)',
    },
    {
      label: 'Resume',
      icon: 'document',
      href: resumeLink,
      ariaLabel: 'Download resume',
    },
  ];
</script>

<script setup>
  import { resumeLink } from '@/utils/data/jobs';

  const route = useRoute();
  const currentSectionEl = ref(null);
  const props = defineProps(['isObserving', 'observerTargets']);
  const { hasScrollArrow, sidebarLabel } = useSidebar(currentSectionEl, props);
</script>

<template>
  <aside class="sidebar">
    <div class="mail">
      <NuxtLink
        href="mailto:alex@alexsommers.com"
        class="flex-center"
        aria-label="Send email to Alex Sommers"
      >
        <Icon name="mail" aria-hidden="true" />
        <p>Email</p>
      </NuxtLink>
    </div>

    <div class="social">
      <NuxtLink
        v-for="{ href, icon, label, ariaLabel } in socialLinks"
        :key="label"
        :href
        :aria-label
        target="_blank"
      >
        <Icon :name="icon" aria-hidden="true" />
        <p>{{ label }}</p>
      </NuxtLink>
    </div>

    <div class="current-section" ref="currentSectionEl">
      <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
        <p v-if="hasScrollArrow">
          <NuxtLink aria-label="Go to first section" href="#about" class="btn">
            <Icon name="down-arrow" aria-hidden="true" />
          </NuxtLink>
        </p>

        <p v-else>{{ sidebarLabel }}</p>
      </transition>
    </div>
  </aside>
</template>

<style scoped lang="scss">
  @use '@scss/variables';
  @use '@scss/mixins';

  .no-scroll .sidebar {
    // prevent slight jump when scrollbar goes in/out
    margin-right: var(--scrollbar-width);
  }

  .sidebar {
    display: none;

    @include mixins.respond(desk-small) {
      position: fixed;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      width: var(--nav-desktop-width);
      transform: scale(1);
      transform-origin: top;
      height: Max(100vh, 500px); // make sure to capitalize Max or it will run as SCSS function
      background-color: variables.$color-primary;

      .mail,
      .social {
        svg {
          width: 2rem;
          height: 2rem;
          transition: all 0.25s ease;

          @include mixins.respond(desk-xlarge) {
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
          color: variables.$color-text-light;
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
      background-color: variables.$color-background-light;
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
        fill: variables.$color-text-light;
        margin: 0.5rem;
      }
    }

    .social {
      flex: 0 1 200px;
      border-top: 1px solid variables.$color-text-light;

      @include mixins.respond(desk-xlarge) {
        flex-basis: 240px;
      }

      svg {
        fill: variables.$color-primary;
        margin: 0.5rem auto;

        @include mixins.respond(desk-xlarge) {
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
        color: variables.$color-background;
        writing-mode: vertical-lr;
        transform: rotate(-180deg);
        padding-right: 5px;
        padding-bottom: 1.25rem;

        @include mixins.respond(desk-medium) {
          font-size: 4rem;
        }

        a {
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
            fill: variables.$color-background-light;
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
      background-color: variables.$color-background;
    }
  }
</style>
