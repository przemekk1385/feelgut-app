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
	meta: [
		{
			name: "description",
			content:
				"Chcesz zostać masażystą lub rozwinąć swój warsztat? Zapisz się na praktyczne kursy masażu - klasyczny, balijski, powięziowy i więcej.",
		},
		{
			name: "title",
			content: "Kursy masażu dla początkujących i profesjonalistów | Szkolenia praktyczne z masażu | FeelGUT",
		},
	],
	titleTemplate: titleTemplate("Szkolenia"),
});
</script>
