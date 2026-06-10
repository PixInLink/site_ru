<template>
  <div>
    <div class="main-wrap">
      <main-header home />
      <div class="container-wrap scroll-nav-content">
        <div id="home">
          <banner-slider />
        </div>
        <section id="about" :class="{ 'space-top': isDesktop }" class="space-bottom-short">
          <about />
        </section>
        <section
          id="services"
          class="space-top-short"
        >
          <services />
        </section>
        <section
          id="our-expertise"
          :class="{ 'space-top-short': isDesktop }"
        >
          <speciality />
        </section>
        <section :class="{ 'space-top': isDesktop }">
          <company-logo />
        </section>
        <section
          id="case-studies"
          class="space-top-short"
        >
          <case-studies />
        </section>
        <section
          id="testimonials"
          class="space-top-short"
        >
          <testimonials />
        </section>
        <div id="call-to-action" class="space-top-short space-bottom-short">
          <call-action />
        </div>
      </div>
      <main-footer />
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
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BannerSlider from '@/components/Home/BannerSlider';
import About from '@/components/Home/About';
import Services from '@/components/Home/Services';
import Speciality from '@/components/Home/Speciality';
import CompanyLogo from '@/components/CompanyLogo';
import CaseStudies from '@/components/Home/CaseStudies';
import Testimonials from '@/components/Home/Testimonials';
import CallAction from '@/components/CallAction';
import Hidden from '@/components/Hidden';
import Corner from '@/components/Corner';
import Notification from '@/components/Notification';
import brand from '@/assets/text/brand';
import { defineNuxtComponent, useRouter, useCookie } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    BannerSlider,
    About,
    Services,
    Speciality,
    Testimonials,
    CompanyLogo,
    CaseStudies,
    CallAction,
    Hidden,
    Corner,
    Notification,
    'main-footer': Footer,
  },
  head() {
    return {
      title: brand.marketing.desc,
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
    isDesktop() {
      return this.$vuetify.display.mdAndUp;
    },
  },
});
</script>
