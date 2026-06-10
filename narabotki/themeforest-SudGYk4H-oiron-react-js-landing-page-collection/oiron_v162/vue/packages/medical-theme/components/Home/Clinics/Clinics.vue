<template>
  <div class="root">
    <v-container :class="{ 'fixed-width': mdUp }">
      <div class="pa-3">
        <h4 class="use-text-title text-capitalize">
          {{ $t('medical.clinic_title') }}
        </h4>
        <p class="use-text-subtitle2">
          Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed.
        </p>
      </div>
      <div>
        <v-row>
          <v-col
            v-for="(item, index) in clinicData"
            :key="index"
            cols="12"
            md="6"
            class="px-3"
          >
            <div
              data-aos="fade-up"
              data-aos-offset="-50"
              :data-aos-delay="200 * index"
              data-aos-duration="400"
            >
              <div>
                <AddressCard
                  :img="item.img"
                  :name="item.name"
                  :phone="item.phone"
                  :email="item.email"
                  :address="item.address"
                  :link="link.medical.contactMap"
                />
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './clinics-style.scss';
</style>

<script>
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';
import link from '@/assets/text/link';
import AddressCard from '../../Cards/AddressCard';

export default {
  components: {
    AddressCard,
  },
  data() {
    return {
      link,
      clinicData: [
        {
          img: imgAPI.medical[37],
          name: 'Central Clinic',
          phone: '+123 456 78 91',
          email: 'hello@awrora.com',
          address: 'Lorem ipsum street no.14 Block A',
        },
        {
          img: imgAPI.medical[38],
          name: 'Dental Clinic',
          phone: '+123 456 78 91',
          email: 'hello@awrora.com',
          address: 'Lorem ipsum street Block C - Vestibullum Building',
        },
        {
          img: imgAPI.medical[39],
          name: 'Mother and Baby Care',
          phone: '+123 456 78 91',
          email: 'hello@awrora.com',
          address: 'Lorem ipsum street no.14 Block A',
        },
        {
          img: imgAPI.medical[40],
          name: 'Orthopedic Clinic',
          phone: '+123 456 78 91',
          email: 'hello@awrora.com',
          address: 'Lorem ipsum street Block C - Vestibullum Building',
        },
        {
          img: imgAPI.medical[41],
          name: 'Mother and Baby Care',
          phone: '+123 456 78 91',
          email: 'hello@awrora.com',
          address: 'Lorem ipsum street no.14 Block A',
        },
        {
          img: imgAPI.medical[42],
          name: 'Orthopedic Clinic',
          phone: '+123 456 78 91',
          email: 'hello@awrora.com',
          address: 'Lorem ipsum street Block C - Vestibullum Building',
        },
      ],
    };
  },
  computed: {
    mdUp() {
      return this.$vuetify.display.lgAndUp;
    },
  },
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
