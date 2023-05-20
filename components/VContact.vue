<template>
  <div
    id="kontakt"
    class="mx-auto max-w-[90rem] px-6 pb-28 pt-16 md:px-20 lg:px-28 xl:px-36"
  >
    <v-h>
      <span class="text-como opacity-30"> Umów wizytę </span>
      <template #under>
        <v-h-line class="relative md:left-40 lg:left-44 xl:left-48" />
      </template>
    </v-h>
    <div class="flex flex-col gap-12 lg:flex-row">
      <FormKit
        id="contact-form"
        :actions="false"
        type="form"
        form-class="mt-24 flex grow flex-col gap-y-6"
        messages-class="mt-4"
        message-class="mt-6 rounded-3xl bg-red-600 p-6 text-center text-base font-medium text-white"
        @submit="handleSubmit"
      >
        <FormKit
          type="text"
          name="name"
          placeholder="Imię i nazwisko"
          validation="required"
          input-class="w-full rounded-full border border-dark px-6 py-4 text-lg font-bold text-dark"
          messages-class="mt-4"
          message-class="text-sm text-red-600"
          validation-visibility="submit"
          :validation-messages="{ required: 'To pole jest wymagane.' }"
        />
        <FormKit
          type="text"
          name="email"
          placeholder="Adres email"
          validation="required|email"
          input-class="w-full rounded-full border border-dark px-6 py-4 text-lg font-bold text-dark"
          messages-class="mt-4"
          message-class="text-sm text-red-600"
          validation-visibility="submit"
          :validation-messages="{ required: 'To pole jest wymagane.' }"
        />
        <FormKit
          type="textarea"
          name="text"
          placeholder="Treść wiadomości"
          validation="required"
          input-class="aspect-[5/2] w-full rounded-[5%/12.5%] border border-dark px-6 py-4 text-lg font-bold text-dark"
          messages-class="mt-4"
          message-class="text-sm text-red-600"
          validation-visibility="submit"
          :validation-messages="{ required: 'To pole jest wymagane.' }"
        />
        <FormKit
          label="consent"
          type="checkbox"
          name="consent"
          validation="accepted"
          wrapper-class="flex items-center gap-x-4"
          inner-class="flex"
          input-class="h-5 w-5 border-myGray grayscale"
          messages-class="mt-4"
          message-class="text-sm text-red-400"
          validation-visibility="submit"
          :validation-messages="{
            accepted:
              'Proszę zaakceptować zgodę na przetwarzanie danych osobowych.',
          }"
        >
          <template #label>
            <div class="font-lato text-xs font-light">
              Wyrażam zgodę na przetwarzanie danych osobowych -
              <NuxtLink href="/polityka-prywatnosci" class="uppercase underline"
                >czytaj więcej</NuxtLink
              >
            </div>
          </template>
        </FormKit>
        <FormKit
          type="submit"
          outer-class="flex justify-end"
          wrapper-class="rounded-full bg-gradient-to-r from-supernova via-sahara to-mimosa p-[2px]"
          input-class="rounded-full bg-white px-12 py-2"
        >
          <span class="text-xl font-medium text-dark opacity-40">wyślij</span>
        </FormKit>
      </FormKit>
      <div
        class="flex flex-col items-center justify-center font-bold text-[#073F31] opacity-40"
      >
        <div class="text-7xl font-bold sm:text-8xl lg:text-7xl xl:text-8xl">
          <div>Dariusz</div>
          <div class="relative -top-4 sm:-top-6 lg:-top-4 xl:-top-6">
            <div class="pl-48 sm:pl-60 lg:pl-48 xl:pl-60">Gut</div>
          </div>
        </div>
        <div class="text-6xl sm:text-7xl lg:text-6xl xl:text-7xl">
          676 888 930
        </div>
      </div>
    </div>
    <VInfo v-model="show" :is-error="isError">{{ message }}</VInfo>
  </div>
</template>

<script setup lang="ts">
import { reset } from "@formkit/core";
import { nanoid } from "nanoid/non-secure";
import { useReCaptcha } from "vue-recaptcha-v3";

const isError: Ref<boolean> = ref(false);
const message: Ref<string> = ref("");
const show: Ref<boolean> = ref(false);

const reCaptcha = useReCaptcha();
const handleSubmit = async (data: object): Promise<void> => {
  isError.value = false;

  if (reCaptcha) {
    const { executeRecaptcha, recaptchaLoaded } = reCaptcha;
    await recaptchaLoaded();

    const response = await executeRecaptcha("submit_contact_form");
    
    const { refresh } = await useFetch("/api/mail", {
      body: Object.assign(data, { response }),
      key: nanoid(),
      method: "POST",
      onResponse({ response: { status } }) {
        if (status === 202) {
          message.value = "Wiadomość wysłana pomyślnie.";
          show.value = true;
          reset("contact-form");
        }
      },
      onResponseError() {
        isError.value = true;
        message.value = "Nie udało się wysłać wiadomości.";
        show.value = true;
        refresh();
      },
    });
  }
};
</script>
