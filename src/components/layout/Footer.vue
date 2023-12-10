<script setup>
  import { resumeLink } from '@/utils/data/jobs';
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      name: 'Github',
      url: 'https://github.com/alexsommers7',
      icon: 'github',
      label: 'Visit Github Profile',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alex-sommers-15561a10a/',
      icon: 'linkedin',
      label: 'Visit LinkedIn Profile',
    },
    {
      name: 'Resume',
      url: resumeLink,
      icon: 'document',
      label: 'View Resume',
    },
  ];
</script>

<template>
  <footer class="flex-center">
    <div class="hide-for-large icons">
      <a
        v-for="link in footerLinks"
        :key="link.name"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="link.label"
      >
        <Icon aria-hidden="true" :name="link.icon" />
      </a>
    </div>

    <p>© Alex Sommers {{ currentYear }}. All Rights Reserved.</p>
  </footer>
</template>

<style scoped lang="scss">
  footer {
    background-color: $color-background-light;
    color: $color-text-light;
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
