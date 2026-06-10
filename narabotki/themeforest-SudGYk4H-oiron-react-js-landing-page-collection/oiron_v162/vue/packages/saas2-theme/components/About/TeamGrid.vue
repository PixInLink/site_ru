<template>
  <v-row justify="center">
    <v-col
      v-for="index in 9"
      :key="index"
      md="4"
      sm="6"
      cols="12"
      class="pa-5"
    >
      <div
        data-aos="fade-up"
        data-aos-offset="-40"
        :data-aos-delay="200 + (100 * index)"
        data-aos-duration="500"
      >
        <div class="team-item">
          <profile-card
            :connection="100"
            :favorites="10"
            :albums="12"
            :cover="imgAPI.photo[40+index]"
            :avatar="imgAPI.avatar[index]"
            name="John Dalton"
            title="Web Designer"
            type="oval"
            orientation="portrait"
          />
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
@import './about-style.scss';
</style>

<script>
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';
import ProfileCard from '../Cards/ProfileCard';

export default {
  components: {
    ProfileCard,
  },
  data() {
    return {
      imgAPI,
    };
  },
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
