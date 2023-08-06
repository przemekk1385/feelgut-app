<template>
  <div
    id="cennik"
    class="mx-auto max-w-[90rem] px-6 py-24 md:px-20 lg:px-28 xl:px-36"
  >
    <v-h>
      <span class="text-como opacity-30"> Cennik </span>
      <template #under>
        <v-h-line class="relative md:left-6 lg:left-9 xl:left-12" />
      </template>
    </v-h>
    <div class="mt-12 pl-0 lg:pl-16">
      <v-accordion
        v-for="(
          { id, title, price, image, text, indications, contraindications }, i
        ) in items"
        :id="id"
        :key="title"
        v-model="items[i].isExpanded"
        :dark="i % 2 === 1"
        :image="image"
        :title="title"
        :price="price"
      >
        {{ text }}
        <template #indications>
          <ul class="list-disc pl-6">
            <li v-for="item in indications" :key="item">{{ item }}</li>
          </ul>
        </template>
        <template #contraindications>
          <ul class="list-disc pl-6">
            <li v-for="item in contraindications" :key="item">{{ item }}</li>
          </ul>
        </template>
      </v-accordion>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { OfferItem } from "~~/types";

const route = useRoute();
const { fetch } = useOffer();

const items: Ref<({ isExpanded: boolean } & OfferItem)[]> = ref([]);
items.value = (await fetch()).map((item) => ({ isExpanded: false, ...item }));

watch(
  () => route.hash,
  (hash) => {
    const i = items.value.findIndex(({ id }) => `#${id}` === hash);
    if (i != -1) {
      items.value[i].isExpanded = true;
    }
  },
);
</script>
