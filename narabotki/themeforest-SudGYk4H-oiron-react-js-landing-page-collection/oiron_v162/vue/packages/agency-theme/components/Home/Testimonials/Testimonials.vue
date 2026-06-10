<template>
  <div class="root">
    <div>
      <v-container class="carousel-header">
        <h4 class="title-primary">
          {{ $t('agency.testimonial_title') }}
        </h4>
      </v-container>
      <div v-if="loaded" class="carousel">
        <splide
          ref="splide"
          :options="slickOptions"
          @splide:active="handleAfterChange"
        >
          <splide-slide
            v-for="(item, index) in testiContent"
            :key="index"
          >
            <div class="item">
              <testimonial-card
                :avatar="item.avatar"
                :title="item.title"
                :name="item.name"
                :text="item.text"
                :star="item.rating"
              />
            </div>
          </splide-slide>
          <splide-slide v-if="isDesktop">
            <div class="item-props-last" />
          </splide-slide>
        </splide>
      </div>
      <div class="floating-artwork">
        <v-container class="fixed-width">
          <div class="artwork">
            <slider-art :fade="fade">
              <div
                data-aos-offset="-60"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="500"
              >
                <img
                  :src="imgAPI.agency[19]"
                  :data-2d="imgAPI.agency[18]"
                  :data-3d="imgAPI.agency[19]"
                  class="img-2d3d"
                  alt="services 3d"
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
@import './testi-style.scss';
@import '../../Title/title-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';
import TestimonialCard from '../../Cards/TestiCard';
import SliderArt from '../SliderArt';

export default {
  components: {
    Splide,
    SplideSlide,
    TestimonialCard,
    SliderArt,
  },
  data() {
    return {
      imgAPI,
      loaded: false,
      fade: false,
      testiContent: [
        {
          text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
          avatar: imgAPI.avatar[10],
          name: 'John Doe',
          title: 'Chief Digital Officer',
          rating: 5,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[1],
          name: 'Jean Doe',
          title: 'Chief Digital Officer',
          rating: 4,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[2],
          name: 'Jena Doe',
          title: 'Graphic Designer',
          rating: 4,
        },
        {
          text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
          avatar: imgAPI.avatar[3],
          name: 'Jovelin Doe',
          title: 'Senior Graphic Designer',
          rating: 3,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[4],
          name: 'Jihan Doe',
          title: 'CEO Software House',
          rating: 5,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[6],
          name: 'Jovelin Doe',
          title: 'Senior Graphic Designer',
          rating: 5,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[7],
          name: 'John Doe',
          title: 'Senior Graphic Designer',
          rating: 4,
        },
        {
          text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
          avatar: imgAPI.avatar[10],
          name: 'John Doe',
          title: 'Chief Digital Officer',
          rating: 5,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[1],
          name: 'Jean Doe',
          title: 'Chief Digital Officer',
          rating: 4,
        },
      ],
      slickOptions: {
        pagination: true,
        speed: 500,
        perPage: 4,
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
            perPage: 4,
            autoWidth: false,
            perMove: 1,
            rewind: true,
            pagination: true,
          },
          800: {
            perPage: 3,
          },
          600: {
            autoWidth: true,
            perPage: 1,
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
    AOS.init({
      once: true,
    });

    this.loaded = true;
    const props = window.innerWidth > 1400 ? 1 : 2; // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px
    const lastSlide = Math.floor(this.testiContent.length + props - this.slickOptions.perPage);

    setTimeout(() => {
      if (window.innerWidth > 1279) {
        this.$refs.splide.go(lastSlide);
      }
    }, 100);
  },
  methods: {
    handleAfterChange(slide) {
      const edge = this.testiContent.length - this.slickOptions.perPage;
      if (slide.index <= edge) {
        this.fade = true;
      } else {
        this.fade = false;
      }
    },
  },
};
</script>
