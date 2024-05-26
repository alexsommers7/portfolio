<script setup>
  import { projects } from '@/utils/data/projects';
  import ProjectCard from '@/components/cards/ProjectCard.vue';
</script>

<template>
  <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
    <section class="projects project-showcase full-width">
      <div class="headings">
        <h1 class="heading heading--3">PROJECTS</h1>
        <h2 class="heading heading--4 heading--section">Interfaces for the Modern World</h2>
      </div>

      <div class="project-group">
        <ProjectCard :project v-for="project in projects" :key="project.title" />
      </div>

      <RouterLink to="/#projects" class="btn btn--secondary cta">Return Home</RouterLink>
    </section>
  </transition>
</template>

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
