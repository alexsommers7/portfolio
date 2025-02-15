<script setup>
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { jobs, resumeLink } from '@/utils/data/jobs';
  import { education } from '@/utils/data/education';

  gsap.registerPlugin(ScrollTrigger);

  const sectionEl = ref(null);

  const configureScrollTrigger = () => {
    const items = sectionEl.value.querySelectorAll('.gsap-ul');

    items.forEach(item => {
      ScrollTrigger.create({
        trigger: item,
        start: 'top 85%',
        onEnter: self => self.trigger.classList.add('active'),
      });
    });
  };

  onMounted(configureScrollTrigger);
</script>

<template>
  <section class="track resume full-width" id="resume" data-sidebar="Resume" ref="sectionEl">
    <SectionHeading mainTitle="RESUME" secondaryTitle="Professional and Freelance Experience" />

    <div class="resume__content">
      <div>
        <h5 class="resume__heading"><strong>Experience</strong></h5>

        <ul class="gsap-ul">
          <li v-for="job in jobs" :key="job.id">
            <h5 class="title">{{ job.jobTitle }}</h5>

            <p class="company">{{ job.company }} | {{ job.location }}</p>

            <p class="timeframe">
              <em>{{ job.timeframe }}</em>
            </p>

            <p class="description">{{ job.description }}</p>
          </li>
        </ul>
      </div>

      <div>
        <h5 class="resume__heading"><strong>Education</strong></h5>

        <ul class="gsap-ul">
          <li v-for="school in education" :key="school.id">
            <h5 class="title">{{ school.title }}</h5>

            <p class="company">{{ school.company }} | {{ school.location }}</p>

            <p class="timeframe">
              <em>{{ school.timeframe }}</em>
            </p>

            <p class="description">{{ school.description }}</p>
          </li>

          <li class="gsap-li" style="transition-delay: 0.6s">
            <NuxtLink
              :href="resumeLink"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn--primary"
              >Download Full Resume
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @use '@scss/variables';
  @use '@scss/mixins';

  .resume {
    @include mixins.respond(desk-small) {
      margin-top: 2rem;
    }

    &__content {
      max-width: 1800px;
      margin: 2rem auto 0 auto;

      @include mixins.respond(tab-land) {
        margin-top: 4rem;
        display: grid;
        grid-template-columns: repeat(2, minmax(400px, 45%));
        gap: 2rem;
        justify-content: flex-end; // assumes education section doesn't have as much content
        justify-items: center;
      }

      ul {
        list-style: none;

        li {
          position: relative;
          padding: 0 5px 0 44px;
          margin-bottom: 3.5rem;

          &::before,
          &::after {
            content: '';
            position: absolute;
          }

          &::before {
            background: variables.$color-background;
            width: 20px;
            height: 20px;
            left: 0px;
            top: 6px;
            border-radius: 50%;
            border: 2px solid variables.$color-primary;
            z-index: 20;
            transform: scale(0);
            transform-origin: center center;
          }

          &:not(:last-of-type)::after,
          &:first-of-type::after {
            width: 2px;
            height: calc(100% + 3.5rem); // add li margin-bottom
            left: 9px;
            top: 12px;
            z-index: 10;
            background: variables.$color-primary;
            transform: scaleY(0);
            transform-origin: center top;
          }

          .title,
          .company {
            line-height: 1.2;
          }

          .title {
            color: variables.$color-primary;
            font-size: 1.8rem;
          }

          .company {
            font-size: 1.25rem;
            margin-bottom: 0;
          }

          .timeframe {
            margin-bottom: 0.5rem;

            &::after {
              content: '';
              width: 4rem;
              height: 2px;
              display: block;
              padding: 0.3rem 0;
              border-bottom: 2px solid variables.$color-primary;
            }
          }

          .btn {
            width: auto;
          }
        }

        &.active {
          // only need to edit these variables to adjust timing/job count
          $before-interval: 0.3;
          $after-interval: 1;
          $num-jobs: 4;

          li {
            &::before {
              transition: transform ($before-interval + 0s) cubic-bezier(0.34, 1.56, 0.62, 1.25);
              transform: scale(1);
            }

            &::after {
              transition: transform ($after-interval + 0s);
              transform: scaleY(1);
            }

            &:first-child::after {
              transition-delay: ($before-interval + 0s);
            }

            @for $i from 2 through $num-jobs {
              &:nth-child(#{$i}) {
                &::before {
                  transition-delay: (
                    ($before-interval * ($i - 1)) + ($after-interval * ($i - 1)) + 0s
                  );
                }
                &::after {
                  transition-delay: (($before-interval * $i) + ($after-interval * ($i - 1)) + 0s);
                }
              }
            }
          }
        }
      }
    }

    &__heading {
      font-size: 2rem;
      margin: 2rem auto 1rem;

      @include mixins.respond(desk-small) {
        margin: 1rem auto;
      }
    }
  }
</style>
