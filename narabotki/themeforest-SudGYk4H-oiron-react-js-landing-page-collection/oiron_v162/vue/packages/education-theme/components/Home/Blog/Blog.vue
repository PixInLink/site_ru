<template>
  <div class="root">
    <v-dialog
      v-model="dialog"
      max-width="690"
    >
      <v-card class="video-popup">
        <v-card-title class="headline">
          <h4 class="use-text-subtitle">
            {{ $t('education.blog_video') }}
          </h4>
          <v-btn class="close-btn" variant="text" icon @click="handleVideoClose()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <div v-if="yt" class="text-center mx-auto py-4">
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
    <hidden point="smDown">
      <div class="deco" />
    </hidden>
    <v-container class="fixed-width">
      <div class="pa-md-8 pa-2">
        <title-main
          :head="$t('education.blog_title')"
          :desc="$t('education.blog_desc')"
          :align="isMobile ? 'center' : 'left'"
          color="secondary"
        />
      </div>
      <v-row :class="[isDesktop ? 'row-reverse' : '']">
        <v-col class="pa-md-8" md="6" cols="12">
          <div
            data-aos="fade-right"
            data-aos-offset="-100"
            data-aos-delay="200"
            data-aos-duration="300"
          >
            <div class="video-wrap">
              <div v-if="loaded" class="video-carousel">
                <v-card class="item">
                  <img :src="imgAPI.education[14]" alt="cover">
                  <v-btn
                    icon
                    class="play-btn"
                    @click="handleVideoOpen"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>
                </v-card>
              </div>
            </div>
          </div>
        </v-col>
        <v-col class="pa-md-10 pa-4" md="6" cols="12">
          <div v-if="loaded" class="blog-list">
            <div v-for="(item, index) in blogData" :key="index">
              <div
                data-aos="fade-left"
                data-aos-offset="-200"
                data-aos-delay="(index * 200)"
                data-aos-duration="600"
              >
                <blog-card
                  :category="item.category"
                  :title="item.title"
                  :date="item.date"
                />
              </div>
            </div>
            <v-btn class="more" :href="link.education.blog" variant="text" color="secondary">
              more
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './blog-style.scss';
</style>

<script>
import AOS from 'aos';
import link from '@/assets/text/link';
import imgAPI from '@/assets/images/imgAPI';
import youtube from '@/config/youtube';
import Title from '../../Title';
import BlogCard from '../../Cards/BlogCard';
import Hidden from '../../Hidden';

const blogData = [
  {
    title: 'Vestibulum vitae tristique urna. Mauris non cursus quam',
    category: 'Science - Math',
    date: 'Feb 08 2021',
  },
  {
    title: 'Vestibulum vitae tristique urna. Mauris non cursus quam',
    category: 'Science - Math',
    date: 'Feb 08 2021',
  },
  {
    title: 'Vestibulum vitae tristique urna. Mauris non cursus quam',
    category: 'Science - Math',
    date: 'Feb 08 2021',
  },
];

export default {
  components: {
    'title-main': Title,
    Hidden,
    BlogCard,
  },
  data() {
    return {
      link,
      dialog: false,
      imgAPI,
      yt: youtube,
      loaded: false,
      videoId: '6p0VM-yUpGk',
      blogData,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: 'http://localhost:8004',
      },
    };
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
    isDesktop() {
      const smUp = this.$vuetify.display.smAndUp;
      return smUp;
    },
    isMobile() {
      const xsDown = this.$vuetify.display.xsAndDown;
      return xsDown;
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
