<template>
  <div class="root">
    <v-container>
      <title-main align="center">
        {{ $t('social.community_title') }}
      </title-main>
      <div>
        <v-row class="icon-group">
          <v-col md="4" cols="12" class="pt-md-15 mt-md-10">
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="300"
              data-aos-duration="300"
            >
              <big-icon
                :icon="commData[0].icon"
                :name="commData[0].name"
                :count="commData[0].count"
                :color1="commData[0].color1"
                :color2="commData[0].color2"
                :members="commData[0].members"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="300"
              data-aos-duration="300"
            >
              <big-icon
                :icon="commData[1].icon"
                :name="commData[1].name"
                :count="commData[1].count"
                :color1="commData[1].color1"
                :color2="commData[1].color2"
                :members="commData[1].members"
              />
            </div>
          </v-col>
          <v-col md="4" cols="12" class="text-center">
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="300"
              data-aos-duration="300"
            >
              <big-icon
                :icon="commData[2].icon"
                :name="commData[2].name"
                :count="commData[2].count"
                :color1="commData[2].color1"
                :color2="commData[2].color2"
                :members="commData[2].members"
              />
            </div>
            <div
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-delay="300"
              data-aos-duration="300"
            >
              <v-btn v-if="!isMobile" color="primary" class="btn-explore">
                Explore All Communities
              </v-btn>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="300"
              data-aos-duration="300"
            >
              <big-icon
                :icon="commData[3].icon"
                :name="commData[3].name"
                :count="commData[3].count"
                :color1="commData[3].color1"
                :color2="commData[3].color2"
                :members="commData[3].members"
              />
            </div>
          </v-col>
          <v-col md="4" cols="12" class="pt-md-15 mt-md-10">
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="300"
              data-aos-duration="300"
            >
              <big-icon
                :icon="commData[4].icon"
                :name="commData[4].name"
                :count="commData[4].count"
                :color1="commData[4].color1"
                :color2="commData[4].color2"
                :members="commData[4].members"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="300"
              data-aos-duration="300"
            >
              <big-icon
                :icon="commData[5].icon"
                :name="commData[5].name"
                :count="commData[5].count"
                :color1="commData[5].color1"
                :color2="commData[5].color2"
                :members="commData[5].members"
              />
            </div>
          </v-col>
          <v-col v-if="isMobile" cols="12" class="justify-center">
            <v-btn color="primary" class="btn-explore">
              Explore All Communities
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './communities-style.scss';
</style>

<script>
import AOS from 'aos';
import Title from '../../Title';
import BigIcon from './BigIcon';

const commData = [
  {
    icon: 'ion-ios-football',
    name: 'Sport & Soccer',
    count: 100,
    color1: '#CBE9C4',
    color2: '#1D9AEB',
    members: [
      'https://randomuser.me/api/portraits/women/0.jpg',
      'https://randomuser.me/api/portraits/women/8.jpg',
      'https://randomuser.me/api/portraits/men/40.jpg',
      'https://randomuser.me/api/portraits/men/83.jpg',
    ],
  },
  {
    icon: 'ion-ios-compass',
    name: 'Adventures',
    count: 100,
    color1: '#D6EC2F',
    color2: '#EB6F1D',
    members: [
      'https://randomuser.me/api/portraits/women/0.jpg',
      'https://randomuser.me/api/portraits/women/8.jpg',
      'https://randomuser.me/api/portraits/men/40.jpg',
      'https://randomuser.me/api/portraits/men/83.jpg',
    ],
  },
  {
    icon: 'ion-ios-speedometer',
    name: 'Moto Racing',
    count: 100,
    color1: '#1DEBE4',
    color2: '#2F84EC',
    members: [
      'https://randomuser.me/api/portraits/women/0.jpg',
      'https://randomuser.me/api/portraits/women/8.jpg',
      'https://randomuser.me/api/portraits/men/40.jpg',
      'https://randomuser.me/api/portraits/men/83.jpg',
    ],
  },
  {
    icon: 'ion-ios-musical-notes',
    name: 'Music',
    count: 100,
    color1: '#FF0000',
    color2: '#002BFF',
    members: [
      'https://randomuser.me/api/portraits/women/0.jpg',
      'https://randomuser.me/api/portraits/women/8.jpg',
      'https://randomuser.me/api/portraits/men/40.jpg',
      'https://randomuser.me/api/portraits/men/83.jpg',
    ],
  },
  {
    icon: 'ion-ios-paw',
    name: 'Animal Lovers',
    count: 100,
    color1: '#EB9D1D',
    color2: '#FF81B6',
    members: [
      'https://randomuser.me/api/portraits/women/0.jpg',
      'https://randomuser.me/api/portraits/women/8.jpg',
      'https://randomuser.me/api/portraits/men/40.jpg',
      'https://randomuser.me/api/portraits/men/83.jpg',
    ],
  },
  {
    icon: 'ion-ios-game-controller-b',
    name: 'Games',
    count: 100,
    color1: '#EB1DBE',
    color2: '#2F84EC',
    members: [
      'https://randomuser.me/api/portraits/women/0.jpg',
      'https://randomuser.me/api/portraits/women/8.jpg',
      'https://randomuser.me/api/portraits/men/40.jpg',
      'https://randomuser.me/api/portraits/men/83.jpg',
    ],
  },
];

export default {
  components: {
    'title-main': Title,
    BigIcon,
  },
  data() {
    return {
      commData,
    };
  },
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
