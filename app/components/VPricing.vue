<template>
  <div id="cennik" class="mx-auto px-6 py-24 md:px-20 lg:px-28 xl:px-36">
    <v-h>
      <h2 class="text-como opacity-30">Cennik</h2>
      <template #under>
        <v-h-line class="relative md:left-6 lg:left-9 xl:left-12" />
      </template>
    </v-h>
    <div class="mt-12 pl-0 lg:pl-16">
      <v-accordion
        v-for="offer in offers"
        :id="offer.id"
        :key="offer.item.title"
        v-model="offer.isExpanded"
        :dark="offers.indexOf(offer) % 2 === 1"
        :image="offer.item.image"
        :title="offer.item.title"
        :rates="offer.item.rates"
      >
        {{ offer.item.text.replace("\\n", "") }}
        <template #indications>
          <ul class="list-disc pl-6">
            <li v-for="indication in offer.item.indications" :key="indication">
              {{ indication }}
            </li>
          </ul>
        </template>
        <template #contraindications>
          <ul class="list-disc pl-6">
            <li
              v-for="contraindication in offer.item.contraindications"
              :key="contraindication"
            >
              {{ contraindication }}
            </li>
          </ul>
        </template>
      </v-accordion>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { OfferCollectionItem } from "@nuxt/content";

const route = useRoute();
const { items } = useOffer();

const offers = ref<
	{ item: OfferCollectionItem; id: string; isExpanded: boolean }[]
>([]);

onMounted(() => {
	offers.value = items.value.map((item) => ({
		id: formatOfferItemId(item.id),
		isExpanded: false,
		item,
	}));

	setTimeout(() => {
		const i = offers.value.findIndex((offer) => `#${offer.id}` === route.hash);
		if (i !== -1 && offers.value[i]) {
			offers.value[i].isExpanded = true;
		}
	}, 500);
});
</script>
