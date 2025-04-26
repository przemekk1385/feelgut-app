<template>
  <NuxtLink
    :href="props.to"
    class="from-supernova via-sahara to-mimosa mx-auto inline-block rounded-full bg-gradient-to-r p-[2px] font-medium"
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
		textColor?: string;
		to: string;
	}>(),
	{
		bgColor: "white",
		textColor: "black",
	},
);
</script>
