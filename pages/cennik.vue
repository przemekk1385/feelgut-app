<template>
  <div>
    <v-nav />
    <main>
      <v-commandments />
      <v-pricing />
    </main>
    <v-footer />
  </div>
</template>

<script setup lang="ts">
const { titleTemplate } = useTitle();

definePageMeta({
  documentDriven: false,
});
useHead({
  titleTemplate: titleTemplate("Cennik"),
});
</script>
