<template>
  <footer class="flex-center">
    <div class="hide-for-large icons">
      <a
        href="https://github.com/alexsommers7"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to Github Profile"
      >
        <IconGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/alex-sommers-15561a10a/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to LinkedIn Profile"
      >
        <IconLinkedin />
      </a>

      <a
        :href="resumeLink"
        aria-label="Link to Download Resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconDocument />
      </a>
    </div>

    <p>© Alex Sommers {{ currentYear }}. All Rights Reserved.</p>
  </footer>
</template>

<script>
  import { resumeLink } from '@/utils/data/jobs';
  import IconGithub from '@/assets/icons/github.svg';
  import IconLinkedin from '@/assets/icons/linkedin.svg';
  import IconDocument from '@/assets/icons/document.svg';

  export default {
    name: 'Footer',
    data() {
      return {
        currentYear: new Date().getFullYear(),
        resumeLink,
      };
    },
    components: {
      IconGithub,
      IconLinkedin,
      IconDocument,
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
