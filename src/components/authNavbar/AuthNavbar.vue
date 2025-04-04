<script setup lang="ts">
import { computed } from "vue";
import  authStore from "@/store/auth";

const useAuthS = authStore();

const isLogin = computed(() => {
    return useAuthS.mode == "login";
});
</script>

<template>
    <div class="w-full flex justify-between">
        <div>
            <img src="@/assets/icons/settings.svg" alt="settings" class="" />
        </div>
        <div>
            <div @click="useAuthS.toggleMode"
                class="flex items-center justify-center gap-1 w-[92px] h-[40px] bg-secondary rounded-[999px] text-text">
                <div v-if="!isLogin" >
                    <img src="@/assets/icons/chevron-left.svg" alt="">
                </div>
                <div>
                    <p v-if="!isLogin">Login</p>
                    <p v-else>Sign up</p>
                </div>
            </div>
        </div>
    </div>
</template>
