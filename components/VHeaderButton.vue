<template>
  <NuxtLink
    :to="to"
    class="inline-block rounded-full bg-[#55B99A] px-12 py-4 lg:px-14 xl:px-16 xl:py-6"
  >
    <div
      class="font-lato text-xl font-medium text-white md:text-2xl lg:text-3xl"
    >
      <slot></slot>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  to: string;
}>();
</script>
