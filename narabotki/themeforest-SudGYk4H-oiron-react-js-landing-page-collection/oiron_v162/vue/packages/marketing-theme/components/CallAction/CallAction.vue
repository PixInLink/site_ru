<template>
  <v-container :class="{ 'fixed-width': mdUp }">
    <div>
      <div class="root">
        <div class="deco">
          <span class="deco-top" />
          <span class="deco-bottom" />
          <span class="deco-right" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="40"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <v-card class="paper">
            <v-row align="center">
              <v-col cols="12" md="8" class="px-sm-6">
                <h4 class="use-text-title2 pb-2">
                  {{ $t('marketing.cta_title') }}
                </h4>
                <p>
                  {{ $t('marketing.cta_subtitle') }}
                </p>
              </v-col>
              <v-col cols="12" md="4" class="ps-md-15">
                <div class="d-flex align-center">
                  <div class="deco-button" />
                  <v-btn
                    :href="link.marketing.contact"
                    :color="isTablet ? 'white' : 'primary'"
                    :variant="isTablet ? 'outlined' : 'flat'"
                    block
                    size="large"
                    class="button"
                  >
                    {{ $t('common.btn_join') }}
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </div>
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
    isTablet() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
  },
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
