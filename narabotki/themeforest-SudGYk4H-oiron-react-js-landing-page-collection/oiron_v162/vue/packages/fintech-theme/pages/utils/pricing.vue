<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general container-front">
      <div class="mt-5">
        <pricing />
      </div>
      <div class="space-top-short">
        <faq />
      </div>
    </div>
    <footer-extend>
      <main-footer />
    </footer-extend>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

<script>
import brand from '@/assets/text/brand';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import Faq from '@/components/Faq';
import FooterExtend from '@/components/Footer/FooterExtend';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    'main-footer': Footer,
    FooterExtend,
    Pricing,
    Faq,
  },
  head() {
    return {
      title: brand.fintech.name + ' - Pricing',
    };
  },
});
</script>
