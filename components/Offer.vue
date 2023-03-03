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
              class="relative mt-4 h-[2px] w-full bg-gradient-to-r from-supernova via-sahara to-mimosa lg:left-[20%] lg:w-[160%]"
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
        class="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 lg:pb-24 xl:gap-16"
      >
        <div v-for="text in offer" :key="text" class="aspect-[3/2] p-4">
          <div
            class="flex h-full w-full items-center rounded-[10%/15%] bg-offer-card bg-cover p-2 drop-shadow-[5px_5px_10px_rgba(0,0,0,.25)]"
          >
            <div class="flex h-full grow items-center justify-center">
              <div class="text-center">
                <span
                  class="font-lato text-3xl font-medium text-martini md:text-xl xl:text-3xl"
                >
                  {{ text }}
                </span>
              </div>
            </div>
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
          class="mx-auto inline-block rounded-full bg-gradient-to-r from-supernova via-sahara to-mimosa p-[2px] font-medium"
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
  "Masaż całego ciała",
  "Masaż częściowy",
  "Masaż balijski",
  "Masaż gorącymi kamieniami",
  "Japoński liftingujący masaż twarzy KOBIDO",
  "Hawajski masaż Lomi Lomi",
  "Ajurwedyjski masaż Abhyanga",
  "Hinduski masaż głowy",
  "Masaż świecą",
]);
</script>
