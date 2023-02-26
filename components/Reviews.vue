<template>
  <div class="bg-platinium px-1/10 pt-12 pb-16">
    <div class="flex justify-center">
      <div class="inline-block">
        <span class="text-8xl font-bold text-white"> Opinie klientów </span>
        <div class="relative left-[5%] mx-auto mt-4 h-1 w-[65%]">
          <div
            class="h-1 bg-gradient-to-r from-supernova via-sahara to-mimosa"
          ></div>
        </div>
      </div>
    </div>
    <div>
      <div class="mt-12 grid grid-cols-2 gap-16">
        <div
          v-for="{ author, stars, text } in reviews"
          :key="text"
          class="flex aspect-[5/2] flex-col justify-around rounded-[8%/20%] bg-ceramic px-8 pt-4 pb-8 drop-shadow-[5px_5px_10px_rgba(0,0,0,.25)]"
        >
          <div class="flex justify-center">
            <img
              v-for="_ in stars"
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
