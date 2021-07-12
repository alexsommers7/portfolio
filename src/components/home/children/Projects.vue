<template>
  <section class="track projects full-width" data-section="Projects">
    <span class="anchor-span" id="projects"></span>
    <h3 class="heading heading--3 hide-for-large">PROJECTS</h3>
    <h4 class="heading heading--4">Interfaces for the Modern World</h4>
    <div class="project-group">
      <article v-for="project in projects" :key="project.title">
        <img :src="project.image" :alt="project.alt" />
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
    <router-link to="/project-showcase" class="btn btn--secondary cta">View All Projects</router-link>
  </section>
</template>

<script>
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
            "A fake shop landing page built with Vue, featuring sorting, filtering, and cart functionality. Product data is fetched asynchronously from a fake store API endpoint.",
          tools: ["Vue", "SCSS", "Fake Store API", "Foundation", "Babel", "Netlify"],
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
  props: {},
};
</script>

<style scoped lang="scss">
@import "../../../scss/_mixins";
@import "../../../scss/_variables";

.projects {
  margin-top: 1rem;

  @include respond(desk-small) {
    margin-top: 6rem;
  }

  .heading--4 {
    text-align: center;

    @include respond(tab-port) {
      text-align: left;
    }

    @include respond(desk-small) {
      text-align: center;
    }
  }

  .project-group {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 100%));
    justify-content: center;
    grid-gap: 3rem;
    max-width: 1700px;
    margin: 4rem auto 0;

    @include respond(tab-port) {
      grid-template-columns: repeat(auto-fit, 480px);
    }

    article {
      background-color: $color-background-light;
      padding: 2rem 1rem;
      margin: 0 auto;
      border-radius: $design-border-radius-default;
      width: 480px;
      max-width: 100%;

      @include respond(desk-medium) {
        padding: 2rem;
      }

      img {
        max-width: 80%;
        display: block;
        margin: auto;
      }

      .title {
        color: $color-primary;
        padding: 1rem 0.5rem 0.5rem;
        font-size: 2rem;
        font-weight: 500;
        text-align: center;
        line-height: 1.2;
      }

      .tools {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        margin: 2rem 0 0 -0.5rem; // acct for margin of children

        li {
          padding: 0.5rem 1rem;
          margin: 0.5rem;
          font-size: 1.2rem;
          font-weight: 500;
          color: $color-primary;
          background-color: $color-background;
          border-radius: $design-border-radius-default;
        }
      }

      .btns {
        margin-top: 2rem;
        display: flex;

        a {
          flex: 0 0 40%;

          &.btn--primary {
            margin-right: 1.25rem;
          }
        }
      }
    }
  }

  .cta {
    max-width: 15rem;
    display: block;
    margin: 4rem auto;
  }
}
</style>
