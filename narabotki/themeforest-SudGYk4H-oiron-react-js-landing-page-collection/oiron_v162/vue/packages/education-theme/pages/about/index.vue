<template>
  <div class="main-wrap">
    <main-header />
    <banner>
      <img
        :src="imgAPI.educationInner[1]"
        :data-2d="imgAPI.educationInner[0]"
        :data-3d="imgAPI.educationInner[1]"
        class="img-2d3d"
        alt="services 3d"
      >
    </banner>
    <company-logo />
    <div class="space-top-short">
      <counter />
    </div>
    <div class="space-top-short">
      <v-container>
        <v-row justify="center">
          <v-col md="6" cols="12" class="px-md-12">
            <about-video />
          </v-col>
          <v-col md="6" sm="8" cols="12" class="px-md-12">
            <about-progress />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="space-top-short">
      <team-slider />
    </div>
    <div class="space-top-short space-bottom-short">
      <photo-slider />
    </div>
    <div class="bottom-deco-wrap">
      <section id="subscribe">
        <deco-footer />
        <subscribe-form />
      </section>
      <main-footer />
    </div>
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
import CompanyLogo from '@/components/CompanyLogo';
import Counter from '@/components/Counter';
import Video from '@/components/About/Video';
import DecoFooter from '@/components/Footer/DecorationTop';
import SubscribeForm from '@/components/SubscribeForm';
import Progress from '@/components/About/Progress';
import TeamSlider from '@/components/About/TeamSlider';
import PhotoSlider from '@/components/About/PhotoSlider';
import Footer from '@/components/Footer';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Banner,
    CompanyLogo,
    Counter,
    'about-progress': Progress,
    'about-video': Video,
    TeamSlider,
    PhotoSlider,
    SubscribeForm,
    DecoFooter,
  },
  data() {
    return {
      imgAPI,
    };
  },
  head() {
    return {
      title: 'About | ' + brand.education.desc,
    };
  },
});
</script>
