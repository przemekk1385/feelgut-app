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
            <v-social-button
              v-for="{ alt, src, href } in social"
              :key="href"
              :alt="alt"
              :src="src"
              :href="href"
              class="size-10"
            />
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
          <v-social-button
            v-for="{ alt, src, href } in social"
            :key="href"
            :alt="alt"
            :src="src"
            :href="href"
            class="size-12 drop-shadow-[5px_5px_10px_rgba(0,0,0,.25)]"
          />
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

const social: Ref<{ alt: string; src: string; href: string }[]> = ref([
  {
    alt: "Facebook",
    src: "/images/fb.svg",
    href: "https://www.facebook.com/masazysta.feelgut",
  },
  // { alt: "Instagram", src: "/images/insta.svg", href: "#" },
]);
</script>
