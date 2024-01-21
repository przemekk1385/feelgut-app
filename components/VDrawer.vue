<template>
  <div class="z-10">
    <Transition>
      <v-drawer-btn v-if="!show" @click="show = !show" />
    </Transition>
    <Transition name="slide">
      <div v-if="show" class="absolute right-0 top-0 flex h-full">
        <v-drawer-btn @click="show = !show" />
        <div
          class="relative flex h-full min-h-[15rem] w-48 items-center justify-center sm:min-h-[25rem]"
        >
          <div
            class="absolute size-full rounded-bl-3xl bg-como opacity-80"
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
