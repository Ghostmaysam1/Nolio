<script setup lang="ts">
const {size} = defineProps<{size: number}>();
</script>

<template>
    <div class="w-full bg-transparent" :style="{height: size + 'px'}"></div>
</template>