<template>
  <v-container class="max-md">
    <div
      data-aos="fade-up"
      data-aos-offset="40"
      data-aos-delay="300"
      data-aos-duration="500"
    >
      <div class="root">
        <figure v-if="isDesktop">
          <img :src="imgAPI.crypto[35]" alt="mobile">
        </figure>
        <div>
          <h3>{{ $t('crypto.download_mobile') }}</h3>
          <div class="btn-area">
            <nuxt-link to="/">
              <img src="/images/crypto/app-store.png" alt="app store">
            </nuxt-link>
            <nuxt-link to="/">
              <img src="/images/crypto/play-store.png" alt="play store">
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import './download-style.scss';
</style>

<script>
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';

export default {
  data() {
    return {
      imgAPI,
    };
  },
  computed: {
    isDesktop() {
      const smUp = this.$vuetify.display.smAndUp;
      return smUp;
    },
  },
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
