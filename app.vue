<template>
  <div class="font-playfair-display mx-auto max-w-[90rem] min-w-[23rem]">
    <NuxtLayout>
      <div>
        <NuxtLoadingIndicator color="#FCCB00" :height="8" />
        <NuxtPage :scrollToTop="false" />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useSmoothScroll();
</script>
