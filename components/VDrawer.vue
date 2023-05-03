<template>
  <div>
    <Transition>
      <v-drawer-btn v-if="!show" @click="show = !show" />
    </Transition>
    <Transition name="slide">
      <div v-if="show" class="flex h-full">
        <v-drawer-btn @click="show = !show" />
        <div class="relative flex h-full w-48 items-center justify-center">
          <div class="absolute h-full w-full bg-como opacity-80"></div>
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
