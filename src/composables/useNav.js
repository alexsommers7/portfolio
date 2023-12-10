import { ref, onMounted, watch, nextTick, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export default function useNav(navEl, navListEl) {
  const navIsOpen = ref(false);

  const portraitMode = ref(window.matchMedia('(orientation: portrait)').matches);

  gsap.registerPlugin(ScrollToPlugin);
  const timeline = gsap.timeline();

  const route = useRoute();
  const router = useRouter();

  const openNav = () => {
    navIsOpen.value = true;

    timeline
      .fromTo(
        '.navigation__list > li',
        { opacity: 0 },
        { opacity: 1, delay: 0.15, duration: 0.5, stagger: 0.05 }
      )
      .add(function () {
        // prevent slight twitch on main content
        document.body.classList.add('no-scroll');
      }, '<+.3');
  };

  const closeNav = () => {
    timeline.fromTo('.navigation__list > li', { opacity: 1 }, { opacity: 0, duration: 0 });
    navIsOpen.value = false;
    document.body.classList.remove('no-scroll');
  };

  const toggleNav = () => {
    navIsOpen.value ? closeNav() : openNav();
  };

  const resetNav = () => {
    navIsOpen.value = false;
    navListEl.value.setAttribute('style', '');
  };

  const onNavItemClick = e => {
    e.preventDefault();

    if (e.target.dataset.path && route.path !== e.target.dataset.path) {
      router.push(e.target.dataset.path);
    }

    nextTick(() => {
      gsap.to(window, {
        duration: 0.8,
        ease: 'expo.inOut',
        scrollTo: e.target.dataset.section ? `#${e.target.dataset.section}` : { x: 0, y: 0 },
      });

      // a bit hacky here, but ...
      // let gsap.to start running, then while it is, set hash so tabindex moves to the appropriate element
      setTimeout(function () {
        window.location = `#${e.target.dataset.section}`;
      }, 500);
    });
  };

  const safariOrientationFix = () => {
    document.body.clientWidth < 1195
      ? (navEl.value.style.width = `${document.body.clientWidth}px`)
      : navEl.value.style.removeProperty('width');
  };

  onMounted(() => {
    window.addEventListener('resize', safariOrientationFix);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', safariOrientationFix);
  });

  watch(portraitMode, () => {
    resetNav();
  });

  return {
    navIsOpen,
    toggleNav,
    resetNav,
    onNavItemClick,
  };
}
