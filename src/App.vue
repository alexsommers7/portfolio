<template>
  <div class="grid-large">
    <LoadIn
      v-if="!contentLoaded && !this.$router.resolve(this.$route.path).route.meta.NoLoadIn && firstVisit == true"
      :contentLoaded="contentLoaded"
      :onMobile="onMobile"
      @onLoadInFinish="onLoadInFinish"
      @onHideLoadIn="onHideLoadIn"
      :class="[seeThroughLoadIn ? 'invisible' : 'visible']"
    ></LoadIn>
    <Nav :onMobile="onMobile"></Nav>
    <main id="main">
      <router-view></router-view>
    </main>
    <Sidebar :observerTargets="observerTargets" :onMobile="onMobile" :noScrollArrow="noScrollArrow"></Sidebar>
    <Footer></Footer>
    <IE></IE>
  </div>
</template>

<script>
import LoadIn from "./components/common/LoadIn";
import Nav from "./components/common/Nav";
import Sidebar from "./components/common/Sidebar";
import Footer from "./components/common/Footer";
import IE from "./components/common/IE";

export default {
  name: "App",
  data() {
    return {
      products: [],
      observerTargets: [],
      contentLoaded: false,
      onMobile: false,
      firstVisit: sessionStorage.getItem("firstVisit") || true,
      noScrollArrow: this.$router.resolve(this.$route.path).route.meta.NoScrollArrow || false,
      seeThroughLoadIn: false,
    };
  },
  methods: {
    finishIntro() {
      this.firstVisit = false;
      document.body.classList.remove("no-scroll");
      sessionStorage.setItem("firstVisit", false);
    },
    addSmoothScroll() {
      // add smooth scroll for all anchor links except nav links
      // having this setting on nav links would mess with sidebar updating section name
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function(event) {
          if (this.classList.contains("js-nav-link")) return;
          event.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });
    },
    setOutlineFocus() {
      // only outline focus if user is tabbing
      let b = document.body;
      b.addEventListener("mousedown", function() {
        b.classList.add("using-mouse");
      });
      b.addEventListener("keydown", function() {
        b.classList.remove("using-mouse");
      });
    },
    checkScreenSize() {
      let nav = document.querySelector("nav.navigation");
      let navList = document.querySelector(".navigation__list");
      this.onMobile = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 1200;
      if (this.onMobile) {
        navList.style.top = "100%";
        navList.style.left = "0";
        nav.style.width = "100%";
      } else {
        navList.style.top = "0";
        navList.style.left = "-100%";
        nav.style.width = "95px";
      }
    },
    onHideLoadIn() {
      // need to keep loadIn component but set opacity to 0
      // once we hit the appropriate point in the load-in timeline
      this.seeThroughLoadIn = true;
    },
    onLoadInFinish() {
      this.finishIntro();
      this.$nextTick(() => {
        this.observerTargets = [...this.$el.querySelectorAll("#main section.track")];
      });
      this.contentLoaded = true;
    },
  },
  mounted() {
    if (this.firstVisit == "false") {
      this.finishIntro();
      this.observerTargets = [...this.$el.querySelectorAll("#main section.track")];
    }
    this.setOutlineFocus();
    this.addSmoothScroll();
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  components: {
    LoadIn,
    Nav,
    Sidebar,
    Footer,
    IE,
  },
};
</script>

<style lang="scss">
@import "./scss/main";
</style>
