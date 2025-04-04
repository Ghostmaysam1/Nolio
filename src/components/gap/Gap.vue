<script setup lang="ts">
const {size} = defineProps<{size: number}>();
</script>

<template>
    <div :class="`w-full h-[${size}px] bg-transparent`"></div>
</template>