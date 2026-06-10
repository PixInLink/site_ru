<template>
  <span class="location">
    <span :class="color + '-color'" class="dot" />
  </span>
</template>

<style lang="scss" scoped>
@import './map-style.scss';
</style>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
    },
  },
};
</script>
