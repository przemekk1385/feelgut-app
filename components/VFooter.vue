<template>
  <div class="bg-como py-12">
    <div class="mx-auto max-w-[90rem] px-12 lg:px-28 xl:px-36">
      <div class="flex flex-col justify-center gap-6 md:flex-row md:flex-wrap">
        <ul class="my-3 flex flex-col gap-y-4 self-center font-lato text-white">
          <li class="text-center md:text-left">
            <NuxtLink to="/?goto=o-mnie">O mnie</NuxtLink>
          </li>
          <li class="text-center md:text-left">
            <NuxtLink to="/?goto=uslugi">Usługi</NuxtLink>
          </li>
          <li class="text-center md:text-left">
            <NuxtLink to="/?goto=moj-gabinet">Gabinet</NuxtLink>
          </li>
          <li class="text-center md:text-left">
            <NuxtLink to="/?goto=kontakt">Umów wizytę</NuxtLink>
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
          <li class="text-center md:text-left">Mail: gut.darek@gmail.com</li>
          <li class="text-center md:text-left">
            Adres: Kolanowska 123, Bochnia
          </li>
        </ul>

        <div class="h-[2px] w-full bg-white md:h-auto md:w-[2px]">&nbsp;</div>

        <ul class="my-3 flex flex-row gap-4 self-center md:flex-col">
          <li>
            <a
              href="#"
              class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-supernova"
            >
              <img src="/images/fb.svg" alt="Facebook" />
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-supernova"
            >
              <img src="/images/insta.svg" alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
