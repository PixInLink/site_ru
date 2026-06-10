<template>
  <div class="root">
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
    <div v-if="loaded" class="slider-wrap">
      <splide
        ref="slider"
        class="slide slider-content"
        :options="slickOptions"
      >
        <splide-slide
          v-for="(item, index) in contents"
          :key="index"
        >
          <div class="inner item">
            <v-container>
              <v-row justify="center">
                <v-col md="3" sm="4" cols="12" class="promo-image">
                  <section>
                    <div class="image">
                      <span class="icon" :class="item.icon" />
                    </div>
                  </section>
                </v-col>
                <v-col md="7" sm="8" cols="12">
                  <div class="text">
                    <h1>
                      <v-btn variant="text">
                        {{ item.title }}
                      </v-btn>
                    </h1>
                    <p class="use-text-subtitle2">
                      {{ item.desc }}
                    </p>
                    <section class="time">
                      <h6 class="use-text-caption">
                        <span>
                          {{ $t('cloud.promo_periode') }}
                          :&nbsp;
                          {{ item.date }}
                        </span>
                      </h6>
                    </section>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </splide-slide>
      </splide>
    </div>
    <div class="cloud-top">
      <svg>
        <use xlink:href="/images/cloud/cloud_top.svg#main" />
      </svg>
    </div>
    <div class="cloud-top-cover">
      <svg>
        <use xlink:href="/images/cloud/cloud_top.svg#main" />
      </svg>
      <svg>
        <use xlink:href="/images/cloud/cloud_top.svg#main" />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './promotion-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const sliderData = [
  {
    icon: 'ion-md-cube',
    title: 'Wordpress Hosting start from $2/mo',
    desc:
      'Our managed WordPress hosting comes with ready-to-use features, so you can start building your website right away.',
    date: '12 Jul - 10 Aug',
  },
  {
    icon: 'ion-ios-switch',
    title: 'Dedicated VPS start from $5/mo',
    desc:
      'Get the power, flexibility and speed you need with our virtual private server hosting.',
    date: '12 Jul - 10 Aug',
  },
  {
    icon: 'ion-ios-folder-open',
    title: '.COM + Hosting Only $15/mo',
    desc:
      'Use our advanced domain name generator to get your ideal choice right away.',
    date: '12 Jul - 10 Aug',
  },
];

export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      loaded: false,
      contents: sliderData,
      slickOptions: {
        pagination: false,
        arrows: false,
        speed: 800,
        slidesToShow: 1,
        type: 'loop',
        autoplay: true,
        interval: 10000,
        easing: 'ease-out',
        direction: 'ltr',
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
        },
        breakpoints: {
          800: {
            pagination: true,
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
    next() {
      this.$refs.slider.go('>');
    },
    prev() {
      this.$refs.slider.go('<');
    },
  },
};
</script>
