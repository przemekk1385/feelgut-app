<template>
  <div class="w-full">
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
        <div>
          <div>
            <div
              class="text-5xl font-bold text-como opacity-30 md:text-6xl lg:text-7xl xl:text-8xl"
            >
              Usługi
            </div>
            <div
              class="relative mt-6 h-[2px] w-full bg-gradient-to-r from-supernova via-sahara to-mimosa md:left-6 md:w-[15rem] lg:left-9 lg:w-[22rem] xl:left-12 xl:w-[29rem]"
            ></div>
          </div>
        </div>
        <ul class="flex items-center gap-x-12">
          <li>
            <a
              href="#"
              class="font-lato text-lg text-como sm:text-xl lg:text-2xl"
            >
              Masaże relaksacyjne
            </a>
          </li>
          <li>
            <a
              href="#"
              class="font-lato text-lg text-martini sm:text-xl lg:text-2xl"
            >
              Masaże terapeutyczne
            </a>
          </li>
        </ul>
      </div>

      <div
        class="grid grid-cols-1 gap-12 pt-12 sm:grid-cols-2 lg:pb-24 xl:grid-cols-3"
      >
        <div v-for="{ name, image } in offer" :key="name">
          <div
            class="relative aspect-[3/2] overflow-hidden rounded-[10%/15%] drop-shadow-[5px_5px_10px_rgba(0,0,0,.25)]"
          >
            <img
              :src="image || defaultImage"
              :alt="`${name} - grafika ilustracyjna`"
              class="h-full w-full object-cover"
            />
            <div class="absolute top-0 right-0 h-full p-4">
              <img
                src="/images/spine.svg"
                alt="Kręgosług - grafika ilustracyjna"
                class="h-full"
              />
            </div>
          </div>
          <div
            class="flex items-center justify-between gap-x-4 px-6 pt-6 font-lato"
          >
            <div class="text-center">{{ name }}</div>
            <div>
              <a
                href=""
                class="inline-block rounded-full bg-silver-tree px-6 py-1 font-medium uppercase text-white"
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
const defaultImage = "/images/offer-card.jpg";
const offer = ref([
  {
    name: "Masaż całego ciała",
    image: "/images/masaz-calego-ciala.jpg",
  },
  {
    name: "Masaż częściowy",
    image: "/images/masaz-czesciowy.jpg",
  },
  {
    name: "Masaż balijski",
    image: "/images/masaz-balijski.jpg",
  },
  {
    name: "Masaż gorącymi kamieniami",
  },
  {
    name: "Japoński liftingujący masaż twarzy KOBIDO",
    image: "/images/japonski-liftingujacy-masaz-twarzy-kobido.jpg",
  },
  {
    name: "Hawajski masaż Lomi Lomi",
    image: "/images/hawajski-masaz-lomi-lomi.jpg",
  },
  {
    name: "Ajurwedyjski masaż Abhyanga",
    image: "/images/ajuwerdyjski-masaz-abhyanga.jpg",
  },
  {
    name: "Hinduski masaż głowy",
    image: "/images/hinduski-masaz-glowy.jpg",
  },
  {
    name: "Masaż świecą",
  },
]);
</script>
