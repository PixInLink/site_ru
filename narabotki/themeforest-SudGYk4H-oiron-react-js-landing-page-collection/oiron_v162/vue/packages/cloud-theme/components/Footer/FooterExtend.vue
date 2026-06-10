<template>
  <div class="footer-counter" :class="{ extend: withCounter }">
    <span class="round" />
    <div v-if="withCounter">
      <counter />
      <div class="action">
        <h4 class="use-text-title2">
          {{ $t('common.about_ready') }}
        </h4>
        <v-btn color="secondary" size="large">
          {{ $t('cloud.getstarted') }}
        </v-btn>
      </div>
      <div id="watched_counter" />
    </div>
    <slot />
    <div v-if="withCounter" class="building-deco">
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
  </div>
</template>

<style lang="scss" scoped>
@import './footer-extend.scss';
</style>

<script>
import imgAPI from '@/assets/images/imgAPI';
import Counter from '../CounterSingle';

export default {
  components: {
    Counter,
  },
  props: {
    withCounter: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      imgAPI,
    };
  },
};
</script>
