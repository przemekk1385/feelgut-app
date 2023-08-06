<template>
  <div
    class="relative aspect-[3/2] overflow-hidden rounded-[10%/15%] drop-shadow-[5px_5px_10px_rgba(0,0,0,.25)]"
  >
    <NuxtImg
      :src="src"
      :alt="props.alt"
      loading="lazy"
      quality="70"
      sizes="xs:100vw sm:100vw md:50vw lg:50vw xl:25vw"
      class="h-full w-full object-cover"
    />

    <div v-if="$slots.default" class="absolute right-0 top-0 h-full p-4">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    alt?: string;
    src?: string;
  }>(),
  {
    alt: "Grafika ilustracyjna",
    src: undefined,
  },
);

const src = computed<string>(() => props.src || "/images/offer-card.jpg");
</script>
