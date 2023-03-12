<template>
  <div>
    <img
      :src="tool.icon"
      :alt="`${tool.alt || tool.title} Icon`"
      :class="`${tool.class || ''}`"
      loading="lazy"
    />
    <p>{{ tool.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'ToolCard',
  props: {
    tool: Object,
  },
};
</script>

<style lang="scss">
.tool__card {
  margin: 0.5rem;
  padding: 1rem;
  width: 8rem;
  height: 8rem;
  flex: 0 0 8rem;
  background-color: $color-background-light;
  text-align: center;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: $design-border-radius-default;

  div {
    img {
      width: 3.5rem;
      height: 3.5rem;
      display: block;
      margin: auto;
      object-fit: contain;
    }

    p {
      margin-bottom: 0;
      margin-top: 1rem;
      line-height: 1;
    }
  }
}
</style>
