<template>
  <div>
    <div class="main-wrap">
      <main-header home />
      <div class="container-wrap scroll-nav-content">
        <div id="home">
          <banner-slider />
        </div>
        <section id="about" class="space-top-short">
          <about />
        </section>
        <section id="feature" class="space-top-short">
          <feature />
        </section>
        <section id="payment">
          <payment-step />
        </section>
        <section id="promotions" class="space-top-short">
          <top-promotions />
        </section>
        <section id="testimonials" :class="isDesktop ? 'space-top-short' : 'space-top'">
          <testimonials />
        </section>
        <section id="merchant" class="space-top">
          <merchants />
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
import BannerSlider from '~/components/Home/BannerSlider';
import About from '~/components/Home/About';
import Feature from '~/components/Home/Feature';
import PaymentStep from '~/components/Home/PaymentStep';
import TopPromotions from '~/components/Home/TopPromotions';
import Testimonials from '~/components/Home/Testimonials';
import Merchants from '~/components/Home/Merchants';
import DownloadBanner from '~/components/Home/DownloadBanner';
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
    About,
    Feature,
    PaymentStep,
    TopPromotions,
    Testimonials,
    Merchants,
    DownloadBanner,
    FooterExtend,
    Hidden,
    Corner,
    Notification,
    'main-footer': Footer,
  },
  head() {
    return {
      title: brand.fintech.desc,
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
