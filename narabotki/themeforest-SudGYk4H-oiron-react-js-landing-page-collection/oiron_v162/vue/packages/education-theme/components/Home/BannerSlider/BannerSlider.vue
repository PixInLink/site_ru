<template>
  <div class="banner-wrap">
    <div class="bg-deco" />
    <v-container class="small-deco">
      <div />
    </v-container>
    <div class="carousel">
      <splide
        ref="sliderBanner"
        class="slider"
        :options="slickOptions"
        @splide:active="handleAfterChange"
      >
        <splide-slide>
          <div class="slide">
            <div class="inner">
              <div class="img background-banner">
                <img
                  class="img-2d3d"
                  :src="imgAPI.education[26]"
                  :data-2d="imgAPI.education[25]"
                  :data-3d="imgAPI.education[26]"
                  alt="background"
                >
              </div>
              <v-container>
                <v-row>
                  <v-col md="6" cols="12" class="px-6 d-flex align-center">
                    <div class="text">
                      <div class="title title-left">
                        <h4 class="use-text-title">
                          {{ $t('education.banner_title') }}
                        </h4>
                      </div>
                      <h5 class="use-text-subtitle">
                        {{ $t('education.banner_desc') }}
                      </h5>
                      <div class="btn-area">
                        <v-btn
                          variant="text"
                          size="large"
                          href="#"
                          class="button"
                        >
                          {{ $t('common.btn_detail') }}
                        </v-btn>
                        <v-btn
                          size="large"
                          color="primary"
                          :href="link.education.contact"
                          class="button"
                        >
                          {{ $t('common.btn_get') }}
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                  <v-col md="6" cols="12" class="px-6">
                    <div class="img">
                      <img
                        class="img-2d3d img-slide1"
                        :src="imgAPI.education[20]"
                        :data-2d="imgAPI.education[19]"
                        :data-3d="imgAPI.education[20]"
                        alt="banner 1 3D"
                      >
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="slide">
            <div class="inner">
              <v-container>
                <v-row justify="end" :class="[isMobile ? 'column-reverse' : 'row']">
                  <v-col md="6" cols="12" class="px-6">
                    <div class="img">
                      <img
                        class="img-2d3d img-slide2"
                        :src="imgAPI.education[22]"
                        :data-2d="imgAPI.education[21]"
                        :data-3d="imgAPI.education[22]"
                        alt="banner 2 3D"
                      >
                    </div>
                  </v-col>
                  <v-col md="6" cols="12" class="px-6 d-flex align-center">
                    <div class="text">
                      <div class="title title-left">
                        <h4 class="use-text-title">
                          {{ $t('education.banner_title') }}
                        </h4>
                      </div>
                      <h5 class="use-text-subtitle">
                        {{ $t('education.banner_desc') }}
                      </h5>
                      <div class="btn-area">
                        <v-btn
                          variant="text"
                          size="large"
                          href="#"
                          class="button"
                        >
                          {{ $t('common.btn_detail') }}
                        </v-btn>
                        <v-btn
                          size="large"
                          color="primary"
                          :href="link.education.contact"
                          class="button"
                        >
                          {{ $t('common.btn_get') }}
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="slide center-content">
            <div class="inner">
              <v-container>
                <v-row justify="end">
                  <v-col cols="12" class="px-lg-12">
                    <div class="text text-center">
                      <div class="title-wrap">
                        <div class="title title-center">
                          <h4 class="use-text-title">
                            {{ $t('education.banner_title') }}
                          </h4>
                        </div>
                      </div>
                      <h5 class="use-text-subtitle">
                        {{ $t('education.banner_desc') }}
                      </h5>
                      <div class="btn-area">
                        <v-btn
                          variant="text"
                          size="large"
                          href="#"
                          class="button"
                        >
                          {{ $t('common.btn_detail') }}
                        </v-btn>
                        <v-btn
                          size="large"
                          color="primary"
                          :href="link.education.contact"
                          class="button"
                        >
                          {{ $t('common.btn_get') }}
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <div class="img h-banner">
                      <img
                        class="img-2d3d"
                        :src="imgAPI.education[24]"
                        :data-2d="imgAPI.education[23]"
                        :data-3d="imgAPI.education[24]"
                        alt="banner 3 3D"
                      >
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </splide-slide>
      </splide>
    </div>
    <hidden point="smDown">
      <div class="slide-nav-group">
        <v-container>
          <nav class="slide-nav">
            <v-btn
              :class="{ active: currentSlide === 0 }"
              variant="text"
              @click="gotoSlide(0)"
            >
              <strong>First Slide</strong>
              Interdum et malesuada fames ac ante
            </v-btn>
            <v-divider class="divider" vertical inset />
            <v-btn
              :class="{ active: currentSlide === 1 }"
              variant="text"
              @click="gotoSlide(1)"
            >
              <strong>Second Slide</strong>
              Interdum et malesuada fames ac ante
            </v-btn>
            <v-divider class="divider" vertical inset />
            <v-btn
              :class="{ active: currentSlide === 2 }"
              variant="text"
              @click="gotoSlide(2)"
            >
              <strong>Third Slide</strong>
              Interdum et malesuada fames ac ante
            </v-btn>
          </nav>
        </v-container>
      </div>
    </hidden>
  </div>
</template>

<style scoped lang="scss">
@import './banner-styles';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import Hidden from '../../Hidden';
import link from '@/assets/text/link';
import imgAPI from '@/assets/images/imgAPI';

export default {
  components: {
    Hidden,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      loaded: false,
      currentSlide: 0,
      link,
      imgAPI,
      slickOptions: {
        pagination: false,
        arrows: false,
        speed: 800,
        perPage: 1,
        type: 'loop',
        autoplay: false,
        easing: 'ease',
        direction: 'ltr',
        reducedMotion: {
          speed: 1000,
          rewindSpeed: 1000,
        },
        breakpoints: {
          960: {
            pagination: true,
          },
        },
      },
    };
  },
  computed: {
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
  },
  mounted() {
    this.loaded = true;
    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.slickOptions.direction = 'rtl';
      } else {
        this.slickOptions.direction = 'ltr';
      }
    }, 100);
  },
  methods: {
    handleAfterChange(slide) {
      this.currentSlide = slide.index;
    },
    gotoSlide(index) {
      this.$refs.sliderBanner.go(index);
    },
  },
};
</script>
