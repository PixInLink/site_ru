<template>
  <div class="bottom-deco">
    <div class="left-deco">
      <img
        :src="imgAPI.education[40]"
        :data-2d="imgAPI.education[39]"
        :data-3d="imgAPI.education[40]"
        class="img-2d3d"
        alt="footer"
      >
    </div>
    <div class="right-deco">
      <img
        :src="imgAPI.education[42]"
        :data-2d="imgAPI.education[41]"
        :data-3d="imgAPI.education[42]"
        class="img-2d3d"
        alt="footer"
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './footer-deco';
</style>

<script>
import imgAPI from '@/assets/images/imgAPI';

export default {
  data: () => ({
    imgAPI,
  }),
};
</script>
