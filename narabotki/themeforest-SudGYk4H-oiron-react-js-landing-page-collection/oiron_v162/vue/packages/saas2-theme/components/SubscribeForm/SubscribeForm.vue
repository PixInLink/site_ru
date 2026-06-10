<template>
  <div class="root">
    <v-container class="max-sm">
      <p class="use-text-subtitle2">
        {{ $t('common.blog_subscribe_desc') }}
      </p>
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
