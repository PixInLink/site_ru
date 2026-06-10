<template>
  <div class="footer-deco" :class="{ bg: bg }">
    <div class="deco-wrap">
      <div class="deco bottom">
        <svg class="wave">
          <use xlink:href="/images/saas/deco-wave.svg#main" />
        </svg>
      </div>
      <div class="deco top">
        <svg class="wave">
          <use xlink:href="/images/saas/deco-wave.svg#main" />
        </svg>
      </div>
    </div>
    <div class="wave wave-cover" />
  </div>
</template>

<style scoped lang="scss">
@import './footer-deco.scss';
</style>

<script>
export default {
  props: {
    bg: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
