<template>
  <div class="root">
    <div class="decoration-bg">
      <svg class="wave">
        <use xlink:href="/images/saas2/deco-bg2.svg#main" />
      </svg>
    </div>
    <v-container>
      <v-row class="spacing6" justify="center">
        <v-col lg="9" cols="12" class="py-0 py-sm-6 px-6">
          <title-main align="center">
            <span>
              {{ $t('saas2.feature_title1') }}
              <strong>
                {{ $t('saas2.feature_titlestrong1') }}
              </strong>
            </span>
          </title-main>
          <h6 class="text-center use-text-subtitle2">
            {{ $t('saas2.feature_desc3') }}
          </h6>
          <div class="list">
            <div>
              <v-row class="mb-sm-15">
                <v-col
                  sm="6"
                  cols="12"
                  class="px-sm-8"
                >
                  <div
                    data-aos-offset="-100"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="500"
                  >
                    <div class="text-sm-end text-center">
                      <figure class="illustration left">
                        <img
                          class="img-2d3d"
                          :src="imgAPI.saas2[16]"
                          :data-2d="imgAPI.saas2[15]"
                          :data-3d="imgAPI.saas2[16]"
                          alt="background"
                        >
                      </figure>
                      <h3 class="use-text-primary use-text-subtitle">
                        Ut sed eros finibus
                      </h3>
                      <p class="use-text-subtitle2">
                        Quisque a consequat ante, at volutpat enim. Aenean sit amet magna vel magna fringilla fermentum.
                      </p>
                    </div>
                  </div>
                </v-col>
                <v-col
                  sm="6"
                  cols="12"
                  class="px-sm-8"
                >
                  <div
                    data-aos="fade-in"
                    data-aos-offset="-100"
                    data-aos-delay="800"
                    data-aos-duration="500"
                  >
                    <div>
                      <ul class="list-primary">
                        <li v-for="(item, index) in integration1" :key="index">
                          <v-icon>{{ item.icon }}</v-icon>
                          {{ item.title }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </v-col>
              </v-row>
              <v-row :class="[isMobile ? 'column-reverse' : 'row']">
                <v-col
                  sm="6"
                  cols="12"
                  class="px-sm-8"
                >
                  <div
                    data-aos="fade-in"
                    data-aos-offset="-100"
                    data-aos-delay="800"
                    data-aos-duration="500"
                  >
                    <div>
                      <ul class="list-secondary">
                        <li v-for="(item, index) in integration2" :key="index">
                          {{ item.title }}
                          <v-icon>{{ item.icon }}</v-icon>
                        </li>
                      </ul>
                    </div>
                  </div>
                </v-col>
                <v-col
                  sm="6"
                  cols="12"
                  class="px-sm-8"
                >
                  <div
                    data-aos="fade-up"
                    data-aos-offset="-100"
                    data-aos-delay="500"
                    data-aos-duration="500"
                  >
                    <div class="text-sm-start text-center">
                      <figure class="illustration">
                        <img
                          class="img-2d3d"
                          :src="imgAPI.saas2[18]"
                          :data-2d="imgAPI.saas2[17]"
                          :data-3d="imgAPI.saas2[18]"
                          alt="background"
                        >
                      </figure>
                      <h3 class="use-text-secondary use-text-subtitle">
                        Ut sed eros finibus
                      </h3>
                      <p class="use-text-subtitle2">
                        Quisque a consequat ante, at volutpat enim. Aenean sit amet magna vel magna fringilla fermentum.
                      </p>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'integration-style.scss';
</style>

<script>
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';
import Title from '../../Title';

export default {
  components: {
    'title-main': Title,
  },
  data() {
    return {
      imgAPI,
      integration1: [
        {
          icon: 'mdi-magnify',
          title: 'Vestibulum a massa',
        },
        {
          icon: 'mdi-shuffle-variant',
          title: 'Interdum et malesuada',
        },
        {
          icon: 'mdi-layers',
          title: 'Cras convallis lacus orci',
        },
        {
          icon: 'mdi-rss',
          title: 'Nulla vehicula',
        },
        {
          icon: 'mdi-speedometer',
          title: 'Interdum et malesuada',
        },
        {
          icon: 'mdi-thumb-up',
          title: 'Cras convallis lacus orci',
        },
        {
          icon: 'mdi-cloud-upload',
          title: 'Donec sit amet nulla',
        },
        {
          icon: 'mdi-wrench',
          title: 'Donec sit amet nulla',
        },
      ],
      integration2: [
        {
          icon: 'mdi-access-point',
          title: 'Vestibulum a massa',
        },
        {
          icon: 'mdi-shuffle-variant',
          title: 'Interdum et malesuada',
        },
        {
          icon: 'mdi-poll',
          title: 'Cras convallis lacus orci',
        },
        {
          icon: 'mdi-plus-circle',
          title: 'Nulla vehicula',
        },
        {
          icon: 'mdi-chart-pie',
          title: 'Interdum et malesuada',
        },
        {
          icon: 'mdi-account-multiple',
          title: 'Cras convallis lacus orci',
        },
        {
          icon: 'mdi-source-merge',
          title: 'Donec sit amet nulla',
        },
        {
          icon: 'mdi-sync',
          title: 'Donec sit amet nulla',
        },
      ],
    };
  },
  computed: {
    isMobile() {
      const xsDown = this.$vuetify.display.xs;
      return xsDown;
    },
  },
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
