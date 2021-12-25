import { RouteRecordRaw } from 'vue-router';

export default [
  {
    path: '/',
    redirect: '/portfolio',
    name: 'mod-2',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'portfolio',
        name: 'portfolio',
        component: () => import('./views/Portfolio.vue'),
        meta: {
          title: 'Portfolio'
        },
      },
    ]
  }
] as RouteRecordRaw[];