<template>
  <div class="top-deco">
    <div
      data-aos="zoom-in"
      data-aos-offset="0"
      data-aos-delay="200"
      data-aos-duration="300"
    >
      <img
        :src="imgAPI.education[44]"
        :data-2d="imgAPI.education[43]"
        :data-3d="imgAPI.education[44]"
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
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';

export default {
  data: () => ({
    imgAPI,
  }),
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
