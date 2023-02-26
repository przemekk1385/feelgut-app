<template>
  <div
    class="grid grid-cols-[repeat(20,_minmax(0,_1fr))] gap-6 bg-primary-strong px-16 py-6"
  >
    <div class="col-span-9">
      <div class="grid grid-cols-1 gap-y-6">
        <div class="aspect-[10/11]">
          <img
            src="images/my_massage_room/1.jpeg"
            alt="Zdjęcie ilustracyjne"
            class="h-full w-full object-cover"
          />
        </div>
        <div class="aspect-[2/1]">
          <img
            src="images/my_massage_room/2.jpeg"
            alt="Zdjęcie ilustracyjne"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
    <div class="col-span-11 flex flex-col justify-end">
      <div class="flex grow items-center">
        <div>
          <span class="text-8xl font-bold text-white opacity-30"
            >Mój gabinet</span
          >
          <div
            class="relative -left-[15%] mt-6 h-1 w-[85%] bg-gradient-to-r from-[#FCCB00] via-[#C9961A] to-[#FFFAD2]"
          ></div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-y-6">
        <div class="aspect-[2/1]">
          <img
            src="images/my_massage_room/2.jpeg"
            alt="Zdjęcie ilustracyjne"
            class="h-full w-full object-cover"
          />
        </div>
        <div class="aspect-[2/1]">
          <img
            src="images/my_massage_room/3.jpeg"
            alt="Zdjęcie ilustracyjne"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>
