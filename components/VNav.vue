<template>
  <nav>
    <div
      class="relative flex h-full items-start justify-between pl-6 md:pl-20 lg:hidden"
    >
      <NuxtLink to="/">
        <img src="/images/feelgut-logo.png" alt="Logo" class="h-20 sm:h-28" />
      </NuxtLink>
      <v-drawer>
        <ul
          class="relative z-10 grid gap-y-2 text-sm text-white sm:gap-y-6 sm:text-base"
        >
          <li v-for="{ description, to } in items" :key="to">
            <NuxtLink :to="to"> {{ description }} </NuxtLink>
          </li>
          <li class="flex gap-x-4">
            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->

            <v-social-button
              class="size-10"
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
            <v-social-button
              class="size-10"
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
      </v-drawer>
    </div>

    <div class="relative hidden w-full items-center px-28 lg:flex xl:px-36">
      <div
        class="absolute top-0 left-0 -z-0 size-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
      ></div>
      <ul class="relative z-0 flex w-full items-center justify-between">
        <li>
          <NuxtLink href="/" class="font-medium">
            <img src="/images/feelgut-logo.png" alt="Logo" class="h-28" />
          </NuxtLink>
        </li>
        <li v-for="{ description, to } in items" :key="to">
          <NuxtLink :to="to"> {{ description }} </NuxtLink>
        </li>
        <li class="flex gap-x-6">
          <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->

          <v-social-button
            class="size-12 drop-shadow-[5px_5px_10px_rgba(0,0,0,.25)]"
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
          <v-social-button
            class="size-12 drop-shadow-[5px_5px_10px_rgba(0,0,0,.25)]"
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
  </nav>
</template>

<script setup lang="ts">
const items: Ref<{ description: string; to: string }[]> = ref([
	{ description: "O mnie", to: "/?goto=o-mnie" },
	{ description: "Usługi", to: "/?goto=uslugi" },
	{ description: "Cennik", to: "/cennik?goto=cennik" },
	{ description: "Masaż dla firm", to: "/masaz-dla-firm?goto=masaz-dla-firm" },
	{ description: "Umów wizytę", to: "/?goto=kontakt" },
]);
</script>
