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
useHead({
  script: [
    {
      id: 'form-script-tag-22331163',
      src: 'https://kursy.feelgut.pl/public/remote/page/369297059ebc0afbc813e9948c86aa96620cc176.js',
      async: true,
      defer: true
    }
  ]
})
useSmoothScroll();
</script>
