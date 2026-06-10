<template>
  <div class="root">
    <v-container>
      <title-main
        :text="$t('crypto.banner_viewmarket')"
        align="center"
      />
      <p class="use-text-subtitle2 text-center">
        {{ $t('crypto.banner_title') }}
      </p>
      <div class="floating-artwork">
        <slider-art :fade="fade">
          <div
            data-aos="fade-right"
            data-aos-offset="60"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <img
              :src="imgAPI.crypto[11]"
              :data-2d="imgAPI.crypto[10]"
              :data-3d="imgAPI.crypto[11]"
              class="img-2d3d"
              alt="top coin"
            >
          </div>
        </slider-art>
      </div>
    </v-container>
    <div class="slider-wrap">
      <div v-if="loaded" class="carousel">
        <splide
          ref="splide"
          :options="slickOptions"
          @splide:active="handleAfterChange"
        >
          <splide-slide>
            <div class="props item-props-first">
              <div />
            </div>
          </splide-slide>
          <splide-slide
            v-for="(item, index) in coinData"
            :key="index"
          >
            <div class="item">
              <coin-card
                :logo="item.logo"
                :name="item.name"
                :price="item.price"
                :status="item.status"
                :volume="item.volume"
                :percent="item.percent"
              />
            </div>
          </splide-slide>
        </splide>
      </div>
      <v-btn
        icon
        variant="text"
        class="nav prev"
        @click="prev()"
      >
        <i class="ion-ios-arrow-back" />
      </v-btn>
      <v-btn
        icon
        variant="text"
        class="nav next"
        @click="next()"
      >
        <i class="ion-ios-arrow-forward" />
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './top-coin-style';
</style>

<script>
import AOS from 'aos';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import link from '@/assets/text/link';
import imgAPI from '@/assets/images/imgAPI';
import SliderArt from '../SliderArt';
import CoinCard from '../../Cards/CoinCard';
import Title from '../../Title';

const coinData = [
  {
    logo: '/images/crypto/btc.png',
    name: 'BTC',
    price: 1020,
    status: 'up',
    volume: 12345678,
    percent: 8,
  },
  {
    logo: '/images/crypto/xrp.png',
    name: 'XRP',
    price: 12.56,
    status: 'down',
    volume: 123456789,
    percent: 3,
  },
  {
    logo: '/images/crypto/nem.png',
    name: 'NEM',
    price: 0.3,
    status: 'up',
    volume: 123456,
    percent: 8,
  },
  {
    logo: '/images/crypto/iot.png',
    name: 'IOTA',
    price: 18.56,
    status: 'down',
    volume: 12345678,
    percent: 3,
  },
  {
    logo: '/images/crypto/mnr.png',
    name: 'MNR',
    price: 1.45,
    status: 'up',
    volume: 12345,
    percent: 8,
  },
  {
    logo: '/images/crypto/byc.png',
    name: 'BYC',
    price: 22.34,
    status: 'down',
    volume: 12345678,
    percent: 3,
  },
  {
    logo: '/images/crypto/iot.png',
    name: 'IOTA',
    price: 0.01,
    status: 'down',
    volume: 123456789,
    percent: 3,
  },
  {
    logo: '/images/crypto/mnr.png',
    name: 'MNR',
    price: 1.45,
    status: 'up',
    volume: 12345678910,
    percent: 8,
  },
  {
    logo: '/images/crypto/byc.png',
    name: 'BYC',
    price: 22.34,
    status: 'down',
    volume: 12345,
    percent: 3,
  },
];

export default {
  components: {
    'title-main': Title,
    CoinCard,
    SliderArt,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      link,
      imgAPI,
      loaded: false,
      fade: false,
      coinData,
      slickOptions: {
        pagination: false,
        speed: 500,
        perPage: 3,
        arrows: false,
        autoWidth: true,
        direction: 'ltr',
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
        },
        breakpoints: {
          1100: {
            perPage: 2,
            perMove: 1,
          },
          800: {
            perPage: 1,
            perMove: 1,
          },
        },
      },
    };
  },
  computed: {
    isMobile() {
      const xsDown = this.$vuetify.display.xsAndDown;
      return xsDown;
    },
  },
  mounted() {
    this.loaded = true;

    AOS.init({
      once: true,
    });

    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.slickOptions.direction = 'rtl';
      } else {
        this.slickOptions.direction = 'ltr';
      }
    }, 200);
  },
  methods: {
    next() {
      this.$refs.splide.go('>');
    },
    prev() {
      this.$refs.splide.go('<');
    },
    handleAfterChange(slide) {
      if (slide.index >= 1) {
        this.fade = true;
      } else {
        this.fade = false;
      }
    },
  },
};
</script>
