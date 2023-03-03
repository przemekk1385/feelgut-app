<template>
  <div class="bg-platinium px-6 pt-12 pb-16 lg:px-1/10">
    <div class="flex justify-center">
      <div class="inline-block">
        <span class="text-6xl font-bold text-white md:text-8xl">
          Opinie klientów
        </span>
        <div class="relative mx-auto mt-4 h-1 w-full lg:left-[5%] lg:w-[65%]">
          <div
            class="h-1 bg-gradient-to-r from-supernova via-sahara to-mimosa"
          ></div>
        </div>
      </div>
    </div>
    <div>
      <div class="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div
          v-for="{ author, stars, text } in reviews"
          :key="text"
          class="flex aspect-[5/2] flex-col justify-around rounded-3xl bg-ceramic px-8 pt-4 pb-8 drop-shadow-[5px_5px_10px_rgba(0,0,0,.25)] md:rounded-[8%/20%]"
        >
          <div class="flex justify-center">
            <img
              v-for="n in stars"
              :key="n"
              src="/images/star.svg"
              alt="Gwiazdka"
              class="mx-1"
            />
          </div>
          <div class="mt-8">
            <span class="font-lato text-2xl"
              ><span class="font-medium">{{ text }}</span
              ><br /><span class="font-light">- {{ author }}</span></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const reviews = ref([
  {
    stars: 5,
    text: "Masaż był super, polecam każdemu",
    author: "Paweł",
  },
  {
    stars: 4,
    text: "Masaż był super, polecam każdemu",
    author: "Paweł",
  },
]);
</script>
