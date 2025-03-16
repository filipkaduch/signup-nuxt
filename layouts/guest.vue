<template>
  <MainDefaultLayout :page-title="pageTitle">
    <slot />
  </MainDefaultLayout>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const pageTitle = computed<string>(() => useRoute().meta.title as string);

useHead({
  htmlAttrs: {
    lang: locale,
  },
});

const authSession = useCookie('session');

if (authSession.value) {
  navigateTo('/success');
}
</script>
