<template>
  <div class="root">
    <v-container class="fixed-width">
      <v-row>
        <v-col md="6" cols="12" class="illu-wrap">
          <div
            data-aos="fade-left"
            data-aos-offset="-100"
            data-aos-delay="200"
            data-aos-duration="600"
          >
            <div class="illustration">
              <img
                :src="imgAPI.education[38]"
                :data-2d="imgAPI.education[37]"
                :data-3d="imgAPI.education[38]"
                class="img-2d3d"
                alt="about"
              >
            </div>
          </div>
        </v-col>
        <v-col
          :class="isMobile ? 'text-center' : 'text-start'"
          md="6"
          cols="12"
        >
          <title-main
            :head="$t('education.about_title')"
            :desc="$t('education.about_desc')"
            :align="isMobile ? 'center' : 'left'"
            color="secondary"
          />
          <v-btn :href="link.education.login" class="btn" color="secondary">
            {{ $t('education.about_join') }}
          </v-btn>
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
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';
import Title from '../../Title';

export default {
  components: {
    'title-main': Title,
  },
  data: () => ({
    imgAPI,
    link,
  }),
  computed: {
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
};
</script>
