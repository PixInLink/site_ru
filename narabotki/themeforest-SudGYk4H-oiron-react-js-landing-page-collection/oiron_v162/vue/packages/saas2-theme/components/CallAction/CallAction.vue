<template>
  <v-container class="root max-md">
    <div
      data-aos="fade-up"
      data-aos-offset="-100"
      data-aos-delay="500"
      data-aosduration="500"
    >
      <v-card class="paper">
        <div class="deco" />
        <h4 class="use-text-title2 mb-10">
          {{ $t('saas2.footer_waiting') }}
        </h4>
        <v-btn
          :href="link.saas2.contact"
          size="large"
          color="primary"
          class="button"
        >
          {{ $t('saas2.getstarted') }}
        </v-btn>
      </v-card>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import './action-style.scss';
</style>

<script>
import AOS from 'aos';
import link from '@/assets/text/link';

export default {
  data() {
    return {
      link,
    };
  },
  computed: {
    mdUp() {
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdUp;
    },
  },
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
