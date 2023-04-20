<template>
    <div>
        <div
            class="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl"
        >
            <slot></slot>
        </div>
        <div><slot name="under"></slot></div>
    </div>
</template>
