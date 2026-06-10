<template>
  <div class="banner-wrap">
    <div v-if="loaded" class="carousel">
      <splide
        ref="slider"
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
                  :src="imgAPI.retail[5]"
                  :data-2d="imgAPI.retail[4]"
                  :data-3d="imgAPI.retail[5]"
                  alt="background"
                >
              </div>
              <v-container>
                <v-row>
                  <v-col md="7" cols="12" class="px-6 d-flex align-center">
                    <div class="text">
                      <h4 class="use-text-title">
                        {{ $t('retail.banner_title') }}
                      </h4>
                      <h5 class="use-text-subtitle">
                        {{ $t('retail.banner_desc') }}
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
                          variant="outlined"
                          color="secondary"
                          :href="link.retail.contact"
                          class="button"
                        >
                          {{ $t('common.btn_get') }}
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                  <v-col md="5" cols="12" class="px-lg-6">
                    <div class="img">
                      <img
                        class="img-2d3d img-slide1"
                        :src="imgAPI.retail[1]"
                        :data-2d="imgAPI.retail[0]"
                        :data-3d="imgAPI.retail[1]"
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
                  <v-col lg="5" md="4" cols="12" class="px-lg-10">
                    <div class="img">
                      <img
                        class="img-2d3d img-slide2"
                        :src="imgAPI.retail[3]"
                        :data-2d="imgAPI.retail[2]"
                        :data-3d="imgAPI.retail[3]"
                        alt="banner 2 3D"
                      >
                    </div>
                  </v-col>
                  <v-col lg="7" md="8" cols="12" class="px-6 d-flex align-center">
                    <div class="text">
                      <h4 class="use-text-title">
                        {{ $t('retail.banner_title') }}
                      </h4>
                      <h5 class="use-text-subtitle">
                        {{ $t('retail.banner_desc') }}
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
                          variant="outlined"
                          color="secondary"
                          :href="link.retail.contact"
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
                  <v-col cols="12" class="px-sm-12 px-6">
                    <div class="text text-center">
                      <h4 class="use-text-title">
                        {{ $t('retail.banner_title') }}
                      </h4>
                      <h5 class="use-text-subtitle">
                        {{ $t('retail.banner_desc') }}
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
                          variant="outlined"
                          color="secondary"
                          :href="link.retail.contact"
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
                        :src="imgAPI.retail[7]"
                        :data-2d="imgAPI.retail[6]"
                        :data-3d="imgAPI.retail[7]"
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
import link from '@/assets/text/link';
import imgAPI from '@/assets/images/imgAPI';
import Hidden from '../../Hidden';

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
        ease: 'ease-out',
        direction: 'ltr',
        reducedMotion: {
          speed: 500,
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
      this.$refs.slider.go(index);
    },
  },
};
</script>
