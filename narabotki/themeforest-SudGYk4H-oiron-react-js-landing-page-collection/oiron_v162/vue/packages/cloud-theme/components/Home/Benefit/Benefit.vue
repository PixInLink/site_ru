<template>
  <div class="root">
    <div class="illustration-bg">
      <img
        class="img-2d3d"
        :src="imgAPI.cloud[11]"
        :data-2d="imgAPI.cloud[10]"
        :data-3d="imgAPI.cloud[11]"
        alt="feature"
      >
    </div>
    <v-container class="max-md fixed-width">
      <div class="wrapper">
        <div class="desc">
          <main-title
            :caption="$t('cloud.benefit_headtitle')"
            :text="$t('cloud.benefit_title')"
            align="center"
            dark
          />
          <p class="use-text-subtitle2">
            {{ $t('cloud.banner_subtitle') }}
          </p>
          <div v-if="loaded" class="carousel">
            <div class="nav">
              <a
                href="javascript:void(0)"
                class="prev"
                @click="prev"
              >
                <v-icon>mdi-chevron-left</v-icon>
              </a>
              <a
                href="javascript:void(0)"
                class="next"
                @click="next"
              >
                <v-icon>mdi-chevron-right</v-icon>
              </a>
            </div>
            <splide
              ref="slider"
              class="slider"
              :options="slickOptions"
            >
              <splide-slide v-for="(item, index) in imgSlider" :key="index">
                <div class="slide">
                  <div class="border">
                    <figure>
                      <img :src="item" alt="screen">
                    </figure>
                  </div>
                </div>
              </splide-slide>
            </splide>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './benefit-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import Title from '../../Title';
import imgAPI from '@/assets/images/imgAPI';

export default {
  components: {
    'main-title': Title,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      imgAPI,
      loaded: false,
      imgSlider: [
        imgAPI.cloud[32],
        imgAPI.cloud[33],
        imgAPI.cloud[34],
        imgAPI.cloud[35],
        imgAPI.cloud[36],
        imgAPI.cloud[37],
      ],
      slickOptions: {
        pagination: true,
        arrows: false,
        speed: 800,
        perPage: 1,
        type: 'fade',
        autoplay: true,
        interval: 10000,
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
        },
      },
    };
  },
  mounted() {
    this.loaded = true;
  },
  methods: {
    next() {
      this.$refs.slider.go('>');
    },
    prev() {
      this.$refs.slider.go('<');
    },
  },
};
</script>
