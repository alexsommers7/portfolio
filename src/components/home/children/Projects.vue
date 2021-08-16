<template>
  <section class="track projects full-width" data-sidebar="Projects">
    <span class="anchor-span" id="projects"></span>
    <h3 class="heading heading--3 hide-for-large">PROJECTS</h3>
    <h4 class="heading heading--4 heading--section">Interfaces for the Modern World</h4>
    <div class="project-group" ref="projects">
      <article v-for="project in projects" :key="project.title" class="project">
        <img :src="project.image" :alt="project.alt" loading="lazy" width="333" height="285" />
        <p class="title">{{ project.title }}</p>
        <p>{{ project.description }}</p>
        <ul class="tools">
          <li v-for="tool in project.tools" :key="tool">{{ tool }}</li>
        </ul>
        <div class="btns">
          <a :href="project.primaryLink" class="btn btn--primary" target="_blank" rel="noopener">{{
            project.primaryCTA
          }}</a>
          <a :href="project.secondaryLink" class="btn btn--secondary" target="_blank" rel="noopener">{{
            project.secondaryCTA
          }}</a>
        </div>
      </article>
    </div>
    <router-link to="/project-showcase" class="btn btn--secondary cta" @click.native="snapToTop"
      >View All Projects
    </router-link>
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
          alt: "Heritage Assisted Living website displayed on various devices",
        },
        {
          title: "Vue Shop",
          description:
            "A mock landing page for a shop, built with Vue.js. Features sorting, filtering, and cart functionality. Product data is fetched asynchronously from a fake store API endpoint.",
          tools: ["Vue.js", "SCSS", "Fake Store API", "Foundation", "Babel", "Netlify"],
          primaryCTA: "View Demo",
          primaryLink: "https://vue-fake-shop.netlify.app/",
          secondaryCTA: "View Code",
          secondaryLink: "https://github.com/alexsommers7/vue-shop",
          image: require("@/assets/project-showcase--vue-shop.png"),
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
          alt: "Glamorous Bags website displayed on various devices",
        },
      ],
    };
  },
  methods: {
    snapToTop() {
      window.scrollTo({ top: 0 });
    },
    configureScrollTrigger() {
      gsap.set("article.project", { y: 100, opacity: 0 });

      ScrollTrigger.batch("article.project", {
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            duration: 0.8,
            ease: "power4.out",
            y: 0,
            stagger: { each: 0.25 },
            overwrite: true,
          }),
        onEnterBack: (batch) =>
          gsap.to(batch, { opacity: 1, duration: 0.8, ease: "power4.out", y: 0, stagger: 0.25, overwrite: true }),
        start: "top 75%",
      });

      ScrollTrigger.batch("article.project", {
        onLeaveBack: (batch) => gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
        start: "top bottom",
      });

      ScrollTrigger.addEventListener("refreshInit", () => gsap.set("article.project", { y: 0, opacity: 1 }));
    },
  },
  mounted() {
    this.configureScrollTrigger();
  },
};
</script>
