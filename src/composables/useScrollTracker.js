import { ref, onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vue-router';

export default function useScrollTracker(mainElRef) {
  const route = useRoute();

  const observerTargets = ref([]);
  const isObserving = ref(true);

  const updateTargets = () => {
    isObserving.value = true;
    observerTargets.value = [...mainElRef.value.querySelectorAll('section.track')];
  };

  const fixCrappyScrollBehavior = () => {
    // safari scroll jump bug
    mainElRef.value.scrollIntoView();
  };

  watch(mainElRef, updateTargets);

  watch(
    () => route.name,
    (to, from) => {
      if (to !== from && !route.hash) {
        fixCrappyScrollBehavior();
      }

      nextTick(() => {
        route.name === 'Home' ? updateTargets() : (isObserving.value = false);
      });
    }
  );

  onMounted(updateTargets);

  return { observerTargets, isObserving };
}
