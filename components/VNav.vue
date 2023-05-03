<template>
  <nav class="mx-auto max-w-[90rem]">
    <div
      class="relative flex h-full items-start justify-between pl-6 md:pl-20 lg:hidden"
    >
      <NuxtLink to="/">
        <img src="/images/feelgut-logo.png" alt="Logo" class="h-20 sm:h-28" />
      </NuxtLink>
      <v-drawer>
        <ul
          class="relative z-10 grid gap-y-3 text-sm text-white sm:gap-y-6 sm:text-base"
        >
          <li v-for="{ description, to } in items" :key="to">
            <NuxtLink :to="to"> {{ description }} </NuxtLink>
          </li>
          <li class="flex gap-x-4">
            <a
              v-for="{ icon, href, name } in social"
              :key="href"
              :href="href"
              class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-r from-supernova via-sahara to-mimosa p-2"
            >
              <img :src="`/images/${icon}.svg`" :alt="name" class="h-full" />
            </a>
          </li>
        </ul>
      </v-drawer>
    </div>

    <div class="hidden w-full items-center px-28 lg:flex xl:px-36">
      <ul class="flex w-full items-center justify-between">
        <li>
          <NuxtLink href="/" class="font-medium">
            <img src="/images/feelgut-logo.png" alt="Logo" class="h-28" />
          </NuxtLink>
        </li>
        <li v-for="{ description, to } in items" :key="to">
          <NuxtLink :to="to"> {{ description }} </NuxtLink>
        </li>
        <li class="flex gap-x-6">
          <a
            v-for="{ icon, href, name } in social"
            :key="href"
            :href="href"
            class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-gradient-to-r from-supernova via-sahara to-mimosa p-2"
          >
            <img :src="`/images/${icon}.svg`" :alt="name" class="h-full" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
const items: Ref<{ description: string; to: string }[]> = ref([
  { description: "O mnie", to: "/?goto=o-mnie" },
  { description: "Przygotowanie", to: "/cennik?goto=10-przykazan" },
  { description: "Usługi", to: "/?goto=uslugi" },
  { description: "Gabinet", to: "/?goto=moj-gabinet" },
  { description: "Cennik", to: "/cennik?goto=cennik" },
  { description: "Umów wizytę", to: "/?goto=kontakt" },
]);

const social: Ref<{ href: string; icon: string; name: string }[]> = ref([
  { icon: "fb", href: "#", name: "Facebook" },
  { icon: "insta", href: "#", name: "Instagram" },
]);
</script>
