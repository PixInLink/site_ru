<template>
  <div class="counter-wrap">
    <v-row
      justify="center"
      align="center"
    >
      <v-col md="4">
        <div class="counter-item">
          <div class="text">
            <h3 class="use-text-title primary-line">
              +200
            </h3>
            <p class="use-text-subtitle">
              {{ $t('marketing.about_employee') }}
            </p>
          </div>
        </div>
      </v-col>
      <v-col md="4">
        <div class="counter-item">
          <div class="text">
            <h3 class="use-text-title secondary-line">
              +500
            </h3>
            <p class="use-text-subtitle">
              {{ $t('marketing.about_projects') }}
            </p>
          </div>
        </div>
      </v-col>
      <v-col md="4">
        <div class="counter-item">
          <div class="text">
            <h3 class="use-text-title accent-line">
              +300
            </h3>
            <p class="use-text-subtitle">
              {{ $t('marketing.about_client') }}
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
@import './counter-style.scss';
</style>
