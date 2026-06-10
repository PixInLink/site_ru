<template>
  <v-container :class="{ 'fixed-width': mdUp }">
    <div>
      <div class="root">
        <div
          data-aos="fadeInShort"
          data-aos-offset="40"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <v-card class="paper">
            <v-row align="center">
              <v-col cols="12" lg="9" md="8">
                <h4 class="use-text-title pb-2">
                  {{ $t('common.about_ready') }}
                </h4>
                <p>
                  Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.
                </p>
              </v-col>
              <v-col cols="12" lg="3" md="4" class="ps-sm-8">
                <div class="d-flex align-center justify-center">
                  <v-btn
                    :href="link.agency.contact"
                    block
                    elevation="0"
                    color="white"
                    class="button"
                  >
                    {{ $t('common.btn_contact') }}
                    &nbsp;
                    <v-icon class="icon use-rtl-flip">
                      mdi-send
                    </v-icon>
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
      return this.$vuetify.display.mdAndUp;
    },
  },
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
