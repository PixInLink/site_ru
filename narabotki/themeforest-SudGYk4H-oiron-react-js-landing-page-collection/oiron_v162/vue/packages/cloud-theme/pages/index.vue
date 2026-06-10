<template>
  <div>
    <div class="main-wrap">
      <main-header home />
      <div class="container-wrap scroll-nav-content">
        <div id="home">
          <banner-slider />
        </div>
        <div id="promotion">
          <promotion />
        </div>
        <div class="mt-5">
          <company-logo />
        </div>
        <section id="feature" class="space-top-short">
          <feature />
        </section>
        <section id="benefit" class="space-top-short">
          <benefit />
        </section>
        <section id="integration" class="space-top">
          <integration />
        </section>
        <section id="map" class="space-top-short">
          <map-location />
        </section>
        <section id="testimonials" class="space-top-short">
          <testimonials />
        </section>
      </div>
      <footer-extend with-counter>
        <main-footer />
      </footer-extend>
      <hidden point="smDown">
        <corner />
      </hidden>
      <hidden point="mdDown">
        <notification />
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

<script>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import BannerSlider from '@//components/Home/BannerSlider';
import Promotion from '@//components/Home/Promotion';
import Feature from '@//components/Home/Feature';
import CompanyLogo from '@//components/CompanyLogo';
import Benefit from '@//components/Home/Benefit';
import Integration from '@//components/Home/Integration';
import Map from '@//components/Home/Map';
import Testimonials from '@//components/Home/Testimonials';
import Header from '@//components/Header';
import FooterExtend from '@//components/Footer/FooterExtend';
import Footer from '@//components/Footer';
import Hidden from '@//components/Hidden';
import Corner from '@//components/Corner';
import Notification from '@/components/Notification';
import brand from '@/assets/text/brand';
import { defineNuxtComponent, useRouter, useCookie } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    BannerSlider,
    Promotion,
    Feature,
    Benefit,
    Integration,
    'map-location': Map,
    Testimonials,
    CompanyLogo,
    FooterExtend,
    Hidden,
    Corner,
    Notification,
    'main-footer': Footer,
  },
  head() {
    return {
      title: brand.cloud.desc,
    };
  },
  setup() {
    // push route to the stored cookie languages only for index page
    const router = useRouter();
    const storedLang = useCookie('i18n_redirected');
    const i18nLocale = useI18n();

    const defaultLocale = '/' + i18nLocale.fallbackLocale.value;
    onMounted(() => {
      const rootUrl = document.location.pathname === '/' || document.location.pathname === defaultLocale;
      if (storedLang.value && rootUrl) {
        router.push({ path: `/${storedLang.value}` });
      }
    });
  },
  computed: {
    isMobile() {
      return this.$vuetify.display.smAndDown;
    },
  },
});
</script>
