<template>
  <div
    id="o-mnie"
    class="flex flex-col-reverse bg-como text-white lg:max-h-[44.5rem] lg:flex-row"
  >
    <div class="lg:min-w-[32rem] lg:overflow-hidden xl:flex-1">
      <div class="aspect-[2/1] lg:aspect-[3/4] xl:aspect-square">
        <img
          src="/images/about.jpg"
          alt="Dariusz Gut - zdjęcie"
          class="size-full object-cover object-top"
        />
      </div>
    </div>
    <div class="flex xl:flex-1">
      <div class="flex grow flex-col p-6 lg:pr-28 xl:max-w-[45rem] xl:pr-36">
        <div class="mb-6">
          <v-h>
            <span class="text-white opacity-30"> O mnie </span>
            <template #under>
              <v-h-line class="relative md:left-16 lg:-left-40 xl:-left-48" />
            </template>
          </v-h>
        </div>
        <div class="flex grow flex-col justify-around gap-4 font-lato">
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
