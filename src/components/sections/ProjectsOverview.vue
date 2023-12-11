<script>
  import { projects } from '@/utils/data/projects';
  const filteredProjects = projects.filter(({ showOnHomePage }) => showOnHomePage);
</script>

<script setup>
  import { onMounted } from 'vue';
  import ProjectCard from '@/components/cards/ProjectCard.vue';
  import SectionHeading from '@/components/headings/SectionHeading.vue';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  const configureScrollTrigger = () => {
    gsap.set('article.project', { y: 100, opacity: 0 });

    ScrollTrigger.batch('article.project', {
      start: 'top 85%',
      onEnter: batch =>
        gsap.to(batch, {
          opacity: 1,
          duration: 1.1,
          y: 0,
          stagger: { each: 0.2 },
          overwrite: true,
          ease: 'expo.out',
        }),
    });

    ScrollTrigger.addEventListener('refreshInit', () =>
      gsap.set('article.project', { y: 0, opacity: 1 })
    );
  };

  onMounted(() => {
    configureScrollTrigger();
  });
</script>

<template>
  <section class="track projects full-width" data-sidebar="Projects">
    <span class="anchor-span" id="projects"></span>

    <SectionHeading mainTitle="PROJECTS" secondaryTitle="Interfaces for the Modern World" />

    <div class="project-group">
      <ProjectCard :project="project" v-for="project in filteredProjects" :key="project.title" />
    </div>

    <router-link to="/project-showcase" class="btn btn--secondary cta"
      >View All Projects
    </router-link>
  </section>
</template>
