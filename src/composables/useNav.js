import { ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export default function useNav(navEl) {
  gsap.registerPlugin(ScrollToPlugin);
  const timeline = gsap.timeline();

  const navIsOpen = ref(false);

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

  const safariOrientationFix = () => {
    document.body.clientWidth < 1195
      ? (navEl.value.style.width = `${document.body.clientWidth}px`)
      : navEl.value.style.removeProperty('width');
  };

  onMounted(() => {
    window.addEventListener('resize', safariOrientationFix);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', safariOrientationFix);
  });

  return {
    navIsOpen,
    toggleNav,
  };
}
