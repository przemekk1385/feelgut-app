<template>
  <div class="aspect-video w-full">
    <div class="h-full w-full bg-header-image bg-cover px-6 pt-[2%] lg:px-1/10">
      <nav class="flex items-center justify-between">
        <ul
          class="flex w-full flex-wrap items-center justify-around lg:justify-between"
        >
          <li class="hidden w-[18%] md:block">
            <a href="/" class="font-medium">
              <img src="/images/feelgut-logo.png" alt="Logo" class="h-28" />
            </a>
          </li>
          <li><a href="#" class="font-medium">O mnie</a></li>
          <li><a href="#" class="font-medium">Usługi</a></li>
          <li><a href="#" class="font-medium">Gabinet</a></li>
          <li><a href="#" class="font-medium">Cennik</a></li>
          <li class="basis-full md:basis-0"></li>
          <li class="relative my-4 lg:my-0">
            <a
              href="#"
              class="rounded-full border-2 border-black px-4 py-2 text-sm font-medium lg:px-8 lg:py-4 lg:text-base"
              >Umów wizytę</a
            >
          </li>
          <li class="flex lg:justify-between lg:w-32">
            <a
              href="#"
              class="relative mx-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-supernova lg:h-12 lg:w-12"
            >
              <div
                class="absolute h-full w-full rounded-full bg-black opacity-20"
              ></div>
              <img src="/images/fb.svg" alt="Facebook" class="absolute" />
            </a>
            <a
              href="#"
              class="relative mx-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-supernova lg:h-12 lg:w-12"
            >
              <div
                class="absolute h-full w-full rounded-full bg-black opacity-20"
              ></div>
              <img src="/images/insta.svg" alt="Instagram" class="absolute" />
            </a>
          </li>
        </ul>
      </nav>
      <div class="relative top-[15%] hidden">
        <div class="drop-shadow-[0_4px_4px_rgba(22,31,54,0.75)]">
          <span class="text-6xl leading-[5rem]"
            >Odzyskaj balans<br />i poczuj się GUT</span
          >
        </div>
        <a
          href="#"
          class="mt-8 inline-block rounded-full bg-silver-tree px-14 py-6"
        >
          <span class="font-lato text-4xl font-medium text-white">
            Oferta masaży
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
