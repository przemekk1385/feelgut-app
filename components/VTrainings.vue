<template>
  <div>
    <div
      id="szkolenia"
      class="bg-como flex flex-col-reverse text-white lg:flex-row"
    >
      <div class="lg:flex-1 lg:overflow-hidden">
        <div class="h-full">
          <img
            src="/images/trainings.jpg"
            alt="Grafika ilustracyjna"
            class="size-full object-cover object-center"
          />
        </div>
      </div>
      <div class="flex lg:flex-1">
        <div class="flex grow flex-col p-6 lg:pr-28 xl:max-w-[45rem] xl:pr-36">
          <div class="mb-6">
            <v-h>
              <h2 class="text-white opacity-30">Szkolenia</h2>
              <template #under>
                <v-h-line class="relative md:left-16 lg:-left-40 xl:-left-48" />
              </template>
            </v-h>
          </div>
          <div class="flex grow flex-col justify-around gap-4">
            <p class="font-lato">
              Od kilku lat z pasją dzielę się swoją wiedzą i doświadczeniem,
              prowadząc szkolenia dla tych, którzy chcą rozwijać się w
              dziedzinie masażu niezależnie od poziomu zaawansowania.
            </p>
            <p class="font-lato">
              W mojej ofercie znajdziesz zarówno szkolenia indywidualne i
              warsztaty doszkalające dla masażystów, jak i grupowe kursy dla
              osób początkujących, terapeutów i pasjonatów pracy z ciałem. Każde
              szkolenie opieram na praktyce, zrozumieniu anatomii oraz realnych
              potrzebach kursantów.
            </p>

            <h3 class="mt-6 text-2xl font-bold text-white opacity-30">
              Kurs Masaż klasyczny dla początkujących
            </h3>
            <p class="font-lato">
              Idealny kurs na start dla osób bez doświadczenia. Poznasz w
              praktyce techniki najpopularniejszego masażu, zasady i warunki
              pracy masażysty, odpowiednią ergonomię i podstawy pracy z
              klientem.
            </p>

            <h3 class="mt-6 text-2xl font-bold text-white opacity-30">
              Kurs Masaż balijski
            </h3>
            <p class="font-lato">
              Dla osób, które szukają orientalnej, egzotycznej techniki masażu.
              Nauczysz się jak łączyć elementy akupresury, stretchingu i
              głębokiego relaksu w jeden spójny rytuał. Kurs zarówno dla
              początkujących jak i praktyków zawodu.
            </p>

            <h3 class="mt-6 text-2xl font-bold text-white opacity-30">
              Kurs Masaż powięziowy z wykorzystaniem narzędzi terapeutycznych
            </h3>
            <p class="font-lato">
              Poznasz manualne i narzędziowe techniki pracy z układem
              powięziowym. Opanujesz m.in. pracę bańkami powięziowymi, nożami
              terapeutycznymi czy taśmą floss.
            </p>

            <h3 class="mt-6 text-2xl font-bold text-white opacity-30">
              Kurs Masaż głowy dla salonów fryzjerskich (tzw. masaż fryzjerski)
            </h3>
            <p class="font-lato">
              Szkolenie dedykowane fryzjerom chcącym wzbogacić swoje usługi o
              element relaksu i poprawy samopoczucia klientów. Mogę takie
              szkolenie przeprowadzić w Twoim salonie fryzjerskim. Nie
              potrzebujesz do tego dodatkowego sprzętu.
            </p>

            <h3 class="mt-6 text-2xl font-bold text-white opacity-30">
              Kurs Masaż biurowy
            </h3>
            <p class="font-lato">
              Nauczę Cię krótkich, efektywnych technik wykonywanych na krześle
              do masażu - idealne do zastosowania w firmach dla pracowników
              biurowych.
            </p>

            <h3 class="mt-6 text-2xl font-bold text-white opacity-30">
              Kurs Masaż tensegracyjny
            </h3>
            <p class="font-lato">
              Poznasz holistyczną pracę z ciałem uwzględniającą zasady
              biomechaniki i występowanie napięć w czterech układach
              mięśniowo-powięziowych.
            </p>

            <h3 class="mt-6 text-2xl font-bold text-white opacity-30">
              Kurs Masaż i terapia blizn
            </h3>
            <p class="font-lato">
              Specjalistyczny kurs, na którym nauczysz się jak bezpiecznie i
              skutecznie pracować z bliznami pourazowymi i pooperacyjnymi.
              Poznasz różne techniki manualne i narzędziowe, w tym bańki, taping
              i noże w terapii blizn.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-platinium">
      <div class="mx-auto px-6 py-12 md:px-20 lg:px-28 xl:px-36">
        <div class="mb-12 text-lg">
          <p class="mt-6">
            Jeśli jesteś na początku swojej drogi lub chcesz pogłębić swój
            warsztat, zapraszam Cię do kontaktu.
          </p>
          <p class="mt-6">
            Pomogę Ci wybrać szkolenie dopasowane do Twojego poziomu i celów
            zawodowych.
          </p>
        </div>

        <div
          class="flex flex-col items-center justify-around gap-6 sm:flex-row"
        >
          <div class="text-xl font-medium sm:text-2xl lg:text-3xl">
            Chcesz dowiedzieć się więcej?
          </div>
          <div>
            <v-offer-bar-button bg-color="platinium" to="/?goto=kontakt">
              Napisz
            </v-offer-bar-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
