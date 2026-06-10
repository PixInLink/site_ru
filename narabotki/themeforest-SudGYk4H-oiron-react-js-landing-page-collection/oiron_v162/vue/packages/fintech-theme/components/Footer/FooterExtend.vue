<template>
  <div class="footer-counter" :class="{ 'with-counter': withCounter }">
    <div v-if="withCounter" class="counter">
      <counter />
      <div class="action">
        <h4 class="use-text-title2">
          {{ $t('fintech.footer_waiting') }}
        </h4>
        <v-btn color="secondary" size="large" href="#">
          {{ $t('fintech.getstarted') }}
        </v-btn>
      </div>
    </div>
    <div class="footer-container">
      <div class="deco">
        <v-container v-if="withCounter">
          <figure>
            <img
              class="img-2d3d"
              :src="imgAPI.fintech[17]"
              :data-2d="imgAPI.fintech[16]"
              :data-3d="imgAPI.fintech[17]"
              alt="feature"
            >
          </figure>
        </v-container>
        <div class="deco-main">
          <div class="deco-left" />
          <div class="deco-right" />
        </div>
      </div>
      <slot />
      <div class="deco-footer">
        <span class="deco-bottom" />
        <span class="deco-top" />
      </div>
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
