<template>
  <div :class="`bg-${props.bgColor}`">
    <div
        class="mx-auto max-w-[90rem] py-12 px-6 md:px-20 lg:px-28 xl:px-36"
    >
      <div class="flex flex-col sm:flex-row items-center justify-around gap-6">
        <div :class="`text-${props.textColor}`" class="text-xl sm:text-2xl lg:text-3xl font-medium"><slot></slot></div>
        <div><slot name="button"></slot></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    bgColor: string;
    textColor: string;
  }>(),
  {
    bgColor: "white",
    textColor: "black",
  }
);
</script>
