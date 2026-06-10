<template>
  <div class="root">
    <v-container class="carousel-header">
      <h4 class="title-primary">
        {{ $t('agency.services_title') }}
      </h4>
      <v-btn
        :href="link.agency.product"
        color="primary"
        variant="text"
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
          <splide-slide
            v-for="(item, index) in servicesList"
            :key="index"
          >
            <div class="item">
              <card
                :title="item.title"
                :desc="item.desc"
                :img="item.img"
                :rating="item.raitng"
                type="over"
              />
            </div>
          </splide-slide>
          <splide-slide>
            <div class="carousel-prop">
              <div />
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
              data-aos="fade-left"
              data-aos-offset="-60"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              <div>
                <img
                  :src="imgAPI.agency[17]"
                  :data-2d="imgAPI.agency[16]"
                  :data-3d="imgAPI.agency[17]"
                  class="img-2d3d"
                  alt="services 3d"
                >
              </div>
            </div>
          </slider-art>
          <nav class="arrow">
            <v-btn
              icon
              density="default"
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
</template>

<style lang="scss" scoped>
@import './services-style.scss';
@import '../../Title/title-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';
import Card from '../../Cards/ProductCard';
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
          img: imgAPI.agency[2],
        },
        {
          title: 'Etiam rhoncus',
          desc:
            'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
          img: imgAPI.agency[3],
        },
        {
          title: 'Duis fermentum',
          desc:
            'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
          img: imgAPI.agency[4],
        },
        {
          title: 'Lorem Ipsum',
          desc:
            'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
          img: imgAPI.agency[2],
        },
        {
          title: 'Etiam rhoncus',
          desc:
            'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
          img: imgAPI.agency[3],
        },
        {
          title: 'Duis fermentum',
          desc:
            'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
          img: imgAPI.agency[4],
        },
      ],
    };
  },
  mounted() {
    AOS.init({
      once: true,
    });

    this.loaded = true;
    const props = window.innerWidth > 1400 ? 1 : 2; // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px
    const lastSlide = Math.floor(this.servicesList.length + props - this.slickOptions.perPage);

    setTimeout(() => {
      if (window.innerWidth > 1200) {
        this.$refs.splide.go(lastSlide);
      }
    }, 100);
  },
  methods: {
    next() {
      this.$refs.splide.go('>');
    },
    prev() {
      this.$refs.splide.go('<');
    },
    handleAfterChange(slide) {
      const edge = this.servicesList.length - this.slickOptions.perPage;
      if (slide.index <= edge) {
        this.fade = true;
      } else {
        this.fade = false;
      }
    },
  },
};
</script>
