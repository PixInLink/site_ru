<template>
  <theme-wrapper theme="money">
    <v-app>
      <div class="main-wrap">
        <main-header />
        <div class="container-front">
          dada
        </div>
        <footer-extend>
          <main-footer />
        </footer-extend>
      </div>
    </v-app>
  </theme-wrapper>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

<script>
import brand from './assets/text/brand';
import ThemeWrapper from './components/ThemeWrapper';
import Header from './components/Header';
import FooterExtend from './components/Footer/FooterExtend';
import Footer from './components/Footer';
import Error from './components/Error';
import { useHead, useError, defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    'main-footer': Footer,
    FooterExtend,
    ThemeWrapper,
    Error,
  },
  setup() {
    const error = useError();
    // const errObj = error._object.error;
    // useHead({
    //   title: errObj.statusCode === 404
    //     ? brand.fintech.name + ' - Not Found'
    //     : brand.fintech.name + ' - An error occurred',
    // });
  },
});
</script>
