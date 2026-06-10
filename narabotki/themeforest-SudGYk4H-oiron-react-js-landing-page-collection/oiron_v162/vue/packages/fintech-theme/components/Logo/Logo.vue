<template>
  <span :class="type" class="logo">
    <img :src="brand.fintech.img" alt="logo">
    {{ type !== 'only' ? brand.fintech.name : '' }}
  </span>
</template>

<style scoped lang="scss">
@import './logo-style.scss';
</style>

<script>
import brand from '@/assets/text/brand';

export default {
  props: {
    type: {
      type: String,
      default: 'only',
    },
  },
  data() {
    return {
      brand,
    };
  },
};
</script>
