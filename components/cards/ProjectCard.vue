<script>
  const getAriaLabel = (project, cta) => {
    return `${cta} for ${project.title}`;
  };
</script>

<script setup>
  defineProps({
    project: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <article class="project">
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
        v-if="!project.isSelf && project.primaryCTA"
        class="btn--primary"
        :targetLink="project.primaryLink"
        :aria-label="getAriaLabel(project, project.primaryCTA)"
      >
        {{ project.primaryCTA }}
      </ExternalLink>

      <ExternalLink
        v-if="project.secondaryCTA"
        class="btn--secondary"
        :targetLink="project.secondaryLink"
        :aria-label="getAriaLabel(project, project.secondaryCTA)"
      >
        {{ project.secondaryCTA }}
      </ExternalLink>

      <p v-if="!project.openSource" class="private">
        <em>Behind a login and not open source, but happy to demo and discuss</em>
      </p>
    </div>
  </article>
</template>

<style scoped lang="scss">
  .private {
    margin-bottom: 0;
    line-height: 1.25;
  }
</style>
