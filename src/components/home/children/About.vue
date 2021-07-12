<template>
  <section class="track about" data-section="About">
    <span class="anchor-span" id="about"></span>
    <div class="about__intro">
      <h3 class="heading heading--3 hide-for-large">ABOUT ME</h3>
      <p><strong class="about__heading typewriter">Hey there, I'm Alex.</strong></p>
      <p>I'm a <span class="color-primary">Front End Web Developer</span> based out of Tempe, Arizona.</p>
      <p>
        In both freelance and professional settings, I harness the power of modern web technologies to craft memorable,
        accessible user experiences.
      </p>
    </div>
    <div class="about__lately">
      <h4 class="heading heading--4">What I've Been Building With Lately</h4>
      <ul class="languages">
        <li v-for="lang in recentLanguages" :key="lang.title">
          <img :src="lang.icon" :alt="lang.alt" />
          <p>{{ lang.title }}</p>
        </li>
      </ul>
      <a href="#toolbox" class="btn btn--secondary"><strong>See What's in My Toolbox</strong></a>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      recentLanguages: [
        {
          title: "Vue",
          icon: require("@/assets/icons/vue.svg"),
          alt: "Vue.js",
        },
        {
          title: "JavaScript",
          icon: require("@/assets/icons/javascript.svg"),
          alt: "JavaScript",
        },
        {
          title: "GSAP",
          icon: require("@/assets/icons/gsap.svg"),
          alt: "Green Sock Animation Platform (GSAP)",
        },
        {
          title: "SCSS",
          icon: require("@/assets/icons/sass.svg"),
          alt: "Sassy CSS (SCSS)",
        },
      ],
    };
  },
  /* 
      timeline.to("#about .typewriter", {
      text: { value: "Hey there, I'm Alex." },
      duration: 0.5,
      ease: "none",
    });  
  */
};
</script>

<style scoped lang="scss">
@import "../../../scss/_mixins";
@import "../../../scss/_variables";

.about {
  margin-top: 3rem;

  @include respond(desk-small) {
    margin-top: 0;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  }

  @include respond(desk-xlarge) {
    grid-template-columns: minmax(550px, 3fr) minmax(550px, 2fr);
  }

  &__lately {
    @media all and (min-width: 1289px) {
      // arbitrary breakpoint
      border-left: 2px solid $color-background-light;
      padding: 1rem 2rem;
    }

    .heading {
      text-align: center;
      margin-top: 4rem;

      @include respond(desk-small) {
        text-align: left;
        margin-top: 0;
      }
    }

    .btn {
      margin: auto;
      max-width: 19rem;
      width: 75%;
      display: block;

      @include respond(desk-small) {
        margin: 0;
      }
    }

    .languages {
      list-style: none;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 2rem 0 2rem -0.5rem; // acct for li first-child left margin

      @include respond(desk-small) {
        justify-content: flex-start;
      }

      li {
        margin: 0.5rem;
        padding: 1rem;
        width: 8rem;
        height: 8rem;
        flex: 0 0 8rem;
        background-color: $color-background-light;
        text-align: center;

        img {
          width: 60%;
          height: 60%;
        }

        p {
          margin-bottom: 0;
          padding-top: 0.5rem;
        }
      }
    }
  }

  &__heading {
    font-size: clamp(1.8rem, calc(-0.875rem + 8.333vw), 2rem);
    line-height: 1;
    margin-bottom: 1.5rem;
  }
}
</style>
