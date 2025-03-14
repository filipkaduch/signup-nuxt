<template>
  <main class="h-screen w-screen">
    <div class="max-w-screen grid h-screen grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_auto]">
      <div class="min-w-14">
        <slot name="nav-bar" />
      </div>
      <div class="relative overflow-y-auto pl-4 pt-4">
        <slot name="content" />
      </div>
      <div class="hidden sm:block sm:min-w-1.5">
        <slot name="side-bar" />
      </div>
    </div>
  </main>
</template>
