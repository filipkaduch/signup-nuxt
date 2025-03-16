<template>
    <provet-layout>
    <provet-navigation slot="nav">
    </provet-navigation>
    <provet-header slot="header">
      <h1>{{ $t(pageTitle) }}</h1>
    </provet-header>
    <provet-stack gap="l">
      <slot />
    </provet-stack>
  </provet-layout>
</template>

<script setup lang="ts">
defineProps({
  pageTitle: {
    type: String as PropType<string>,
    required: true,
  },
});
</script>
