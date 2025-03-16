<template>
  <provet-card :id="`${id}-card`">
    <provet-stack align-items="center">
      <provet-spinner v-if=!email />
      <template v-else>
        <h2 :id="`${id}-title`">{{ $t('success.card.title', { email }) }}</h2>

        <span v-if="newsConsent" :id="`${id}-consent`">
          {{ $t('success.card.consent') }}
        </span>

        <provet-button
          expand
          @click="signout">
          {{ $t('success.card.signout') }}
        </provet-button>
      </template>
    </provet-stack>
  </provet-card>
</template>

<script setup lang="ts">
import type { SignupFields } from '~/types/signup';

defineProps({
  id: {
    type: String as PropType<string>,
    required: true,
  },
});

const newsConsent = ref<boolean>(false);

const email = ref<string>('');

const signout = async () => {
  useCookie('session').value = null;

  const { signoutCall } = useAuthentication();

  try {

    const response = await signoutCall();

    if (response.success) {
      navigateTo('/'); 
    }
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  const authSession = useCookie('session');

  if (authSession.value) {
    const authObject = (authSession.value as unknown as SignupFields);

    newsConsent.value = authObject.consent;

    email.value = authObject.email;
  }
});
</script>
