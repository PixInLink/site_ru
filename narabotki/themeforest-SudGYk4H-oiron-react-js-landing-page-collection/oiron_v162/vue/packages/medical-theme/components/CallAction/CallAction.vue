<template>
  <v-container>
    <div>
      <div class="root">
        <div
          data-aos-offset="40"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <v-card class="paper">
            <v-row align="center">
              <v-col cols="12" md="8" class="px-sm-2">
                <h4 class="use-text-title2 pb-2">
                  {{ $t('medical.cta_title') }}
                </h4>
                <p>
                  {{ $t('medical.cta_subtitle') }}
                </p>
              </v-col>
              <v-col cols="12" md="4" class="px-sm-2">
                <div class="d-flex align-center justify-center">
                  <v-btn
                    :href="link.medical.contact"
                    block
                    size="large"
                    class="button"
                  >
                    {{ $t('medical.cta_btn') }}
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
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
