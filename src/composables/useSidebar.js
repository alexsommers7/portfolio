import { ref, watch, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function useSidebar(currentSectionRef, scrollTracker) {
  const onMobile = inject('onMobile');
  const route = useRoute();
  const router = useRouter();

  const hasScrollArrow = ref(router.resolve(route).meta.scrollArrow || false);

  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);

  const updateText = triggerObj => {
    const textEl = currentSectionRef.value.querySelector('p');

    gsap.to(textEl, {
      duration: 0.75,
      text: {
        value: `${triggerObj.trigger.dataset.sidebar}`,
        padSpace: true,
      },
      ease: 'power1.out',
    });
  };

  const configureScrollTrigger = () => {
    if (!scrollTracker.isObserving.value) {
      if (ScrollTrigger.getById('sidebar')) {
        ScrollTrigger.getById('sidebar').kill(true);
      }

      return (currentSectionRef.value.querySelector('p').innerText = route.name);
    }

    scrollTracker.observerTargets.value.forEach(section => {
      ScrollTrigger.create({
        id: 'sidebar',
        trigger: section,
        start: 'top 33%',
        end: 'center 20%',
        toggleActions: 'play restart play reverse',
        onEnter: self => {
          if (scrollTracker.isObserving.value) {
            updateText(self);
          }
        },
        onEnterBack: self => {
          if (scrollTracker.isObserving.value) {
            updateText(self);
          }
        },
      });
    });
  };

  watch(
    scrollTracker.observerTargets,
    newArr => {
      if (newArr.length && !onMobile.value) {
        configureScrollTrigger();
      }
    },
    { immediate: true }
  );

  watch(
    scrollTracker.isObserving,
    newVal => {
      if (!newVal) configureScrollTrigger();
    },
    { immediate: true }
  );

  watch(
    onMobile,
    newVal => {
      if (!newVal) configureScrollTrigger();
    },
    { immediate: true }
  );

  return { hasScrollArrow };
}
