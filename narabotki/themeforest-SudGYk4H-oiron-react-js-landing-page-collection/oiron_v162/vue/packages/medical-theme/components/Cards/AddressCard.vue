<template>
  <v-card class="address-card">
    <div class="paper">
      <figure>
        <img :src="img" alt="clinic">
      </figure>
      <div class="detail-info">
        <h6 class="use-text-subtitle2 mb-6">
          {{ name }}
        </h6>
        <v-row>
          <v-col cols="12" lg="6" class="px-2 py-sm-1 py-0">
            <v-icon class="icon primary--text">
              mdi-phone
            </v-icon>
            {{ phone }}
          </v-col>
          <v-col cols="12" lg="6" class="px-2 py-1">
            <hidden point="xsDown">
              <v-icon class="icon secondary--text">
                mdi-email
              </v-icon>
              {{ email }}
            </hidden>
          </v-col>
          <v-col cols="12" md="12" class="px-2 py-1">
            <div class="text-truncate">
              <v-icon class="icon accent--text">
                mdi-map-marker
              </v-icon>
              {{ address }}
            </div>
          </v-col>
        </v-row>
        <hidden point="xsDown">
          <v-btn
            :href="link"
            :elevation="0"
            variant="outlined"
            color="secondary"
            block
            size="small"
            class="btn"
          >
            Contact
          </v-btn>
        </hidden>
      </div>
      <a v-ripple :href="link" class="mobile-link" />
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import './address-card.scss';
</style>

<script>
import Hidden from '../Hidden';

export default {
  components: {
    Hidden,
  },
  props: {
    img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: '#',
    },
  },
};
</script>
