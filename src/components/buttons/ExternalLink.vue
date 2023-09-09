<template>
  <a
    :href="targetLink"
    class="btn"
    :class="classes"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="ariaLabel"
  >
    {{ content }}
    <IconExternalWindow />
  </a>
</template>

<script>
  import IconExternalWindow from '@/assets/icons/external-window.svg';

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
    components: {
      IconExternalWindow,
    },
  };
</script>

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
