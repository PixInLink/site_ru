<template>
  <div v-if="loaded" class="market">
    <splide :options="slickOptions">
      <splide-slide
        v-for="(item, index) in marketList"
        :key="index"
      >
        <div class="item">
          <div class="coin">
            <v-avatar class="logo" height="20" width="20" min-width="20">
              <img :src="item.logo" :alt="item.name">
            </v-avatar>
            {{ item.name }}
            {{ item.price }}
            (<span v-if="item.status === 'down'" class="down">
              <i>▼</i>{{ item.percent }}%
            </span>
            <span v-if="item.status === 'up'" class="up">
              <i>▲</i>{{ item.percent }}%
            </span>
            <span v-if="item.status === 'stay'" class="stay">
              <i>-</i>{{ item.percent }}%
            </span>)
          </div>
        </div>
      </splide-slide>
    </splide>
  </div>
</template>

<style lang="scss" scoped>
@import './market-price-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const marketList = [
  {
    logo: '/images/crypto/btc.png',
    name: 'BTC',
    price: 1020,
    status: 'up',
    percent: 8,
  },
  {
    logo: '/images/crypto/xrp.png',
    name: 'XRP',
    price: 0.003,
    status: 'down',
    percent: 3,
  },
  {
    logo: '/images/crypto/nem.png',
    name: 'NEM',
    price: 0.03,
    status: 'up',
    percent: 8,
  },
  {
    logo: '/images/crypto/iot.png',
    name: 'IOTA',
    price: 0.01,
    status: 'down',
    percent: 3,
  },
  {
    logo: '/images/crypto/mnr.png',
    name: 'MNR',
    price: 1.45,
    status: 'up',
    percent: 8,
  },
  {
    logo: '/images/crypto/byc.png',
    name: 'BYC',
    price: 22.34,
    status: 'down',
    percent: 3,
  },
  {
    logo: '/images/crypto/iot.png',
    name: 'IOTA',
    price: 0.01,
    status: 'down',
    percent: 3,
  },
  {
    logo: '/images/crypto/mnr.png',
    name: 'MNR',
    price: 1.45,
    status: 'up',
    percent: 8,
  },
  {
    logo: '/images/crypto/byc.png',
    name: 'BYC',
    price: 22.34,
    status: 'down',
    percent: 3,
  },
];

export default {
  components: {
    Splide,
    SplideSlide,
  },
  data: () => ({
    marketList,
    loaded: false,
    slickOptions: {
      pagination: false,
      arrows: false,
      type: 'loop',
      perPage: 6,
      perMove: 1,
      autoplay: true,
      invterval: 5000,
      speed: 500,
      pauseOnHover: true,
      direction: 'ltr',
      easing: 'ease',
      reducedMotion: {
        autoplay: true,
        speed: 500,
        rewindSpeed: 1000,
      },
    },
  }),
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
};
</script>
