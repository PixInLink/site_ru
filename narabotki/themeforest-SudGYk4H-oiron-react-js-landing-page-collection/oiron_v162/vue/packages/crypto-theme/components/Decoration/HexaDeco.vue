<template>
  <div class="hexa-deco">
    <div v-if="extend" class="extend-deco">
      <svg class="hexa top">
        <use xlink:href="/images/crypto/deco-hexa.svg#main" />
      </svg>
      <svg class="hexa bottom">
        <use xlink:href="/images/crypto/deco-hexa.svg#main" />
      </svg>
    </div>
    <div class="deco-bg" />
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
