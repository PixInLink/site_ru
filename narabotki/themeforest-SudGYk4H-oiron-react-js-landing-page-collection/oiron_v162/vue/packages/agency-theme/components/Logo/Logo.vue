<template>
  <span :class="type" class="logo">
    <img :src="brand.agency.img" alt="logo">
    {{ type !== 'only' ? brand.agency.name : '' }}
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
