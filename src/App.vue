<template>
  <div>
    <Nav :onMobile="onMobile"></Nav>
    <transition appear appear-to-class="opacity-1" appear-active-class="opacity-0">
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
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import IE from './components/IE';

export default {
  name: 'App',
  data() {
    return {
      observerTargets: [],
      observeSections: true,
      onMobile: false,
      noScrollArrow: this.$router.resolve(this.$route.path).route.meta.noScrollArrow || false,
    };
  },
  methods: {
    checkScreenSize() {
      this.onMobile = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 1200;
    },
    updateTargets() {
      this.observeSections = true;
      this.observerTargets = [...this.$refs.main.querySelectorAll('section.track')];
    },
    fixCrappyScrollBehavior() {
      // fixing safari scroll jump bug
      this.$refs.main.scrollIntoView();
    },
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
    this.updateTargets();
  },
  watch: {
    $route(to, from) {
      const isNewView = to.name !== from.name;
      if (isNewView && !to.hash) this.fixCrappyScrollBehavior();
      this.$nextTick(() => {
        this.$route.name === 'Home' ? this.updateTargets() : (this.observeSections = false);
      });
    },
  },
  components: {
    Nav,
    Sidebar,
    Footer,
    IE,
  },
};
</script>

<style lang="scss">
@import './scss/main';
</style>
