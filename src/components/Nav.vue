<template>
  <header>
    <nav class="navigation" aria-label="Site Navigation">
      <a class="skip-link" href="#main">Skip to content</a>
      <svg
        role="button"
        :aria-label="this.$route.path === '/' ? 'Scroll to Top' : 'Home'"
        class="navigation__logo"
        viewBox="0 0 125 105.4"
        data-section="top"
        @click="onLogoClick"
        style="enable-background:new 0 0 125 105.4;"
      >
        <polygon class="st4" points="62.5,4.47 23.46,47.34 101.54,47.34 " />
        <polygon class="st4" points="62.5,100.62 101.54,57.75 23.46,57.75 " />
        <polygon class="st4" points="62.5,23.63 40.9,47.34 84.1,47.34 " />
        <polygon class="st4" points="62.5,81.47 84.1,57.75 40.9,57.75 " />
        <line class="st4" x1="62.5" y1="24.62" x2="62.5" y2="81.01" />
      </svg>
      <button class="navigation__toggle tab-focus" aria-label="Toggle Navigation" @click="toggleNav">
        <span class="navigation__hamburger navigation__hamburger--1"></span>
        <span class="navigation__hamburger navigation__hamburger--2"></span>
        <span class="navigation__hamburger navigation__hamburger--3"></span>
      </button>
      <ul class="navigation__list" @click="toggleNav">
        <li><button data-path="/" data-section="about" class="btn" @click="onNavItemClick">ABOUT</button></li>
        <li><button data-path="/" data-section="projects" class="btn" @click="onNavItemClick">PROJECTS</button></li>
        <li><button data-path="/" data-section="resume" class="btn" @click="onNavItemClick">RESUME</button></li>
        <li><button data-path="/" data-section="contact" class="btn" @click="onNavItemClick">CONTACT</button></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export default {
  name: "Nav",
  data() {
    return {
      timeline: gsap.timeline(),
      nav: "",
      navList: "",
      portraitMode: window.matchMedia("(orientation: portrait)").matches,
      mobileNavHeight: this.getCustomProperty("--nav-mobile-height"),
      desktopNavWidth: this.getCustomProperty("--nav-desktop-width"),
      scrollbarWidth: this.getCustomProperty("--scrollbar-width"),
    };
  },
  computed: {
    mobileNavHeightHalf: function() {
      return `${this.mobileNavHeight / 2}px`;
    },
    desktopNavWidthWithScrollbar: function() {
      return `${this.desktopNavWidth - this.scrollbarWidth}px`;
    },
  },
  props: {
    onMobile: Boolean,
  },
  methods: {
    getCustomProperty(propertyName) {
      return parseInt(getComputedStyle(document.documentElement).getPropertyValue(propertyName));
    },
    init() {
      this.nav = this.$el.querySelector("nav.navigation");
      this.navList = this.$el.querySelector(".navigation__list");
      const vm = this;
      window.addEventListener("resize", function() {
        vm.portraitMode = window.matchMedia("(orientation: portrait)").matches;
      });
    },
    resetNav() {
      this.navList.setAttribute("style", "");
      if (this.nav.classList.contains("open")) this.closeNav();
    },
    toggleNav() {
      let nav = this.$el.querySelector("nav");
      nav.classList.contains("open") ? this.closeNav() : this.openNav();
      nav.classList.toggle("open");
    },
    openNav() {
      this.onMobile
        ? this.timeline.fromTo(
            this.navList,
            { top: "-100%" },
            { top: this.mobileNavHeightHalf, duration: 0.4, ease: "power1.out" }
          )
        : this.timeline.fromTo(
            this.navList,
            { left: "-100%" },
            { left: this.desktopNavWidthWithScrollbar, duration: 0.4, ease: "circ.out" }
          );
      this.timeline
        .fromTo(
          ".navigation__list > li",
          { opacity: 0 },
          { opacity: 1, delay: 0.2, duration: 0.15, stagger: 0.05 },
          "<"
        )
        .add(function() {
          // prevent slight twitch on main content
          this.$el.closest("body").classList.add("no-scroll");
        }, "<+.3");
    },
    closeNav() {
      this.$el.closest("body").classList.remove("no-scroll");
      this.onMobile
        ? this.timeline.fromTo(
            this.navList,
            { top: this.mobileNavHeightHalf },
            { top: "-100%", duration: 0.75, ease: "power4.out" }
          )
        : this.timeline.fromTo(
            this.navList,
            { left: this.desktopNavWidthWithScrollbar },
            { left: "-100%", duration: 0.5, ease: "circ.out" }
          );
      this.timeline.fromTo(".navigation__list > li", { opacity: 1 }, { opacity: 0, duration: 0.1 }, "<");
    },
    onNavItemClick(e) {
      e.preventDefault();
      if (e.target.dataset.path && this.$route.path !== e.target.dataset.path) {
        this.$router.push(e.target.dataset.path);
      }
      this.$nextTick(() => {
        gsap.to(window, {
          duration: 1.2,
          ease: "expo.inOut",
          scrollTo: e.target.dataset.section ? `#${e.target.dataset.section}` : { x: 0, y: 0 },
        });
        // a bit hacky here, but ...
        // let gsap.to start running, then while it is, set hash so tabindex moves to the appropriate element
        setTimeout(function() {
          window.location = `#${e.target.dataset.section}`;
        }, 500);
      });
    },
    onLogoClick() {
      this.$route.path !== "/"
        ? this.$router.push("/")
        : gsap.to(window, { duration: 1.2, ease: "expo.inOut", scrollTo: { x: 0, y: 0 } });
    },
  },
  mounted() {
    this.init();
  },
  watch: {
    onMobile: function(newVal) {
      this.resetNav();
      this.nav.classList[newVal ? "remove" : "add"]("isDesktop");
    },
    portraitMode: function() {
      this.resetNav();
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_mixins";
@import "@/scss/_variables";
@import "@/scss/_transitions";

a.skip-link {
  background: $color-primary;
  color: $color-text-dark;
  font-weight: 700;
  width: 100%;
  text-align: center;
  left: 50%;
  top: 0;
  padding: 0.15rem;
  position: absolute;
  opacity: 0;
  transform: translate(-50%, -200%);
  transition: all 0.3s;

  &:focus {
    transform: translate(-50%, 0%);
    opacity: 1;
  }
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-mobile-height);
  z-index: 50;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15);

  @include respond(desk-small) {
    height: 100vh;
    width: var(--nav-desktop-width);
    box-shadow: none;
  }
}

.navigation {
  width: 100%;
  height: 100%;
  background-color: $color-background-light;
  padding: 0 1rem 0 0.25rem; // less on left to align logo
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  transition: background-color 0.25s 0.25s ease;
  transform: none;

  @include respond(desk-small) {
    padding: 0 0.5rem;
    justify-content: center;
  }

  &.isDesktop {
    width: var(--nav-desktop-width);

    .navigation__list {
      left: -100%;
      top: 0;
    }
  }

  &.open {
    background-color: $color-background;

    .navigation__list {
      visibility: visible;

      li {
        opacity: 1;
      }
    }

    .navigation__hamburger {
      &--2 {
        transform: translateX(200%);
        opacity: 0;

        @include respond(desk-small) {
          transform: translateX(-300%);
        }
      }

      &--1,
      &--3 {
        width: 100%;
        top: 50%;
      }

      &--1 {
        transform: rotate(495deg);
      }

      &--3 {
        transform: rotate(-135deg);
      }
    }
  }

  &__logo {
    height: 80%;
    width: auto;

    @include respond(desk-small) {
      display: none;
    }
  }

  &__toggle {
    margin-right: 3px;
    position: relative;
    appearance: none;
    border: none;
    width: 3.5rem;
    height: 3.5rem;
    background-color: transparent;
    cursor: pointer;

    @include respond(desk-small) {
      width: 80%;
      margin-right: 0;
    }

    @include hover {
      &:hover {
        .navigation__hamburger {
          width: 100%;
        }
      }
    }
  }

  &__hamburger {
    transition: transform 0.8s cubic-bezier(0.06, 0.975, 0.195, 0.985), width 0.3s;
    position: absolute;
    height: 2px;
    background-color: $color-primary;

    &--2 {
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &--1,
    &--3 {
      width: 40%;
    }

    &--1 {
      top: 25%;
      left: 0;
    }

    &--3 {
      bottom: 25%;
      right: 0;
    }
  }

  &__list {
    visibility: hidden;
    position: fixed;
    top: -100%;
    left: 0;
    height: 100%;
    overflow-y: auto;
    width: 100vw;
    list-style: none;
    z-index: 40;
    background-color: $color-background-light;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: center;
    text-align: center;
    z-index: -1;
    font-weight: 700;
    transition: visibility 1s;

    @include respond(desk-small) {
      top: 0;
      left: var(--nav-desktop-width);
      height: 100vh;
      width: calc(100% - (var(--nav-desktop-width) * 2));
      flex-direction: column;
      flex-wrap: nowrap;
    }

    li {
      flex: 0 0 75%;
      margin: 1rem auto;
      font-size: 2.5rem;
      opacity: 0;
      background-color: $color-background;
      border-bottom: 2px solid $color-primary;
      transition: all 0.3s;

      @include respond(desk-small) {
        flex-basis: auto;
        font-size: 3.5rem;
        width: 30%;
      }

      @include respond(desk-medium) {
        margin: 2rem auto;
      }

      @media all and (max-height: 550px) {
        flex: 0 0 43%;
      }

      &:hover {
        transform: translateX(1rem);
        border-bottom: 2px solid transparent;

        @include respond(desk-small) {
          transform: translate(0.75rem, 0);
        }
      }

      button {
        padding: 0.5rem 1rem;
        text-decoration: none;
        color: $color-text-light;
        border: none;
        font-size: inherit;
        width: 100%;
        height: 100%;
        display: inline-block;
        background-image: linear-gradient(120deg, transparent 0%, transparent 50%, $color-primary 50%);
        background-size: 230%;
        background-color: transparent;
        transition: all 0.5s;

        &:hover,
        &:active {
          background-position: 100%;
          color: $color-text-dark;
        }
      }
    }
  }
}
.st0 {
  fill: none;
  stroke: #000000;
  stroke-miterlimit: 10;
}
.st1 {
  fill: none;
  stroke: #c5a47f;
  stroke-width: 4;
  stroke-miterlimit: 10;
}
.st2 {
  fill: none;
  stroke: #c5a47f;
  stroke-width: 5;
  stroke-miterlimit: 10;
}
.st3 {
  fill: #333333;
}
.st4 {
  fill: none;
  stroke: #c5a47f;
  stroke-width: 2;
  stroke-miterlimit: 10;
}
</style>
