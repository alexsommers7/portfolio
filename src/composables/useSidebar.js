import { watch, inject } from 'vue';
import { useRoute } from 'vue-router';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function useSidebar(currentSectionRef, props) {
  const onMobile = inject('onMobile');
  const route = useRoute();

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
    if (!props.observeSections) {
      if (ScrollTrigger.getById('sidebar')) {
        ScrollTrigger.getById('sidebar').kill(true);
      }

      return (currentSectionRef.value.querySelector('p').innerText = route.name);
    }

    props.observerTargets.forEach(section => {
      ScrollTrigger.create({
        id: 'sidebar',
        trigger: section,
        start: 'top 55%',
        end: 'center 20%',
        toggleActions: 'play restart play reverse',
        onEnter: self => {
          if (props.observeSections) {
            updateText(self);
          }
        },
        onEnterBack: self => {
          if (props.observeSections) {
            updateText(self);
          }
        },
      });
    });
  };

  const onAnchorClick = e => {
    gsap.to(window, {
      duration: 1.2,
      ease: 'expo.inOut',
      scrollTo: `#${e.target.dataset.section}`,
    });
  };

  watch(
    () => props.observerTargets,
    newArr => {
      if (newArr.length && !onMobile.value) {
        configureScrollTrigger();
      }
    },
    { immediate: true }
  );

  watch(
    () => props.observeSections,
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

  return {
    onAnchorClick,
  };
}
