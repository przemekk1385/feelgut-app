<template>
  <div
    class="relative aspect-[3/2] max-h-[60rem] w-full overflow-hidden xl:aspect-auto"
  >
    <div class="size-full overflow-hidden">
      <img
        src="/images/header.jpg"
        alt="Nagłówek - grafika ilustracyjna"
        class="size-full object-cover"
      />
    </div>
    <div class="absolute top-0 size-full">
      <div class="mx-auto h-full">
        <v-nav class="h-full" />

        <div
          class="absolute hidden md:top-40 md:block md:px-20 lg:top-48 lg:px-28 xl:top-56 xl:px-36"
        >
          <div
            class="text-dark mb-8 text-4xl leading-snug lg:text-5xl lg:leading-snug xl:text-6xl xl:leading-snug"
          >
            Odzyskaj balans<br />i poczuj się GUT
          </div>
          <v-header-button to="/?goto=uslugi"> Oferta masaży </v-header-button>
        </div>
      </div>
    </div>
  </div>
</template>
