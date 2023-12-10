<template>
  <footer class="flex-center">
    <div class="hide-for-large icons">
      <a
        href="https://github.com/alexsommers7"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to Github Profile"
      >
        <Icon name="github" />
      </a>

      <a
        href="https://www.linkedin.com/in/alex-sommers-15561a10a/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to LinkedIn Profile"
      >
        <Icon name="linkedin" />
      </a>

      <a
        :href="resumeLink"
        aria-label="Link to Download Resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="document" />
      </a>
    </div>

    <p>© Alex Sommers {{ currentYear }}. All Rights Reserved.</p>
  </footer>
</template>

<script>
  import { resumeLink } from '@/utils/data/jobs';

  export default {
    name: 'Footer',
    data() {
      return {
        currentYear: new Date().getFullYear(),
        resumeLink,
      };
    },
  };
</script>

<style scoped lang="scss">
  footer {
    background-color: $color-background-light;
    flex-wrap: wrap;
    padding: 1rem;

    p {
      flex: 0 0 100%;
      text-align: center;
      font-size: 1rem;
      margin-bottom: 0;
    }
  }
  .icons {
    display: flex;
  }
  svg {
    width: 2rem;
    height: 2rem;
    fill: $color-primary;
    margin: 0.25rem 0.75rem 0.5rem;
    transition: fill 0.2s;

    &:hover {
      fill: rgba($color-primary, 0.8);
    }
  }
</style>
