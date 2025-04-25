<template>
  <div class="flex flex-col">
    <div
      :class="{ ['bg-[#ccd8d5]']: props.dark, ['bg-white']: !props.dark }"
      class="flex flex-col gap-6 py-6 pr-0 pl-6 sm:pr-12 lg:flex-row lg:items-center xl:pr-24"
    >
      <div class="grow text-lg md:text-xl lg:text-2xl xl:text-3xl">
        {{ props.title }}
      </div>
      <div class="flex justify-end">
        <div class="font-lato flex flex-col gap-3 sm:flex-row">
          <div
            v-for="{ time, amount } in props.price"
            :key="time"
            class="min-w-32 rounded-full border border-black px-3 py-1 text-center text-sm"
          >
            {{ time }} min - {{ amount }} zł
          </div>
          <button
            type="button"
            :class="{ ['bg-[#ccd8d5]']: !props.dark, ['bg-white']: props.dark }"
            class="min-w-32 rounded-full py-1 text-center text-sm"
            @click="emit('update:modelValue', !modelValue)"
          >
            rozwiń szczegóły
          </button>
        </div>
      </div>
    </div>
    <Collapse as="section" :when="modelValue">
      <div class="mt-12 mb-6 flex flex-col gap-y-12 pl-6">
        <div class="flex flex-col-reverse gap-12 xl:flex-row">
          <div class="flex grow flex-col justify-between gap-12">
            <div>
              <slot></slot>
            </div>
            <div class="flex gap-6">
              <button
                type="button"
                :class="{ ['underline']: showIndications }"
                class="bg-como flex-1 rounded-full p-3 text-center text-sm text-white sm:min-w-44 sm:flex-none sm:text-base"
                @click="showIndications = true"
              >
                Wskazania
              </button>
              <button
                type="button"
                :class="{ ['underline']: !showIndications }"
                class="flex-1 rounded-full bg-[#820000] p-3 text-center text-sm text-white sm:min-w-44 sm:flex-none sm:text-base"
                @click="showIndications = false"
              >
                Przeciwwskazania
              </button>
            </div>
          </div>
          <div class="max-w-full shrink xl:min-w-[28rem]">
            <div
              class="relative aspect-[2/1] rounded-3xl drop-shadow-[5px_5px_10px_rgba(0,0,0,.25)] xl:aspect-[3/2]"
            >
              <v-img
                :src="image"
                :alt="`${props.title} - grafika ilustracyjna`"
              />
            </div>
          </div>
        </div>
        <Transition
          enter-active-class="transition-all duration-500 ease-out"
          leave-active-class="transition-all duration-500 ease-out"
          enter-from-class="opacity-0"
          leave-to-class="opacity-0"
          mode="out-in"
        >
          <div v-if="showIndications">
            <slot name="indications"></slot>
          </div>
          <div v-else>
            <slot name="contraindications"></slot>
          </div>
        </Transition>
      </div>
    </Collapse>
  </div>
</template>

<script setup lang="ts">
import { Collapse } from "vue-collapsed";

import type { Price } from "~~/types";

const props = withDefaults(
	defineProps<{
		dark: boolean;
		image?: string;
		title: string;
		price: Price[];
		modelValue: boolean;
	}>(),
	{
		dark: false,
		image: undefined,
	},
);
const emit = defineEmits(["update:modelValue"]);

const showIndications: Ref<boolean> = ref(true);
</script>
