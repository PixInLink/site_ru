<template>
  <div
    ref="wrapper"
    v-scroll="runCounter"
    :class="{ dark: dark }"
    class="counter-wrap"
  >
    <v-container>
      <v-row
        align="center"
        justify="center"
        class="root"
      >
        <v-col cols="12" lg="3" sm="4" class="px-6">
          <div class="counter-item">
            <span class="icon ion-ios-people-outline text-primary" />
            <div class="text">
              <h4 v-if="loaded">
                {{ !visible ? 0 : '' }}
                <count-up
                  v-if="visible"
                  :start-val="0"
                  :end-val="456"
                  :options="{ prefix: '+' }"
                />
              </h4>
              <h6 class="use-text-subtitle">
                {{ $t('medical.about_doctor') }}
              </h6>
            </div>
          </div>
          <p class="text-center">
            Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam.
          </p>
        </v-col>
        <v-col cols="12" lg="3" sm="4" class="px-6">
          <div class="counter-item">
            <span class="icon ion-ios-home-outline text-primary" />
            <div class="text">
              <h4 v-if="loaded">
                {{ !visible ? 0 : '' }}
                <count-up
                  v-if="visible"
                  :start-val="0"
                  :end-val="123"
                  :options="{ prefix: '+' }"
                />
              </h4>
              <h6 class="use-text-subtitle">
                {{ $t('medical.about_clinics') }}
              </h6>
            </div>
          </div>
          <p class="text-center">
            Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam.
          </p>
        </v-col>
        <v-col cols="12" lg="3" sm="4" class="px-6">
          <div class="counter-item">
            <span class="icon ion-ios-medkit-outline text-primary" />
            <div class="text">
              <h4 v-if="loaded">
                {{ !visible ? 0 : '' }}
                <count-up
                  v-if="visible"
                  :start-val="0"
                  :end-val="46"
                />
              </h4>
              <h6 class="use-text-subtitle">
                {{ $t('medical.about_hours') }}
              </h6>
            </div>
          </div>
          <p class="text-center">
            Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import './counter-style';
</style>

<script>
import CountUp from 'vue-countup-v3';
import { ref } from 'vue';

export default {
  components: {
    CountUp,
  },
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
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
  data: () => ({
    loaded: false,
  }),
  mounted() {
    this.loaded = true;
  },
};
</script>
