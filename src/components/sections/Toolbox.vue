<template>
  <section class="track toolbox" data-sidebar="Toolbox">
    <span class="anchor-span" id="toolbox"></span>
    <SectionHeading main="TOOLBOX" secondary="Modern Technology, Efficient Workflow" />

    <div class="toolbox__toggle">
      <div class="buttons">
        <button class="btn active" data-toggle="left" @click="toggleButton">Tech</button>
        <button class="btn" data-toggle="right" @click="toggleButton">Design</button>
      </div>
    </div>
    <transition-group name="list" tag="ul" class="tools" mode="out-in">
      <template v-for="tool in toolsToShow">
        <li :key="tool.title" class="tool__card list-item">
          <ToolCard :tool="tool" />
        </li>
      </template>
    </transition-group>
  </section>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { tools } from '@/utils/data/tools';
import ToolCard from '@/components/cards/ToolCard';
import SectionHeading from '@/components/headings/SectionHeading';

export default {
  name: 'Toolbox',
  data() {
    return {
      togglePosition: 'left',
      currentType: 'tech',
    };
  },
  computed: {
    toolsToShow: function() {
      return tools.filter((tool) => tool.type === this.currentType);
    },
  },
  methods: {
    toggleButton(event, forceTo = 'left') {
      let direction = event ? event.target.dataset.toggle : forceTo;
      if (direction == this.togglePosition) return;
      this.$el.querySelectorAll('.toolbox__toggle button').forEach((btn) => btn.classList.toggle('active'));
      this.$el.querySelector('.buttons').classList = `buttons ${direction}`;
      this.currentType = direction === 'left' ? 'tech' : 'design';
      this.togglePosition = direction;
    },
    calculateIconsHeight() {
      // if not on mobile, keep this element at initial height when toggled to avoid layout shift
      let toolsEl = this.$el.querySelector('.tools');
      if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 1200) {
        toolsEl.style.height = 'auto';
        return;
      }
      this.toggleButton(null, 'left');
      toolsEl.style.height = 'auto';
      setTimeout(function() {
        // slight pause to let window finish resizing - was being inconsistent
        let height = toolsEl.getBoundingClientRect().height;
        toolsEl.style.height = `${height}px`;
      }, 800);
    },
    configureScrollTrigger() {
      gsap.to('.toolbox .tools', {
        scrollTrigger: {
          // markers: true,
          trigger: '.toolbox .tools',
          start: 'top 90%',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'expo.out',
      });
    },
  },
  mounted() {
    this.calculateIconsHeight();
    this.configureScrollTrigger();
    window.addEventListener('resize', this.calculateIconsHeight);
  },
  components: {
    ToolCard,
    SectionHeading,
  },
};
</script>

<style scoped lang="scss">
.toolbox {
  &__toggle {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    margin: 3rem auto;

    .buttons {
      background-color: $color-background-light;
      width: Min(16rem, 100%);
      border-radius: 100px;
      position: relative;
      padding: 0 4px;

      &::after {
        content: '';
        transition: transform 0.2s ease-in-out;
        will-change: transform;
        width: Min(8rem, 50%);
        height: calc(100% - 8px);
        position: absolute;
        left: 0;
        top: 4px;
        transform: translateX(4px);
        display: block;
        border-radius: 100px;
        background-image: linear-gradient(90deg, $color-primary, $color-primary);
        cursor: pointer;
      }

      &.right::after {
        transform: translateX(calc(100% - 4px));
      }

      button {
        appearance: none;
        border-radius: 100px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: $color-primary;
        width: 50%;
        height: 100%;
        padding: 1rem;
        font-size: 1.2rem;
        font-weight: 500;
        text-transform: none;
        z-index: 10;
        line-height: 1;
        transition: color 0.2s ease-in-out;

        &.active {
          color: $color-text-dark;
        }
      }
    }
  }

  .tools {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2rem auto;
    max-width: 1000px;
    opacity: 0;
    transform: translateY(50px);
  }
}
</style>
