<script setup>
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import projects from '~/utils/data/projects';
  const filteredProjects = projects.filter(({ showOnHomePage }) => showOnHomePage);

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

  onMounted(configureScrollTrigger);
</script>

<template>
  <section class="track projects full-width" id="projects" data-sidebar="Projects">
    <SectionHeading mainTitle="PROJECTS" secondaryTitle="Interfaces for the Modern World" />

    <div class="project-group">
      <ProjectCard :project="project" v-for="project in filteredProjects" :key="project.title" />
    </div>

    <NuxtLink to="/projects" class="btn btn--secondary cta">View All Projects</NuxtLink>
  </section>
</template>
