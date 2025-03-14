<template>
  <main>
    <DeprecatedBaseNavBar />

    <slot />
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale,
  },
});
</script>
