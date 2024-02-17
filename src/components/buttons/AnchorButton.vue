<script setup>
  defineProps({
    section: {
      type: String,
      default: '',
    },
  });
</script>

<template>
  <a class="btn" :href="`#${section}`">
    <strong class="pointer-none">
      <slot />
    </strong>
  </a>
</template>
