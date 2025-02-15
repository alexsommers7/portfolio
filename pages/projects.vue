<script setup>
  import projects from '~/utils/data/projects';
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

      <NuxtLink to="/#projects" class="btn btn--secondary cta">Return Home</NuxtLink>
    </section>
  </transition>
</template>

<style scoped lang="scss">
  @use '@scss/mixins';

  .headings {
    margin-top: 2rem;
  }
  .heading--3 {
    top: 4rem;
  }

  @include mixins.respond(desk-small) {
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
