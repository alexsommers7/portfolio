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
        :ariaLabel="`${project.primaryCTA} for ${project.title}`"
        :content="project.primaryCTA"
        v-show="project.primaryCTA"
      />
      <ExternalLink
        :targetLink="project.secondaryLink"
        classes="btn--secondary"
        :ariaLabel="`${project.secondaryCTA} for ${project.title}`"
        :content="project.secondaryCTA"
        v-show="project.secondaryCTA"
      />

      <p v-show="!project.openSource"><em>Not open source or public-facing, but happy to discuss</em></p>
    </div>
  </article>
</template>

<script>
import ExternalLink from '@/components/buttons/ExternalLink';

export default {
  name: 'ProjectCard',
  props: {
    classes: {
      type: String,
      default: '',
    },
    project: Object,
  },
  components: {
    ExternalLink,
  },
};
</script>
