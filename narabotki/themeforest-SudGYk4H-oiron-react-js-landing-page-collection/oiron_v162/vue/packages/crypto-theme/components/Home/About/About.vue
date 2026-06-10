<template>
  <div class="main-feature">
    <v-dialog
      v-model="dialog"
      max-width="690"
    >
      <v-card class="video-popup">
        <v-card-title class="headline d-flex justify-space-between">
          <h4 class="use-text-subtitle2">
            {{ $t('crypto.banner_title') }}
          </h4>
          <v-btn class="close-btn" variant="text" icon @click="handleVideoClose()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <div v-if="yt.use" class="text-center mb-3">
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
      <v-row :class="[isMobile ? 'column-reverse' : 'row']" class="spacing6">
        <v-col md="6" cols="12" class="px-6 feature-wrap">
          <div v-if="loaded" class="deco">
            <svg width="377px" height="440px" viewBox="0 0 377 440" version="1.1">
              <defs>
                <linearGradient id="primary-hexa" x1="34.1359172%" y1="14.3140713%" x2="132.662444%" y2="100%">
                  <stop :stop-color="theme.primarylight" offset="0%" />
                  <stop :stop-color="theme.primary" offset="100%" />
                </linearGradient>
                <linearGradient id="secondary-hexa" x1="56.1985951%" y1="11.7667404%" x2="20.6835068%" y2="110.664023%">
                  <stop :stop-color="theme.secondary" offset="0%" />
                  <stop :stop-color="theme.secondarylight" offset="100%" />
                </linearGradient>
                <linearGradient id="accent-hexa" x1="56.2159946%" y1="11.7667404%" x2="20.6012149%" y2="110.664023%">
                  <stop :stop-color="theme.accentlight" offset="0%" />
                  <stop :stop-color="theme.accent" offset="100%" />
                </linearGradient>
              </defs>
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Main-Feature" transform="translate(-208.000000, -968.000000)">
                  <g transform="translate(112.000000, 782.000000)">
                    <g id="Group-3" transform="translate(96.000000, 186.000000)">
                      <path id="Fill-1" d="M0,293.262681 C0,308.794648 8.32197774,323.147545 21.8317273,330.913528 L166.668273,414.175512 C180.178022,421.941496 196.821978,421.941496 210.331727,414.175512 L355.168273,330.913528 C368.678022,323.147545 377,308.794648 377,293.262681 L377,126.738016 C377,111.205352 368.678022,96.8531518 355.168273,89.0864719 L210.331727,5.8244876 C196.821978,-1.94149587 180.178022,-1.94149587 166.668273,5.8244876 L21.8317273,89.0864719 C8.32197774,96.8531518 0,111.205352 0,126.738016 L0,293.262681 Z" fill="url(#secondary-hexa)" />
                      <path id="Fill-1" d="M315,360.877113 C315,363.465775 316.368601,365.857924 318.590364,367.152255 L342.409636,381.029252 C344.631399,382.323583 347.368601,382.323583 349.590364,381.029252 L373.409636,367.152255 C375.631399,365.857924 377,363.465775 377,360.877113 L377,333.123003 C377,330.534225 375.631399,328.142192 373.409636,326.847745 L349.590364,312.970748 C347.368601,311.676417 344.631399,311.676417 342.409636,312.970748 L318.590364,326.847745 C316.368601,328.142192 315,330.534225 315,333.123003 L315,360.877113 Z" fill="url(#primary-hexa)" />
                      <path id="Fill-1" d="M15,405.298115 C15,409.550915 17.2515696,413.480875 20.9067273,415.607276 L60.0932727,438.4052 C63.7484304,440.5316 68.2515696,440.5316 71.9067273,438.4052 L111.093273,415.607276 C114.74843,413.480875 117,409.550915 117,405.298115 L117,359.702076 C117,355.449085 114.74843,351.519315 111.093273,349.392724 L71.9067273,326.5948 C68.2515696,324.4684 63.7484304,324.4684 60.0932727,326.5948 L20.9067273,349.392724 C17.2515696,351.519315 15,355.449085 15,359.702076 L15,405.298115 Z" fill="url(#accent-hexa)" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div class="counter">
            <div class="lower">
              <div
                data-aos="flip-right"
                data-aos-offset="380"
                data-aos-duration="500"
              >
                <v-card class="paper">
                  <span class="ion-ios-ionic-outline" />
                  <h6 class="use-text-subtitle2">
                    +600
                  </h6>
                  <p>
                    {{ $t('crypto.mainfeature_supported') }}
                  </p>
                </v-card>
              </div>
              <div
                data-aos="flip-right"
                data-aos-offset="300"
                data-aos-duration="500"
              >
                <v-card class="paper">
                  <span class="ion-ios-people-outline" />
                  <h6 class="use-text-subtitle2">
                    +200K
                  </h6>
                  <p>
                    {{ $t('crypto.mainfeature_registered') }}
                  </p>
                </v-card>
              </div>
            </div>
            <div class="higher">
              <div
                data-aos="flip-right"
                data-aos-offset="390"
                data-aos-duration="500"
              >
                <v-card class="paper">
                  <span class="ion-ios-archive-outline" />
                  <h6 class="use-text-subtitle2">
                    +20M
                  </h6>
                  <p>
                    {{ $t('crypto.mainfeature_open') }}
                  </p>
                </v-card>
              </div>
              <div
                data-aos="flip-right"
                data-aos-offset="320"
                data-aos-duration="500"
              >
                <v-card class="paper">
                  <span class="ion-ios-heart-outline" />
                  <h6 class="use-text-subtitle2">
                    +50M
                  </h6>
                  <p>
                    {{ $t('crypto.mainfeature_invested') }}
                  </p>
                </v-card>
              </div>
            </div>
          </div>
        </v-col>
        <v-col md="6" class="px-6" cols="12">
          <title-main :text="$t('crypto.mainfeature_title')" :align="isMobile ? 'center' : 'left'" />
          <p class="pb-2 use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-start']">
            {{ $t('crypto.mainfeature_subtitle') }}
          </p>
          <v-card class="video">
            <figure>
              <img :src="imgAPI.crypto[34]" alt="cover">
            </figure>
            <v-btn icon class="play-btn" @click="handleVideoOpen">
              <span class="ion-ios-play-outline" />
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './about-style.scss';
</style>

<script>
import AOS from 'aos';
import youtube from '@/config/youtube';
import theme from '@/config/theme';
import imgAPI from '@/assets/images/imgAPI';
import Title from '../../Title';

export default {
  components: {
    'title-main': Title,
  },
  data() {
    return {
      videoId: 'QPMkYyM2Gzg',
      player: null,
      loaded: false,
      yt: youtube,
      imgAPI,
      dialog: false,
      theme,
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
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
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
