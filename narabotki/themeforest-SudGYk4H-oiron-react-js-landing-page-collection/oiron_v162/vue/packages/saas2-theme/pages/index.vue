<template>
  <div>
    <div class="main-wrap">
      <main-header home />
      <div class="container-wrap scroll-nav-content">
        <div id="home">
          <banner-slider />
        </div>
        <section>
          <company-logo />
        </section>
        <section class="space-top-short">
          <counter />
        </section>
        <section id="feature" class="space-top-short">
          <feature />
        </section>
        <section id="integration" class="space-top">
          <integration />
        </section>
        <section id="testimonials" class="space-top">
          <testimonials />
        </section>
        <section id="call-action" class="space-top">
          <call-action />
        </section>
        <section id="blog" class="space-top space-bottom">
          <news-event />
        </section>
      </div>
      <main-footer extend />
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
import Counter from '@/components/Home/Counter';
import Feature from '@/components/Home/Feature';
import Integration from '@/components/Home/Integration';
import Testimonials from '@/components/Home/Testimonials';
import NewsEvent from '@/components/Home/NewsEvent';
import CallAction from '@/components/CallAction';
import CompanyLogo from '@/components/CompanyLogo';
import Hidden from '@/components/Hidden';
import Corner from '@/components/Corner';
import Notification from '@/components/Notification';
import brand from '@/assets/text/brand';
import { defineNuxtComponent, useRouter, useCookie } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    BannerSlider,
    CompanyLogo,
    Counter,
    Feature,
    Integration,
    Testimonials,
    CallAction,
    NewsEvent,
    Hidden,
    Corner,
    Notification,
    'main-footer': Footer,
  },
  head() {
    return {
      title: brand.saas2.desc,
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
    isTablet() {
      return this.$vuetify.display.mdAndDowm;
    },
    isMobile() {
      return this.$vuetify.display.smAndDown;
    },
  },
});
</script>
