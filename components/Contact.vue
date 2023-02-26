<template>
  <div class="grid grid-cols-5 gap-6 px-1/10 pt-16 pb-28">
    <div class="col-span-3">
      <div class="inline-block">
        <span class="text-8xl font-bold text-como opacity-30">
          Umów wizytę
        </span>
        <div
          class="relative left-[35%] mt-4 h-1 w-[85%] bg-gradient-to-r from-supernova via-sahara to-mimosa"
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
            class="rounded-full bg-gradient-to-r from-supernova via-sahara to-mimosa p-1 font-medium"
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
    <div class="col-span-2 flex items-center justify-center">
      <div>
        <div>
          <span
            class="inline-block text-8xl font-bold text-sherwood-green opacity-40"
            >Dariusz</span
          >
        </div>
        <div class="relative -top-6 left-64 inline-block">
          <span class="text-8xl font-bold text-sherwood-green opacity-40"
            >Gut</span
          >
        </div>
        <div>
          <span
            class="inline-block text-7xl font-bold text-sherwood-green opacity-40"
            >676 888 930</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
