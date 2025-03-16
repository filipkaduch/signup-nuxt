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
  title: 'signup.meta.title',
});

useHead({
  title: t('signup.meta.title'),
});
</script>
