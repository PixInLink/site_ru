<template>
  <div class="hero-banner-wrap">
    <div v-if="deco" class="deco">
      <div class="deco-left">
        <span class="leaf" />
        <span class="land" />
        <span class="round" />
      </div>
    </div>
    <v-container>
      <slot />
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import './hero-banner-style.scss';
</style>

<script>
export default {
  props: {
    deco: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
