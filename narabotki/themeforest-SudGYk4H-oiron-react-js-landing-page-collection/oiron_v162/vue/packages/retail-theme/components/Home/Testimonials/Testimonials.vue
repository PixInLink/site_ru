<template>
  <div class="root">
    <div>
      <div
        data-aos-offset="-50"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
      >
        <div>
          <title-main align="center">
            {{ $t('retail.testimonials_title') }}
          </title-main>
        </div>
      </div>
      <div class="carousel-wrap">
        <div
          data-aos="fade-up"
          data-aos-offset="-150"
          data-aos-delay="400"
          data-aos-duration="500"
        >
          <div>
            <v-container class="max-sm">
              <div v-if="loaded" class="carousel-text">
                <splide
                  ref="sliderText"
                  :options="settingsText"
                  class="slider-text"
                  @splide:move="handleSyncText"
                >
                  <splide-slide
                    v-for="(item, index) in testiContent"
                    :key="index"
                  >
                    <div class="item">
                      <p class="content">
                        {{ item.text }}
                      </p>
                      <p class="name">
                        <strong>{{ item.name }}</strong>
                        -
                        {{ item.title }}
                      </p>
                    </div>
                  </splide-slide>
                </splide>
              </div>
            </v-container>
            <div v-if="loaded" class="carousel-avatar">
              <splide
                ref="sliderAvatar"
                class="slider-avatar"
                :options="settingsAvatar"
                @splide:move="handleSyncAvatar"
              >
                <splide-slide
                  v-for="(item, index) in testiContent"
                  :key="index"
                >
                  <div class="item">
                    <v-avatar class="avatar">
                      <img
                        :alt="item.name"
                        :src="item.avatar"
                      >
                    </v-avatar>
                  </div>
                </splide-slide>
              </splide>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>

<script>
import AOS from 'aos';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import Title from '../../Title';

const testiContent = [
  {
    text:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
    avatar: imgAPI.avatar[10],
    name: 'John Doe',
    title: 'Chief Digital Officer',
  },
  {
    text:
      'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    avatar: imgAPI.avatar[1],
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[2],
    name: 'Jena Doe',
    title: 'Graphic Designer',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[3],
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[4],
    name: 'Jihan Doe',
    title: 'Senior Graphic Designer',
  },
  {
    text:
      'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    avatar: imgAPI.avatar[6],
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[7],
    name: 'John Doe',
    title: 'Senior Graphic Designer',
  },
  {
    text:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
    avatar: imgAPI.avatar[9],
    name: 'John Doe',
    title: 'Chief Digital Officer',
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[8],
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
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
      currentSlide: 0,
      testiContent,
      settingsText: {
        pagination: false,
        type: 'fade',
        speed: 500,
        arrows: false,
        updateOnMove: true,
        direction: 'ltr',
        reducedMotion: {
          speed: 1000,
          autoplay: true,
        },
      },
      settingsAvatar: {
        pagination: false,
        type: 'loop',
        speed: 500,
        autoplay: true,
        focus: 'center',
        interval: 5000,
        padding: '2px',
        perPage: 7,
        isNavigation: true,
        perMove: 1,
        arrows: false,
        direction: 'ltr',
        reducedMotion: {
          speed: 1000,
          autoplay: true,
          rewindSpeed: 1000,
        },
        breakpoints: {
          600: {
            perPage: 3,
          },
        },
      },
    };
  },
  mounted() {
    this.loaded = true;
    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.settingsAvatar.direction = 'rtl';
        this.settingsText.direction = 'rtl';
      } else {
        this.settingsAvatar.direction = 'ltr';
        this.settingsText.direction = 'ltr';
      }
    }, 100);
    AOS.init({
      once: true,
    });
  },
  methods: {
    handleSyncText(slide) {
      this.$refs.sliderAvatar.go(slide.index);
    },
    handleSyncAvatar(slide) {
      this.$refs.sliderText.go(slide.index);
    },
  },
};
</script>
