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

useHead({
	meta: [
		{
			name: "description",
			content:
				"Sprawdź cennik masaży. Wybierz odpowiedni masaż dla siebie &#11106; relaksacyjny, leczniczy lub kosmetyczny i umów się na wizytę. Zapraszam!",
		},
		{ name: "title", content: "Cennik | FeelGUT | Gabinet masażu Kraków" },
	],
	titleTemplate: titleTemplate("Cennik"),
});
</script>
