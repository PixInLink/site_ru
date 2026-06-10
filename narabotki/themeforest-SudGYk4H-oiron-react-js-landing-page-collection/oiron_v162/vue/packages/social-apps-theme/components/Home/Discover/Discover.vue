<template>
  <div class="root">
    <title-main align="center">
      {{ $t('social.discover_title') }}
    </title-main>
    <div class="slider-wrap">
      <div v-if="loaded" class="carousel">
        <splide
          ref="slider"
          :options="slickOptions"
        >
          <splide-slide
            v-for="(item, index) in discoverData"
            :key="index"
          >
            <div class="item">
              <discover-card
                :img="item.img"
                :illustration2d="item.illustration[0]"
                :illustration3d="item.illustration[1]"
                :color="item.color"
                :title="$t('social.discover_'+item.title)"
                :desc="$t('social.discover_'+item.desc)"
              />
            </div>
          </splide-slide>
        </splide>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './discover-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import Title from '../../Title';
import DiscoverCard from '../../Cards/DiscoverCard';

const discoverData = [
  {
    title: 'item1_title',
    desc: 'item1_desc',
    color: 'primary',
    illustration: [imgAPI.social[15], imgAPI.social[16]],
    img: imgAPI.social[30],
  },
  {
    title: 'item2_title',
    desc: 'item2_desc',
    color: 'secondary',
    illustration: [imgAPI.social[17], imgAPI.social[18]],
    img: imgAPI.social[31],
  },
  {
    title: 'item3_title',
    desc: 'item3_desc',
    color: 'accent',
    illustration: [imgAPI.social[19], imgAPI.social[20]],
    img: imgAPI.social[32],
  },
  {
    title: 'item4_title',
    desc: 'item4_desc',
    color: 'primary',
    illustration: [imgAPI.social[21], imgAPI.social[22]],
    img: imgAPI.social[33],
  },
  {
    title: 'item5_title',
    desc: 'item5_desc',
    color: 'secondary',
    illustration: [imgAPI.social[23], imgAPI.social[24]],
    img: imgAPI.social[34],
  },
  {
    title: 'item6_title',
    desc: 'item6_desc',
    color: 'accent',
    illustration: [imgAPI.social[25], imgAPI.social[26]],
    img: imgAPI.social[35],
  },
];

export default {
  components: {
    'title-main': Title,
    DiscoverCard,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      loaded: false,
      discoverData,
      slickOptions: {
        pagination: true,
        speed: 500,
        perPage: 2,
        arrows: false,
        direction: 'ltr',
        pauseOnHover: true,
        reducedMotion: {
          speed: 1000,
          rewindSpeed: 1000,
        },
        breakpoints: {
          960: {
            perPage: 1,
            perMove: 1,
          },
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
      if (this.$vuetify.locale.isRtl) {
        this.slickOptions.direction = 'rtl';
      } else {
        this.slickOptions.direction = 'ltr';
      }
    }, 100);
  },
};
</script>
