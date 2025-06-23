<template>
  <div
    id="o-mnie"
    class="bg-como flex flex-col-reverse text-white lg:max-h-[70rem] lg:flex-row"
  >
    <div class="lg:min-w-[32rem] lg:overflow-hidden xl:flex-1">
      <div class="aspect-square size-full lg:aspect-[3/4]">
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
            <h2 class="text-white opacity-30">O mnie</h2>
            <template #under>
              <v-h-line class="relative md:left-16 lg:-left-40 xl:-left-48" />
            </template>
          </v-h>
        </div>
        <div class="font-lato flex grow flex-col justify-around gap-4">
          <p>
            Nazywam się Dariusz Gut i od ponad 6 lat z pasją zajmuję się masażem
            oraz edukacją w zakresie pracy z ciałem.
          </p>
          <p>
            Na co dzień prowadzę własną praktykę masażu, oferując masaże biurowe
            dla firm oraz masaże relaksacyjne i terapeutyczne dla klientów
            indywidualnych również z dojazdem do klienta. Specjalizuję się m.in.
            w masażu klasycznym, powięziowym, balijskim oraz masażu fryzjerskim
            głowy.
          </p>
          <p>
            Od kilku lat dzielę się również swoim doświadczeniem jako
            szkoleniowiec. Obecnie prowadzę autorskie szkolenia i warsztaty z
            zakresu masażu oraz współpracuję jako instruktor z renomowanymi
            placówkami szkoleniowymi: Soma Group w Krakowie oraz Centrum
            Szkoleniowym Anatomic w Gdańsku.
          </p>
          <p>
            Przez 5 lat byłem także związany z Akademią Sztuki Masażu Menos,
            gdzie odpowiadałem za koordynację szkoleń, budowanie oferty
            edukacyjnej oraz prowadzenie zajęć dla przyszłych masażystów. W tym
            czasie przeszkoliłem ponad 400 kursantów, wielu z nich dziś z
            powodzeniem pracuje w zawodzie i rozwija swoje pasje.
          </p>
          <p>
            Jestem absolwentem Akademii Wychowania Fizycznego w Krakowie.
            Ukończyłem liczne kursy zawodowe i nieustannie poszerzam swoją
            wiedzę w obszarze pracy z ciałem, terapii manualnej i masażu. W
            pracy stawiam na uważność, jakość i indywidualne podejście - zarówno
            w gabinecie, jak i w sali szkoleniowej.
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
