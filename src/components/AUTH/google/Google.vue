<script setup lang="ts">
console.log('Google button loaded');
</script>

<template>
    <div class="w-[270px] h-[45px] bg-white relative flex items-center overflow-hidden pointer-events-none justify-center rounded-4xl border border-black/80">
        <img class="left-[7px] absolute" src="@/assets/icons/google-icon.svg">
        <h3 class="text-[20px]">Sign in with google</h3>
        <span class="absolute left-0 top-0 w-full h-full bg-white/50 z-50"></span>
    </div>
</template>