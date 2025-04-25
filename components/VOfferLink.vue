<template>
  <NuxtLink
    :to="{ path: route.path, query: { category } }"
    :class="{ ['text-como']: isActive, ['text-[#A6A6A6]']: !isActive }"
    class="font-lato text-lg sm:text-xl lg:text-2xl"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    active?: boolean;
    category: string;
  }>(),
  {
    active: false,
  },
);

const route = useRoute();
const isActive = computed(
  () => props.category === route.query.category.toString(),
);
</script>
