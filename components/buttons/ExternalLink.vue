<script setup>
  defineProps({
    targetLink: {
      type: String,
      default: '#',
    },
  });
</script>

<template>
  <NuxtLink :href="targetLink" class="btn" target="_blank" rel="noopener noreferrer">
    <slot />
    <Icon name="external-window" />
  </NuxtLink>
</template>

<style scoped lang="scss">
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    svg {
      width: auto;
      height: 1.1rem;
      margin: 0 0 2px 0.25rem;
      object-fit: unset;
      fill: currentColor;
    }
  }
</style>
