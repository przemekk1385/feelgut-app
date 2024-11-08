import { NuxtPage } from './.nuxt/components';

<template>
  <div class="mx-auto min-w-[23rem] max-w-[90rem] font-playfair-display">
    <NuxtLayout>
      <div>
        <NuxtLoadingIndicator color="#FCCB00" :height="8" />
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useSmoothScroll();
</script>
