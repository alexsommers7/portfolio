<template>
  <section class="track projects full-width" data-sidebar="Projects">
    <span class="anchor-span" id="projects"></span>
    <h3 class="heading heading--3 hide-for-large">PROJECTS</h3>
    <h4 class="heading heading--4 heading--section">Interfaces for the Modern World</h4>
    <div class="project-group" ref="projects">
      <article v-for="project in projects" :key="project.title" class="project">
        <picture>
          <source :srcset="project.imageWebp" type="image/webp" />
          <img class="photo" :src="project.image" :alt="project.alt" loading="lazy" width="333" height="285" />
        </picture>
        <p class="title">{{ project.title }}</p>
        <p>{{ project.description }}</p>
        <ul class="tools">
          <li v-for="tool in project.tools" :key="tool">{{ tool }}</li>
        </ul>
        <div class="btns">
          <a
            :href="project.primaryLink"
            class="btn btn--primary"
            target="_blank"
            rel="noopener"
            :aria-label="`${project.primaryCTA} for ${project.title}`"
            >{{ project.primaryCTA }}</a
          >
          <a
            :href="project.secondaryLink"
            class="btn btn--secondary"
            target="_blank"
            rel="noopener"
            :aria-label="`${project.secondaryCTA} for ${project.title}`"
            >{{ project.secondaryCTA }}</a
          >
        </div>
      </article>
    </div>
    <router-link to="/project-showcase" class="btn btn--secondary cta">View All Projects </router-link>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Projects",
  data() {
    return {
      projects: [
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
            "A mock landing page for a shop, built with Vue.js. Features sorting, filtering, and cart functionality. Product and catagory data is fetched from a fake store API endpoint.",
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
            duration: 1.2,
            y: 0,
            stagger: { each: 0.2 },
            overwrite: true,
            ease: "expo.out",
          }),
      });

      ScrollTrigger.addEventListener("refreshInit", () => gsap.set("article.project", { y: 0, opacity: 1 }));
    },
  },
  mounted() {
    this.configureScrollTrigger();
  },
};
</script>
