<template>
  <div class="root">
    <v-container>
      <title-main
        :text="$t('fintech.partner_title')"
        align="center"
      />
      <div class="tab">
        <v-row class="spacing6">
          <v-col
            v-if="!isMobile"
            class="pa-6"
            md="1"
            cols="12"
          />
          <v-col md="10" cols="12" class="pa-6">
            <v-tabs
              v-model="tab"
              class="tabs"
              color="secondary"
              align-tabs="center"
            >
              <v-tab class="tab-label" :value="1">
                Online
              </v-tab>
              <v-tab class="tab-label" :value="2">
                Offline
              </v-tab>
              <v-tab class="tab-label" :value="3">
                Channel
              </v-tab>
            </v-tabs>
            <v-window v-model="tab">
              <v-window-item :value="1">
                <div class="tab-content">
                  <section>
                    <v-row>
                      <v-col
                        v-for="(logo, index) in logos1"
                        :key="index"
                        sm="2"
                        cols="4"
                      >
                        <div class="img-logo">
                          <img :src="logo" :alt="'logo' + index">
                        </div>
                      </v-col>
                    </v-row>
                  </section>
                </div>
              </v-window-item>
              <v-window-item :value="2">
                <div class="tab-content">
                  <section>
                    <v-row>
                      <v-col
                        v-for="(logo, index) in logos2"
                        :key="index"
                        sm="2"
                        cols="4"
                      >
                        <div class="img-logo">
                          <img :src="logo" :alt="'logo' + index">
                        </div>
                      </v-col>
                    </v-row>
                  </section>
                </div>
              </v-window-item>
              <v-window-item :value="3">
                <div class="tab-content">
                  <section>
                    <v-row>
                      <v-col
                        v-for="(logo, index) in logos3"
                        :key="index"
                        sm="2"
                        cols="4"
                      >
                        <div class="img-logo">
                          <img :src="logo" :alt="'logo' + index">
                        </div>
                      </v-col>
                    </v-row>
                  </section>
                </div>
              </v-window-item>
            </v-window>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './merchants-style.scss';
</style>

<script>
import Title from '../../Title';

export default {
  components: {
    'title-main': Title,
  },
  data() {
    return {
      tab: null,
      logos1: [
        '/images/logos/architect.png',
        '/images/logos/fashion.png',
        '/images/logos/coin.png',
        '/images/logos/mobile.png',
        '/images/logos/profile.png',
        '/images/logos/saas.png',
        '/images/logos/agency-logo.svg',
        '/images/logos/crypto-logo.svg',
        '/images/logos/saas-logo.svg',
        '/images/logos/cloud-logo.svg',
        '/images/logos/fashion.png',
        '/images/logos/hosting-logo.svg',
      ],
      logos2: [
        '/images/logos/agency-logo.svg',
        '/images/logos/education-logo.svg',
        '/images/logos/fashion-logo.svg',
        '/images/logos/medical-logo.svg',
        '/images/logos/mobile.png',
        '/images/logos/profile.png',
        '/images/logos/profile-logo.svg',
        '/images/logos/starter.png',
        '/images/logos/coin.png',
        '/images/logos/profile.png',
        '/images/logos/saas.png',
        '/images/logos/agency.png',
      ],
      logos3: [
        '/images/logos/saas.png',
        '/images/logos/mobile.png',
        '/images/logos/profile.png',
        '/images/logos/profile-logo.svg',
        '/images/logos/starter.png',
        '/images/logos/agency.png',
        '/images/logos/cloud-logo.svg',
        '/images/logos/agency-logo.svg',
        '/images/logos/mobile-logo.svg',
        '/images/logos/fashion.png',
        '/images/logos/movie-logo.svg',
        '/images/logos/education-logo.svg',
      ],
    };
  },
  computed: {
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
  },
};
</script>
