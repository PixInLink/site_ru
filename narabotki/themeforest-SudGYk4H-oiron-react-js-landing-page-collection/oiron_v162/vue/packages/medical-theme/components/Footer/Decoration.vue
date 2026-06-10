<template>
  <div class="footer-deco">
    <div class="left-deco" />
    <div class="right-deco">
      <img
        :src="imgAPI.medical[17]"
        :data-3d="imgAPI.medical[16]"
        :data-2d="imgAPI.medical[17]"
        class="img-2d3d"
        alt="speciality 3d"
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './footer-deco.scss';
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
