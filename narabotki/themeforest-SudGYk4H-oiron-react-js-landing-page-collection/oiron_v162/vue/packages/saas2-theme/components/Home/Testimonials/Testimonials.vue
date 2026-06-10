<template>
  <div class="root">
    <v-container :class="{ fixed: isDesktop }">
      <title-main align="center">
        <span>
          {{ $t('saas2.testi_titlestrong') }}
        </span>
      </title-main>
      <v-row class="spacing6" justify="center">
        <v-col md="10" cols="12">
          <div class="slider-wrap">
            <div v-if="loaded" class="carousel">
              <v-btn
                color="primary-text"
                icon
                class="nav prev"
                @click="slickPrev()"
              >
                <i class="ion-ios-arrow-back" />
              </v-btn>
              <splide
                ref="slider"
                :options="slickOptions"
                @splide:active="handleAfterChange"
              >
                <splide-slide
                  v-for="(item, index) in testiContent"
                  :key="index"
                >
                  <div class="item">
                    <div class="testi-content">
                      <testi-card
                        :text="item.text"
                        :name="item.name"
                        :title="item.title"
                        :avatar="item.avatar"
                        :active="index === active"
                      />
                    </div>
                  </div>
                </splide-slide>
              </splide>
              <v-btn
                color="primary-text"
                icon
                class="nav next"
                @click="slickNext()"
              >
                <i class="ion-ios-arrow-forward" />
              </v-btn>
            </div>
            <div v-if="loaded" class="pagination">
              <ul>
                <li
                  v-for="index in testiContent.length"
                  :key="index"
                  :class="{ active: active === index - 1}"
                >
                  <button type="button" @click="handleGoTo(index - 1)" />
                </li>
              </ul>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import Title from '../../Title';
import TestiCard from '../../Cards/TestiStackCard';

const testiContent = [
  {
    text:
      'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
    name: 'John Doe',
    avatar: imgAPI.avatar[6],
    title: 'Chief Digital Officer',
  },
  {
    text:
      'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    name: 'Jean Doe',
    avatar: imgAPI.avatar[7],
    title: 'Chief Digital Officer',
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'Jena Doe',
    avatar: imgAPI.avatar[1],
    title: 'Graphic Designer',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    name: 'Jovelin Doe',
    avatar: imgAPI.avatar[2],
    title: 'Senior Graphic Designer',
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'Jihan Doe',
    avatar: imgAPI.avatar[3],
    title: 'CEO Software House',
  },
  {
    text:
      'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'John Doe',
    avatar: imgAPI.avatar[9],
    title: 'Senior Graphic Designer',
  },
];

export default {
  components: {
    'title-main': Title,
    TestiCard,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      loaded: false,
      active: 0,
      testiContent,
      slickOptions: {
        type: 'fade',
        arrows: false,
        pagination: false,
        speed: 1000,
        autoplay: true,
        interval: 7000,
        reducedMotion: {
          autoplay: true,
          speed: 1000,
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
  },
  methods: {
    slickNext() {
      this.$refs.slider.go('>');
    },
    slickPrev() {
      this.$refs.slider.go('<');
    },
    handleGoTo(slide) {
      this.$refs.slider.go(slide);
    },
    handleAfterChange(slide) {
      this.active = slide.index;
    },
  },
};
</script>
