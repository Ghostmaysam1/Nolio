import { type RouteRecordRaw } from "vue-router";

// Pages
import Login from '@/pages/login/Login.vue'
import Redirect from '@/pages/redirect/Redirect.vue';

const routes: Array<RouteRecordRaw> = [
    {
        name: 'redirect',
        path: '/',
        component: Redirect,
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
];


export default routes;