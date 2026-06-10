<template>
  <div class="main-wrap">
    <form-deco />
    <main-header :href="link.marketing.login" text="login" />
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
import FormDeco from '~/components/Decoration/FormDeco';
import RegisterForm from '@/components/Forms/Register';
import link from '@/assets/text/link';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    'main-footer': Footer,
    RegisterForm,
    FormDeco,
  },
  data() {
    return {
      link,
    };
  },
  head() {
    return {
      title: 'Register | ' + brand.marketing.desc,
    };
  },
});
</script>
