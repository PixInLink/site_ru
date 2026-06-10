<template>
  <v-container class="root max-md" :class="{ 'fixed-width': mdUp, 'home': home }">
    <div
      data-aos="fade-up"
      data-aos-offset="-100"
      data-aos-delay="500"
      data-aosduration="500"
    >
      <v-card class="paper">
        <div class="deco" />
        <h4 class="use-text-title2 mb-10">
          {{ $t('saas.footer_waiting') }}
        </h4>
        <v-btn
          :href="link.saas.contact"
          size="large"
          color="secondary"
          class="button"
        >
          {{ $t('saas.getstarted') }}
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
import link from '~/assets/text/link';

export default {
  props: {
    home: {
      type: Boolean,
      default: false,
    },
  },
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
