<template>
  <div class="root">
    <v-container>
      <title-main
        :text="$t('fintech.promotion_title')"
        align="center"
      />
      <p class="use-text-subtitle2 text-center">
        {{ $t('fintech.promotion_desc') }}
      </p>
    </v-container>
    <div class="slider-wrap">
      <div v-if="loaded" class="carousel">
        <splide
          ref="slick"
          :options="slickOptions"
        >
          <splide-slide
            v-for="(item, index) in promoData"
            :key="index"
          >
            <div class="item">
              <promo-card
                :img="item.img"
                :title="item.title"
                :periode="item.periode"
              />
            </div>
          </splide-slide>
        </splide>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './top-promotions-style';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import link from '@/assets/text/link';
import imgAPI from '@/assets/images/imgAPI';
import PromoCard from '../../Cards/PromoCard';
import Title from '../../Title';

const promoData = [
  {
    img: imgAPI.fintech[25],
    title: 'Aenean sit amet magna vel magna fringilla fermentum.',
    periode: 'Periode 27 Dec 2020 - 1 Jan 2021',
  },
  {
    img: imgAPI.fintech[26],
    title: 'Aenean sit amet magna vel magna fringilla fermentum.',
    periode: 'Periode 27 Dec 2020 - 1 Jan 2021',
  },
  {
    img: imgAPI.fintech[27],
    title: 'Aenean sit amet magna vel magna fringilla fermentum.',
    periode: 'Periode 27 Dec 2020 - 1 Jan 2021',
  },
  {
    img: imgAPI.fintech[28],
    title: 'Aenean sit amet magna vel magna fringilla fermentum.',
    periode: 'Periode 27 Dec 2020 - 1 Jan 2021',
  },
  {
    img: imgAPI.fintech[29],
    title: 'Aenean sit amet magna vel magna fringilla fermentum.',
    periode: 'Periode 27 Dec 2020 - 1 Jan 2021',
  },
  {
    img: imgAPI.fintech[30],
    title: 'Aenean sit amet magna vel magna fringilla fermentum.',
    periode: 'Periode 27 Dec 2020 - 1 Jan 2021',
  },
  {
    img: imgAPI.fintech[31],
    title: 'Aenean sit amet magna vel magna fringilla fermentum.',
    periode: 'Periode 27 Dec 2020 - 1 Jan 2021',
  },
  {
    img: imgAPI.fintech[33],
    title: 'Aenean sit amet magna vel magna fringilla fermentum.',
    periode: 'Periode 27 Dec 2020 - 1 Jan 2021',
  },
];

export default {
  components: {
    'title-main': Title,
    PromoCard,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      link,
      imgAPI,
      loaded: false,
      promoData,
      slickOptions: {
        pagination: true,
        type: 'loop',
        speed: 500,
        autoplay: true,
        interval: 5000,
        perPage: 3,
        arrows: false,
        autoWidth: true,
        direction: 'ltr',
        reducedMotion: {
          autoplay: true,
          speed: 500,
          rewindSpeed: 1000,
        },
        breakpoints: {
          1100: {
            perPage: 2,
          },
          800: {
            perPage: 1,
          },
        },
      },
    };
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
    slickNext() {
      this.$refs.slider.go('>');
    },
    slickPrev() {
      this.$refs.slider.go('<');
    },
  },
};
</script>
