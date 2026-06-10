<template>
  <div ref="wrapper" v-scroll="runCounter" class="root">
    <v-container class="max-md">
      <title-main
        :head="$t('education.feature_title')"
        :desc="$t('education.feature_desc')"
        align="center"
        color="primary"
      />
      <v-row class="spacing8 grid">
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
              <img
                class="img-2d3d"
                :src="imgAPI.education[28]"
                :data-2d="imgAPI.education[27]"
                :data-3d="imgAPI.education[28]"
                alt="feature"
              >
            </figure>
            <div v-if="loaded" class="text">
              <h4 class="use-text-subtitle">
                {{ !visible ? 0 : '' }}
                <count-up
                  v-if="visible"
                  :start-val="0"
                  :end-val="100"
                  :options="{ prefix: '+', suffix: 'K' }"
                />
              </h4>
              <h6 class="use-text-subtitle2">
                {{ $t('education.counter_videos') }}
              </h6>
            </div>
          </div>
        </v-col>
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
              <img
                class="img-2d3d"
                :src="imgAPI.education[30]"
                :data-2d="imgAPI.education[29]"
                :data-3d="imgAPI.education[30]"
                alt="feature"
              >
            </figure>
            <div v-if="loaded" class="text">
              <h4 class="use-text-subtitle">
                {{ !visible ? 0 : '' }}
                <count-up
                  v-if="visible"
                  :start-val="0"
                  :end-val="200"
                  :options="{ prefix: '+' }"
                />
              </h4>
              <h6 class="use-text-subtitle2">
                {{ $t('education.counter_mentors') }}
              </h6>
            </div>
          </div>
        </v-col>
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
              <img
                class="img-2d3d"
                :src="imgAPI.education[32]"
                :data-2d="imgAPI.education[31]"
                :data-3d="imgAPI.education[32]"
                alt="feature"
              >
            </figure>
            <div v-if="loaded" class="text">
              <h4 class="use-text-subtitle">
                {{ !visible ? 0 : '' }}
                <count-up
                  v-if="visible"
                  :start-val="0"
                  :end-val="500"
                  :options="{ prefix: '$' }"
                />
              </h4>
              <h6 class="use-text-subtitle2">
                {{ $t('education.counter_save') }}
              </h6>
            </div>
          </div>
        </v-col>
        <v-col sm="6" class="px-8">
          <div class="counter-item">
            <figure>
              <img
                class="img-2d3d"
                :src="imgAPI.education[34]"
                :data-2d="imgAPI.education[33]"
                :data-3d="imgAPI.education[34]"
                alt="feature"
              >
            </figure>
            <div v-if="loaded" class="text">
              <h4 class="use-text-subtitle">
                Free
              </h4>
              <h6 class="use-text-subtitle2">
                {{ $t('education.counter_free') }}
              </h6>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'feature-style.scss';
</style>

<script>
import { ref } from 'vue';
import CountUp from 'vue-countup-v3';
import imgAPI from '@/assets/images/imgAPI';
import Title from '../../Title';

export default {
  components: {
    'title-main': Title,
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
      imgAPI,
      loaded: false,
    };
  },
  mounted() {
    this.loaded = true;
  },
};
</script>
