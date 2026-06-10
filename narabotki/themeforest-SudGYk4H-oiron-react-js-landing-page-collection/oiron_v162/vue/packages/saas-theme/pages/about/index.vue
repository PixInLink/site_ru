<template>
  <div class="main-wrap">
    <main-header />
    <banner>
      <img
        :src="imgAPI.saasInner[1]"
        :data-2d="imgAPI.saasInner[0]"
        :data-3d="imgAPI.saasInner[1]"
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
    <div id="call-to-action" class="space-top-short space-bottom-short">
      <call-action />
    </div>
    <section class="space-top">
      <subscribe-form />
    </section>
    <div id="footer">
      <main-footer bg />
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
import Progress from '@/components/About/Progress';
import TeamSlider from '@/components/About/TeamSlider';
import PhotoSlider from '@/components/About/PhotoSlider';
import CallAction from '@/components/CallAction';
import SubscribeForm from '@/components/SubscribeForm';
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
    CallAction,
    SubscribeForm,
  },
  data() {
    return {
      imgAPI,
    };
  },
  head() {
    return {
      title: 'About | ' + brand.saas.desc,
    };
  },
});
</script>
