<template>
  <v-container>
    <h3 class="use-text-primary use-text-title text-center mb-4">
      Pricing and Plan
    </h3>
    <p class="use-text-subtitle2 text-center mb-4">
      Curabitur egestas consequat lorem, vel fermentum augue porta id.
    </p>
    <div class="pricing-wrap">
      <v-row align="center">
        <v-col
          v-for="(tier, index) in tiers"
          :key="index"
          md="3"
          sm="6"
          cols="12"
          class="px-2"
        >
          <pricing-card
            :title="tier.title"
            :subheader="tier.subheader"
            :price="tier.price"
            :description="tier.description"
            :button-text="tier.buttonText"
            :button-variant="tier.buttonVariant"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
@import './pricing-style';
</style>

<script>
import PricingCard from '../Cards/PricingCard';

export default {
  components: {
    PricingCard,
  },
  data() {
    return {
      tiers: [
        {
          title: 'Free',
          price: '0',
          description: ['10 users included', '2 GB of storage'],
          buttonText: 'pricing_free',
          buttonVariant: 'outlined',
        },
        {
          title: 'Personal',
          price: '5',
          description: [
            '15 users included',
            '10 GB of storage',
            'Help center access',
          ],
          buttonText: 'pricing_buy',
          buttonVariant: 'outlined',
        },
        {
          title: 'Pro',
          subheader: 'Most popular',
          price: '15',
          description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
          ],
          buttonText: 'pricing_buy',
          buttonVariant: 'contained',
        },
        {
          title: 'Enterprise',
          price: '30',
          description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support',
          ],
          buttonText: 'footer_contact',
          buttonVariant: 'outlined',
        },
      ],
    };
  },
};
</script>
