<template>
  <div>
    <div class="main-wrap">
      <main-header home />
      <div class="container-wrap scroll-nav-content">
        <div id="home">
          <banner-slider />
        </div>
        <section class="space-top">
          <counter />
        </section>
        <section
          id="facility"
          class="space-top-short"
        >
          <facilities />
        </section>
        <section
          id="our-expertise"
          class="space-top"
        >
          <speciality />
        </section>
        <section
          id="ask-doctors"
          class="space-top"
        >
          <ask-doctors />
        </section>
        <section
          id="testimonials"
          class="space-top-short"
        >
          <testimonials />
        </section>
        <div id="call-to-action" class="space-top">
          <call-action />
        </div>
        <div id="clinics" class="space-top-short space-bottom-short">
          <clinics />
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
import Counter from '@/components/Home/Counter';
import Facilities from '@/components/Home/Facilities';
import Speciality from '@/components/Home/Speciality';
import AskDoctors from '@/components/Home/AskDoctors';
import Testimonials from '@/components/Home/Testimonials';
import CallAction from '@/components/CallAction';
import Clinics from '@/components/Home/Clinics';
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
    Facilities,
    Speciality,
    Testimonials,
    AskDoctors,
    CallAction,
    Clinics,
    Hidden,
    Corner,
    Notification,
    'main-footer': Footer,
  },
  head() {
    return {
      title: brand.medical.desc,
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
