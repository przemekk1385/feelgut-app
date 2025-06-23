<template>
  <div id="kontakt" class="flex flex-col-reverse gap-12 lg:flex-row">
    <VInfo v-model="show" :is-error="isError">{{ message }}</VInfo>
    <div class="flex">
      <div class="flex grow flex-col p-6 lg:grow-0 lg:pl-28 xl:pl-36">
        <div class="mb-6 lg:min-w-[36.5rem]">
          <v-h>
            <h2 class="text-como opacity-30">Umów wizytę</h2>
            <template #under>
              <v-h-line class="relative md:left-40 lg:left-44 xl:left-48" />
            </template>
          </v-h>
        </div>
        <div class="font-lato flex flex-col gap-4">
          <FormKit
            id="contact-form"
            :actions="false"
            type="form"
            form-class="mt-12 flex grow flex-col gap-y-6"
            @submit="handleSubmit"
          >
            <FormKit
              type="text"
              name="name"
              placeholder="Imię i nazwisko"
              validation="required"
              validation-visibility="submit"
              :validation-messages="{ required: 'To pole jest wymagane.' }"
            />
            <FormKit
              type="text"
              name="email"
              placeholder="Adres email"
              validation="required|email"
              validation-visibility="submit"
              :validation-messages="{ required: 'To pole jest wymagane.' }"
            />
            <FormKit
              type="textarea"
              name="text"
              placeholder="Treść wiadomości"
              validation="required"
              input-class="aspect-[5/2] w-full"
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
              validation-visibility="submit"
              :validation-messages="{
                accepted:
                  'Proszę zaakceptować zgodę na przetwarzanie danych osobowych.',
              }"
            >
              <template #label>
                <div class="font-lato text-xs font-light">
                  Wyrażam zgodę na przetwarzanie danych osobowych -
                  <NuxtLink href="#" class="uppercase underline"
                    >czytaj więcej</NuxtLink
                  >
                </div>
              </template>
            </FormKit>
            <FormKit type="submit" outer-class="flex justify-end">
              <span class="opacity-40">wyślij</span>
            </FormKit>
          </FormKit>
          <div class="mt-6 text-center">
            <NuxtTurnstile
              v-model="token"
              :options="{ size: 'flexible', theme: 'light' }"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex grow lg:overflow-hidden">
      <div class="aspect-square size-full lg:aspect-[2/3]">
        <img
          src="/images/contact.jpg"
          alt="Kontakt - grafika ilustracyjna"
          class="size-full object-cover object-bottom"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reset } from "@formkit/core";

const token: Ref<string | undefined> = ref(undefined);

const isError: Ref<boolean> = ref(false);
const message: Ref<string> = ref("");
const show: Ref<boolean> = ref(false);

const handleSubmit = async (body: object): Promise<void> => {
	isError.value = false;

	if (!token.value) {
		isError.value = true;
		message.value = "Nie można wysłać wiadomości.";
		show.value = true;
		return;
	}

	const method = "POST";

	try {
		const { success } = await $fetch<{ success: boolean }>(
			"/_turnstile/validate",
			{
				body: { token: token.value },
				method,
			},
		);

		if (!success) {
			throw new Error("Turnstile validation error");
		}

		await $fetch("/api/mail", {
			body,
			method,
			onResponse({ response: { status } }) {
				if (status === 202) {
					message.value = "Wiadomość wysłana pomyślnie.";
					show.value = true;
					reset("contact-form");
				} else {
					throw new Error(`Unexpected status: ${status}`);
				}
			},
			onResponseError() {
				throw new Error("Mail API response error");
			},
		});
	} catch (error) {
		isError.value = true;
		message.value = "Nie udało się wysłać wiadomości.";
		show.value = true;
	}
};
</script>
