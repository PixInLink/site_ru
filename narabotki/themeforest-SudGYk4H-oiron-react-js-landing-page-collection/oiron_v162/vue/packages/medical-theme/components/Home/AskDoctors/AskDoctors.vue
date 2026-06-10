<template>
  <div class="root">
    <v-container>
      <div class="deco">
        <img
          :src="imgAPI.medical[17]"
          :data-3d="imgAPI.medical[16]"
          :data-2d="imgAPI.medical[17]"
          class="img-2d3d"
          alt="speciality 3d"
        >
      </div>
      <div>
        <v-row>
          <v-col cols="12" md="3" class="px-sm-6">
            <div
              data-aos-offset="-100"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="300"
            >
              <div class="side-filter">
                <h4 class="use-text-title">
                  {{ $t('medical.ask_doctors') }}
                </h4>
                <v-list class="nav" item-value="All">
                  <div>
                    <v-list-item
                      v-for="(item, index) in categories"
                      :key="index"
                      :class="{'v-list-item--active': item === value }"
                      class="filter"
                      @click="value = item"
                    >
                      <v-list-item-title>
                        {{ item }}
                      </v-list-item-title>
                    </v-list-item>
                  </div>
                </v-list>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="9" lg="8" class="px-6">
            <div class="massonry">
              <v-row>
                <v-col
                  v-for="(item, index) in doctorsData"
                  :key="index"
                  cols="12"
                  sm="6"
                  class="px-lg-8 px-3 py-3"
                >
                  <div
                    data-aos-delay="200 * index"
                    data-aos-duration="400"
                    data-aos="fade-up"
                  >
                    <div>
                      <profile-card
                        :avatar="item.avatar"
                        :name="item.name"
                        :title="item.title"
                        :rating="item.rating"
                        :exp="item.exp"
                      />
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './ask-doctors-style.scss';
</style>

<script>
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';
import ProfileCard from '../../Cards/ProfileCard2';

export default {
  components: {
    ProfileCard,
  },
  data() {
    return {
      item: 0,
      imgAPI,
      loaded: false,
      value: 'All',
      categories: [
        'All',
        'Orthopedic',
        'Nutritionist',
        'Pediatric',
        'Anaesthestic',
      ],
      doctorsData: [
        {
          avatar: imgAPI.medical[31],
          name: 'Jena Doe',
          title: 'Pediatric Surgeon',
          rating: 95,
          exp: 4,
        },
        {
          avatar: imgAPI.medical[32],
          name: 'John Doe',
          title: 'Pediatric Surgeon',
          rating: 95,
          exp: 4,
        },
        {
          avatar: imgAPI.medical[33],
          name: 'Jihan Doe',
          title: 'Pediatric Surgeon',
          rating: 95,
          exp: 4,
        },
        {
          avatar: imgAPI.medical[34],
          name: 'James Doe',
          title: 'Pediatric Surgeon',
          rating: 95,
          exp: 4,
        },
        {
          avatar: imgAPI.medical[35],
          name: 'Jim Doe',
          title: 'Pediatric Surgeon',
          rating: 95,
          exp: 4,
        },
        {
          avatar: imgAPI.medical[36],
          name: 'Jessy Doe',
          title: 'Pediatric Surgeon',
          rating: 95,
          exp: 4,
        },
      ],
    };
  },
  mounted() {
    this.loaded = true;
    AOS.init({
      once: true,
    });
  },
};
</script>
