<template>
  <div class="main-feature">
    <v-dialog
      v-model="dialog"
      max-width="690"
    >
      <v-card class="video-popup">
        <v-card-title class="headline mb-3 d-flex justify-space-between">
          <h4 class="use-text-subtitle">
            {{ $t('fintech.banner_title') }}
          </h4>
          <v-btn class="close-btn" icon @click="handleVideoClose()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <div v-if="yt.use" class="text-center">
          <YouTube
            ref="youtube"
            :src="videoId"
            :vars="playerVars"
            :width="640"
            :height="360"
            class="youtube"
            @ready="onReady"
          />
        </div>
      </v-card>
    </v-dialog>
    <v-container class="fixed-width">
      <div>
        <v-row :class="[isMobile ? 'column-reverse' : 'row']" class="spacing6">
          <v-col md="6" cols="12" class="px-6 feature-wrap">
            <div
              data-aos="fade"
              data-aos-offset="100"
              data-aos-duration="500"
            >
              <div v-if="isDesktop" class="deco">
                <svg width="530px" height="534px" viewBox="0 0 530 534" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="deco-about" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Deco">
                      <path id="primary-light" d="M530,133 C529.998175,206.336568 470.484102,265.797961 397,266 L397,133 L530,133 Z" class="primary-light-bg" />
                      <path id="secondary-light" d="M530,0 C456.515898,0.200218968 397,59.6688928 397,132.99636 L397,133 L530,133 L530,0 Z" class="secondary-light-bg" />
                      <path id="secondary-main" d="M133,133 C59.6615934,133.001825 0.200219516,192.515898 0,266 L133,266 L133,133 Z" class="secondary-main-bg" />
                      <path id="primary-light2" d="M133,397 C59.6615934,396.997992 0.200219516,337.4839 0,264 L133,264 L133,397 Z" class="primary-light-bg" />
                      <path id="primary-main" d="M520,388 C519.997996,307.495017 454.666758,242.221787 374,242 L374,388 L520,388 Z" class="primary-main-bg" />
                      <path id="primary-light3" d="M374,388 C374.002004,468.506423 439.333242,533.779611 520,534 L520,388 L374,388 Z" class="primary-light-bg" transform="translate(447.000000, 461.000000) scale(-1, 1) translate(-447.000000, -461.000000) " />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div class="counter">
              <div
                data-aos="flip-right"
                data-aos-offset="420"
                data-aos-duration="500"
              >
                <div class="lower">
                  <v-card class="paper pie2 bg-accent">
                    <span class="ion-md-people" />
                    <h6 class="use-text-subtitle2">
                      +600K
                    </h6>
                    <p>
                      {{ $t('fintech.about_registered') }}
                    </p>
                  </v-card>
                  <v-card class="paper pie3 bg-primary">
                    <span class="ion-ios-home" />
                    <h6 class="use-text-subtitle2">
                      +200K
                    </h6>
                    <p>
                      {{ $t('fintech.about_merchant') }}
                    </p>
                  </v-card>
                </div>
              </div>
              <div
                data-aos="flip-right"
                data-aos-offset="420"
                data-aos-duration="500"
              >
                <div class="higher">
                  <v-card class="paper pie2 bg-primary">
                    <span class="ion-ios-briefcase" />
                    <h6 class="use-text-subtitle2">
                      +20M
                    </h6>
                    <p>
                      {{ $t('fintech.about_deposit') }}
                    </p>
                  </v-card>
                  <v-card class="paper pie4 bg-secondary text-white">
                    <span class="ion-ios-pricetags" />
                    <h6 class="use-text-subtitle2">
                      +50M
                    </h6>
                    <p>
                      {{ $t('fintech.about_discount') }}
                    </p>
                  </v-card>
                </div>
              </div>
            </div>
          </v-col>
          <v-col md="6" class="px-6" cols="12">
            <title-main :text="$t('fintech.about_title')" :align="isMobile ? 'center' : 'left'" />
            <p class="pb-2 use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-start']">
              {{ $t('fintech.about_subtitle') }}
            </p>
            <v-card class="video">
              <figure>
                <img :src="imgAPI.fintech[18]" alt="cover">
              </figure>
              <v-btn icon class="play-btn" @click="handleVideoOpen">
                <span class="ion-ios-play-outline" />
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './about-style.scss';
</style>

<script>
import AOS from 'aos';
import youtube from '@/config/youtube';
import imgAPI from '@/assets/images/imgAPI';
import Title from '../../Title';

export default {
  components: {
    'title-main': Title,
  },
  data() {
    return {
      videoId: 'rP_UAPcIG4I',
      player: null,
      loaded: false,
      yt: youtube,
      imgAPI,
      dialog: false,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'https://localhost:8008',
      },
    };
  },
  computed: {
    isMobile() {
      const mdDown = this.$vuetify.display.smAndDown;
      return mdDown;
    },
    isDesktop() {
      const smUp = this.$vuetify.display.smAndUp;
      return smUp;
    },
  },
  mounted() {
    this.loaded = true;
    AOS.init({
      once: true,
    });
  },
  methods: {
    handleVideoOpen() {
      if (this.yt.use) {
        this.dialog = true;
        setTimeout(() => {
          this.player = this.$refs.youtube.player;
          this.player.playVideo();
        }, 100);
      }
    },
    onReady() {
      this.$refs.youtube.playVideo();
    },
    handleVideoClose() {
      this.dialog = false;
      this.$refs.youtube.pauseVideo();
    },
  },
};
</script>
