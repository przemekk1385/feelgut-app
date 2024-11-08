<template>
  <div id="moj-gabinet" class="bg-como">
    <div class="mx-auto px-12 py-6">
      <v-h class="mb-6 block md:hidden">
        <span class="text-white opacity-30">Mój gabinet</span>
        <template #under>
          <v-h-line />
        </template>
      </v-h>

      <div class="flex flex-col gap-6 sm:flex-row">
        <div class="flex grow-[4] basis-0 flex-col gap-6">
          <div class="aspect-[9/10] overflow-hidden">
            <img
              src="/images/my_massage_room/1.jpeg"
              alt="Zdjęcie ilustracyjne"
              class="size-full object-cover"
            />
          </div>
          <div class="aspect-[2/1] overflow-hidden bg-red-100">
            <img
              src="/images/my_massage_room/2.jpeg"
              alt="Zdjęcie ilustracyjne"
              class="size-full object-cover"
            />
          </div>
        </div>
        <div class="flex grow-[5] basis-0 flex-col justify-end gap-6">
          <div class="hidden grow items-center md:flex">
            <v-h class="grow">
              <span class="text-white opacity-30">Mój gabinet</span>
              <template #under>
                <v-h-line
                  class="relative md:-left-12 lg:-left-20 xl:-left-24"
                />
              </template>
            </v-h>
          </div>

          <div class="aspect-[2/1] overflow-hidden">
            <img
              src="/images/my_massage_room/2.jpeg"
              alt="Zdjęcie ilustracyjne"
              class="size-full object-cover"
            />
          </div>
          <div class="aspect-[2/1] overflow-hidden">
            <img
              src="/images/my_massage_room/3.jpeg"
              alt="Zdjęcie ilustracyjne"
              class="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
