<template>
  <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
    <section class="projects project-showcase full-width">
      <div class="headings">
        <h1 class="heading heading--3">PROJECTS</h1>
        <h2 class="heading heading--4 heading--section">Interfaces for the Modern World</h2>
      </div>
      <div class="project-group">
        <article v-for="project in projects" :key="project.title" class="project">
          <picture>
            <source :srcset="project.imageWebp" type="image/webp" />
            <img class="photo" :src="project.image" :alt="project.alt" />
          </picture>
          <p class="title">{{ project.title }}</p>
          <p class="description">{{ project.description }}</p>
          <ul class="tools">
            <li v-for="tool in project.tools" :key="tool">{{ tool }}</li>
          </ul>
          <div class="btns">
            <a
              v-if="project.title !== 'AlexSommers.com'"
              :href="project.primaryLink"
              class="btn btn--primary"
              target="_blank"
              rel="noopener"
              :aria-label="`${project.primaryCTA} for ${project.title}`"
              >{{ project.primaryCTA }}</a
            >
            <a
              :href="project.secondaryLink"
              class="btn"
              :class="project.title === 'AlexSommers.com' ? 'btn--primary' : 'btn--secondary'"
              target="_blank"
              rel="noopener"
              :aria-label="`${project.secondaryCTA} for ${project.title}`"
              >{{ project.secondaryCTA }}</a
            >
          </div>
        </article>
      </div>
      <router-link to="/" class="btn btn--secondary cta">Return Home</router-link>
    </section>
  </transition>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'projectShowcase',
  data() {
    return {
      projects: [
        {
          title: 'StorePI',
          description:
            'An open-source REST API that was created for use in e-commerce prototyping and Front-End Developer talent evaluations. Custom documentation is in progress.',
          tools: ['Node', 'Express', 'MongoDB', 'Mongoose', 'Heroku'],
          primaryCTA: 'View Docs',
          primaryLink: 'https://documenter.getpostman.com/view/12907395/UyxjF694',
          secondaryCTA: 'View Code',
          secondaryLink: 'https://github.com/alexsommers7/StorePI',
          image: require('@/assets/project-showcase--storepi.png'),
          imageWebp: require('@/assets/project-showcase--storepi.webp'),
          alt: 'StorePI documentation displayed on various devices',
        },
        {
          title: 'Vue Shop',
          description:
            'A mock ecommerce landing page that demonstrates the capabilities of StorePI. Features sorting, filtering, and cart functionality with more to come.',
          tools: ['Vue 3', 'Pinia', 'Quasar', 'StorePI', 'SCSS', 'Netlify'],
          primaryCTA: 'View Demo',
          primaryLink: 'https://vue-fake-shop.netlify.app/',
          secondaryCTA: 'View Code',
          secondaryLink: 'https://github.com/alexsommers7/vue-shop',
          image: require('@/assets/project-showcase--vue-shop.png'),
          imageWebp: require('@/assets/project-showcase--vue-shop.webp'),
          alt: 'Vue Shop website displayed on various devices',
        },
        {
          title: 'AlexSommers.com',
          description:
            "This bad boy right here! I built it as a one-stop-shop to house my work, resume, and contact information. What's more, it's a way to document my journey and share it with others.",
          tools: ['Vue.js', 'Vue Router', 'GSAP', 'SCSS', 'Netlify', 'Adobe XD'],
          primaryCTA: 'View Demo',
          primaryLink: 'https://alexsommers.com/',
          secondaryCTA: 'View Code',
          secondaryLink: 'https://github.com/alexsommers7/portfolio',
          image: require('@/assets/project-showcase--alex-sommers.png'),
          imageWebp: require('@/assets/project-showcase--alex-sommers.webp'),
          alt: 'AlexSommers.com displayed on various devices',
        },
        {
          title: 'Heritage Assisted Living',
          description:
            'A website for a local Assisted Living Facility. The owners of this business were looking for a way to tell their story in a visual manner as well as help in establishing their digital footprint.',
          tools: ['JavaScript', 'SCSS', 'HTML', 'Netlify', 'Adobe XD'],
          primaryCTA: 'View Demo',
          primaryLink: 'https://heritagephoenix.com/',
          secondaryCTA: 'View Code',
          secondaryLink: 'https://github.com/alexsommers7/heritage-assisted-living',
          image: require('@/assets/project-showcase--heritage-assited-living.png'),
          imageWebp: require('@/assets/project-showcase--heritage-assited-living.webp'),
          alt: 'Heritage Assisted Living website displayed on various devices',
        },
        {
          title: 'Lovely Hearts AZ',
          description:
            'Website for a local in-home care provider who was looking for a way to provide a high-level overview of their services, as well as provide a method of communication for prospective customers.',
          tools: ['JavaScript', 'SCSS', 'HTML', 'Netlify', 'Adobe XD'],
          primaryCTA: 'View Demo',
          primaryLink: 'https://lovelyheartsaz.com/',
          secondaryCTA: 'View Code',
          secondaryLink: 'https://github.com/alexsommers7/lovelyheartsaz',
          image: require('@/assets/project-showcase--lovely-hearts-az.png'),
          imageWebp: require('@/assets/project-showcase--lovely-hearts-az.webp'),
          alt: 'Lovely Hearts AZ website displayed on various devices',
        },
        {
          title: 'J.A Dancik Electric',
          description:
            'My first "real world" website! This client, a local electrician, wanted to keep the information basic and simply establish a way for current and future customers to contact them.',
          tools: ['JavaScript', 'SCSS', 'HTML', 'Netlify', 'Adobe XD'],
          primaryCTA: 'View Demo',
          primaryLink: 'https://jadancikelectric.com/',
          secondaryCTA: 'View Code',
          secondaryLink: 'https://github.com/alexsommers7/ja-dancik-electric',
          image: require('@/assets/project-showcase--jad-electric.png'),
          imageWebp: require('@/assets/project-showcase--jad-electric.webp'),
          alt: 'J.A. Dancik Electric website displayed on various devices',
        },
      ],
    };
  },
  methods: {
    configureScrollTrigger() {
      gsap.set('.project-showcase article.project', { y: 100, opacity: 0 });

      ScrollTrigger.batch('.project-showcase article.project', {
        start: 'top 85%',
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            duration: 1.1,
            y: 0,
            stagger: { each: 0.25 },
            overwrite: true,
            ease: 'expo.out',
          }),
      });

      ScrollTrigger.addEventListener('refreshInit', () => {
        if (!this.$el.querySelector('.project-showcase article.project')) return;
        gsap.set('.project-showcase article.project', { y: 0, opacity: 1 });
      });
    },
  },
  mounted() {
    this.configureScrollTrigger();
  },
};
</script>

<style scoped lang="scss">
.headings {
  margin-top: 2rem;
}
.heading--3 {
  top: 4rem;
}

@include respond(desk-small) {
  .headings {
    padding-left: 4rem;
  }
  .heading--3 {
    left: 4rem;
  }
  .heading--4 {
    text-align: left;
  }
}
</style>
