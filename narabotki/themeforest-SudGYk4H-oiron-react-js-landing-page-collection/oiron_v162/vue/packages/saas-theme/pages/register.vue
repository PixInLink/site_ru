<template>
  <div class="main-wrap">
    <main-header :href="link.saas.login" text="login" />
    <div class="container-general">
      <register-form />
    </div>
    <main-footer />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

<script>
import brand from '@/assets/text/brand';
import Header from '@/components/Header/Basic';
import Footer from '@/components/Footer';
import RegisterForm from '@/components/Forms/Register';
import link from '@/assets/text/link';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    'main-footer': Footer,
    RegisterForm,
  },
  data() {
    return {
      link,
    };
  },
  head() {
    return {
      title: 'Register | ' + brand.saas.desc,
    };
  },
});
</script>
