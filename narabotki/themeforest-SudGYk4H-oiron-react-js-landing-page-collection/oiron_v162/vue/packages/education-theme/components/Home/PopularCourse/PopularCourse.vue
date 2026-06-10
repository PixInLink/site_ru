<template>
  <div class="root">
    <v-container class="carousel-header">
      <title-main
        :head="$t('education.popular_title')"
        :desc="$t('education.popular_desc')"
        :align="isMobile ? 'center' : 'left'"
        color="secondary"
      />
      <v-btn
        :href="link.education.product"
        color="primary"
        variant="text"
        class="view-all"
      >
        {{ $t('common.btn_seeall') }}
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </v-container>
    <v-container>
      <div class="floating-artwork">
        <slider-art :fade="fade">
          <div
            data-aos="fade-right"
            data-aos-offset="60"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <img
              :src="imgAPI.education[36]"
              :data-2d="imgAPI.education[35]"
              :data-3d="imgAPI.education[36]"
              class="img-2d3d"
              alt="popular course"
            >
          </div>
        </slider-art>
      </div>
    </v-container>
    <div class="slider-wrap">
      <div v-if="loaded" class="carousel">
        <splide
          ref="slick"
          :options="slickOptions"
          @splide:active="handleAfterChange"
        >
          <splide-slide>
            <div class="props item-props-first">
              <div />
            </div>
          </splide-slide>
          <splide-slide
            v-for="(item, index) in courseData"
            :key="index"
          >
            <div class="item">
              <product-card
                type="round"
                :img="item.img"
                :title="item.title"
                :desc="item.desc"
                :rating="item.rating"
                :price="item.price"
                :href="link.education.productDetail"
              />
            </div>
          </splide-slide>
        </splide>
      </div>
      <v-btn
        icon
        fab
        class="nav prev"
        @click="prev()"
      >
        <i class="ion-ios-arrow-back" />
      </v-btn>
      <v-btn
        icon
        fab
        class="nav next"
        @click="next()"
      >
        <i class="ion-ios-arrow-forward" />
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './popular-course-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import AOS from 'aos';
import link from '@/assets/text/link';
import imgAPI from '@/assets/images/imgAPI';
import SliderArt from '../SliderArt';
import ProductCard from '../../Cards/ProductCard';
import Title from '../../Title';

const courseData = [
  {
    img: imgAPI.education[9],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
  {
    img: imgAPI.education[5],
    title: 'Vivamus sit amet',
    rating: 4,
    price: 10,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
  {
    img: imgAPI.education[3],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
  {
    img: imgAPI.education[4],
    title: 'Vivamus sit amet',
    rating: 3,
    price: 25,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
  {
    img: imgAPI.education[8],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
  {
    img: imgAPI.education[7],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 40,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
];

export default {
  components: {
    'title-main': Title,
    ProductCard,
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
      courseData,
      slickOptions: {
        pagination: false,
        speed: 500,
        perPage: 4,
        arrows: false,
        autoWidth: true,
        direction: 'ltr',
        reducedMotion: {
          speed: 1000,
          rewindSpeed: 1000,
        },
        breakpoints: {
          1100: {
            perPage: 3,
            perMove: 1,
          },
          800: {
            perPage: 2,
            perMove: 1,
          },
          600: {
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
      this.$refs.slick.go('>');
    },
    prev() {
      this.$refs.slick.go('<');
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
