<template>
  <div class="root">
    <v-container class="fixed-width">
      <title-main align="center">
        {{ $t('social.feature_title') }}
      </title-main>
      <div>
        <div class="item">
          <v-row align="center" :class="[isMobile ? 'column-reverse' : 'row']">
            <v-col cols="12" md="6" class="px-8">
              <div
                data-aos-offset="200"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <div class="illustration">
                  <div class="bg liquid1" />
                  <figure class="screen1 mobile-screen">
                    <img
                      :src="imgAPI.social[27]"
                      alt="screen"
                    >
                  </figure>
                  <figure class="graphic artwork1">
                    <img
                      :src="imgAPI.social[10]"
                      :data-2d="imgAPI.social[9]"
                      :data-3d="imgAPI.social[10]"
                      class="img-2d3d"
                      alt="illustration"
                    >
                  </figure>
                </div>
              </div>
            </v-col>
            <v-col md="6" cols="12" class="px-8">
              <div class="desc">
                <title-secondary
                  :text="$t('social.feature_title1')"
                  :align="isMobile ? 'center' : 'left'"
                />
                <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-start']">
                  {{ $t('social.feature_desc1') }}
                </h6>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="item">
          <v-row align="center">
            <v-col md="6" cols="12" class="px-8">
              <div class="desc">
                <title-secondary
                  :text="$t('social.feature_title2')"
                  :align="isMobile ? 'center' : 'right'"
                />
                <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-end']">
                  {{ $t('social.feature_desc2') }}
                </h6>
              </div>
            </v-col>
            <v-col md="6" cols="12" class="px-15">
              <div
                data-aos-offset="200"
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <div class="illustration">
                  <div class="bg liquid2" />
                  <figure class="screen2 mobile-screen">
                    <img
                      :src="imgAPI.social[28]"
                      alt="screen"
                    >
                  </figure>
                  <figure class="graphic artwork2">
                    <img
                      :src="imgAPI.social[12]"
                      :data-2d="imgAPI.social[11]"
                      :data-3d="imgAPI.social[12]"
                      class="img-2d3d"
                      alt="illustration"
                    >
                  </figure>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="item last">
          <div class="decoration-bg">
            <svg class="wave">
              <use xlink:href="/images/social/deco-bg2.svg#main" />
            </svg>
          </div>
          <title-secondary
            :text="$t('social.feature_title3')"
            align="center"
          />
          <v-row class="spacing6" justify="center">
            <v-col md="10" cols="12" class="pa-6">
              <h6 class="text-center use-text-subtitle2">
                {{ $t('social.feature_desc3') }}
              </h6>
              <div
                data-aos-offset="10"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <div class="illustration">
                  <div class="bg liquid3" />
                  <figure class="screen3 desktop-screen">
                    <img
                      :src="imgAPI.social[29]"
                      alt="screen"
                    >
                  </figure>
                  <figure class="graphic artwork3">
                    <img
                      :src="imgAPI.social[14]"
                      :data-2d="imgAPI.social[13]"
                      :data-3d="imgAPI.social[14]"
                      class="img-2d3d"
                      alt="illustration"
                    >
                  </figure>
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
import TitleSecondary from '../../Title/TitleSecondary';

export default {
  components: {
    TitleSecondary,
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
