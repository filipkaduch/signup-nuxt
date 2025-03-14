<template>
  <SignupForm :id="id" />
</template>

<script setup lang="ts">
const id: string = 'signup';

const { t } = useI18n();

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/success',
  },
  layout: 'guest',
});

useHead({
  title: t('signup.meta.title'),
});
</script>
