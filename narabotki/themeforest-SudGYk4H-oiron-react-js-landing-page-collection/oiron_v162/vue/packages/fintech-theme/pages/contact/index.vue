<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general container-front">
      <contact />
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
import SiteMap from '@/components/Footer';
import Contact from '@/components/Forms/Contact';
import FooterExtend from '@/components/Footer/FooterExtend';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    'main-footer': SiteMap,
    Contact,
    FooterExtend,
  },
  head() {
    return {
      title: 'Contact | ' + brand.fintech.desc,
    };
  },
});
</script>
