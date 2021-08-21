<template>
  <div>
    <LoadIn
      v-if="!contentLoaded && !this.$router.resolve(this.$route.path).route.meta.NoLoadIn && firstVisit == true"
      :contentLoaded="contentLoaded"
      :onMobile="onMobile"
      @onLoadInFinish="onLoadInFinish"
      @onHideLoadIn="onHideLoadIn"
      :class="[seeThroughLoadIn ? 'invisible' : 'visible']"
    ></LoadIn>
    <Nav :onMobile="onMobile"></Nav>
    <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0" mode="out-in">
      <main id="main" ref="main">
        <router-view></router-view>
      </main>
    </transition>
    <Sidebar
      :observerTargets="observerTargets"
      :observeSections="observeSections"
      :onMobile="onMobile"
      :noScrollArrow="noScrollArrow"
    ></Sidebar>
    <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
      <Footer></Footer>
    </transition>
    <IE></IE>
  </div>
</template>

<script>
import LoadIn from "./components/CommonLoadIn";
import Nav from "./components/CommonNav";
import Sidebar from "./components/CommonSidebar";
import Footer from "./components/CommonFooter";
import IE from "./components/CommonIE";

export default {
  name: "App",
  data() {
    return {
      observerTargets: [],
      observeSections: true,
      contentLoaded: false,
      onMobile: false,
      firstVisit: sessionStorage.getItem("firstVisit") || true,
      noScrollArrow: this.$router.resolve(this.$route.path).route.meta.noScrollArrow || false,
      seeThroughLoadIn: false,
    };
  },
  methods: {
    handleIntro() {
      this.finishIntro();
      this.updateTargets();
      this.setOutlineFocus();
      this.checkScreenSize();
      window.addEventListener("resize", this.checkScreenSize);
    },
    finishIntro() {
      document.body.classList.remove("loading");
      this.firstVisit = false;
      sessionStorage.setItem("firstVisit", false);
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
      this.onMobile = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 1200;
    },
    onHideLoadIn() {
      // need to keep loadIn component but set opacity to 0
      // once we hit the appropriate point in the load-in timeline
      this.seeThroughLoadIn = true;
    },
    onLoadInFinish() {
      this.finishIntro();
      this.$nextTick(() => {
        this.updateTargets();
      });
      this.contentLoaded = true;
    },
    updateTargets() {
      this.observeSections = true;
      this.observerTargets = [...this.$refs.main.querySelectorAll("section.track")];
    },
  },
  mounted() {
    this.handleIntro();
    this.updateTargets();
  },
  watch: {
    $route() {
      this.$nextTick(() => {
        this.$route.name === "Home" ? this.updateTargets() : (this.observeSections = false);
      });
    },
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
