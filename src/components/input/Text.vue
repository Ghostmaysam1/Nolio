<script setup lang="ts">
import { useAttrs } from 'vue'

defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()
const attrs = useAttrs()
</script>

<template>
    <input class="w-full h-[55px] placeholder:text-text/80 bg-secondary rounded-2xl" v-bind="attrs" :value="attrs.modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
</template>
