<template>
  <div>
    <v-nav />
    <main>
      <v-trainings />
    </main>
    <v-footer />
  </div>
</template>

<script setup lang="ts">
const { titleTemplate } = useTitle();

useHead({
	titleTemplate: titleTemplate("Cennik"),
});
</script>
