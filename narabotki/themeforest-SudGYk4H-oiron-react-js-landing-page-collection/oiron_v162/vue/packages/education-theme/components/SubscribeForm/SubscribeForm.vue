<template>
  <div class="root">
    <v-container class="max-sm">
      <h3 class="use-text-title2 mb-4">
        {{ $t('common.blog_subscribe_desc') }}
      </h3>
      <p>Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. </p>
      <div class="form">
        <form>
          <v-text-field
            :placeholder="$t('common.form_email')"
            variant="solo"
            class="field"
            full-width
            hide-details
          />
          <v-btn
            color="primary"
            class="button"
          >
            <span>{{ $t('common.blog_subscribe') }}</span>
          </v-btn>
        </form>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './subscribe-style.scss';
</style>
