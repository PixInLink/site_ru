<template>
  <div class="banner-wrap">
    <div v-if="loaded" class="carousel">
      <splide
        ref="sliderBanner"
        class="slider"
        :options="slickOptions"
        @splide:active="handleAfterChange"
      >
        <splide-slide>
          <div id="slide1" class="slide">
            <div class="inner">
              <div class="img background-banner">
                <img
                  class="img-2d3d"
                  :src="imgAPI.saas2[5]"
                  :data-2d="imgAPI.saas2[4]"
                  :data-3d="imgAPI.saas2[5]"
                  alt="background"
                >
              </div>
              <v-container>
                <v-row>
                  <v-col md="6" cols="12" class="px-sm-6 d-flex align-center">
                    <div class="text">
                      <h4 class="use-text-title2">
                        {{ $t('saas2.banner_title') + ' ' + $t('saas2.banner_titlestrong') }}
                      </h4>
                      <h5 class="use-text-subtitle2">
                        {{ $t('saas2.banner_subtitle') }}
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
                          color="secondary"
                          :href="link.saas2.contact"
                          class="button"
                        >
                          {{ $t('saas2.getstarted') }}
                          &nbsp;
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                  <v-col md="6" cols="12" class="px-6">
                    <div class="img">
                      <img
                        class="img-2d3d img-slide1"
                        :src="imgAPI.saas2[1]"
                        :data-2d="imgAPI.saas2[0]"
                        :data-3d="imgAPI.saas2[1]"
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
              <hidden point="mdUp">
                <div class="img background-banner">
                  <img
                    class="img-2d3d"
                    :src="imgAPI.saas2[5]"
                    :data-2d="imgAPI.saas2[4]"
                    :data-3d="imgAPI.saas2[5]"
                    alt="background"
                  >
                </div>
              </hidden>
              <v-container>
                <v-row justify="end" :class="[isMobile ? 'column-reverse' : 'row']">
                  <v-col md="6" cols="12" class="px-6">
                    <div class="img">
                      <img
                        class="img-2d3d img-slide2"
                        :src="imgAPI.saas2[3]"
                        :data-2d="imgAPI.saas2[2]"
                        :data-3d="imgAPI.saas2[3]"
                        alt="banner 2 3D"
                      >
                    </div>
                  </v-col>
                  <v-col md="6" cols="12" class="px-sm-6 d-flex align-center">
                    <div class="text">
                      <h4 class="use-text-title2">
                        {{ $t('saas2.banner_title') + ' ' + $t('saas2.banner_titlestrong') }}
                      </h4>
                      <h5 class="use-text-subtitle2">
                        {{ $t('saas2.banner_subtitle') }}
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
                          color="secondary"
                          :href="link.saas2.contact"
                          class="button"
                        >
                          {{ $t('saas2.getstarted') }}
                          &nbsp;
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
                  <v-col cols="12" class="px-sm-6">
                    <div class="text text-center">
                      <h4 class="use-text-title2">
                        {{ $t('saas2.banner_title') + ' ' + $t('saas2.banner_titlestrong') }}
                      </h4>
                      <h5 class="use-text-subtitle2">
                        {{ $t('saas2.banner_subtitle') }}
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
                          color="secondary"
                          :href="link.saas2.contact"
                          class="button"
                        >
                          {{ $t('saas2.getstarted') }}
                          &nbsp;
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <div class="img h-banner">
                      <img
                        class="img-2d3d"
                        :src="imgAPI.saas2[7]"
                        :data-2d="imgAPI.saas2[6]"
                        :data-3d="imgAPI.saas2[7]"
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
      <div class="deco-wrap">
        <div class="deco bottom">
          <svg class="wave">
            <use xlink:href="/images/saas2/deco-wave.svg#main" />
          </svg>
        </div>
        <div class="deco top">
          <div class="wave wave-cover" />
        </div>
      </div>
      <div class="wave wave-cover" />
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
        speed: 800,
        perPage: 1,
        type: 'loop',
        easing: 'ease-out',
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
