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
        <section :class="!isMobile && 'space-top-short'">
          <counter />
        </section>
        <section id="feature" :class="isMobile ? 'space-top-short' : 'space-top'">
          <feature />
        </section>
        <section id="integration">
          <integration />
        </section>
        <section id="testimonials" class="space-top-short">
          <testimonials />
        </section>
        <section id="call-action">
          <call-action home />
        </section>
        <section id="blog" class="space-top-short space-bottom-short">
          <news-event />
        </section>
        <section class="space-top">
          <subscribe-form />
        </section>
      </div>
      <main-footer bg />
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
import BannerSlider from '@/components/Home/BannerSlider';
import Counter from '@/components/Home/Counter';
import Feature from '@/components/Home/Feature';
import Integration from '@/components/Home/Integration';
import Testimonials from '@/components/Home/Testimonials';
import NewsEvent from '@/components/Home/NewsEvent';
import CallAction from '@/components/CallAction';
import SubscribeForm from '@/components/SubscribeForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CompanyLogo from '@/components/CompanyLogo';
import Hidden from '@/components/Hidden';
import Corner from '@/components/Home/Corner';
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
    SubscribeForm,
    NewsEvent,
    Hidden,
    Corner,
    Notification,
    'main-footer': Footer,
  },
  head() {
    return {
      title: brand.saas.desc,
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
