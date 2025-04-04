<script setup lang="ts">
import AuthNavbar from '@/components/authNavbar/AuthNavbar.vue';
import AuthLogo from '@/components/authLogo/AuthLogo.vue';
import Google from '@/components/google/Google.vue';
import Gap from '@/components/gap/Gap.vue';

import { RouterLink } from 'vue-router';
import authStore from '../../store/auth';

const useAuthS = authStore();
</script>

<template>
    <div
        class="@container flex flex-col items-center gap-[10px] font-radio bg-main w-full h-[100vh] px-[26px] py-[15px]">
        <AuthNavbar />
        <AuthLogo />
        <Gap :size="20" />
        <template v-if="useAuthS.mode == 'login'">
            <Gap :size="20" />
            <Gap :size="20" />
        </template>
        <div class="flex w-full flex-col gap-[30px]">
            <slot name="inputs">
            </slot>
        </div>
        <Gap :size="10" />
        <Google />
        <Gap :size="20" />
        <p class="w-[258px] text-center">By using this program, you confirm that you have read and accepted the
            <RouterLink class="text-link" to="#">terms and conditions</RouterLink>
        </p>
    </div>
</template>