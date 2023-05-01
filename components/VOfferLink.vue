<template>
  <NuxtLink
    :to="to"
    :class="{ ['text-como']: isActive, ['text-[#A6A6A6]']: !isActive }"
    class="font-lato text-lg sm:text-xl lg:text-2xl"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to: string;
    active?: boolean;
  }>(),
  {
    active: false,
  }
);

const route = useRoute();
const isActive = computed(() => {
  const { category } = route.query;
  if (category) {
    return props.to.indexOf(category.toString()) !== -1;
  }
  return props.active;
});
</script>
