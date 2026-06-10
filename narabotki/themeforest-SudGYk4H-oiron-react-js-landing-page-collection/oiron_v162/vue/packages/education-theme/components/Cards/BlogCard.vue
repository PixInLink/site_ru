<template>
  <div class="blog-card">
    <div class="text">
      <v-btn variant="text" href="#">
        {{ category }}
      </v-btn>
      <h4>
        <v-btn variant="text" href="#">
          {{ title }}
        </v-btn>
      </h4>
    </div>
    <div class="date">
      <h3>{{ month }}</h3>
      <h2>{{ day }}</h2>
      <h4>{{ year }}</h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './blog-card.scss';
</style>

<script>
const month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export default {
  props: {
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dateRaw: new Date(this.date),
    };
  },
  computed: {
    month() {
      return month[this.dateRaw.getMonth()];
    },
    day() {
      return this.dateRaw.getDate() < 10
        ? '0' + this.dateRaw.getDate()
        : this.dateRaw.getDate();
    },
    year() {
      return this.dateRaw.getFullYear();
    },
  },
};
</script>
