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
        class="rounded-b-3xl p-6 text-center drop-shadow-[5px_5px_10px_rgba(0,0,0,.25)]"
      >
        <div class="font-lato text-lg font-semibold text-white">
          <slot></slot>
        </div>
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

watch(
	() => props.modelValue,
	(val: boolean) => {
		if (val) {
			setTimeout(() => emit("update:modelValue", false), 5000);
		}
	},
);
</script>