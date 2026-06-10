<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-wrap">
      <search v-model="keyword" />
      <div class="search-content">
        <v-container>
          <v-row align="start" justify="center">
            <v-col lg="9" md="8" cols="12">
              <div id="profile_portrait" class="space-top-short">
                <h4 class="use-text-subtitle mb-3">
                  Profile Cards Portrait
                </h4>
                <v-row>
                  <v-col v-for="index in 2" :key="index" sm="6" cols="12">
                    <profile-card
                      :connection="100"
                      :favorites="10"
                      :albums="12"
                      :cover="imgAPI.photo[41]"
                      :avatar="imgAPI.avatar[2]"
                      name="Jihan Doe"
                      title="Web Designer"
                      type="oval"
                      orientation="portrait"
                    />
                  </v-col>
                </v-row>
              </div>
              <div id="profile_l" class="space-top-short">
                <h4 class="use-text-subtitle mb-3">
                  Profile Cards Landscape
                </h4>
                <v-row>
                  <v-col md="12">
                    <template v-for="index in 3" :key="index">
                      <profile-card
                        :connection="100"
                        :favorites="10"
                        :albums="12"
                        :cover="imgAPI.photo[43]"
                        :avatar="imgAPI.avatar[5]"
                        name="John Dalton"
                        title="Web Designer"
                        type="oval"
                        orientation="landscape"
                      />
                      <br><br>
                    </template>
                  </v-col>
                </v-row>
              </div>
              <div id="product_p" class="space-top-short">
                <h4 class="use-text-subtitle mb-3">
                  Product Cards Portrait
                </h4>
                <v-row>
                  <v-col v-for="index in 3" :key="index" sm="4" cols="12">
                    <product-card
                      :rating="3"
                      :price="20"
                      :img="imgAPI.photo[29]"
                      title="Sed lacinia velit"
                      desc="Proin pretium arcu eget metus porta consecteturc"
                      orientation="portrait"
                      type="oval"
                    />
                  </v-col>
                </v-row>
              </div>
              <div id="product_l" class="space-top-short">
                <h4 class="use-text-subtitle mb-3">
                  Product Cards Landscape
                </h4>
                <template v-for="index in 3" :key="index">
                  <product-card
                    :rating="3"
                    :price="20"
                    :img="imgAPI.photo[25]"
                    title="Sed lacinia velit"
                    desc="Proin pretium arcu eget metus porta consecteturc"
                    orientation="landscape"
                    type="oval"
                  />
                  <br><br>
                </template>
              </div>
              <div id="media_video" class="space-top-short">
                <h4 class="use-text-subtitle mb-3">
                  Video Cards
                </h4>
                <v-row>
                  <v-col v-for="index in 2" :key="index" sm="6" cols="12">
                    <media-card
                      :thumb="imgAPI.photo[9]"
                      title="Sed lacinia velit, ut malesuada eros interdum a"
                      orientation="portrait"
                      type="video"
                      href="#"
                    />
                  </v-col>
                </v-row>
              </div>
              <div id="media_photo" class="space-top-short">
                <h4 class="use-text-subtitle mb-3">
                  Image Cards
                </h4>
                <v-row>
                  <v-col v-for="index in 2" :key="index" sm="6" cols="12">
                    <media-card
                      :thumb="imgAPI.photo[10]"
                      title="Sed lacinia velit, ut malesuada eros interdum a"
                      orientation="portrait"
                      type="photo"
                      href="#"
                    />
                  </v-col>
                </v-row>
              </div>
              <div id="news_p" class="space-top-short">
                <h4 class="use-text-subtitle mb-3">
                  News Cards Portrait
                </h4>
                <v-row>
                  <v-col v-for="index in 3" :key="index" sm="4" cols="12">
                    <news-card
                      :img="imgAPI.photo[34]"
                      title="Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus."
                      headline="news"
                      orientation="portrait"
                      type="oval"
                      href="#"
                    />
                  </v-col>
                </v-row>
              </div>
              <div id="news_l" class="space-top-short">
                <h4 class="use-text-subtitle mb-3">
                  News Cards Landscape
                </h4>
                <v-row>
                  <v-col md="12">
                    <template v-for="index in 3" :key="index">
                      <news-card
                        :img="imgAPI.photo[37]"
                        title="Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus."
                        headline="news"
                        orientation="landscape"
                        type="oval"
                        href="#"
                      />
                      <br><br>
                    </template>
                  </v-col>
                </v-row>
              </div>
              <div id="post_p" class="space-top-short">
                <h4 class="use-text-subtitle mb-3">
                  Post Cards Portrait
                </h4>
                <v-row>
                  <v-col v-for="index in 3" :key="index" sm="4" cols="12">
                    <post-card
                      :img="imgAPI.photo[36]"
                      title="Maecenas rutrum dolor sed nisi"
                      desc="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                      date="12 Nov 2020"
                      orientation="portrait"
                      type="oval"
                      href="#"
                    />
                  </v-col>
                </v-row>
              </div>
              <div id="post_l" class="space-top-short">
                <h4 class="use-text-subtitle mb-3">
                  Post Cards Landscape
                </h4>
                <v-row>
                  <v-col md="12">
                    <template v-for="index in 3" :key="index">
                      <div class="mb-8">
                        <post-card
                          :img="imgAPI.photo[32]"
                          title="Maecenas rutrum dolor sed nisi"
                          desc="Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant. Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                          date="12 Nov 2020"
                          orientation="landscape"
                          type="oval"
                          href="#"
                        />
                      </div>
                    </template>
                  </v-col>
                </v-row>
              </div>
            </v-col>
            <v-col lg="3" md="4" cols="12">
              <sidebar />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <main-footer />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

<script>
import brand from '@/assets/text/brand';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Search from '@/components/Filter/Search';
import PostCard from '@/components/Cards/PostCard';
import NewsCard from '@/components/Cards/NewsCard';
import MediaCard from '@/components/Cards/MediaCard';
import ProductCard from '@/components/Cards/ProductCard';
import ProfileCard from '@/components/Cards/ProfileCard';
import Sidebar from '@/components/List/Sidebar';
import imgAPI from '@/assets/images/imgAPI';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  data() {
    return {
      imgAPI,
      keyword: '',
    };
  },
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Search,
    PostCard,
    NewsCard,
    MediaCard,
    ProductCard,
    ProfileCard,
    Sidebar,
  },
  head() {
    return {
      title: brand.saas.name + ' - Card Collection',
    };
  },
});
</script>
