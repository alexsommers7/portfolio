<template>
  <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
    <section class="projects full-width">
      <div class="headings">
        <h3 class="heading heading--3">PROJECTS</h3>
        <h4 class="heading heading--4 heading--section">Interfaces for the Modern World</h4>
      </div>
      <div class="project-group">
        <article v-for="project in projects" :key="project.title" class="project">
          <picture>
            <source :srcset="project.imageWebp" type="image/webp" />
            <img class="photo" :src="project.image" :alt="project.alt" width="333" height="285" />
          </picture>
          <p class="title">{{ project.title }}</p>
          <p>{{ project.description }}</p>
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
      <router-link :to="{ path: '/', hash: '#resume' }" class="btn btn--secondary cta">Return Home</router-link>
    </section>
  </transition>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "projectShowcase",
  data() {
    return {
      projects: [
        {
          title: "AlexSommers.com",
          description:
            "This bad boy right here! I built it as a one-stop-shop to house my work, resume, and contact information. What's more, it's a way to document my journey and share it with others.",
          tools: ["Vue.js", "Vue Router", "GSAP", "SCSS", "Netlify", "Adobe XD"],
          primaryCTA: "View Demo",
          primaryLink: "https://lovelyheartsaz.com/",
          secondaryCTA: "View Code",
          secondaryLink: "https://github.com/alexsommers7/portfolio",
          image: require("@/assets/project-showcase--alex-sommers.png"),
          imageWebp: require("@/assets/project-showcase--alex-sommers.webp"),
          alt: "AlexSommers.com displayed on various devices",
        },
        {
          title: "Lovely Hearts AZ",
          description:
            "Website for a local in-home care provider who was looking for a way to provide a high-level overview of their services, as well as provide a method of communication for prospective customers.",
          tools: ["JavaScript", "SCSS", "HTML", "Netlify", "Adobe XD"],
          primaryCTA: "View Demo",
          primaryLink: "https://lovelyheartsaz.com/",
          secondaryCTA: "View Code",
          secondaryLink: "https://github.com/alexsommers7/lovelyheartsaz",
          image: require("@/assets/project-showcase--lovely-hearts-az.png"),
          imageWebp: require("@/assets/project-showcase--lovely-hearts-az.webp"),
          alt: "Lovely Hearts AZ website displayed on various devices",
        },
        {
          title: "J.A Dancik Electric",
          description:
            'My first "real world" website! This client, a local electrician, wanted to keep the information basic and simply establish a way for current and future customers to contact them.',
          tools: ["JavaScript", "SCSS", "HTML", "Netlify", "Adobe XD"],
          primaryCTA: "View Demo",
          primaryLink: "https://jadancikelectric.com/",
          secondaryCTA: "View Code",
          secondaryLink: "https://github.com/alexsommers7/ja-dancik-electric",
          image: require("@/assets/project-showcase--jad-electric.png"),
          imageWebp: require("@/assets/project-showcase--jad-electric.webp"),
          alt: "J.A. Dancik Electric website displayed on various devices",
        },
        {
          title: "Heritage Assisted Living",
          description:
            "A website for a local Assisted Living Facility. The owners of this business were looking for a way to tell their story in a visual manner as well as help in establishing their digital footprint.",
          tools: ["JavaScript", "SCSS", "HTML", "Netlify", "Adobe XD"],
          primaryCTA: "View Demo",
          primaryLink: "https://heritagephoenix.com/",
          secondaryCTA: "View Code",
          secondaryLink: "https://github.com/alexsommers7/heritage-assisted-living",
          image: require("@/assets/project-showcase--heritage-assited-living.png"),
          imageWebp: require("@/assets/project-showcase--heritage-assited-living.webp"),
          alt: "Heritage Assisted Living website displayed on various devices",
        },
        {
          title: "Vue Shop",
          description:
            "A mock landing page for a shop, built with Vue.js. Features sorting, filtering, and cart functionality. Product and category data is fetched from a fake store API endpoint.",
          tools: ["Vue.js", "SCSS", "Fake Store API", "Foundation", "Babel", "Netlify"],
          primaryCTA: "View Demo",
          primaryLink: "https://vue-fake-shop.netlify.app/",
          secondaryCTA: "View Code",
          secondaryLink: "https://github.com/alexsommers7/vue-shop",
          image: require("@/assets/project-showcase--vue-shop.png"),
          imageWebp: require("@/assets/project-showcase--vue-shop.webp"),
          alt: "Vue Shop website displayed on various devices",
        },
        {
          title: "Glamorous Bags By Shae",
          description:
            "Small business website developed for a local fashion boutique. This business wanted a way to generate leads and provide a digital catalog for their product line. Site passcode: glamour.",
          tools: ["JavaScript", "SCSS", "HTML", "Netlify", "Adobe XD"],
          primaryCTA: "View Demo",
          primaryLink: "https://glamorousbagsbyshae.com/",
          secondaryCTA: "View Code",
          secondaryLink: "https://github.com/alexsommers7/glamorous-bags-by-shae",
          image: require("@/assets/project-showcase--glamorous-bags.png"),
          imageWebp: require("@/assets/project-showcase--glamorous-bags.webp"),
          alt: "Glamorous Bags website displayed on various devices",
        },
      ],
    };
  },
  methods: {
    configureScrollTrigger() {
      gsap.set("article.project", { y: 100, opacity: 0 });

      ScrollTrigger.batch("article.project", {
        start: "top 80%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            duration: 1.1,
            y: 0,
            stagger: { each: 0.25 },
            overwrite: true,
            ease: "expo.out",
          }),
      });

      ScrollTrigger.addEventListener("refreshInit", () => gsap.set("article.project", { y: 0, opacity: 1 }));
    },
  },
  mounted() {
    gsap.to(window, {
      // fixing weird router bug on safari
      // was snapping to middle of page
      duration: 1.2,
      ease: "expo.inOut",
      scrollTo: { x: 0, y: 0 },
    });
    this.configureScrollTrigger();
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_mixins";
@import "@/scss/_variables";

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
