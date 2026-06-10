<template>
  <div class="footer-counter" :class="{ extend: withCounter }">
    <span class="deco" />
    <div v-if="withCounter">
      <counter />
      <div class="action">
        <h4 class="use-text-title2">
          {{ $t('common.about_ready') }}
        </h4>
        <v-btn color="secondary" size="large">
          {{ $t('crypto.getstarted') }}
        </v-btn>
      </div>
    </div>
    <slot />
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
