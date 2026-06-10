<template>
  <div class="deco">
    <div
      v-if="isDesktop"
      :class="{fade: fade}"
      class="figure"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './slider-art-style';
</style>

<script>
export default {
  props: {
    fade: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
  },
};
</script>
