<template>
  <div class="page-deco">
    <div class="top-deco">
      <img
        v-if="extend"
        :src="imgAPI.education[44]"
        :data-2d="imgAPI.education[43]"
        :data-3d="imgAPI.education[44]"
        class="img-2d3d"
        alt="footer"
      >
    </div>
    <deco-bottom />
  </div>
</template>

<style scoped lang="scss">
@import './decoration-style.scss';
</style>

<script>
import imgAPI from '@/assets/images/imgAPI';
import DecoBottom from '../Footer/DecorationBottom';

export default {
  components: {
    DecoBottom,
  },
  props: {
    extend: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    imgAPI,
  }),
};
</script>
