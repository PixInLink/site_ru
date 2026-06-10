<template>
  <div class="hero-banner-wrap">
    <div v-if="deco" class="deco">
      <deco-plane />
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
import DecoPlane from '../Home/Deco/Plane';

export default {
  components: {
    DecoPlane,
  },
  props: {
    deco: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
