<template>
  <div class="root">
    <v-dialog
      v-model="dialog"
      max-width="690"
    >
      <v-card class="video-popup">
        <v-card-title class="headline mb-3 d-flex justify-space-between">
          <h4 class="use-text-subtitle">
            {{ $t('retail.banner_title') }}
          </h4>
          <v-btn icon @click="handleVideoClose()">
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
    <v-container :class="{ fixed: isDesktop }">
      <title-main align="center">
        {{ $t('retail.feature_title') }}
      </title-main>
      <div>
        <div class="item">
          <v-row align="center" justify="center" :class="[isMobile ? 'column-reverse' : 'row']">
            <v-col cols="12" md="4" class="px-8">
              <div
                data-aos="fade-left"
                data-aos-offset="400"
                data-aos-duration="500"
              >
                <div class="illustration">
                  <div class="bg pipe1" />
                  <figure class="screen1 mobile-screen">
                    <img
                      :src="imgAPI.retail[25]"
                      alt="screen"
                    >
                  </figure>
                  <figure class="graphic artwork1">
                    <img
                      :src="imgAPI.retail[10]"
                      :data-2d="imgAPI.retail[9]"
                      :data-3d="imgAPI.retail[10]"
                      class="img-2d3d"
                      alt="illustration"
                    >
                  </figure>
                </div>
              </div>
            </v-col>
            <v-col md="6" cols="12" class="px-8">
              <div class="desc">
                <title-secondary
                  :text="$t('retail.feature_title1')"
                  :align="isMobile ? 'center' : 'left'"
                />
                <p class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-start']">
                  {{ $t('retail.feature_desc1') }}
                </p>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="item">
          <v-row align="center">
            <v-col md="6" cols="12" class="px-8">
              <div class="desc">
                <title-secondary
                  :text="$t('retail.feature_title2')"
                  :align="isMobile ? 'center' : 'right'"
                />
                <p class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-end']">
                  {{ $t('retail.feature_desc2') }}
                </p>
              </div>
            </v-col>
            <v-col md="6" cols="12" class="px-sm-15">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="500"
                data-aos-duration="500"
              >
                <div class="illustration">
                  <div class="bg pipe2" />
                  <figure class="screen2 desktop-screen">
                    <img
                      :src="imgAPI.retail[26]"
                      alt="screen"
                    >
                  </figure>
                  <figure class="graphic artwork2">
                    <img
                      :src="imgAPI.retail[12]"
                      :data-2d="imgAPI.retail[11]"
                      :data-3d="imgAPI.retail[12]"
                      class="img-2d3d"
                      alt="illustration"
                    >
                  </figure>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="item last">
          <v-container>
            <v-row justify="center">
              <v-col md="8" cols="12" class="video-container">
                <div class="bg pipe3" />
                <div class="bg pipe4" />
                <title-secondary
                  :text="$t('retail.feature_title3')"
                  align="center"
                />
                <p class="use-text-subtitle2 text-center">
                  {{ $t('retail.feature_desc3') }}
                </p>
                <div
                  data-aos-offset="100"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  <v-card class="video">
                    <img :src="imgAPI.retail[27]" alt="screen">
                    <v-btn icon :size="isMobile ? 'small' : 'large'" color="primary" class="button" @click="handleVideoOpen()">
                      <i class="ion-md-play" />
                    </v-btn>
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './feature-style.scss';
</style>

<script>
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';
import youtube from '@/config/youtube';
import Title from '../../Title';
import TitleSecondary from '../../Title/TitleSecondary';

export default {
  components: {
    TitleSecondary,
    'title-main': Title,
  },
  data() {
    return {
      videoId: 'MltGO66gTbo',
      imgAPI,
      dialog: false,
      player: null,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'https://localhost:8006',
      },
      yt: youtube,
    };
  },
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
  },
  mounted() {
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
