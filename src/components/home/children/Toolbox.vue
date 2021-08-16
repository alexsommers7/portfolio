<template>
  <section class="track toolbox" data-sidebar="Toolbox">
    <span class="anchor-span" id="toolbox"></span>
    <h3 class="heading heading--3 hide-for-large">TOOLBOX</h3>
    <h4 class="heading heading--4 heading--section">Modern Technology, Efficient Workflow</h4>
    <div class="toolbox__toggle">
      <div class="buttons">
        <button class="btn active" data-toggle="left" @click="toggleButton">Tech</button>
        <button class="btn" data-toggle="right" @click="toggleButton">Design</button>
      </div>
    </div>
    <transition-group name="list" tag="ul" class="tools" mode="out-in">
      <li v-for="tool in toolsToShow" :key="tool.title" class="list-item">
        <div>
          <img
            :src="tool.icon"
            :alt="`${tool.alt ? tool.alt : tool.title} Icon`"
            :class="`${tool.class ? tool.class : ''}`"
          />
          <p>{{ tool.title }}</p>
        </div>
      </li>
    </transition-group>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Toolbox",
  data() {
    return {
      togglePosition: "left",
      currentType: "tech",
      tools: [
        {
          title: "Vue.js",
          icon: require("@/assets/icons/vue.svg"),
          type: "tech",
          alt: "Vue JavaScript Framework",
        },
        {
          title: "Alpine.js",
          icon: require("@/assets/icons/alpine.svg"),
          type: "tech",
          class: "brighten",
          alt: "Alpine JavaScript Framework",
        },
        {
          title: "JavaScript",
          icon: require("@/assets/icons/javascript.svg"),
          type: "tech",
          alt: "JavaScript (ES6)",
        },
        {
          title: "SCSS",
          icon: require("@/assets/icons/sass.svg"),
          type: "tech",
          alt: "Sassy CSS (SCSS)",
        },
        {
          title: "CSS",
          icon: require("@/assets/icons/css.svg"),
          type: "tech",
          alt: "Cascading Style Sheets (CSS)",
        },
        {
          title: "HTML",
          icon: require("@/assets/icons/html.svg"),
          type: "tech",
          alt: "HyperText Markup Language (HTML)",
        },
        {
          title: "GSAP",
          icon: require("@/assets/icons/gsap.svg"),
          type: "tech",
          alt: "Greensock Animation Platform (GSAP)",
        },
        {
          title: "Foundation",
          icon: require("@/assets/icons/zurb-foundation.svg"),
          type: "tech",
          alt: "Zurb Foundation CSS Framework",
        },
        {
          title: "Bootstrap",
          icon: require("@/assets/icons/bootstrap.svg"),
          type: "tech",
          alt: "Bootstrap CSS Framework",
        },
        {
          title: "Ampscript",
          icon: require("@/assets/icons/marketing-cloud.svg"),
          type: "tech",
          alt: "Salesforce Marketing Cloud",
        },
        {
          title: "Git",
          icon: require("@/assets/icons/git.svg"),
          type: "tech",
          alt: "Git Version Control",
        },
        {
          title: "NPM",
          icon: require("@/assets/icons/npm.svg"),
          type: "tech",
          alt: "Node Package Manager (NPM)",
        },
        {
          title: "Photoshop",
          icon: require("@/assets/icons/photoshop.svg"),
          type: "design",
          alt: "Adobe Photoshop",
        },
        {
          title: "Illustrator",
          icon: require("@/assets/icons/illustrator.svg"),
          type: "design",
          alt: "Adobe Illustrator",
        },
        {
          title: "XD",
          icon: require("@/assets/icons/xd.svg"),
          type: "design",
          alt: "Adobe XD",
        },
        {
          title: "Lightroom",
          icon: require("@/assets/icons/lightroom.svg"),
          type: "design",
          alt: "Adobe Lightroom",
        },
        {
          title: "Figma",
          icon: require("@/assets/icons/figma.svg"),
          type: "design",
          alt: "Figma Design Software",
        },
      ],
    };
  },
  computed: {
    toolsToShow: function() {
      return this.tools.filter((tool) => tool.type === this.currentType);
    },
  },
  methods: {
    toggleButton(event, forceTo = "left") {
      let direction = event ? event.target.dataset.toggle : forceTo;
      if (direction == this.togglePosition) return;
      this.$el.querySelectorAll(".toolbox__toggle button").forEach((btn) => btn.classList.toggle("active"));
      this.$el.querySelector(".buttons").classList = `buttons ${direction}`;
      this.currentType = direction === "left" ? "tech" : "design";
      this.togglePosition = direction;
    },
    calculateIconsHeight() {
      // if not on mobile, keep this element at initial height when toggled to avoid layout shift
      let toolsEl = this.$el.querySelector(".tools");
      if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 1200) {
        toolsEl.style.height = "auto";
        return;
      }
      this.toggleButton(null, "left");
      toolsEl.style.height = "auto";
      setTimeout(function() {
        // slight pause to let window finish resizing - was being inconsistent
        let height = toolsEl.getBoundingClientRect().height;
        toolsEl.style.height = `${height}px`;
      }, 800);
    },
    configureScrollTrigger() {
      gsap.set(".toolbox .list-item", { y: 100, opacity: 0 });

      ScrollTrigger.batch(".toolbox .list-item", {
        start: "top 85%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            duration: 0.2,
            ease: "power4.in",
            y: 0,
            stagger: { each: 0.08 },
            overwrite: true,
            onCompleteParams: [batch],
            // prevent gsap inline style from messing with Vue list transition
            onComplete: (batch) => batch.forEach((item) => item.removeAttribute("style")),
          }),
      });

      ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".toolbox .list-item", { y: 0, opacity: 1 }));
    },
  },
  mounted() {
    this.calculateIconsHeight();
    this.configureScrollTrigger();
    window.addEventListener("resize", this.calculateIconsHeight);
  },
};
</script>

<style scoped lang="scss">
@import "../../../scss/_mixins";
@import "../../../scss/_variables";

.toolbox {
  &__toggle {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    margin: 4rem auto 3rem;

    .buttons {
      background-color: $color-background-light;
      width: Min(16rem, 100%);
      border-radius: 100px;
      position: relative;
      padding: 0 4px;

      &::after {
        content: "";
        transition: transform 0.2s ease-in-out;
        will-change: transform;
        width: Min(8rem, 50%);
        height: calc(100% - 8px);
        position: absolute;
        left: 0;
        top: 4px;
        transform: translateX(4px);
        display: block;
        border-radius: 100px;
        background-image: linear-gradient(90deg, $color-primary, $color-primary);
        cursor: pointer;
      }

      &.right::after {
        transform: translateX(calc(100% - 4px));
      }

      button {
        appearance: none;
        border-radius: 100px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: $color-primary;
        width: 50%;
        height: 100%;
        padding: 1rem;
        font-size: 1.2rem;
        font-weight: 500;
        text-transform: none;
        z-index: 10;
        line-height: 1;
        transition: color 0.2s ease-in-out;

        &.active {
          color: $color-text-dark;
        }
      }
    }
  }

  .tools {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2rem auto;
    max-width: 1000px;

    li {
      margin: 0.5rem;
      padding: 1rem;
      width: 8rem;
      height: 8rem;
      flex: 0 0 8rem;
      background-color: $color-background-light;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: $design-border-radius-default;

      div {
        img {
          width: 3.5rem;
          height: 3.5rem;
          display: block;
          margin: auto;

          &.brighten {
            filter: brightness(1.5);
          }
        }

        p {
          margin-bottom: 0;
          margin-top: 1rem;
          line-height: 1;
        }
      }
    }
  }
}
</style>
