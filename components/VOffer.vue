<template>
  <div>
    <v-offer-bar bg-color="platinium">
      Jak poprawnie przygotować się do masażu?
      <template #button>
        <v-offer-bar-button bg-color="platinium" to="#">
          Zobacz
        </v-offer-bar-button>
      </template>
    </v-offer-bar>

    <div class="mx-auto my-12 max-w-[90rem] px-6 md:px-20 lg:px-28 xl:px-36">
      <div class="flex flex-col justify-between gap-6 md:flex-row">
        <v-h>
          <span class="text-como opacity-30">Usługi</span>
          <template #under>
            <v-h-line class="relative md:left-6 lg:left-9 xl:left-12" />
          </template>
        </v-h>
        <ul class="flex items-center gap-x-12">
          <li>
            <v-offer-link active to="/?category=relaksacyjne">
              Masaże relaksacyjne
            </v-offer-link>
          </li>
          <li>
            <v-offer-link to="/?category=terapeutyczne">
              Masaże terapeutyczne
            </v-offer-link>
          </li>
        </ul>
      </div>

      <div
        class="grid grid-cols-1 gap-12 pt-12 sm:grid-cols-2 lg:pb-24 xl:grid-cols-3"
      >
        <div v-for="{ title, image } in items" :key="title">
          <v-img :src="image" :alt="`${title} - grafika ilustracyjna`">
            <img
              src="/images/spine.svg"
              alt="Grafika ilustracyjna"
              class="h-full"
            />
          </v-img>
          <div
            class="flex items-center justify-between gap-x-4 px-6 pt-6 font-lato"
          >
            <div class="text-center">{{ title }}</div>
            <div>
              <a
                href=""
                class="inline-block rounded-full bg-[#55B99A] px-6 py-1 font-medium uppercase text-white"
              >
                Sprawdź
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <v-offer-bar bg-color="como" text-color="white">
      Sprawdź cennik masaży
      <template #button>
        <v-offer-bar-button bg-color="como" text-color="white" to="#">
          Kliknij tutaj
        </v-offer-bar-button>
      </template>
    </v-offer-bar>
  </div>
</template>

<script setup lang="ts">
import type { Massage } from "~~/types";

const route = useRoute();
const items: Ref<Massage[]> = ref([]);

const fetch = async (category: string): Promise<void> => {
  items.value = (await queryContent("offer")
    .where({ category })
    .find()) as unknown as Massage[];
};
fetch("relaksacyjne");

watch(
  () => route.query,
  async (query) => {
    const { category } = query;
    if (category) {
      fetch(category.toString());
    }
  }
);
</script>
