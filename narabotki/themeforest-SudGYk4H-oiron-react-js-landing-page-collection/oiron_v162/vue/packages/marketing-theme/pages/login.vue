<template>
  <div class="main-wrap">
    <form-deco />
    <main-header :href="link.marketing.register" text="register" />
    <div class="container-general">
      <login-form />
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
import FormDeco from '~/components/Decoration/FormDeco';
import LoginForm from '@/components/Forms/Login';
import link from '@/assets/text/link';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    'main-footer': Footer,
    LoginForm,
    FormDeco,
  },
  data() {
    return {
      link,
    };
  },
  head() {
    return {
      title: 'Login | ' + brand.marketing.desc,
    };
  },
});
</script>
