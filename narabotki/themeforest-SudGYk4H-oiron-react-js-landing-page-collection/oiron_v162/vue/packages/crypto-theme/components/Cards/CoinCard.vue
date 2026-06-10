<template>
  <v-card class="coin">
    <div class="header">
      <v-avatar class="logo" height="70" width="70" min-width="70">
        <img :src="logo" :alt="name">
      </v-avatar>
      <div class="name">
        <h4>
          {{ name }}
          <span>USD</span>
        </h4>
        <p>
          <i class="ion-flame" />
          Top Volume
        </p>
      </div>
    </div>
    <div class="price">
      <h3 class="use-text-title2">
        $ {{ price }}
      </h3>
    </div>
    <div class="property">
      <v-row>
        <v-col xs="6" class="px-3 pb-3">
          <span v-if="status === 'down'" class="down">
            <i>▼</i>{{ percent }}%
          </span>
          <span v-if="status === 'up'" class="up">
            <i>▲</i>{{ percent }}%
          </span>
          <span v-if="status === 'stay'" class="stay">
            <i>-</i>{{ percent }}%
          </span>
          <p class="use-text-caption">
            24h Change
          </p>
        </v-col>
        <v-col xs="6" class="px-3 pb-3">
          {{ volume }}
          <p class="use-text-caption">
            24h Volume
          </p>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import './coin-card.scss';
</style>

<script>
export default {
  props: {
    logo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    volume: {
      type: Number,
      required: true,
    },
    percent: {
      type: Number,
      required: true,
    },
  },
};
</script>
