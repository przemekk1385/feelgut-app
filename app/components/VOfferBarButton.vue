<template>
  <NuxtLink
    class="from-supernova via-sahara to-mimosa mx-auto inline-block rounded-full bg-linear-to-r p-0.5 font-medium duration-500 hover:scale-110"
    :href="props.to"
    :target="props.target"
  >
    <div
      :class="`bg-${props.bgColor} text-${props.textColor}`"
      class="rounded-full px-12 py-4 lg:px-16 xl:px-20 xl:py-6"
    >
      <div class="text-xl font-medium sm:text-2xl lg:text-3xl">
        <slot></slot>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		bgColor: string;
		target?: string;
		textColor?: string;
		to: string;
	}>(),
	{
		bgColor: "white",
		textColor: "black",
	},
);
</script>
