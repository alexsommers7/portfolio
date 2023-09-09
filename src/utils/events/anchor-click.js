import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

export function onAnchorClick({ target }) {
  if (!target) return;

  const section = target.dataset.section;
  if (!section) return;

  gsap.to(window, {
    duration: 1.2,
    ease: 'expo.inOut',
    scrollTo: { y: `#${section}`, offsetY: -20 },
  });
  // a bit hacky here, but ...
  // let gsap.to start running, then while it is, set hash so tabindex moves to the appropriate element
  setTimeout(() => {
    window.location = `#${section}`;
  }, 500);
}
