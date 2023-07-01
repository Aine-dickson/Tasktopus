import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'tasktopus',
    component: () => import('../app/app.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../app/pages/dashboard/main.vue'),
      },
      {
        path: '/collaborations',
        name: 'collaborations',
        component: () => import('../app/pages/collaborations/main.vue')
      },
      {
        path: '/messages',
        name: 'messages',
        component: () => import('../app/pages/messages/main.vue')
      },
      {
        path: '/calendar',
        name: 'calendar',
        component: () => import('../app/pages/calendar/main.vue')
      },
      {
        path: '/notifications',
        name: 'noti',
        component: () => import('../app/pages/notifications/main.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../app/pages/profile/main.vue')
      },
      {
        path: '/settings',
        name: 'collabos',
        component: () => import('../app/pages/settings/main.vue')
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
