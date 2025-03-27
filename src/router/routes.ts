import { type RouteRecordRaw } from "vue-router";

// Pages
// import Dashboard from '@pages/dashboard/Dashboard.vue';
// import Login from '@pages/login/Login.vue'
// import SignUp from '@pages/signup/SignUp.vue';
import Redirect from '../pages/redirect/Redirect.vue';

const routes: Array<RouteRecordRaw> = [
    {
        name: 'redirect',
        path: '/',
        component: Redirect,
    },
    // {
    //     name: 'dashboard',
    //     path: '/dashboard',
    //     component: <Dashboard />,
    // },
    // {
    //     name: 'login',
    //     path: '/login',
    //     component: <Login />
    // },
    //     name: 'sign up',
    //     path: '/signup',
    //     component: <SignUp />
    // },
];


export default routes;