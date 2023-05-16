<template>
  <div
    :class="{ ['bg-red-600']: isError, ['bg-como']: !isError }"
    class="mt-6 rounded-3xl p-6 text-center"
  >
    <span class="text-base font-medium text-white"><slot></slot></span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    kind: string;
  }>(),
  {
    kind: "success",
  }
);

const isError = computed(() => props.kind === "error");
</script>
