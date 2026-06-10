<template>
  <div>
    <div class="main-wrap">
      <hidden point="mdDown">
        <market-price />
      </hidden>
      <main-header home />
      <div class="container-wrap scroll-nav-content">
        <div id="home">
          <banner-slider />
        </div>
        <section id="about" class="space-top">
          <about />
        </section>
        <section id="feature" class="space-top-short">
          <feature />
        </section>
        <section id="benefit">
          <benefit />
        </section>
        <section id="view-market" class="space-top">
          <top-coin />
        </section>
        <section id="testimonials" class="space-top-short">
          <testimonials />
        </section>
        <section id="news" class="space-top">
          <news-event />
        </section>
        <download-banner />
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
import MarketPrice from '@/components/Home/MarketPrice';
import BannerSlider from '@/components/Home/BannerSlider';
import About from '@/components/Home/About';
import Feature from '@/components/Home/Feature';
import Benefit from '@/components/Home/Benefit';
import TopCoin from '@/components/Home/TopCoin';
import Testimonials from '@/components/Home/Testimonials';
import NewsEvent from '@/components/Home/NewsEvent';
import DownloadBanner from '@/components/Home/DownloadBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FooterExtend from '@/components/Footer/FooterExtend';
import Hidden from '@/components/Hidden';
import Corner from '@/components/Corner';
import Notification from '@/components/Notification';
import brand from '@/assets/text/brand';
import { defineNuxtComponent, useRouter, useCookie } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    MarketPrice,
    Hidden,
    Corner,
    Notification,
    BannerSlider,
    About,
    Feature,
    Benefit,
    TopCoin,
    Testimonials,
    NewsEvent,
    DownloadBanner,
    FooterExtend,
    'main-footer': Footer,
  },
  head() {
    return {
      title: brand.crypto.desc,
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
