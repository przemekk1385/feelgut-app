<template>
  <nav class="mx-auto max-w-[90rem]">
    <div
      class="relative flex h-full items-start justify-between pl-6 md:pl-20 lg:hidden"
    >
      <NuxtLink to="/">
        <NuxtImg
          src="/images/feelgut-logo.png"
          alt="Logo"
          class="h-20 sm:h-28"
        />
      </NuxtLink>
      <v-drawer>
        <ul
          class="relative z-10 grid gap-y-2 text-sm text-white sm:gap-y-6 sm:text-base"
        >
          <li v-for="{ description, to } in items" :key="to">
            <NuxtLink :to="to"> {{ description }} </NuxtLink>
          </li>
          <li class="flex gap-x-4">
            <v-social-button
              v-for="{ alt, src, href } in social"
              :key="href"
              :alt="alt"
              :src="src"
              :href="href"
              class="h-10 w-10"
            />
          </li>
        </ul>
      </v-drawer>
    </div>

    <div class="hidden w-full items-center px-28 lg:flex xl:px-36">
      <ul class="flex w-full items-center justify-between">
        <li>
          <NuxtLink href="/" class="font-medium">
            <NuxtImg src="/images/feelgut-logo.png" alt="Logo" class="h-28" />
          </NuxtLink>
        </li>
        <li v-for="{ description, to } in items" :key="to">
          <NuxtLink :to="to"> {{ description }} </NuxtLink>
        </li>
        <li class="flex gap-x-6">
          <v-social-button
            v-for="{ alt, src, href } in social"
            :key="href"
            :alt="alt"
            :src="src"
            :href="href"
            class="h-12 w-12 drop-shadow-[5px_5px_10px_rgba(0,0,0,.25)]"
          />
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

const social: Ref<{ alt: string; src: string; href: string }[]> = ref([
  {
    alt: "Facebook",
    src: "/images/fb.svg",
    href: "https://www.facebook.com/masazysta.feelgut",
  },
  // { alt: "Instagram", src: "/images/insta.svg", href: "#" },
]);
</script>
