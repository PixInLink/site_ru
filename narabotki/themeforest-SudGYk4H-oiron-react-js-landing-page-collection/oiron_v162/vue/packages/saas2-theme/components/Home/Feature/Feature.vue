<template>
  <div class="root">
    <div class="decoration-bg">
      <svg class="wave">
        <use xlink:href="/images/saas2/deco-bg.svg#main" />
      </svg>
    </div>
    <v-container :class="{ fixed: isDesktop }">
      <div>
        <div class="item">
          <v-row :class="[isMobile ? 'column-reverse' : 'row']">
            <v-col cols="12" md="6" class="px-md-5 px-lg-15">
              <div
                data-aos="fade-left"
                data-aos-offset="250"
                data-aos-duration="500"
              >
                <div class="screen-wrap">
                  <img
                    class="plant1 img-2d3d"
                    :src="imgAPI.saas2[10]"
                    :data-2d="imgAPI.saas2[9]"
                    :data-3d="imgAPI.saas2[10]"
                    alt="plant"
                  >
                  <div class="illustration">
                    <figure>
                      <img :src="imgAPI.saas2[19]" alt="screen">
                    </figure>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col md="6" cols="12" class="px-md-5 px-lg-15">
              <div class="desc">
                <title-main :align="isMobile ? 'center' : 'left'">
                  <span>
                    {{ $t('saas2.feature_title1') }}
                    <strong>
                      {{ $t('saas2.feature_titlestrong1') }}
                    </strong>
                  </span>
                </title-main>
                <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-start']">
                  {{ $t('saas2.feature_desc1') }}
                </h6>
                <v-btn color="secondary" size="large" class="btn">
                  {{ $t('saas2.see_detail') }}
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="item">
          <v-row>
            <v-col md="6" cols="12" class="px-md-5 px-lg-15">
              <div class="desc">
                <title-main :align="isMobile ? 'center' : 'right'">
                  <span>
                    {{ $t('saas2.feature_title1') }}
                    <strong>
                      {{ $t('saas2.feature_titlestrong2') }}
                    </strong>
                  </span>
                </title-main>
                <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-end']">
                  {{ $t('saas2.feature_desc2') }}
                </h6>
                <div :class="[isMobile ? 'text-center' : 'text-end']">
                  <v-btn color="secondary" size="large" class="btn">
                    {{ $t('saas2.see_detail') }}
                  </v-btn>
                </div>
              </div>
            </v-col>
            <v-col md="6" cols="12" class="px-md-5 px-lg-15">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-duration="500"
              >
                <div class="screen-wrap">
                  <img
                    class="plant2 img-2d3d"
                    :src="imgAPI.saas2[12]"
                    :data-2d="imgAPI.saas2[11]"
                    :data-3d="imgAPI.saas2[12]"
                    alt="plant"
                  >
                  <div class="illustration">
                    <figure>
                      <img :src="imgAPI.saas2[20]" alt="screen">
                    </figure>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="item last">
          <title-main align="center">
            <span>
              {{ $t('saas2.feature_title3') }}
              <strong>
                {{ $t('saas2.feature_titlestrong3') }}
              </strong>
            </span>
          </title-main>
          <v-row class="spacing6" justify="center">
            <v-col md="10" cols="12" class="pa-6">
              <h6 class="text-center use-text-subtitle2">
                {{ $t('saas2.feature_desc3') }}
              </h6>
              <div
                data-aos="fade-up"
                data-aos-offset="10"
                data-aos-duration="500"
              >
                <div class="screen-wrap">
                  <img
                    class="plant3 img-2d3d"
                    :src="imgAPI.saas2[14]"
                    :data-2d="imgAPI.saas2[13]"
                    :data-3d="imgAPI.saas2[14]"
                    alt="plant"
                  >
                  <div class="illustration screen-center">
                    <figure>
                      <img :src="imgAPI.saas2[21]" alt="screen">
                    </figure>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './feature-style.scss';
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
    };
  },
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
  },
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
