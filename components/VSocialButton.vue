<template>
  <a
    :href="props.href"
    class="from-supernova via-sahara to-mimosa block rounded-full bg-gradient-to-r p-[2px]"
  >
    <div
      class="bg-como flex size-full items-center justify-center rounded-full p-2"
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
