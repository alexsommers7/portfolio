<template>
  <article class="project" :class="classes">
    <picture>
      <source :srcset="project.imageWebp" type="image/webp" />
      <img class="photo" :src="project.image" :alt="project.alt" width="333" height="285" />
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
        :ariaLabel="getAriaLabel(project, project.primaryCTA)"
        :content="project.primaryCTA"
        v-if="project.primaryCTA"
      />

      <ExternalLink
        :targetLink="project.secondaryLink"
        classes="btn--secondary"
        :ariaLabel="getAriaLabel(project, project.secondaryCTA)"
        :content="project.secondaryCTA"
        v-if="project.secondaryCTA"
      />

      <p v-if="!project.openSource" class="private">
        <em>Behind a login and not open source, but happy to demo and discuss</em>
      </p>
    </div>
  </article>
</template>

<script>
  import ExternalLink from '@/components/buttons/ExternalLink.vue';

  export default {
    name: 'ProjectCard',
    props: {
      classes: {
        type: String,
        default: '',
      },
      project: Object,
    },
    methods: {
      getAriaLabel(project, cta) {
        return `${cta} for ${project.title}`;
      },
    },
    components: {
      ExternalLink,
    },
  };
</script>

<style scoped>
  .private {
    margin-bottom: 0;
    line-height: 1.25;
  }
</style>
