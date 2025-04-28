<template>
  <div>
    <v-nav />
    <main>
      <v-for-companies />
    </main>
    <v-footer />
  </div>
</template>

<script setup lang="ts">
const { titleTemplate } = useTitle();

useHead({
	meta: [
		{
			name: "description",
			content:
				"Masaż biurowy w Twojej firmie! Wybierz najkorzystniejszą formę profilaktyki prozdrowotnej w miejscu pracy. Wystarczy 15-minutowy masaż na specjalnym krześle aby poprawić stan zdrowia, efektywność i samopoczucie pracowników.",
		},
		{
			name: "title",
			content: "Masaż biurowy | FeelGUT | Najlepszy benefit pracowniczy",
		},
	],
	titleTemplate: titleTemplate("Cennik"),
});
</script>
