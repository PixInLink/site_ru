<template>
  <div class="root">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="px-sm-6"
        >
          <h4 class="use-text-title">
            {{ $t('medical.expertise_title') }}
          </h4>
          <p class="desc use-text-subtitle2">
            {{ $t('medical.expertise_subtitle') }}
          </p>
          <div v-if="loaded" class="running-tag">
            <splide :options="slickOptions">
              <splide-slide
                v-for="(group, indexGroup) in expertiseList"
                :key="indexGroup"
              >
                <div class="tag-group">
                  <span
                    v-for="(item, indexChild) in group"
                    :key="indexChild"
                    class="tag-item"
                  >
                    {{ item }}
                  </span>
                </div>
              </splide-slide>
            </splide>
          </div>
        </v-col>
        <v-col v-if="isTablet" cols="12" md="6" class="px-6">
          <div class="circle-wave">
            <div class="ball">
              <img
                :src="imgAPI.medical[23]"
                :data-2d="imgAPI.medical[22]"
                :data-3d="imgAPI.medical[23]"
                class="img-2d3d"
                alt="speciality 3d"
              >
            </div>
          </div>
          <div>
            <div
              data-aos-offset="0"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="300"
            >
              <div v-if="loaded" class="illustration-wrap">
                <div>
                  <span class="icon-green" />
                </div>
                <div>
                  <span class="icon-red" />
                </div>
                <div>
                  <span class="icon-blue" />
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './speciality-style.scss';
</style>

<script>
import AOS from 'aos';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';

export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      imgAPI,
      loaded: false,
      slickOptions: {
        direction: 'ttb',
        height: '10rem',
        type: 'loop',
        focus: 'center',
        autoplay: true,
        perPage: 3,
        perMove: 1,
        interval: 5000,
        pagination: false,
        arrows: false,
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
          autoplay: true,
        },
      },
      expertiseList: [
        ['Dentist', 'Padriatic', 'Cardiology'],
        ['Othopaedi', 'Traumatologi', 'Anestesiologi'],
        ['Reumatologi', 'Andrologi', 'Ortodonsia'],
        ['Dentist', 'Padriatic', 'Cardiology'],
        ['Othopaedi', 'Traumatologi', 'Anestesiologi'],
        ['Reumatologi', 'Andrologi', 'Ortodonsia'],
        ['Dentist', 'Padriatic', 'Cardiology'],
        ['Othopaedi', 'Traumatologi', 'Anestesiologi'],
        ['Reumatologi', 'Andrologi', 'Ortodonsia'],
      ],
    };
  },
  computed: {
    isDesktop() {
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdUp;
    },
    isTablet() {
      const smUp = this.$vuetify.display.smAndUp;
      return smUp;
    },
  },
  mounted() {
    this.loaded = true;
    AOS.init({
      once: true,
    });
  },
};
</script>
