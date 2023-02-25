<template>
  <div class="grid grid-cols-5 gap-6 px-32 pt-20 pb-28">
    <div class="col-span-3">
      <div>
        <span class="text-8xl font-bold text-primary-strong opacity-30">
          Umów wizytę
        </span>
        <div
          class="ml-auto mt-6 h-1 w-[70%] bg-gradient-to-r from-[#FCCB00] via-[#C9961A] to-[#FFFAD2]"
        ></div>
      </div>
      <div class="mt-24 grid grid-cols-1 gap-y-6">
        <input
          type="text"
          placeholder="Imię i nazwisko"
          class="rounded-full border border-[#0e0f12] py-4 px-6 text-lg font-bold text-[#161F36]"
        />
        <input
          type="text"
          placeholder="Adres email"
          class="rounded-full border border-[#161F36] py-4 px-6 text-lg font-bold text-[#161F36]"
        />
        <textarea
          placeholder="Treść wiadomości"
          class="rounded-[5%/12.5%] border border-[#161F36] py-4 px-6 text-lg font-bold text-[#161F36] aspect-[5/2]"
        ></textarea>
        <div class="flex items-center">
            <div class="pr-4">
                <input type="checkbox" class="accent-gray-400 text-gray-400 h-4 w-4" />
            </div>
            <div>
                <span class="font-lato font-light text-xs">Wyrażam zgodę na przetwarzanie danych osobowych - <a href="#" class="uppercase underline">czytaj więcej</a></span>
            </div>
        </div>
        <div class="flex justify-end">
            <button class="rounded-full bg-gradient-to-r from-[#FCCB00] via-[#C9961A] to-[#FFFAD2] p-1 font-medium">
                <div class="rounded-full bg-white px-10 py-2">
                    <span class="text-xl font-medium text-[#073F31] opacity-40"> wyślij </span>
                </div>
            </button>
        </div>
      </div>
    </div>
    <div class="col-span-2 flex items-end justify-center">
        <div>
            <div><span class="font-bold text-8xl text-[#073F31] opacity-40">Dariusz</span></div>
            <div class="relative -top-6 left-64"><span class="font-bold text-8xl text-[#073F31] opacity-40">Gut</span></div>
            <div><span class="font-bold text-7xl text-[#073F31] opacity-40">676 888 930</span></div>
        </div>
    </div>
  </div>
</template>
