<template>
  <div class="building-deco">
    <img
      class="img-2d3d img-left"
      :src="imgAPI.cloud[29]"
      :data-2d="imgAPI.cloud[28]"
      :data-3d="imgAPI.cloud[29]"
      alt="building"
    >
    <img
      class="img-2d3d img-center"
      :src="imgAPI.cloud[31]"
      :data-2d="imgAPI.cloud[30]"
      :data-3d="imgAPI.cloud[31]"
      alt="building"
    >
    <img
      class="img-2d3d img-left"
      :src="imgAPI.cloud[29]"
      :data-2d="imgAPI.cloud[28]"
      :data-3d="imgAPI.cloud[29]"
      alt="building"
    >
  </div>
</template>

<style scoped lang="scss">
@import './decoration-style.scss';
</style>

<script>
import imgAPI from '@/assets/images/imgAPI';

export default {
  data() {
    return {
      imgAPI,
    };
  },
};
</script>
