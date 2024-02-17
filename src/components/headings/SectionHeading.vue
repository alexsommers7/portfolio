<script setup>
  defineProps({
    mainTitle: {
      type: String,
      default: '',
    },
    secondaryTitle: {
      type: String,
      default: '',
    },
  });
</script>

<template>
  <div>
    <h3 class="heading heading--3 hide-for-large">{{ mainTitle }}</h3>
    <h3 class="heading heading--4 heading--section">{{ secondaryTitle }}</h3>
  </div>
</template>
