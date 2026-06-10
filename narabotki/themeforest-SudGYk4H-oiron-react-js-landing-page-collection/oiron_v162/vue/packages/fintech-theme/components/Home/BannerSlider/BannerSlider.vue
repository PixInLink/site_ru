<template>
  <div class="banner-wrap">
    <div class="root">
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
                  <div class="deco">
                    <div class="deco-left">
                      <span class="leaf" />
                      <span class="land" />
                      <span class="round" />
                    </div>
                    <div class="deco-right">
                      <span class="leaf" />
                      <span class="land" />
                      <span class="round" />
                    </div>
                  </div>
                  <img
                    class="img-2d3d"
                    :src="imgAPI.fintech[3]"
                    :data-2d="imgAPI.fintech[2]"
                    :data-3d="imgAPI.fintech[3]"
                    alt="background"
                  >
                </div>
                <v-container>
                  <v-row>
                    <v-col md="6" cols="12" class="px-sm-6 d-flex align-center">
                      <div class="text">
                        <div class="title title-left">
                          <h4 class="use-text-title2">
                            {{ $t('fintech.banner_title') }}
                          </h4>
                        </div>
                        <h5 class="use-text-subtitle2">
                          {{ $t('fintech.banner_subtitle') }}
                        </h5>
                        <div class="btn-area">
                          <v-btn
                            size="large"
                            color="primary"
                            variant="outlined"
                            href="#"
                            class="button anchor-link"
                          >
                            {{ $t('common.btn_detail') }}
                          </v-btn>
                          <v-btn
                            size="large"
                            color="primary"
                            :href="link.fintech.contact"
                            class="button"
                          >
                            {{ $t('common.btn_get') }}
                          </v-btn>
                        </div>
                      </div>
                    </v-col>
                    <v-col md="6" cols="12">
                      <div class="img">
                        <img
                          class="img-2d3d img-slide1"
                          :src="imgAPI.fintech[5]"
                          :data-2d="imgAPI.fintech[4]"
                          :data-3d="imgAPI.fintech[5]"
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
                    <v-col md="6" cols="12" class="px-sm-6">
                      <div class="img">
                        <img
                          class="img-2d3d img-slide2"
                          :src="imgAPI.fintech[7]"
                          :data-2d="imgAPI.fintech[6]"
                          :data-3d="imgAPI.fintech[7]"
                          alt="banner 2 3D"
                        >
                      </div>
                    </v-col>
                    <v-col md="6" cols="12" class="px-sm-6 d-flex align-center">
                      <div class="text">
                        <div class="title title-left">
                          <h4 class="use-text-title2">
                            {{ $t('fintech.banner_title') }}
                          </h4>
                        </div>
                        <h5 class="use-text-subtitle2">
                          {{ $t('fintech.banner_subtitle') }}
                        </h5>
                        <div class="btn-area">
                          <v-btn
                            size="large"
                            color="primary"
                            variant="outlined"
                            href="#"
                            class="button anchor-link"
                          >
                            {{ $t('common.btn_detail') }}
                          </v-btn>
                          <v-btn
                            size="large"
                            color="primary"
                            :href="link.fintech.contact"
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
                        <div class="title-wrap">
                          <div class="title title-center">
                            <h4 class="use-text-title2">
                              {{ $t('fintech.banner_title') }}
                            </h4>
                          </div>
                        </div>
                        <h5 class="use-text-subtitle2">
                          {{ $t('fintech.banner_subtitle') }}
                        </h5>
                        <div class="btn-area">
                          <v-btn
                            size="large"
                            color="primary"
                            variant="outlined"
                            href="#"
                            class="button anchor-link"
                          >
                            {{ $t('common.btn_detail') }}
                          </v-btn>
                          <v-btn
                            size="large"
                            color="primary"
                            :href="link.fintech.contact"
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
                          :src="imgAPI.fintech[9]"
                          :data-2d="imgAPI.fintech[8]"
                          :data-3d="imgAPI.fintech[9]"
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
        easing: 'ease',
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
