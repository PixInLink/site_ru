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
                <div class="deco bottom s1">
                  &nbsp;
                </div>
                <div class="deco top s1">
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
                <div class="deco bottom s2">
                  &nbsp;
                </div>
                <div class="deco top s2">
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="slide" :class="{ cur: currentSlide === 2 }">
            <div class="inner">
              <div class="deco-wrap">
                <div class="deco bottom s3">
                  &nbsp;
                </div>
                <div class="deco top s3">
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
        </splide-slide>
      </splide>
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
              <v-container>
                <v-row>
                  <v-col md="7" lg="6" cols="12" class="px-6 d-flex align-center">
                    <div class="text">
                      <h4 class="use-text-title">
                        {{ $t('agency.banner_title') }}
                      </h4>
                      <h5 class="use-text-subtitle">
                        {{ $t('agency.banner_subtitle') }}
                      </h5>
                      <div class="btn-area">
                        <v-btn
                          variant="outlined"
                          size="large"
                          color="primary"
                          href="#"
                          class="button"
                        >
                          {{ $t('common.btn_detail') }}
                        </v-btn>
                        <v-btn
                          size="large"
                          color="primary"
                          :href="link.agency.register"
                          class="button"
                        >
                          {{ $t('common.btn_get') }}
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                  <v-col md="5" lg="6" cols="12">
                    <div class="img">
                      <img
                        :src="imgAPI.agency[11]"
                        :data-2d="imgAPI.agency[10]"
                        :data-3d="imgAPI.agency[11]"
                        class="img-2d3d"
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
                  <v-col md="5" lg="6" cols="12">
                    <div class="img">
                      <img
                        :src="imgAPI.agency[13]"
                        :data-2d="imgAPI.agency[12]"
                        :data-3d="imgAPI.agency[13]"
                        class="img-2d3d"
                        alt="banner 1 3D"
                      >
                    </div>
                  </v-col>
                  <v-col md="7" lg="6" cols="12" class="px-6 d-flex align-center">
                    <div class="text">
                      <h4 class="use-text-title">
                        {{ $t('agency.banner_title') }}
                      </h4>
                      <h5 class="use-text-subtitle">
                        {{ $t('agency.banner_subtitle') }}
                      </h5>
                      <div class="btn-area">
                        <v-btn
                          variant="outlined"
                          size="large"
                          color="primary"
                          href="#"
                          class="button"
                        >
                          {{ $t('common.btn_detail') }}
                        </v-btn>
                        <v-btn
                          size="large"
                          color="primary"
                          :href="link.agency.register"
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
                  <v-col cols="12" class="px-12">
                    <div class="text text-center">
                      <h4 class="use-text-title">
                        {{ $t('agency.banner_title') }}
                      </h4>
                      <h5 class="use-text-subtitle">
                        {{ $t('agency.banner_subtitle') }}
                      </h5>
                      <div class="btn-area">
                        <v-btn
                          variant="outlined"
                          size="large"
                          color="primary"
                          href="#"
                          class="button"
                        >
                          {{ $t('common.btn_detail') }}
                        </v-btn>
                        <v-btn
                          size="large"
                          color="primary"
                          :href="link.agency.register"
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
                        :src="imgAPI.agency[15]"
                        :data-2d="imgAPI.agency[14]"
                        :data-3d="imgAPI.agency[15]"
                        class="img-2d3d"
                        alt="banner 1 3D"
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
      <v-container class="max-md">
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
    Splide,
    SplideSlide,
    Hidden,
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
