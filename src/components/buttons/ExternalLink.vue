<template>
  <a
    :href="targetLink"
    class="btn"
    :class="classes"
    target="_blank"
    rel="noopener"
    :aria-label="ariaLabel"
  >
    {{ content }}
  </a>
</template>

<script>
export default {
  name: 'ExternalLink',
  props: {
    classes: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'button',
    },
    targetLink: {
      type: String,
      default: '#',
    },
    ariaLabel: {
      type: String,
      default: '',
    },
  },
};
</script>
