import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
Vue.use(VueRouter);

const routes: RouteConfig[] = [
{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    redirect: '/articles',
    children: [
        {
            path: '/articles',
            name: 'Articles',
            component: () => import('../views/Articles.vue'),
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../views/About.vue'),
        },
        {
            path: '/frame',
            name: 'Frame',
            component: () => import('../views/Frame.vue'),
        },
        {
            path: '/project',
            name: 'Project',
            component: () => import('../views/Project.vue'),
        },
        {
            path: '/reprinted',
            name: 'Reprinted',
            component: () => import('../views/Reprinted.vue'),
        },
        {
            path: '/openSource',
            name: 'OpenSource',
            component: () => import('../views/OpenSource.vue'),
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../views/About.vue'),
        },
        ],
    },
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;
