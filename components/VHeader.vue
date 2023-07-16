<template>
  <div
    class="relative aspect-[3/2] max-h-[60rem] w-full overflow-hidden xl:aspect-auto"
  >
    <div class="h-full w-full overflow-hidden">
      <NuxtImg
        src="/images/header.jpg"
        alt="Nagłówek - grafika ilustracyjna"
        preload
        sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw"
        class="h-full w-full scale-[1.175] object-cover object-center"
      />
    </div>
    <div class="absolute top-0 h-full w-full">
      <div class="mx-auto h-full max-w-[90rem]">
        <v-nav class="h-full" />

        <div
          class="absolute hidden md:top-40 md:block md:px-20 lg:top-48 lg:px-28 xl:top-56 xl:px-36"
        >
          <div
            class="mb-8 text-4xl leading-snug text-dark lg:text-5xl lg:leading-snug xl:text-6xl xl:leading-snug"
          >
            Odzyskaj balans<br />i poczuj się GUT
          </div>
          <v-header-button to="/?goto=uslugi"> Oferta masaży </v-header-button>
        </div>
      </div>
    </div>
  </div>
</template>
