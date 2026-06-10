<template>
  <AuthFrame
    :title="$t('common.register_subtitle')"
    :subtitle="$t('common.auth_desc')"
  >
    <div>
      <div class="head">
        <h3 :class="isMobile2 ? 'use-text-title use-text-primary' : 'use-text-subtitle'">
          {{ $t('common.login_create') }}
        </h3>
      </div>
      <social-auth />
      <div class="separator">
        <p>
          {{ $t('common.register_or') }}
        </p>
      </div>
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-row class="spacing3">
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field
              v-model="name"
              :label="$t('common.register_name')"
              :rules="requiredRules"
              color="secondary"
              variant="filled"
              name="name"
              required
            />
          </v-col>
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field
              v-model="email"
              :label="$t('common.register_email')"
              :rules="emailRules"
              color="secondary"
              variant="filled"
              name="email"
              required
            />
          </v-col>
          <v-col cols="12" md="6" class="px-3">
            <v-text-field
              v-model="password"
              :label="$t('common.register_password')"
              :rules="requiredRules"
              color="secondary"
              type="password"
              variant="filled"
              name="password"
              required
            />
          </v-col>
          <v-col cols="12" md="6" class="px-3">
            <v-text-field
              v-model="confirmPassword"
              :label="$t('common.register_confirm')"
              :rules="passwordRules"
              color="secondary"
              type="password"
              variant="filled"
              name="confirm"
              required
            />
          </v-col>
        </v-row>
        <div class="btn-area flex">
          <div class="form-helper pb-5">
            <div class="form-control-label">
              <v-checkbox
                v-model="checkbox"
                :label="$t('common.form_terms')"
                :rules="requiredRules"
                color="secondary"
                required
                hide-details
                class="ms-n2"
              />
              <span>
                <a href="#" class="link">
                  {{ $t('common.form_privacy') }}
                </a>
              </span>
            </div>
          </div>
          <v-btn
            :block="isTablet || isMobile"
            size="large"
            color="primary"
            @click="handleSubmit"
          >
            {{ $t('common.continue') }}
          </v-btn>
        </div>
      </v-form>
    </div>
  </AuthFrame>
</template>

<style lang="scss" scoped>
@import './form-style';
</style>

<script>
import SocialAuth from './SocialAuth';
import AuthFrame from './AuthFrame';

export default {
  components: {
    SocialAuth,
    AuthFrame,
  },
  data() {
    return {
      valid: true,
      email: '',
      name: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      confirmPassword: '',
      requiredRules: [v => !!v || 'This field is required'],
      passwordRules: [
        v => !!v || 'This field is required',
        v => v === this.password || 'Passwords do not match',
      ],
      checkbox: false,
    };
  },
  computed: {
    isTablet() {
      const mdDown = this.$vuetify.display.mdAndDown;
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdDown && mdUp;
    },
    isMobile() {
      const xsDown = this.$vuetify.display.xs;
      return xsDown;
    },
    isMobile2() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
  },
  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        console.log('data submited');
      }
    },
  },
};
</script>
