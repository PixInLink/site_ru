<template>
  <div
    ref="wrapper"
    v-scroll="runCounter"
    class="counter-wrap"
  >
    <div id="watched_counter" />
    <v-container class="max-md">
      <v-row
        justify="center"
        align="center"
        class="counter-inner spacing6"
      >
        <v-col md="4" class="pa-sm-6">
          <div class="counter-item">
            <div class="text">
              <h3 class="use-text-title">
                {{ !visible ? 0 : '' }}
                <count-up
                  v-if="visible"
                  :start-val="0"
                  :end-val="200"
                  :options="{ prefix: '+', suffix: 'M' }"
                />
              </h3>
              <p class="use-text-subtitle">
                <i class="ion-ios-cloud-download-outline" />
                {{ $t('social.counter_downloads') }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="4" class="pa-sm-6">
          <div class="counter-item">
            <div class="text">
              <h3 class="use-text-title">
                {{ !visible ? 0 : '' }}
                <count-up
                  v-if="visible"
                  :start-val="0"
                  :end-val="180"
                  :options="{ prefix: '+', suffix: 'M' }"
                />
              </h3>
              <p class="use-text-subtitle">
                <i class="ion-ios-people-outline" />
                {{ $t('social.counter_members') }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="4" class="pa-sm-6">
          <div class="counter-item">
            <div class="text">
              <h3 class="use-text-title">
                {{ !visible ? 0 : '' }}
                <count-up
                  v-if="visible"
                  :start-val="0"
                  :end-val="180"
                  :options="{ prefix: '+', suffix: 'K' }"
                />
              </h3>
              <p class="use-text-subtitle">
                <i class="ion-ios-paw-outline" />
                {{ $t('social.counter_communities') }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'counter-style.scss';
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
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      const topPosition = scrollPosition + offset;

      if (topPosition > wrapper.value.offsetTop) {
        visible.value = true;
      }
    }

    return {
      visible,
      runCounter,
      wrapper,
    };
  },
  data() {
    return {
      loaded: false,
    };
  },
  mounted() {
    this.loaded = true;
  },
};
</script>
