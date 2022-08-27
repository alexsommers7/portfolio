<template>
  <section class="track projects full-width" data-sidebar="Projects">
    <span class="anchor-span" id="projects"></span>
    <h3 class="heading heading--3 hide-for-large">PROJECTS</h3>
    <h4 class="heading heading--4 heading--section">Interfaces for the Modern World</h4>
    <div class="project-group" ref="projects">
      <template v-for="project in projects">
        <ProjectCard :project="project" :key="project.title" />
      </template>
    </div>
    <router-link to="/project-showcase" class="btn btn--secondary cta">View All Projects </router-link>
  </section>
</template>

<script>
import { projects } from '@/utils/data/projects';
import ProjectCard from '@/components/cards/ProjectCard';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'ProjectsOverview',
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
    ProjectCard,
  },
};
</script>
