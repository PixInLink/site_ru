<template>
  <div class="root">
    <div>
      <v-container class="carousel-header">
        <div class="px-sm-3">
          <h4 class="use-text-title2 text-capitalize">
            {{ $t('marketing.services_title') }}
          </h4>
          <p class="use-text-subtitle2">
            Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed.
          </p>
        </div>
        <v-btn
          :href="link.marketing.product"
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
            <splide-slide>
              <div class="item">
                <div class="carousel-prop">
                  <div />
                </div>
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
                data-aos="fade"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="300"
              >
                <div>
                  <deco-mountain />
                </div>
              </div>
              <div
                data-aos-offset="250"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="500"
              >
                <div>
                  <img
                    :src="imgAPI.marketing[11]"
                    :data-2d="imgAPI.marketing[10]"
                    :data-3d="imgAPI.marketing[11]"
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
                @click="prev()"
              >
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
              <v-btn
                icon
                size="small"
                aria-label="prev"
                class="margin"
                @click="next()"
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
@import './services-style.scss';
</style>

<script>
import AOS from 'aos';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';
import DecoMountain from '../Deco/Mountain';
import Card from '../../Cards/ServiceCard';
import SliderArt from '../SliderArt';

export default {
  components: {
    Card,
    Splide,
    SplideSlide,
    DecoMountain,
    SliderArt,
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
          img: imgAPI.marketing[21],
        },
        {
          title: 'Etiam rhoncus',
          desc:
            'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
          img: imgAPI.marketing[22],
        },
        {
          title: 'Duis fermentum',
          desc:
            'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
          img: imgAPI.marketing[23],
        },
        {
          title: 'Lorem Ipsum',
          desc:
            'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
          img: imgAPI.marketing[24],
        },
        {
          title: 'Etiam rhoncus',
          desc:
            'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
          img: imgAPI.marketing[25],
        },
        {
          title: 'Duis fermentum',
          desc:
            'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
          img: imgAPI.marketing[26],
        },
      ],
    };
  },
  mounted() {
    AOS.init({
      once: true,
    });
    this.loaded = true;
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
