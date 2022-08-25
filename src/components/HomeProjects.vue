<template>
  <section class="track projects full-width" data-sidebar="Projects">
    <span class="anchor-span" id="projects"></span>
    <h3 class="heading heading--3 hide-for-large">PROJECTS</h3>
    <h4 class="heading heading--4 heading--section">Interfaces for the Modern World</h4>
    <div class="project-group" ref="projects">
      <article v-for="project in projects" :key="project.title" class="project">
        <picture>
          <source :srcset="project.imageWebp" type="image/webp" />
          <img class="photo" :src="project.image" :alt="project.alt" loading="lazy" width="333" height="285" />
        </picture>
        <p class="title">{{ project.title }}</p>
        <p class="description">{{ project.description }}</p>
        <ul class="tools">
          <li v-for="tool in project.tools" :key="tool">{{ tool }}</li>
        </ul>
        <div class="btns">
          <ExternalLink
            :targetLink="project.primaryLink"
            classes="btn--primary"
            :ariaLabel="`${project.primaryCTA} for ${project.title}`"
            :content="project.primaryCTA"
          />
          <ExternalLink
            :targetLink="project.secondaryLink"
            classes="btn--secondary"
            :ariaLabel="`${project.secondaryCTA} for ${project.title}`"
            :content="project.secondaryCTA"
          />
        </div>
      </article>
    </div>
    <router-link to="/project-showcase" class="btn btn--secondary cta">View All Projects </router-link>
  </section>
</template>

<script>
import { projects } from '@/utils/data/projects';
import ExternalLink from '@/components/buttons/ExternalLink';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Projects',
  computed: {
    projects: function() {
      return projects.filter((project) => project.showOnHomePage);
    },
  },
  methods: {
    configureScrollTrigger() {
      gsap.set('article.project', { y: 100, opacity: 0 });

      ScrollTrigger.batch('article.project', {
        start: 'top 85%',
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            duration: 1.1,
            y: 0,
            stagger: { each: 0.2 },
            overwrite: true,
            ease: 'expo.out',
          }),
      });

      ScrollTrigger.addEventListener('refreshInit', () => gsap.set('article.project', { y: 0, opacity: 1 }));
    },
  },
  mounted() {
    this.configureScrollTrigger();
  },
  components: {
    ExternalLink,
  },
};
</script>
