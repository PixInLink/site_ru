<template>
  <div class="video-root">
    <v-dialog
      v-model="dialog"
      max-width="690"
    >
      <v-card class="video-popup">
        <v-card-title class="headline">
          <h4 class="text-h6 title-main">
            Vestibulum consequat hendrerit lacus
          </h4>
          <v-btn class="close-btn" variant="text" icon @click="handleVideoClose()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <div v-if="yt.use" class="text-center mx-auto py-4">
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
    <h4 class="use-text-primary use-text-title2 mb-3">
      Lorem ipsum dolor sit amet.
    </h4>
    <p class="pb-2 use-text-subtitle2">
      Proin scelerisque sapien at enim faucibus, ut scelerisque urna consequat. In porttitor congue libero
    </p>
    <div class="video-wrap">
      <div v-ripple @click="handleVideoOpen" @keydown.enter="handleVideoOpen">
        <media-card
          :thumb="imgAPI.photo[11]"
          title="Sed lacinia velit, ut malesuada eros interdum a"
          orientation="landscape"
          type="video"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './about-style.scss';
</style>

<script>
import youtube from '@/config/youtube';
import imgAPI from '@/assets/images/imgAPI';
import MediaCard from '../Cards/MediaCard';

export default {
  components: {
    MediaCard,
  },
  data() {
    return {
      videoId: 'sf15CtXuw9M',
      player: null,
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
