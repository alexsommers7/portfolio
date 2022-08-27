<template>
  <div>
    <h3 class="heading heading--3 hide-for-large">{{ main }}</h3>
    <h4 class="heading heading--4 heading--section">{{ secondary }}</h4>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    main: {
      type: String,
      default: '',
    },
    secondary: {
      type: String,
      default: '',
    },
  },
};
</script>
