<template>
  <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
    <section class="projects project-showcase full-width">
      <div class="headings">
        <h1 class="heading heading--3">PROJECTS</h1>
        <h2 class="heading heading--4 heading--section">Interfaces for the Modern World</h2>
      </div>
      <div class="project-group">
        <article v-for="project in projects" :key="project.title" class="project">
          <picture>
            <source :srcset="project.imageWebp" type="image/webp" />
            <img class="photo" :src="project.image" :alt="project.alt" />
          </picture>
          <p class="title">{{ project.title }}</p>
          <p class="description">{{ project.description }}</p>
          <ul class="tools">
            <li v-for="tool in project.tools" :key="tool">{{ tool }}</li>
          </ul>
          <div class="btns">
            <a
              v-if="project.title !== 'AlexSommers.com'"
              :href="project.primaryLink"
              class="btn btn--primary"
              target="_blank"
              rel="noopener"
              :aria-label="`${project.primaryCTA} for ${project.title}`"
              >{{ project.primaryCTA }}</a
            >
            <a
              :href="project.secondaryLink"
              class="btn"
              :class="project.title === 'AlexSommers.com' ? 'btn--primary' : 'btn--secondary'"
              target="_blank"
              rel="noopener"
              :aria-label="`${project.secondaryCTA} for ${project.title}`"
              >{{ project.secondaryCTA }}</a
            >
          </div>
        </article>
      </div>
      <router-link to="/" class="btn btn--secondary cta">Return Home</router-link>
    </section>
  </transition>
</template>

<script>
import { projects } from '@/utils/data/projects';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'projectShowcase',
  computed: {
    projects: function() {
      return [...projects];
    },
  },
  methods: {
    configureScrollTrigger() {
      gsap.set('.project-showcase article.project', { y: 100, opacity: 0 });

      ScrollTrigger.batch('.project-showcase article.project', {
        start: 'top 85%',
        onEnter: (batch) =>
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
