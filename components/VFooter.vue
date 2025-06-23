<template>
  <div class="bg-como py-12">
    <div class="mx-auto px-12 lg:px-28 xl:px-36">
      <div class="flex flex-col justify-center gap-6 md:flex-row md:flex-wrap">
        <ul class="font-lato my-3 flex flex-col gap-y-4 self-center text-white">
          <li
            v-for="{ description, to } in items"
            :key="to"
            class="text-center md:text-left"
          >
            <NuxtLink :to="to">{{ description }}</NuxtLink>
          </li>
        </ul>

        <div class="h-[2px] w-full bg-white md:h-auto md:w-[2px]">&nbsp;</div>

        <ul class="font-lato my-3 flex flex-col gap-y-4 self-center text-white">
          <li class="text-center md:text-left">
            <NuxtLink to="/?goto=uslugi&category=relaksacyjne"
              >Masaże relaksacyjne</NuxtLink
            >
          </li>
          <li class="text-center md:text-left">
            <NuxtLink to="?goto=uslugi&category=terapeutyczne"
              >Masaże terapeutyczne</NuxtLink
            >
          </li>
        </ul>

        <div class="h-[2px] w-full bg-white md:h-auto md:w-[2px]">&nbsp;</div>

        <ul class="font-lato my-3 flex flex-col gap-y-4 self-center text-white">
          <li class="text-center md:text-left">Telefon: 788 139 475</li>
          <li class="text-center md:text-left">
            Mail: <a href="mailto:kontakt@feelgut.pl">kontakt@feelgut.pl</a>
          </li>
        </ul>

        <div class="h-[2px] w-full bg-white md:h-auto md:w-[2px]">&nbsp;</div>

        <ul class="my-3 flex flex-row gap-4 self-center md:flex-col">
          <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
          <li>
            <v-social-button
              class="size-12"
              href="https://www.facebook.com/masazysta.feelgut"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-full"
                fill="currentColor"
                viewBox="0 0 320 512"
              >
                <path
                  d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                />
              </svg>
            </v-social-button>
          </li>
          <li>
            <v-social-button
              class="size-12"
              href="https://www.linkedin.com/in/dariusz-gut/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-full"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path
                  d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                />
              </svg>
            </v-social-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items: Ref<{ description: string; to: string }[]> = ref([
	{ description: "O mnie", to: "/?goto=o-mnie" },
	{ description: "Usługi", to: "/?goto=uslugi" },
	{ description: "Umów wizytę", to: "/?goto=kontakt" },
]);
</script>
