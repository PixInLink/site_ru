<template>
  <div class="bg-wrapper team-root">
    <v-container>
      <title-main :align="isMobile ? 'center' : 'left'">
        <span>
          {{ $t('common.about_team') }}
        </span>
      </title-main>
      <p class="use-text-subtitle2">
        Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </v-container>
    <div class="carousel mt-15">
      <splide
        ref="slick"
        :options="slickOptions"
      >
        <splide-slide
          v-for="(index) in 6"
          :key="index"
        >
          <div class="item px-3">
            <profile-card
              :connection="100"
              :favorites="10"
              :albums="12"
              :cover="imgAPI.photo[40+index]"
              :avatar="imgAPI.avatar[index]"
              name="John Dalton"
              title="Web Designer"
              type="oval"
              orientation="landscape"
            />
          </div>
        </splide-slide>
      </splide>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './about-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import ProfileCard from '../Cards/ProfileCard';
import Title from '../Title';
import imgAPI from '@/assets/images/imgAPI';

export default {
  components: {
    'title-main': Title,
    ProfileCard,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      imgAPI,
      slickOptions: {
        pagination: true,
        arrows: false,
        perPage: 2,
        perMove: 1,
        autoWidth: true,
        direction: 'ltr',
        type: 'loop',
        reducedMotion: {
          autoplay: true,
          speed: 500,
          rewindSpeed: 1000,
        },
        breakpoints: {
          600: {
            perPage: 1,
          },
        },
      },
    };
  },
  computed: {
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
  },
  mounted() {
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
