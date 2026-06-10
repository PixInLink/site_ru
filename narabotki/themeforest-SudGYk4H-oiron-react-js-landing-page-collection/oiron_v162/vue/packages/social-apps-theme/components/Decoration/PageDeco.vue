<template>
  <div class="page-deco">
    <div class="top-deco" />
    <div v-if="extend" class="bottom-deco" />
  </div>
</template>

<style scoped lang="scss">
@import './decoration-style.scss';
</style>

<script>
export default {
  props: {
    extend: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
