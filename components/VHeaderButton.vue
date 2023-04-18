<template>
  <a
    :href="to"
    class="inline-block rounded-full bg-silver-tree px-12 py-4 lg:px-14 xl:py-6 xl:px-16"
  >
    <div
      class="font-lato text-xl font-medium text-white md:text-2xl lg:text-3xl"
    >
      <slot></slot>
    </div>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  to: string;
}>();
</script>
