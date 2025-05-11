import {createRouter, createWebHistory} from 'vue-router';

const routers = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "group-user" */ '@/views/evoKids.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routers
})