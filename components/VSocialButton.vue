<template>
  <a
    :href="props.href"
    class="block rounded-full bg-gradient-to-r from-supernova via-sahara to-mimosa p-[2px]"
  >
    <div
      class="flex h-full w-full items-center justify-center rounded-full bg-como p-2"
    >
      <img :src="props.src" :alt="props.alt" class="h-full" />
    </div>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  alt: string;
  src: string;
  href: string;
}>();
</script>
