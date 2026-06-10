<template>
  <div class="main-wrap">
    <page-deco extend />
    <v-container class="max-md">
      <div class="full-screen-container">
        <v-row align="center">
          <v-col md="12" class="text-center">
            <div class="logo d-flex justify-center align-center mb-10">
              <img
                :src="brand.social.img"
                alt="logo"
                width="64"
              >
              <h2 class="ps-3 use-text-subtitle">
                {{ brand.social.name }}
              </h2>
            </div>
            <div class="text-center">
              <h3 class="use-text-title use-text-primary">
                {{ $t('common.util_soon') }}
              </h3>
              <h5 class="use-text-subtitle2" :class="{ 'mb-10': isDesktop}">
                {{ $t('common.util_soon_desc') }}
              </h5>
              <div class="form mt-10" :class="{ 'mb-15': isDesktop}">
                <v-row justify="center">
                  <v-col sm="8" cols="12">
                    <v-text-field
                      :label="$t('common.form_email')"
                      :elevation="0"
                      rounded
                      color="secondary"
                      variant="solo"
                      class="input-field"
                    >
                      <template v-if="isDesktop" #append-inner>
                        <v-btn class="my-2" color="primary">
                          {{ $t('common.util_notif') }}
                        </v-btn>
                      </template>
                    </v-text-field>
                    <v-btn v-if="!isDesktop" block class="mb-2" color="primary">
                      {{ $t('common.util_notif') }}
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
              <div class="socmed-btn mt-10">
                <v-btn icon size="large" variant="text" href="#">
                  <v-icon color="indigo">
                    mdi-facebook
                  </v-icon>
                </v-btn>
                <v-btn icon size="large" variant="text" href="#">
                  <v-icon color="blue">
                    mdi-twitter
                  </v-icon>
                </v-btn>
                <v-btn icon size="large" variant="text" href="#">
                  <v-icon color="purple">
                    mdi-instagram
                  </v-icon>
                </v-btn>
                <v-btn icon size="large" variant="text" href="#">
                  <v-icon color="blue">
                    mdi-linkedin
                  </v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages.scss';
</style>

<script>
import brand from '@/assets/text/brand';
import PageDeco from '@/components/Decoration/PageDeco';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    PageDeco,
  },
  data() {
    return {
      brand,
    };
  },
  head() {
    return {
      title: brand.social.name + ' - Coming Soon',
    };
  },
  computed: {
    isDesktop() {
      const smUp = this.$vuetify.display.smAndUp;
      return smUp;
    },
  },
});
</script>
