<template>
  <div ref="wrapper" v-scroll="runCounter" class="counter-wrap">
    <v-container class="max-md">
      <h3 class="use-text-title d-flex justify-center">
        <div class="mx-2">
          {{ !visible ? 0 : '' }}
          <count-up
            v-if="visible"
            :start-val="0"
            :end-val="123"
          />
        </div>
        <div class="mx-2">
          {{ !visible ? 0 : '' }}
          <count-up
            v-if="visible"
            :start-val="0"
            :end-val="234"
          />
        </div>
        <div class="mx-2">
          {{ !visible ? 0 : '' }}
          <count-up
            v-if="visible"
            :start-val="0"
            :end-val="567"
          />
        </div>
      </h3>
      <p class="use-text-subtitle2">
        {{ $t('fintech.footer_counter') }}
      </p>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './counter-style.scss';
</style>

<script>
import CountUp from 'vue-countup-v3';
import { ref } from 'vue';

export default {
  components: {
    CountUp,
  },
  setup() {
    const visible = ref(false);
    const wrapper = ref(null);
    const offset = 500;
    function runCounter() {
      const topPosition = wrapper.value.getBoundingClientRect();

      if (topPosition.y < offset) {
        visible.value = true;
      }
    }

    return {
      visible,
      runCounter,
      wrapper,
    };
  },
};
</script>
