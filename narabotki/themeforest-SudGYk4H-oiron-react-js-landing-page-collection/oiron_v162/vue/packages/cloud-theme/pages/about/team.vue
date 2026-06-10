<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-front">
      <banner>
        <img
          :src="imgAPI.ui[5]"
          :data-2d="imgAPI.ui[4]"
          :data-3d="imgAPI.ui[5]"
          class="img-2d3d"
          alt="services 3d"
        >
      </banner>
      <div class="space-top-short">
        <counter />
      </div>
      <div class="space-top-short space-bottom-short text-center text-md-start">
        <v-container>
          <h4 class="use-text-title2 use-text-primary mb-3">
            {{ $t('common.about_team') }}
          </h4>
          <p class="use-text-subtitle2">
            Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <team-grid />
        </v-container>
      </div>
      <div>
        <photo-slider />
      </div>
    </div>
    <footer-extend with-counter>
      <main-footer />
    </footer-extend>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/pages';
</style>

<script>
import brand from '@/assets/text/brand';
import imgAPI from '@/assets/images/imgAPI';
import Header from '@/components/Header';
import Banner from '@/components/About/Banner';
import Counter from '@/components/Counter';
import PhotoSlider from '@/components/About/PhotoSlider';
import TeamGrid from '@/components/About/TeamGrid';
import Footer from '@/components/Footer';
import FooterExtend from '@/components/Footer/FooterExtend';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    'main-footer': Footer,
    TeamGrid,
    Banner,
    Counter,
    PhotoSlider,
    FooterExtend,
  },
  data() {
    return {
      imgAPI,
    };
  },
  head() {
    return {
      title: 'Team | ' + brand.cloud.desc,
    };
  },
});
</script>
