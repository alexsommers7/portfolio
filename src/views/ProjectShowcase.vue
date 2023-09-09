<template>
  <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
    <section class="projects project-showcase full-width">
      <div class="headings">
        <h1 class="heading heading--3">PROJECTS</h1>
        <h2 class="heading heading--4 heading--section">Interfaces for the Modern World</h2>
      </div>
      <div class="project-group">
        <template v-for="project in projects">
          <ProjectCard :project="project" :key="project.title" />
        </template>
      </div>
      <router-link to="/" class="btn btn--secondary cta">Return Home</router-link>
    </section>
  </transition>
</template>

<script>
  import { projects } from '@/utils/data/projects';
  import ProjectCard from '@/components/cards/ProjectCard.vue';

  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);

  export default {
    name: 'projectShowcase',
    computed: {
      projects: function () {
        return [...projects];
      },
    },
    methods: {
      configureScrollTrigger() {
        gsap.set('.project-showcase article.project', { y: 100, opacity: 0 });

        ScrollTrigger.batch('.project-showcase article.project', {
          start: 'top 85%',
          onEnter: batch =>
            gsap.to(batch, {
              opacity: 1,
              duration: 1.1,
              y: 0,
              stagger: { each: 0.25 },
              overwrite: true,
              ease: 'expo.out',
            }),
        });

        ScrollTrigger.addEventListener('refreshInit', () => {
          if (!this.$el.querySelector('.project-showcase article.project')) return;
          gsap.set('.project-showcase article.project', { y: 0, opacity: 1 });
        });
      },
    },
    mounted() {
      this.configureScrollTrigger();
    },
    components: {
      ProjectCard,
    },
  };
</script>

<style scoped lang="scss">
  .headings {
    margin-top: 2rem;
  }
  .heading--3 {
    top: 4rem;
  }

  @include respond(desk-small) {
    .headings {
      padding-left: 4rem;
    }
    .heading--3 {
      left: 4rem;
    }
    .heading--4 {
      text-align: left;
    }
  }
</style>
