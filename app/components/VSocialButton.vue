<template>
  <a
    :href="props.href"
    class="from-supernova via-sahara to-mimosa block rounded-full bg-linear-to-r p-0.5"
  >
    <div
      class="bg-como flex size-full items-center justify-center rounded-full p-2 text-white"
    >
      <slot></slot>
    </div>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
	href: string;
}>();
</script>
