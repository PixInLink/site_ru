<template>
  <div class="root">
    <div class="deco-bg">
      <svg>
        <use xlink:href="/images/crypto/deco-benefit.svg#main" />
      </svg>
    </div>
    <v-container class="max-md fixed-width">
      <div class="wrapper">
        <div class="desc">
          <title-main
            :text="$t('crypto.benefit_title')"
            align="center"
          />
          <p class="use-text-subtitle2">
            {{ $t('crypto.banner_subtitle') }}
          </p>
          <div v-if="loaded" class="carousel">
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
import imgAPI from '@/assets/images/imgAPI';
import Title from '../../Title';

export default {
  components: {
    Splide,
    SplideSlide,
    'title-main': Title,
  },
  data() {
    return {
      imgAPI,
      loaded: false,
      imgSlider: [
        imgAPI.crypto[28],
        imgAPI.crypto[29],
        imgAPI.crypto[30],
        imgAPI.crypto[31],
        imgAPI.crypto[32],
        imgAPI.crypto[33],
      ],
      slickOptions: {
        type: 'fade',
        pagination: true,
        arrows: false,
        speed: 800,
        perPage: 1,
        autoplay: false,
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
};
</script>
