<template>
  <div class="main-wrap">
    <main-header :href="link.cloud.register" text="register" />
    <div class="container-general container-front">
      <login-form />
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
import Header from '@/components/Header/Basic';
import Footer from '@/components/Footer';
import LoginForm from '@/components/Forms/Login';
import link from '@/assets/text/link';
import FooterExtend from '@/components/Footer/FooterExtend';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    'main-footer': Footer,
    LoginForm,
    FooterExtend,
  },
  data() {
    return {
      link,
    };
  },
  head() {
    return {
      title: 'Login | ' + brand.cloud.desc,
    };
  },
});
</script>
