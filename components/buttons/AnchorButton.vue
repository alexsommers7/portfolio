<script setup>
  defineProps({
    section: {
      type: String,
      default: '',
    },
  });
</script>

<template>
  <NuxtLink class="btn" :href="`#${section}`">
    <strong class="pointer-none">
      <slot />
    </strong>
  </NuxtLink>
</template>
