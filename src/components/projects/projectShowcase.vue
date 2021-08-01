<template>
  <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
    <section class="projects full-width">
      <span class="anchor-span" id="projects"></span>
      <h3 class="heading heading--3 hide-for-large">PROJECTS</h3>
      <h4 class="heading heading--4 heading--section">Interfaces for the Modern World</h4>
      <div class="project-group">
        <article v-for="project in projects" :key="project.title">
          <img :src="project.image" :alt="project.alt" />
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
              >{{ project.primaryCTA }}</a
            >
            <a
              :href="project.secondaryLink"
              class="btn"
              :class="project.title === 'AlexSommers.com' ? 'btn--primary' : 'btn--secondary'"
              target="_blank"
              rel="noopener"
              >{{ project.secondaryCTA }}</a
            >
          </div>
        </article>
      </div>
      <router-link to="/" class="btn btn--secondary cta" @click.native="snapToTop">Return Home</router-link>
    </section>
  </transition>
</template>

<script>
export default {
  name: "projectShowcase",
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
        {
          title: "AlexSommers.com",
          description:
            "This bad boy right here! I built it as a one-stop-shop to house my work, resume, and contact information. What's more, it's a way to document my journey and share it with others.",
          tools: ["Vue.js", "Vue Router", "GSAP", "SCSS", "Foundation", "Netlify", "Adobe XD"],
          primaryCTA: "View Demo",
          primaryLink: "https://lovelyheartsaz.com/",
          secondaryCTA: "View Code",
          secondaryLink: "https://github.com/alexsommers7/portfolio",
          image: require("@/assets/project-showcase--lovely-hearts-az.png"),
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
          alt: "J.A. Dancik Electric website displayed on various devices",
        },
      ],
    };
  },
  methods: {
    snapToTop() {
      window.scrollTo({ top: 0 });
    },
  },
};
</script>

<style scoped></style>
