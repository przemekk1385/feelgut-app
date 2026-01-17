<template>
  <div class="font-playfair-display mx-auto max-w-360 min-w-92">
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
