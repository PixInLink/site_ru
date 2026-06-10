<template>
  <div class="root">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          lg="6"
          md="7"
          class="px-sm-6"
        >
          <h4 class="use-text-title2 text-capitalize">
            {{ $t('marketing.expertise_title') }}
          </h4>
          <p class="desc use-text-subtitle2">
            {{ $t('marketing.expertise_paragraph') }}
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
        <v-col
          cols="12"
          lg="6"
          md="5"
          class="px-6"
        >
          <div class="illustration-wrap">
            <div>
              <div
                data-aos="fade"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="300"
              >
                <div>
                  <deco-building />
                </div>
              </div>
              <div
                data-aos-name="fade-right"
                data-aos-offset="-50"
                data-aos-delay="300"
                data-aos-duration="300"
              >
                <figure>
                  <img
                    :src="imgAPI.marketing[13]"
                    :data-2d="imgAPI.marketing[12]"
                    :data-3d="imgAPI.marketing[13]"
                    class="img-2d3d"
                    alt="speciality 3d"
                  >
                </figure>
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
import DecoBuilding from '../Deco/Building';

export default {
  components: {
    DecoBuilding,
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
        ['social media', 'marketing', 'SEO'],
        ['Web Development', 'UI Designs', 'Mobile Apps'],
        ['Photography', 'Company Profile', 'Visual Editing'],
        ['social media', 'marketing', 'SEO'],
        ['Web Development', 'UI Designs', 'Mobile Apps'],
        ['Photography', 'Company Profile', 'Visual Editing'],
        ['social media', 'marketing', 'SEO'],
        ['Web Development', 'UI Designs', 'Mobile Apps'],
        ['Photography', 'Company Profile', 'Visual Editing'],
      ],
    };
  },
  mounted() {
    this.loaded = true;
    AOS.init({
      once: true,
    });
  },
};
</script>
