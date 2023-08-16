<template>
  <div>
    <v-header />
    <main>
      <v-about />
      <v-offer />
      <!-- <v-reviews /> -->
      <v-contact />
      <!-- <v-my-massage-room /> -->
      <v-map />
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
  titleTemplate: titleTemplate("Home"),
});
</script>
