<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <v-container class="mt-10 mt-sm-0">
        <v-row>
          <v-col cols="12">
            <headline />
          </v-col>
        </v-row>
        <v-row class="mt-8">
          <v-col md="6" cols="12" class="px-3">
            <post-card
              :href="link.saas.blogDetail"
              :img="imgAPI.photo[37]"
              title="Maecenas rutrum dolor sed nisi"
              desc="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
              date="12 Nov 2020"
              orientation="landscape"
              type="oval"
            />
          </v-col>
          <v-col md="6" cols="12" class="px-4">
            <post-card
              :href="link.saas.blogDetail"
              :img="imgAPI.photo[36]"
              title="Maecenas rutrum dolor sed nisi"
              desc="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
              date="12 Nov 2020"
              orientation="landscape"
              type="oval"
            />
          </v-col>
        </v-row>
        <v-row class="mt-6">
          <v-col md="8">
            <div
              v-for="index in 6"
              :key="index"
              :class="{ 'mt-15': index > 1 }"
            >
              <post-card
                :href="link.saas.blogDetail"
                :img="imgAPI.photo[30+index]"
                title="Maecenas rutrum dolor sed nisi"
                desc="Maecenas rutrum dolor sed nisi maximus rhoncus. Nunc vel dignissim enim. Proin pretium arcu eget"
                date="12 Nov 2020"
                orientation="portrait"
                type="oval"
              />
            </div>
            <div class="arrow">
              <v-row justify="space-between" class="mt-5">
                <v-btn variant="text">
                  <v-icon class="use-rtl-flip">
                    mdi-arrow-left
                  </v-icon>
                  {{ $t('common.btn_prev') }}
                </v-btn>
                <v-btn variant="text">
                  {{ $t('common.btn_next') }}
                  <v-icon class="use-rtl-flip">
                    mdi-arrow-right
                  </v-icon>
                </v-btn>
              </v-row>
            </div>
          </v-col>
          <v-col md="4" cols="12">
            <sidebar />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div id="footer">
      <main-footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/pages';
</style>

<script>
import brand from '@/assets/text/brand';
import BlogHeader from '@/components/Header/BlogHeader';
import Headline from '@/components/Blog/Headline';
import PostCard from '@/components/Cards/PostCard';
import Sidebar from '@/components/Blog/Sidebar';
import Footer from '@/components/Footer';
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': BlogHeader,
    'main-footer': Footer,
    Headline,
    Sidebar,
    PostCard,
  },
  data() {
    return {
      imgAPI,
      link,
    };
  },
  head() {
    return {
      title: 'Blog Home | ' + brand.saas.desc,
    };
  },
});
</script>
