<template>
  <div>
    <div class="grid grid-cols-2 items-center py-16 px-1/10">
      <div class="inline-block">
        <span class="text-8xl font-bold text-como opacity-30">
          Usługi
        </span>
        <div
          class="relative left-[10%] mt-4 h-1 w-[80%] bg-gradient-to-r from-supernova via-sahara to-mimosa"
        ></div>
      </div>
      <ul class="flex justify-between">
        <li>
          <a href="#" class="font-lato text-2xl text-como">
            Masaże relaksacyjne
          </a>
        </li>
        <li>
          <a href="#" class="font-lato text-2xl text-martini">
            Masaże terapeutyczne
          </a>
        </li>
      </ul>
      <div class="col-span-2 grid grid-cols-3 gap-24 pt-12 pb-24">
        <div
          v-for="text in offer" :key="text" class="aspect-[3/2] w-full relative rounded-[10%/15%] bg-offer-card bg-cover drop-shadow-[5px_5px_10px_rgba(0,0,0,.25)]"
        >
          <div class="pr-[10%] h-full flex items-center justify-center">
            <div class="text-center">
              <span class="font-lato text-2xl font-medium text-martini" v-html="text">
              </span>
            </div>
          </div>
          <div class="absolute right-[5%]  top-0 h-full py-2">
            <img src="/images/spine.svg" alt="Spine" class="h-full" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-around bg-como px-1/10 pt-16 pb-24">
      <div class="ml-16">
        <span class="text-3xl font-medium text-white">
          Poznaj szczegóły każdego<br />z masaży i sprawdź cennik
        </span>
      </div>
      <div class="mr-32">
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
  ])


</script>
