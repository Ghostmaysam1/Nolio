<script setup lang="ts">
type Width = number | "full";
type Height = Width;
const {text, w, h} = defineProps<{text: string, w: Width, h: Height}>();
</script>

<template>
    <button :class="`w-[${w}] h-[${h}px] bg-secondary text-text`">{{ text }}</button>
</template>