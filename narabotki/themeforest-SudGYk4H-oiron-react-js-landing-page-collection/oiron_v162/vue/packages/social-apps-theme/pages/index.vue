<template>
  <div>
    <div class="main-wrap">
      <main-header home />
      <div class="container-wrap scroll-nav-content">
        <div id="home">
          <banner-slider />
        </div>
        <section id="feature" class="space-top-short">
          <feature />
        </section>
        <section class="space-top">
          <counter />
        </section>
        <section id="discover" class="space-top">
          <discover />
        </section>
        <section id="stories" class="space-top">
          <stories />
        </section>
        <section id="community" class="space-top-short">
          <top-communities />
        </section>
        <section id="blog" class="container-front" :class="{ 'space-top': isMobile }">
          <news-event />
        </section>
        <section id="call-action" class="space-bottom container-front">
          <call-action />
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
import Discover from '@/components/Home/Discover';
import Stories from '@/components/Home/Stories';
import TopCommunities from '@/components/Home/TopCommunities';
import NewsEvent from '@/components/Home/NewsEvent';
import CallAction from '@/components/CallAction';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hidden from '@/components/Hidden';
import Corner from '@/components/Corner';
import Notification from '@/components/Notification';
import brand from '@/assets/text/brand';
import { defineNuxtComponent, useRouter, useCookie } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    BannerSlider,
    Counter,
    Feature,
    Discover,
    Stories,
    TopCommunities,
    NewsEvent,
    CallAction,
    Hidden,
    Corner,
    Notification,
    'main-footer': Footer,
  },
  head() {
    return {
      title: brand.social.desc,
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
