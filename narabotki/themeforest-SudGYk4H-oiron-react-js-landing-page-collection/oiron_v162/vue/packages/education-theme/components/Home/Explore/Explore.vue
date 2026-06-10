<template>
  <div class="root">
    <v-container>
      <div class="px-lg-6">
        <div class="px-8 px-lg-0">
          <title-main
            :head="$t('education.explore_title')"
            :desc="$t('education.explore_desc')"
            :align="isMobile ? 'center' : 'left'"
            color="primary"
          />
        </div>
        <div id="cat1" class="rack">
          <div class="category-title">
            <h3>
              <v-icon large>
                mdi-palette
              </v-icon> &nbsp;
              Lorem Ipsum
            </h3>
            <v-btn
              :href="link.education.product"
              color="primary"
              variant="text"
              class="view-all"
            >
              {{ $t('common.btn_seeall') }}
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </div>
          <div class="content">
            <book
              v-for="(item, index) in categoriesData"
              :key="index"
              :img="item.img"
              :title="item.title"
              :desc="item.desc"
              :rating="item.rating"
              :price="item.price"
              :href="link.education.productDetail"
              :color="item.color"
              :expand="index === bookOpen1"
              @click="handleExpand1(index)"
            />
          </div>
        </div>
        <div id="cat2" class="rack">
          <div class="category-title">
            <h3>
              <v-icon large>
                mdi-web
              </v-icon> &nbsp;
              Lorem Ipsum
            </h3>
            <v-btn
              :href="link.education.product"
              color="primary"
              variant="text"
              class="view-all"
            >
              {{ $t('common.btn_seeall') }}
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </div>
          <div class="content">
            <book
              v-for="(item, index) in categoriesData"
              :key="index"
              :img="item.img"
              :title="item.title"
              :desc="item.desc"
              :rating="item.rating"
              :price="item.price"
              :href="link.education.productDetail"
              :color="item.color"
              :expand="index === bookOpen2"
              @click="handleExpand2(index)"
            />
          </div>
        </div>
        <div id="cat3" class="rack mb-10">
          <div class="category-title">
            <h3>
              <v-icon large>
                mdi-medal
              </v-icon> &nbsp;
              Lorem Ipsum
            </h3>
            <v-btn
              :href="link.education.product"
              color="primary"
              variant="text"
              class="view-all"
            >
              {{ $t('common.btn_seeall') }}
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </div>
          <div class="content">
            <book
              v-for="(item, index) in categoriesData"
              :key="index"
              :img="item.img"
              :title="item.title"
              :desc="item.desc"
              :rating="item.rating"
              :price="item.price"
              :href="link.education.productDetail"
              :color="item.color"
              :expand="index === bookOpen3"
              @click="handleExpand3(index)"
            />
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './explore-style.scss';
</style>

<script>
import link from '@/assets/text/link';
import imgAPI from '@/assets/images/imgAPI';
import Book from '../Book';
import Title from '../../Title';
const courseData = [
  {
    img: imgAPI.education[7],
    title: 'Vivamus sit amet',
    color: '#f74e10',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
  {
    img: imgAPI.education[6],
    title: 'Vivamus sit amet',
    color: '#c7618c',
    rating: 4,
    price: 10,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
  {
    img: imgAPI.education[5],
    title: 'Vivamus sit amet',
    color: '#e59546',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
  {
    img: imgAPI.education[4],
    color: '#8f46e5',
    title: 'Vivamus sit amet',
    rating: 3,
    price: 25,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
  {
    img: imgAPI.education[3],
    color: '#ac8a55',
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
  {
    img: imgAPI.education[2],
    color: '#274be3',
    title: 'Vivamus sit amet',
    rating: 5,
    price: 40,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
  {
    img: imgAPI.education[0],
    color: '#6DB4A7',
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…',
  },
];

export default {
  components: {
    'title-main': Title,
    Book,
  },
  data() {
    return {
      link,
      bookOpen1: 3,
      bookOpen2: 2,
      bookOpen3: 6,
      imgAPI,
      categoriesData: courseData,
    };
  },
  computed: {
    isMobile() {
      const xsDown = this.$vuetify.display.xsAndDown;
      return xsDown;
    },
  },
  methods: {
    handleExpand1(idx) {
      this.bookOpen1 = idx;
    },
    handleExpand2(idx) {
      this.bookOpen2 = idx;
    },
    handleExpand3(idx) {
      this.bookOpen3 = idx;
    },
  },
};
</script>
