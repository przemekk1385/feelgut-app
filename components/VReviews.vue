<template>
  <div class="bg-platinium pt-12 pb-16">
    <div class="mx-auto px-6 md:px-20 lg:px-28 xl:px-36">
      <v-h>
        <h2 class="text-center text-white">Opinie klientów</h2>
        <template #under>
          <v-h-line class="relative mx-auto md:left-4 lg:left-9 xl:left-12" />
        </template>
      </v-h>
      <div>
        <div class="mt-12 grid grid-cols-1 gap-16 sm:grid-cols-2">
          <div
            v-for="{ author, text } in reviews"
            :key="text"
            class="mx-auto flex max-w-md flex-col justify-around rounded-3xl bg-[#FFFCFC] p-6 drop-shadow-[5px_5px_10px_rgba(0,0,0,.25)] md:max-w-full lg:rounded-[3rem] lg:p-12"
          >
            <span class="font-lato md:text-lg lg:text-xl xl:text-2xl"
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
