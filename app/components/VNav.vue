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
          <li>
            <NuxtLink target="_blank" to="https://kursy.feelgut.pl/e-book">
              E-book
              <div
                class="from-supernova via-sahara to-mimosa mt-0.5 h-0.5 w-3/4 bg-linear-to-r"
              ></div>
            </NuxtLink>
          </li>
        </ul>
      </v-drawer>
    </div>

    <div class="relative hidden w-full items-center px-28 lg:flex xl:px-36">
      <div
        class="absolute top-0 left-0 z-0 size-full bg-linear-to-r from-transparent via-white to-transparent opacity-60"
      ></div>
      <ul class="relative z-0 flex w-full items-center justify-between">
        <li>
          <NuxtLink href="/" class="font-medium">
            <img src="/images/feelgut-logo.png" alt="Logo" class="h-28" />
          </NuxtLink>
        </li>
        <li
          class="transition-transform duration-500 hover:scale-110"
          v-for="{ description, to } in items"
          :key="to"
        >
          <NuxtLink :to="to"> {{ description }} </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="from-supernova via-sahara to-mimosa block rounded-full bg-linear-to-r p-0.5 transition-transform duration-500 hover:scale-110"
            target="_blank"
            to="https://kursy.feelgut.pl/e-book"
          >
            <div
              class="flex size-full items-center justify-center rounded-full bg-white px-3 py-1 text-black"
            >
              E-book
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
const items: Ref<{ description: string; to: string }[]> = ref([
	{ description: "O mnie", to: "/#o-mnie" },
	{ description: "Usługi", to: "/#uslugi" },
	{ description: "Cennik", to: "/cennik#cennik" },
	{ description: "Masaż dla firm", to: "/masaz-dla-firm#masaz-dla-firm" },
	{ description: "Szkolenia", to: "/szkolenia#szkolenia" },
	{ description: "Umów wizytę", to: "/#kontakt" },
]);
</script>
