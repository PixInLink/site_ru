<template>
  <vue-easy-lightbox
    v-if="loaded"
    :visible="visible"
    :imgs="imgs"
    :index="index"
    @hide="handleHide"
  />
  <div class="root">
    <div>
      <v-container class="carousel-header">
        <div class="px-sm-3">
          <h4 class="use-text-title2 text-capitalize">
            {{ $t('marketing.case_title') }}
          </h4>
          <p class="use-text-subtitle2">
            Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed.
          </p>
        </div>
        <v-btn
          :href="link.marketing.product"
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
            ref="slick"
            :options="slickOptions"
            @splide:active="handleAfterChange"
          >
            <splide-slide>
              <div class="item carousel-prop">
                <div />
              </div>
            </splide-slide>
            <splide-slide>
              <div class="item">
                <div>
                  <case-card
                    :bg="caseData[0].bg || ''"
                    :logo="caseData[0].logo"
                    :title="caseData[0].title"
                    :desc="caseData[0].desc"
                    :size="caseData[0].size"
                    :simple="caseData[0].simple || false"
                    :show-img="() => showImg(0)"
                  />
                  <case-card
                    :bg="caseData[1].bg || ''"
                    :logo="caseData[1].logo"
                    :title="caseData[1].title"
                    :desc="caseData[1].desc"
                    :size="caseData[1].size"
                    :simple="caseData[1].simple || false"
                    :show-img="() => showImg(1)"
                  />
                </div>
              </div>
            </splide-slide>
            <splide-slide>
              <div class="item">
                <div>
                  <case-card
                    :bg="caseData[2].bg || ''"
                    :logo="caseData[2].logo"
                    :title="caseData[2].title"
                    :desc="caseData[2].desc"
                    :size="caseData[2].size"
                    :simple="caseData[2].simple || false"
                    :show-img="() => showImg(2)"
                  />
                  <case-card
                    :bg="caseData[3].bg || ''"
                    :logo="caseData[3].logo"
                    :title="caseData[3].title"
                    :desc="caseData[3].desc"
                    :size="caseData[3].size"
                    :simple="caseData[3].simple || false"
                    :show-img="() => showImg(3)"
                  />
                  <case-card
                    :bg="caseData[4].bg || ''"
                    :logo="caseData[4].logo"
                    :title="caseData[4].title"
                    :desc="caseData[4].desc"
                    :size="caseData[4].size"
                    :simple="caseData[4].simple || false"
                    :show-img="() => showImg(4)"
                  />
                </div>
              </div>
            </splide-slide>
            <splide-slide>
              <div class="item">
                <div>
                  <case-card
                    :bg="caseData[5].bg || ''"
                    :logo="caseData[5].logo"
                    :title="caseData[5].title"
                    :desc="caseData[5].desc"
                    :size="caseData[5].size"
                    :simple="caseData[5].simple || false"
                    :show-img="() => showImg(5)"
                  />
                  <case-card
                    :bg="caseData[6].bg || ''"
                    :logo="caseData[6].logo"
                    :title="caseData[6].title"
                    :desc="caseData[6].desc"
                    :size="caseData[6].size"
                    :simple="caseData[6].simple || false"
                    :show-img="() => showImg(6)"
                  />
                </div>
              </div>
            </splide-slide>
            <splide-slide>
              <div class="item">
                <div>
                  <case-card
                    :bg="caseData[7].bg || ''"
                    :logo="caseData[7].logo"
                    :title="caseData[7].title"
                    :desc="caseData[7].desc"
                    :size="caseData[7].size"
                    :simple="caseData[7].simple || false"
                    :show-img="() => showImg(7)"
                  />
                  <case-card
                    :bg="caseData[8].bg || ''"
                    :logo="caseData[8].logo"
                    :title="caseData[8].title"
                    :desc="caseData[8].desc"
                    :size="caseData[8].size"
                    :simple="caseData[8].simple || false"
                    :show-img="() => showImg(8)"
                  />
                  <case-card
                    :bg="caseData[9].bg || ''"
                    :logo="caseData[9].logo"
                    :title="caseData[9].title"
                    :desc="caseData[9].desc"
                    :size="caseData[9].size"
                    :simple="caseData[9].simple || false"
                    :show-img="() => showImg(9)"
                  />
                </div>
              </div>
            </splide-slide>
          </splide>
        </div>
        <nav class="arrow">
          <v-btn
            :disabled="!fade"
            :elevation="0"
            color="primary"
            aria-label="next"
            class="margin prev"
            @click="prev()"
          >
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-btn
            :elevation="0"
            color="primary"
            aria-label="prev"
            class="margin next"
            @click="next()"
          >
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </nav>
      </div>
      <div class="floating-artwork">
        <v-container class="fixed-width">
          <div class="artwork">
            <slider-art :fade="fade">
              <div
                data-aos-offset="0"
                data-aos="fade"
                data-aos-delay="0"
                data-aos-duration="300"
              >
                <deco-light />
              </div>
              <div
                data-aos-offset="250"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="500"
              >
                <img
                  :src="imgAPI.marketing[15]"
                  :data-2d="imgAPI.marketing[14]"
                  :data-3d="imgAPI.marketing[15]"
                  class="img-2d3d illustration"
                  alt="case-studies"
                >
              </div>
            </slider-art>
          </div>
        </v-container>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './case-studies-style.scss';
</style>

<script>
import AOS from 'aos';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';
import DecoLight from '../Deco/Light';
import CaseCard from '../../Cards/CaseCard';
import SliderArt from '../SliderArt';

export default {
  components: {
    CaseCard,
    DecoLight,
    SliderArt,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      loaded: false,
      imgAPI,
      link,
      index: 0,
      fade: false,
      visible: false,
      slickOptions: {
        pagination: true,
        speed: 500,
        perPage: 2,
        arrows: false,
        perMove: 1,
        autoWidth: true,
        direction: 'ltr',
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
        },
        breakpoints: {
          1100: {
            perPage: 1,
          },
        },
      },
      caseData: [
        {
          bg: imgAPI.marketing[27],
          logo: '/images/logos/cloud.png',
          title: 'Donec commodo convallis ligula',
          desc: 'Vestibulum consequat hendrerit',
          size: 'big',
        },
        {
          bg: imgAPI.marketing[28],
          logo: '/images/logos/fashion.png',
          title: 'Donec commodo convallis ligula',
          desc: 'Vestibulum consequat hendrerit',
          size: 'medium',
        },
        {
          bg: imgAPI.marketing[29],
          logo: '/images/logos/mobile.png',
          title: 'Donec commodo convallis ligula',
          desc: 'Vestibulum consequat hendrerit',
          size: 'medium',
        },
        {
          bg: imgAPI.marketing[30],
          logo: '/images/logos/profile.png',
          title: 'Donec commodo convallis ligula',
          desc: 'Vestibulum consequat hendrerit',
          size: 'medium',
        },
        {
          bg: imgAPI.marketing[31],
          logo: '/images/logos/architect.png',
          title: 'Donec commodo convallis ligula',
          desc: 'Vestibulum consequat hendrerit',
          size: 'medium',
        },
        {
          bg: imgAPI.marketing[36],
          logo: '/images/logos/cloud.png',
          title: 'Donec commodo convallis ligula',
          desc: 'Vestibulum consequat hendrerit',
          size: 'big',
        },
        {
          bg: imgAPI.marketing[33],
          logo: '/images/logos/fashion.png',
          title: 'Donec commodo convallis ligula',
          desc: 'Vestibulum consequat hendrerit',
          size: 'medium',
        },
        {
          bg: imgAPI.marketing[23],
          logo: '/images/logos/fashion.png',
          title: 'Donec commodo convallis ligula',
          desc: 'Vestibulum consequat hendrerit',
          size: 'medium',
        },
        {
          bg: imgAPI.marketing[35],
          logo: '/images/logos/fashion.png',
          title: 'Donec commodo convallis ligula',
          desc: 'Vestibulum consequat hendrerit',
          size: 'medium',
        },
        {
          bg: imgAPI.marketing[32],
          logo: '/images/logos/cloud.png',
          title: 'Donec commodo convallis ligula',
          desc: 'Vestibulum consequat hendrerit',
          size: 'medium',
        },
      ],
    };
  },
  computed: {
    imgs() {
      const arr = [];
      this.caseData.map(item => {
        arr.push(item.bg || item.logo);
        return arr;
      });
      return arr;
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
    }, 100);
  },
  methods: {
    next() {
      this.$refs.slick.go('>');
    },
    prev() {
      this.$refs.slick.go('<');
    },
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
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
