<template>
  <SuccessCard :id="id" />
</template>

<script setup lang="ts">
const id: string = 'success';

const { t } = useI18n();

useHead({
  title: t('success.meta.title'),
});

definePageMeta({
  title: 'success.meta.title',
  middleware: ['prevent'],
});
</script>
