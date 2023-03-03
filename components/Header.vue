<template>
  <div class="aspect-video w-full">
    <div class="h-full w-full bg-header-image bg-cover px-6 pt-[2%] lg:px-1/10">
      <nav class="flex items-start md:items-center">
        <div class="grow-[99] md:grow-[2] lg:grow">
          <a href="/" class="font-medium">
            <img
              src="/images/feelgut-logo.png"
              alt="Logo"
              class="h-20 md:h-28"
            />
          </a>
        </div>
        <ul class="flex grow items-center justify-between lg:grow-[2]">
          <li class="hidden md:block">
            <a href="#" class="font-medium">O mnie</a>
          </li>
          <li class="hidden md:block">
            <a href="#" class="font-medium">Usługi</a>
          </li>
          <li class="hidden md:block">
            <a href="#" class="font-medium">Gabinet</a>
          </li>
          <li class="hidden md:block">
            <a href="#" class="font-medium">Cennik</a>
          </li>
          <li class="relative my-4 mr-4 md:mr-0 lg:my-0">
            <a
              href="#"
              class="rounded-full border-2 border-black px-4 py-2 text-sm font-medium lg:px-8 lg:py-4 lg:text-base"
            >
              Umów wizytę
            </a>
          </li>
          <li class="flex">
            <a
              href="#"
              class="mr-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-supernova bg-supernova sm:bg-transparent lg:h-12 lg:w-12"
            >
              <img src="/images/fb.svg" alt="Facebook" />
            </a>
            <a
              href="#"
              class="ml-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-supernova bg-supernova sm:bg-transparent lg:h-12 lg:w-12"
            >
              <img src="/images/insta.svg" alt="Instagram" />
            </a>
          </li>
        </ul>
      </nav>
      <div class="relative top-[15%] hidden md:block">
        <div class="drop-shadow-[0_4px_4px_rgba(22,31,54,0.75)]">
          <span class="text-4xl leading-[3.5rem] lg:text-6xl lg:leading-[5rem]">
            Odzyskaj balans<br />i poczuj się GUT
          </span>
        </div>
        <a
          href="#"
          class="mt-8 inline-block rounded-full bg-silver-tree px-12 py-4 lg:px-14 lg:py-6"
        >
          <span class="font-lato text-xl font-medium text-white lg:text-4xl">
            Oferta masaży
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
