<script setup>
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
  });

  const icon = computed(() => {
    if (!props.name) return null;
    return defineAsyncComponent(() => import(`@icons/${props.name}.svg`));
  });
</script>

<template>
  <component :is="icon" />
</template>
