<template>
  <div class="root">
    <title-main align="center">
      {{ $t('retail.management_title') }}
    </title-main>
    <p class="use-text-subtitle2 text-center px-4 px-sm-15">
      {{ $t('retail.management_desc') }}
    </p>
    <div class="slider-wrap">
      <div v-if="loaded" class="carousel carousel-side">
        <splide
          ref="sliderSide"
          class="slider-side"
          :options="sideOptions"
          @splide:move="handleSyncCenter"
        >
          <splide-slide
            v-for="(item, index) in managementData"
            :key="index"
          >
            <div class="item">
              <div class="paper-round">
                <img
                  class="img-2d3d"
                  :src="item.illustration[1]"
                  :data-2d="item.illustration[0]"
                  :data-3d="item.illustration[1]"
                  alt="illustration"
                >
                <h4 :class="'text-'+item.color">
                  {{ $t('retail.management_'+item.title) }}
                </h4>
              </div>
            </div>
          </splide-slide>
        </splide>
      </div>
      <div v-if="loaded" class="carousel carousel-center">
        <splide
          ref="sliderCenter"
          class="slider-center"
          :options="centerOptions"
          @splide:move="handleSyncSide"
        >
          <splide-slide
            v-for="(item, index) in managementData"
            :key="index"
          >
            <div class="item">
              <div class="item" :class="index % 2 ? 'mobile' : 'desktop'">
                <figure>
                  <img :src="item.img" alt="screen">
                </figure>
                <div class="desc">
                  <div>
                    <img
                      class="img-2d3d"
                      :src="item.illustration[1]"
                      :data-2d="item.illustration[0]"
                      :data-3d="item.illustration[1]"
                      alt="illustration"
                    >
                    <div class="text">
                      <h4 :class="item.color+'--text'">
                        {{ $t('retail.management_'+item.title) }}
                      </h4>
                      <p>{{ $t('retail.management_'+item.desc) }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </splide-slide>
        </splide>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './management-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import Title from '../../Title';

const managementData = [
  {
    title: 'item1_title',
    desc: 'item1_desc',
    color: 'primary',
    illustration: [imgAPI.retail[13], imgAPI.retail[14]],
    img: imgAPI.retail[28],
  },
  {
    title: 'item2_title',
    desc: 'item2_desc',
    color: 'secondary',
    illustration: [imgAPI.retail[15], imgAPI.retail[16]],
    img: imgAPI.retail[29],
  },
  {
    title: 'item3_title',
    desc: 'item3_desc',
    color: 'accent',
    illustration: [imgAPI.retail[17], imgAPI.retail[18]],
    img: imgAPI.retail[30],
  },
  {
    title: 'item4_title',
    desc: 'item4_desc',
    color: 'primary',
    illustration: [imgAPI.retail[19], imgAPI.retail[20]],
    img: imgAPI.retail[31],
  },
  {
    title: 'item5_title',
    desc: 'item5_desc',
    color: 'secondary',
    illustration: [imgAPI.retail[21], imgAPI.retail[22]],
    img: imgAPI.retail[32],
  },
  {
    title: 'item6_title',
    desc: 'item6_desc',
    color: 'accent',
    illustration: [imgAPI.retail[23], imgAPI.retail[24]],
    img: imgAPI.retail[33],
  },
];

export default {
  components: {
    'title-main': Title,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      loaded: false,
      managementData,
      sideOptions: {
        pagination: false,
        type: 'loop',
        speed: 500,
        autoplay: true,
        interval: 7000,
        perPage: 3,
        arrows: false,
        focus: 'center',
        updateOnMove: true,
        isNavigation: true,
        reducedMotion: {
          speed: 1000,
          autoplay: true,
          rewindSpeed: 1000,
        },
      },
      centerOptions: {
        pagination: true,
        type: 'fade',
        speed: 500,
        autoplay: false,
        arrows: false,
        reducedMotion: {
          speed: 1000,
          autoplay: true,
          rewindSpeed: 1000,
        },
      },
    };
  },
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
  },
  mounted() {
    this.loaded = true;
    setTimeout(() => {
      this.$refs.sliderSide.go(1);
    }, 100);
  },
  methods: {
    handleSyncCenter(slide) {
      this.$refs.sliderCenter.go(slide.index);
    },
    handleSyncSide(slide) {
      this.$refs.sliderSide.go(slide.index);
    },
  },
};
</script>
