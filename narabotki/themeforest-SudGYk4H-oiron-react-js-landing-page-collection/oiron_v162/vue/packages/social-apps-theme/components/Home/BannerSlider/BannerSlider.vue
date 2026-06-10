<template>
  <div class="banner-wrap">
    <div v-if="loaded" class="carousel">
      <splide
        ref="sliderDeco"
        class="slider-deco"
        :options="slickOptionsDeco"
        @splide:move="handleSyncDeco"
      >
        <splide-slide>
          <div class="slide" :class="{ cur: currentSlide === 0 }">
            <div class="inner">
              <div class="deco-wrap">
                <div class="deco s1">
&nbsp;
                </div>
              </div>
            </div>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="slide" :class="{ cur: currentSlide === 1 }">
            <div class="inner">
              <div class="deco-wrap">
                <div class="deco s2">
&nbsp;
                </div>
              </div>
            </div>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="slide" :class="{ cur: currentSlide === 2 }">
            <div class="inner">
              &nbsp;
            </div>
          </div>
        </splide-slide>
      </splide>
    </div>
    <div v-if="loaded" class="carousel">
      <splide
        ref="sliderBanner"
        class="slider"
        :options="slickOptions"
        @splide:active="handleAfterChange"
        @splide:move="handleSyncBanner"
      >
        <splide-slide>
          <div id="slide1" class="slide">
            <div class="inner">
              <div class="img background-banner">
                <img
                  class="img-2d3d"
                  :src="imgAPI.social[5]"
                  :data-2d="imgAPI.social[4]"
                  :data-3d="imgAPI.social[5]"
                  alt="background"
                >
              </div>
              <v-container>
                <v-row>
                  <v-col lg="6" md="7" cols="12" class="px-sm-6 d-flex align-center">
                    <div class="text">
                      <h4 class="use-text-title">
                        {{ $t('social.banner_title') }}
                      </h4>
                      <h5 class="use-text-subtitle">
                        {{ $t('social.banner_desc') }}
                      </h5>
                      <div class="btn-area download">
                        <nuxt-link to="/">
                          <img src="/images/social/app-store.png" alt="app store">
                        </nuxt-link>
                        <nuxt-link to="/">
                          <img src="/images/social/play-store.png" alt="play store">
                        </nuxt-link>
                      </div>
                    </div>
                  </v-col>
                  <v-col lg="6" md="5" cols="12" class="px-lg-6">
                    <div class="img">
                      <img
                        class="img-2d3d img-slide1"
                        :src="imgAPI.social[1]"
                        :data-2d="imgAPI.social[0]"
                        :data-3d="imgAPI.social[1]"
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
          <div id="slide2" class="slide">
            <div class="inner">
              <v-container>
                <v-row justify="end" :class="[isMobile ? 'column-reverse' : 'row']">
                  <v-col lg="6" md="5" cols="12" class="px-lg-6">
                    <div class="img">
                      <img
                        class="img-2d3d img-slide2"
                        :src="imgAPI.social[3]"
                        :data-2d="imgAPI.social[2]"
                        :data-3d="imgAPI.social[3]"
                        alt="banner 2 3D"
                      >
                    </div>
                  </v-col>
                  <v-col lg="6" md="7" cols="12" class="px-sm-6 d-flex align-center">
                    <div class="text">
                      <h4 class="use-text-title">
                        {{ $t('social.banner_title') }}
                      </h4>
                      <h5 class="use-text-subtitle">
                        {{ $t('social.banner_desc') }}
                      </h5>
                      <div class="btn-area">
                        <v-btn
                          variant="text"
                          size="large"
                          color="primary"
                          href="#"
                          class="button"
                        >
                          {{ $t('common.btn_detail') }}
                        </v-btn>
                        <v-btn
                          size="large"
                          color="secondary"
                          :href="link.social.contact"
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
          <div id="slide3" class="slide center-content">
            <div class="inner">
              <v-container>
                <v-row justify="end">
                  <v-col cols="12" class="px-sm-12">
                    <div class="text text-center">
                      <h4 class="use-text-title">
                        {{ $t('social.banner_title') }}
                      </h4>
                      <h5 class="use-text-subtitle">
                        {{ $t('social.banner_desc') }}
                      </h5>
                      <div class="btn-area justify-center">
                        <v-btn
                          variant="text"
                          size="large"
                          color="primary"
                          href="#"
                          class="button"
                        >
                          {{ $t('common.btn_detail') }}
                        </v-btn>
                        <v-btn
                          size="large"
                          color="secondary"
                          :href="link.social.contact"
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
                        :src="imgAPI.social[7]"
                        :data-2d="imgAPI.social[6]"
                        :data-3d="imgAPI.social[7]"
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
    <div class="slide-nav-group">
      <hidden point="smDown">
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
      </hidden>
    </div>
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
        perPage: 1,
        type: 'loop',
        speed: 1000,
        easing: 'ease',
        direction: 'ltr',
        reducedMotion: {
          speed: 1000,
          rewindSpeed: 1000,
        },
        breakpoints: {
          800: {
            pagination: true,
          },
        },
      },
      slickOptionsDeco: {
        pagination: false,
        arrows: false,
        speed: 1000,
        type: 'fade',
        easing: 'ease',
        direction: 'ltr',
        reducedMotion: {
          speed: 1000,
          rewindSpeed: 1000,
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
        this.slickOptionsDeco.direction = 'rtl';
      } else {
        this.slickOptions.direction = 'ltr';
        this.slickOptionsDeco.direction = 'ltr';
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
    handleSyncDeco(slide) {
      this.$refs.sliderBanner.go(slide.index);
    },
    handleSyncBanner(slide) {
      this.$refs.sliderDeco.go(slide.index);
    },
  },
};
</script>
