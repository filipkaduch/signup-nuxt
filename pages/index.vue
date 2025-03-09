<template>
  <SignupForm :id="id" />
</template>

<script setup lang="ts">
const id: string = 'signup';

const { t } = useI18n();

useHead({
  title: t('signup.meta.title'),
});
</script>
