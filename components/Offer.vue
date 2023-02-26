<template>
  <div>
    <div class="py-16 px-6 lg:px-1/10">
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <div class="inline-block">
            <span class="text-6xl font-bold text-como opacity-30 md:text-8xl">
              Usługi
            </span>
            <div
              class="relative mt-4 h-1 w-full bg-gradient-to-r from-supernova via-sahara to-mimosa lg:left-[20%] lg:w-[160%]"
            ></div>
          </div>
        </div>
        <ul class="flex w-full items-center justify-around">
          <li class="px-4">
            <a href="#" class="font-lato text-2xl text-como">
              Masaże relaksacyjne
            </a>
          </li>
          <li class="px-4">
            <a href="#" class="font-lato text-2xl text-martini">
              Masaże terapeutyczne
            </a>
          </li>
        </ul>
      </div>
      <div
        class="grid grid-cols-1 gap-12 py-12 md:grid-cols-2 md:pb-24 lg:grid-cols-3 xl:gap-24"
      >
        <div
          v-for="text in offer"
          :key="text"
          class="relative aspect-[3/2] w-full rounded-[10%/15%] bg-offer-card bg-cover drop-shadow-[5px_5px_10px_rgba(0,0,0,.25)]"
        >
          <div class="flex h-full items-center justify-center pr-[10%]">
            <div class="text-center">
              <span
                class="font-lato text-3xl font-medium text-martini md:text-2xl"
                v-html="text"
              >
              </span>
            </div>
          </div>
          <div class="absolute right-[5%] top-0 h-full py-2">
            <img src="/images/spine.svg" alt="Spine" class="h-full" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col justify-around bg-como px-6 pt-16 pb-24 md:flex-row lg:px-1/10"
    >
      <div class="xl:ml-16">
        <span class="hidden text-3xl font-medium text-white md:inline">
          Poznaj szczegóły każdego<br />z&nbsp;masaży i&nbsp;sprawdź cennik
        </span>
        <span class="text-3xl font-medium text-white md:hidden">
          Poznaj szczegóły każdego z&nbsp;masaży i&nbsp;sprawdź cennik
        </span>
      </div>
      <div class="mt-12 md:mt-0 xl:mr-32">
        <a
          href="#"
          class="mx-auto inline-block rounded-full bg-gradient-to-r from-supernova via-sahara to-mimosa p-1 font-medium"
        >
          <div class="rounded-full bg-como px-16 py-6">
            <span class="text-3xl text-white"> Kliknij tutaj </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const offer = ref([
  "Masaż<br />całego<br />ciała",
  "Masaż<br />częściowy",
  "Masaż<br />balijski",
  "Masaż<br />gorącymi<br />kamieniami",
  "Japoński&nbsp;liftingujący<br />masaż&nbsp;twarzy<br />KOBIDO",
  "Hawajski&nbsp;masaż<br />Lomi&nbsp;Lomi",
  "Ajurwedyjski<br />masaż<br />Abhyanga",
  "Hinduski<br />masaż<br />głowy",
  "Masaż<br />świecą",
]);
</script>
