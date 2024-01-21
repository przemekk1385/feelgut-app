<template>
  <div class="bg-como py-12">
    <div class="mx-auto max-w-[90rem] px-12 lg:px-28 xl:px-36">
      <div class="flex flex-col justify-center gap-6 md:flex-row md:flex-wrap">
        <ul class="my-3 flex flex-col gap-y-4 self-center font-lato text-white">
          <li
            v-for="{ description, to } in items"
            :key="to"
            class="text-center md:text-left"
          >
            <NuxtLink :to="to">{{ description }}</NuxtLink>
          </li>
        </ul>

        <div class="h-[2px] w-full bg-white md:h-auto md:w-[2px]">&nbsp;</div>

        <ul class="my-3 flex flex-col gap-y-4 self-center font-lato text-white">
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

        <ul class="my-3 flex flex-col gap-y-4 self-center font-lato text-white">
          <li class="text-center md:text-left">Telefon: 788 139 475</li>
          <li class="text-center md:text-left">
            Mail: <a href="mailto:kontakt@feelgut.pl">kontakt@feelgut.pl</a>
          </li>
          <li class="text-center md:text-left">
            Adres:
            <ul>
              <li>ul. Marii Currie-Skłodowskiej 9/5, Kraków</li>
            </ul>
          </li>
        </ul>

        <div class="h-[2px] w-full bg-white md:h-auto md:w-[2px]">&nbsp;</div>

        <ul class="my-3 flex flex-row gap-4 self-center md:flex-col">
          <li v-for="{ alt, src, href } in social" :key="href">
            <v-social-button
              :alt="alt"
              :src="src"
              :href="href"
              class="size-12"
            />
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
  { description: "Gabinet", to: "/?goto=moj-gabinet" },
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
