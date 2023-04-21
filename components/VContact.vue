<template>
  <div
    class="mx-auto max-w-[90rem] px-6 pt-16 pb-28 md:px-20 lg:px-28 xl:px-36"
  >
    <v-h>
      <span class="text-como opacity-30"> Umów wizytę </span>
      <template #under>
        <div
          class="relative mt-6 h-[2px] w-full bg-gradient-to-r from-supernova via-sahara to-mimosa md:left-40 md:w-[15rem] lg:left-44 lg:w-[22rem] xl:left-48 xl:w-[29rem]"
        ></div>
      </template>
    </v-h>
    <div class="flex flex-col gap-12 lg:flex-row">
      <div class="mt-24 flex grow flex-col gap-y-6">
        <input
          type="text"
          placeholder="Imię i nazwisko"
          class="rounded-full border border-dark py-4 px-6 text-lg font-bold text-dark"
        />
        <input
          type="text"
          placeholder="Adres email"
          class="rounded-full border border-dark py-4 px-6 text-lg font-bold text-dark"
        />
        <textarea
          placeholder="Treść wiadomości"
          class="aspect-[5/2] rounded-[5%/12.5%] border border-dark py-4 px-6 text-lg font-bold text-dark"
        ></textarea>
        <div class="flex items-center">
          <div class="pr-4">
            <input
              type="checkbox"
              class="h-4 w-4 text-gray-400 accent-gray-400"
            />
          </div>
          <div>
            <span class="font-lato text-xs font-light"
              >Wyrażam zgodę na przetwarzanie danych osobowych -
              <a href="#" class="uppercase underline">czytaj więcej</a></span
            >
          </div>
        </div>
        <div class="flex justify-end">
          <button
            class="rounded-full bg-gradient-to-r from-supernova via-sahara to-mimosa p-[2px] font-medium"
          >
            <div class="rounded-full bg-white px-12 py-2">
              <span class="text-xl font-medium text-dark opacity-40">
                wyślij
              </span>
            </div>
          </button>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <div>
          <div
            class="text-7xl sm:text-8xl font-bold text-sherwood-green opacity-40 lg:text-7xl xl:text-8xl"
          >
            Dariusz
          </div>
          <div class="relative -top-4 sm:-top-6 lg:-top-4 xl:-top-6">
            <div
              class="pl-48 text-7xl sm:pl-60 sm:text-8xl font-bold text-sherwood-green opacity-40 lg:pl-48 lg:text-7xl xl:pl-60 xl:text-8xl"
            >
              Gut
            </div>
          </div>
        </div>
        <div
          class="text-6xl sm:text-7xl font-bold text-sherwood-green opacity-40 lg:text-6xl xl:text-7xl"
        >
          676 888 930
        </div>
      </div>
    </div>
  </div>
</template>
