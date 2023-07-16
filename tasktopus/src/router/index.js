import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'tasktopus',
    component: () => import('../app/app.vue'),
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: () => import('../app/pages/dashboard/main.vue'),
        children: [
          {
            path: '/create-new',
            name: 'create_new',
            component: () => import('../app/pages/dashboard/create_task.vue')
          }
        ]
      },
      {
        path: '/collaborations',
        name: 'collaborations',
        component: () => import('../app/pages/collaborations/main.vue')
      },
      {
        path: '/messages/:id',
        name: 'messages',
        component: () => import('../app/pages/messages/messages.vue')
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
        component: () => import('../app/pages/profile/main.vue'),
        children: [
          {
            path: ':id/general-info/',
            name: 'general_info',
            component: () => import('../app/pages/profile/general_info.vue')
          },
          {
            path: ':id/timeline',
            name: 'timeline',
            component: () => import('../app/pages/profile/timeline.vue')
          },
          {
            path: ':id/teams',
            name: 'teams',
            component: () => import('../app/pages/profile/teams.vue')
          },
          {
            path: ':id/collabos',
            name: 'collabos',
            component: () => import('../app/pages/profile/collabos.vue')
          },
          {
            path: ':id/projects',
            name: 'projects',
            component: () => import('../app/pages/profile/projects.vue')
          },
          {
            path: ':id/daily-schedule',
            name: 'schedule',
            component: () => import('../app/pages/profile/daily_schedule.vue')
          },
        ]
      },
      {
        path: '/settings',
        name: 'settings',
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
