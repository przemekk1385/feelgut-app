<template>
  <div class="bg-platinium pt-12 pb-16">
    <div class="max-w-[90rem] px-6 md:px-20 lg:px-28 xl:px-36 mx-auto">
      <v-h>
          <div class="text-white text-center">Opinie klientów</div>
          <template #under>
            <div
              class="mx-auto relative mt-6 h-[2px] w-full bg-gradient-to-r from-supernova via-sahara to-mimosa md:left-4 md:w-[18rem] lg:left-9 lg:w-[22rem] xl:left-12 xl:w-[29rem]"
            ></div>
          </template>
      </v-h>
      <div>
        <div class="mt-12 grid grid-cols-1 gap-16 sm:grid-cols-2">
          <div
            v-for="{ author, text } in reviews"
            :key="text"
            class="flex flex-col justify-around rounded-[3rem] bg-ceramic p-12 drop-shadow-[5px_5px_10px_rgba(0,0,0,.25)]"
          >
            <span class="font-lato md:text-xl xl:text-2xl"
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
    text: "Masaż był super, polecam każdemu",
    author: "Paweł",
  },
  {
    text: "Masaż był super, polecam każdemu",
    author: "Paweł",
  },
]);
</script>
