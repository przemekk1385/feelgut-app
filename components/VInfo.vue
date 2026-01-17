<template>
  <Transition
    enter-active-class="transition-all duration-500 ease-out"
    leave-active-class="transition-all duration-500 ease-out"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="modelValue"
      class="fixed top-0 left-0 z-20 w-full px-6 md:px-12 lg:px-24 xl:px-36"
    >
      <div
        :class="{ ['bg-teal-700']: !isError, ['bg-rose-700']: isError }"
        class="flex items-center rounded-b-3xl p-6 text-center text-white drop-shadow-[5px_5px_10px_rgba(0,0,0,.25)]"
      >
        <div class="font-lato flex-1 text-lg font-semibold">
          <slot></slot>
        </div>

        <button class="shrink" type="button" @click="close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		isError?: boolean;
		modelValue: boolean;
	}>(),
	{
		isError: false,
	},
);
const emit = defineEmits(["update:modelValue"]);
const close = () => emit("update:modelValue", false);
</script>
