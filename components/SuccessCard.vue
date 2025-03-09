<template>
  <provet-card :id="`${id}-card`">
    <provet-stack align-items="center">
      <h2 :id="`${id}-title`">{{ $t('success.card.title', { email }) }}</h2>

      <span v-if="newsConsent" :id="`${id}-consent`">
        {{ $t('success.card.consent') }}
      </span>
    </provet-stack>
  </provet-card>
</template>

<script setup lang="ts">
import useSignupFormStore from '~/stores/SignupFormStore';

defineProps({
  id: {
    type: String as PropType<string>,
    required: true,
  },
});

const signupFormStore = useSignupFormStore();

const { email, newsConsent } = storeToRefs(signupFormStore);
</script>
