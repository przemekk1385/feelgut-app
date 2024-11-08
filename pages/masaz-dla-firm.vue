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

definePageMeta({
  documentDriven: false,
});
useHead({
  meta: [
    {
      name: "description",
      content:
        "Sprawdź cennik masaży. Wybierz odpowiedni masaż dla siebie &#11106; relaksacyjny, leczniczy lub kosmetyczny i umów się na wizytę. Zapraszam!",
    },
    { name: "title", content: "Cennik | Masażysta | Gabinet masażu Kraków" },
  ],
  titleTemplate: titleTemplate("Cennik"),
});
</script>
