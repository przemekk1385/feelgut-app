<template>
  <div
    class="flex flex-col-reverse bg-como text-white lg:max-h-[42rem] lg:flex-row xl:max-h-[44rem]"
  >
    <div class="lg:flex-1 lg:overflow-hidden">
      <div class="aspect-[2/1] lg:aspect-[3/4] xl:aspect-square">
        <img
          src="/images/about.jpg"
          alt="Dariusz Gut - zdjęcie"
          class="h-full w-full object-cover object-top"
        />
      </div>
    </div>
    <div class="flex flex-1">
      <div class="flex grow flex-col p-6 lg:pr-28 xl:max-w-[45rem] xl:pr-36">
        <div class="mb-6">
          <v-h>
            <span class="text-white opacity-30"> O mnie </span>
            <template #under>
              <v-h-line
                class="relative sm:w-1/2 lg:-left-40 lg:w-[22rem] xl:-left-48 xl:w-[29rem]"
              />
            </template>
          </v-h>
        </div>
        <div class="flex flex-grow flex-col justify-around gap-6 font-lato">
          <p>
            Cześć, nazywam się Darek Gut. Jestem dyplomowanym masażystą, a z
            wykształcenia absolwentem Wydziału Wychowania Fizycznego AWF w
            Krakowie. Od kilku lat pasjonuję się sztuką masażu, czego efektem są
            licznie ukończone specjalistyczne szkolenia z wielu technik oraz
            metod masażu.
          </p>
          <p>
            Największą satysfakcję sprawia mi pomoc drugiemu człowiekowi w
            dochodzeniu do pełni sprawności, likwidowaniu dolegliwości bólowych,
            a także pozbywaniu się stresu, z którym zmagają się moi klienci.
          </p>
          <p>
            Wykonuję zarówno masaże terapeutyczne jak i relaksacyjne. Pracuję
            również jako instruktor m.in. masażu klasycznego i balijskiego w
            Akademii Sztuki Masażu Menos.
          </p>
          <p>
            Czas wolny lubię spędzać aktywnie m.in. na siłowni czy też startując
            w biegach długodystansowych. Lubię także piesze wędrówki górskie, a
            od dziecka pasjonuję się piłką nożną, którą wiele lat uprawiałem.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
