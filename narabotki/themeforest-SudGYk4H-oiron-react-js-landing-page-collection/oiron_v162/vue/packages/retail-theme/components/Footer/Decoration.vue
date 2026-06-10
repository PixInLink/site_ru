<template>
  <div class="footer-deco" :class="{ bg: bg }">
    <div class="deco-bg-top" />
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
      default: false
    }
  }
}
</script>
