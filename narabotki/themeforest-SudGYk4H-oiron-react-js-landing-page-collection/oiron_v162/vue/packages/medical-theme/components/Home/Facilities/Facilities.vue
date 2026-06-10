<template>
  <div class="root">
    <div>
      <v-container class="carousel-header">
        <div class="px-3">
          <h4 class="use-text-title">
            {{ $t('medical.services_title') }}
          </h4>
          <p class="use-text-subtitle2">
            Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed.
          </p>
        </div>
        <v-btn
          :href="link.medical.product"
          text
          class="view-all"
        >
          {{ $t('common.btn_seeall') }}
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </v-container>
      <div class="carousel-handle">
        <div v-if="loaded" class="carousel-wrap">
          <splide
            ref="splide"
            :options="slickOptions"
            @splide:active="handleAfterChange"
          >
            <splide-slide>
              <div class="item">
                <div class="carousel-prop">
                  <div />
                </div>
              </div>
            </splide-slide>
            <splide-slide
              v-for="(item, index) in servicesList"
              :key="index"
            >
              <div class="item">
                <card
                  :title="item.title"
                  :desc="item.desc"
                  :img="item.img"
                  button="see detail"
                />
              </div>
            </splide-slide>
          </splide>
        </div>
      </div>
      <div class="floating-artwork">
        <v-container class="fixed-width">
          <div class="artwork">
            <slider-art :fade="fade">
              <div
                data-aos-offset="250"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="500"
              >
                <div>
                  <img
                    :src="imgAPI.medical[13]"
                    :data-2d="imgAPI.medical[12]"
                    :data-3d="imgAPI.medical[13]"
                    class="img-2d3d"
                    alt="facilities"
                  >
                </div>
              </div>
            </slider-art>
            <nav class="arrow">
              <v-btn
                icon
                size="small"
                aria-label="next"
                class="margin"
                @click="next()"
              >
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
              <v-btn
                icon
                size="small"
                aria-label="prev"
                class="margin"
                @click="prev()"
              >
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </nav>
          </div>
        </v-container>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './facilities-style.scss';
</style>

<script>
import AOS from 'aos';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';
import Card from '../../Cards/FacilityCard';
import SliderArt from '../SliderArt';

export default {
  components: {
    Card,
    SliderArt,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      loaded: false,
      imgAPI,
      link,
      fade: false,
      slickOptions: {
        pagination: false,
        speed: 500,
        perPage: 4,
        perMove: 1,
        arrows: false,
        autoWidth: true,
        direction: 'ltr',
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
        },
        breakpoints: {
          1100: {
            perPage: 4,
          },
          800: {
            perPage: 3,
          },
          600: {
            perPage: 2,
          },
        },
      },
      servicesList: [
        {
          title: 'Lorem Ipsum',
          desc:
            'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
          img: imgAPI.medical[26],
        },
        {
          title: 'Etiam rhoncus',
          desc:
            'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
          img: imgAPI.medical[27],
        },
        {
          title: 'Duis fermentum',
          desc:
            'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
          img: imgAPI.medical[28],
        },
        {
          title: 'Lorem Ipsum',
          desc:
            'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
          img: imgAPI.medical[29],
        },
        {
          title: 'Etiam rhoncus',
          desc:
            'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
          img: imgAPI.medical[30],
        },
        {
          title: 'Duis fermentum',
          desc:
            'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
          img: imgAPI.medical[26],
        },
      ],
    };
  },
  mounted() {
    this.loaded = true;
    AOS.init({
      once: true,
    });
  },
  methods: {
    next() {
      this.$refs.splide.go('>');
    },
    prev() {
      this.$refs.splide.go('<');
    },
    handleAfterChange(slide) {
      if (slide.index > 0) {
        this.fade = true;
      } else {
        this.fade = false;
      }
    },
  },
};
</script>
