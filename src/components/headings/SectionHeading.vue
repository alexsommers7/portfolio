<template>
  <div>
    <h3 class="heading heading--3 hide-for-large">{{ mainTitle }}</h3>
    <h4 class="heading heading--4 heading--section">{{ secondaryTitle }}</h4>
  </div>
</template>

<script>
  export default {
    name: 'SectionHeading',
    props: {
      mainTitle: {
        type: String,
        default: '',
      },
      secondaryTitle: {
        type: String,
        default: '',
      },
    },
  };
</script>
