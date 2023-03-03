<template>
  <div
    class="grid grid-cols-1 gap-6 px-6 pt-16 pb-28 lg:px-1/10 xl:grid-cols-5"
  >
    <div class="lg:col-span-3">
      <div class="inline-block">
        <span class="text-6xl font-bold text-como opacity-30 md:text-8xl">
          Umów wizytę
        </span>
        <div
          class="relative mt-4 h-[2px] w-full bg-gradient-to-r from-supernova via-sahara to-mimosa lg:left-[35%] lg:w-[85%]"
        ></div>
      </div>
      <div class="mt-24 grid grid-cols-1 gap-y-6">
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
              <span class="text-xl font-medium text-sherwood-green opacity-40">
                wyślij
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center xl:col-span-2">
      <div>
        <div>
          <span
            class="text-6xl font-bold text-sherwood-green opacity-40 md:text-8xl"
            >Dariusz</span
          >
        </div>
        <div class="relative -top-4 left-32 inline-block md:-top-6 md:left-64">
          <span
            class="text-6xl font-bold text-sherwood-green opacity-40 md:text-8xl"
            >Gut</span
          >
        </div>
        <div>
          <span
            class="text-5xl font-bold text-sherwood-green opacity-40 md:text-7xl"
            >676 888 930</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
