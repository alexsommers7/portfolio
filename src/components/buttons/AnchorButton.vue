<template>
  <button class="btn" :class="classes" :type="type" :data-section="section" @click="onAnchorClick">
    <strong class="pointer-none">{{ content }}</strong>
  </button>
</template>

<script>
import { onAnchorClick } from '@/utils/events/anchor-click.js';

export default {
  name: 'AnchorButton',
  props: {
    classes: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'button',
    },
    section: {
      type: String,
      default: '',
    },
  },
  methods: {
    onAnchorClick,
  },
};
</script>
