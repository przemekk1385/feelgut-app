<template>
  <div class="z-10">
    <Transition>
      <v-drawer-button v-if="!show" @click="show = !show" />
    </Transition>
    <Transition name="slide">
      <div v-if="show" class="absolute top-0 right-0 flex h-full">
        <v-drawer-button @click="show = !show" />
        <div
          class="relative flex h-full min-h-60 w-48 items-center justify-center sm:min-h-100"
        >
          <div
            class="bg-como absolute size-full rounded-bl-3xl opacity-80"
          ></div>
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const show = ref(false);
</script>

<style type="text/css">
.v-enter-active,
.v-leave-active {
  @apply hidden;
  @apply delay-500;
}

.slide-enter-active {
  animation: slide-in 0.5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
}
@keyframes slide-in {
  from {
    transform: translateX(12rem);
  }
  to {
    transform: translateX(0);
  }
}
</style>
