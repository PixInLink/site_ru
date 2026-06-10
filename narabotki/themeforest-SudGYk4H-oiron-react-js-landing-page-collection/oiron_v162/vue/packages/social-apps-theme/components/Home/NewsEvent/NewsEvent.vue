<template>
  <div class="root">
    <div class="blog-wrap">
      <v-container>
        <title-main align="center">
          {{ $t('social.news_title') }}
        </title-main>
        <p class="text-center use-text-subtitle2">
          {{ $t('social.news_desc') }}
        </p>
        <v-row class="spacing6 list-news">
          <v-col md="5" cols="12" class="pa-6 pa-sm-10">
            <news-card
              :img="imgAPI.photo[20]"
              title="Sed imperdiet enim ligula, vitae viverra justo."
              headline="headline"
              orientation="portrait"
              type="over"
              href="#"
            />
          </v-col>
          <v-col md="7" cols="12" class="pa-6 pa-sm-10">
            <div class="mb-6">
              <news-card
                :img="imgAPI.photo[19]"
                :orientation="isMobile ? 'portrait' : 'landscape'"
                title="Vestibulum dignissim orci vitae eros rutrum euismod."
                headline="news"
                type="over"
                href="#"
              />
            </div>
            <div class="mb-6" :class="{'mt-15': isMobile}">
              <news-card
                :img="imgAPI.photo[16]"
                :orientation="isMobile ? 'portrait' : 'landscape'"
                title="Cras convallis lacus orci, tristique tincidunt magna consequat in."
                headline="news"
                type="over"
                href="#"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './news-event-style.scss';
</style>

<script>
import imgAPI from '@/assets/images/imgAPI';
import NewsCard from '../../Cards/NewsCard';
import Title from '../../Title';

export default {
  components: {
    NewsCard,
    'title-main': Title,
  },
  data: () => ({
    imgAPI,
  }),
  computed: {
    isMobile() {
      const xsDown = this.$vuetify.display.xs;
      return xsDown;
    },
  },
};
</script>
