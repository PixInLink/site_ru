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
            {{ $t('social.stories_title') }}
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
                      <p class="name">
                        <strong>{{ item.name }}</strong>
                        -
                        {{ item.title }}
                      </p>
                      <p class="content">
                        {{ item.text }}
                        <strong>{{ item.tags }}</strong>
                      </p>
                    </div>
                  </splide-slide>
                </splide>
              </div>
            </v-container>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './stories-style.scss';
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
    tags: '#Aliquam #Necex #Aliquet',
    avatar: imgAPI.avatar[10],
    name: 'John Doe',
    title: '@johndoe',
  },
  {
    text:
      'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    tags: '#Aliquam #Necex #Aliquet',
    avatar: imgAPI.avatar[1],
    name: 'Jean Doe',
    title: '@doe_jean',
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    tags: '#Aliquam #Necex #Aliquet',
    avatar: imgAPI.avatar[2],
    name: 'Jena Doe',
    title: '@jena_doe',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    tags: '#Aliquam #Necex #Aliquet',
    avatar: imgAPI.avatar[3],
    name: 'Jovelin Doe',
    title: '@jovelindoe',
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    tags: '#Aliquam #Necex #Aliquet',
    avatar: imgAPI.avatar[4],
    name: 'Jihan Doe',
    title: '@jdoe',
  },
  {
    text:
      'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    tags: '#Aliquam #Necex #Aliquet',
    avatar: imgAPI.avatar[6],
    name: 'Jovelin Doe',
    title: '@jovelin',
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    tags: '#Aliquam #Necex #Aliquet',
    avatar: imgAPI.avatar[7],
    name: 'John Doe',
    title: '@john_doe',
  },
  {
    text:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
    tags: '#Aliquam #Necex #Aliquet',
    avatar: imgAPI.avatar[9],
    name: 'John Doe',
    title: '@john_doe',
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    tags: '#Aliquam #Necex #Aliquet',
    avatar: imgAPI.avatar[8],
    name: 'Jean Doe',
    title: '@doe_jean',
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
        reducedMotion: {
          speed: 1000,
          autoplay: true,
          rewindSpeed: 1000,
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
        perMove: 1,
        isNavigation: true,
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
