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
        :dark="i % 2 === 1"
        :image="image"
        :title="title"
        :price="price"
      >
        {{ text }}
        <template #indications>
          <ul class="list-disc pl-6">
            <li v-for="item in indications">{{ item }}</li>
          </ul>
        </template>
        <template #contraindications>
          <ul class="list-disc pl-6">
            <li v-for="item in contraindications">{{ item }}</li>
          </ul>
        </template>
      </v-accordion>
    </div>
  </div>
</template>

<script setup lang="ts">
const { items, fetch } = useOffer();
fetch();
</script>
