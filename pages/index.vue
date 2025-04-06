<template>
  <div>
    <v-header />
    <main>
      <v-about />
      <v-offer />
      <!-- <v-reviews /> -->
      <v-contact />
      <!-- <v-my-massage-room /> -->
      <!-- <v-map /> -->
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
  meta: [
    { name: "title", content: "Masaż Kraków | FeelGUT | Gabinet masażu" },
    {
      name: "description",
      content:
        "Umów się na upragniony masaż! &#11088; FeelGUT to gabinet masażu z szeroką ofertą usług w samym centrum Krakowa. Poczuj się zdecydowanie lepiej!",
    },
  ],
  titleTemplate: titleTemplate("Home"),
});
</script>
