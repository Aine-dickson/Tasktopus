import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../app/auth/main.vue'),
    children: [
      {
        path: '/create-account',
        name: 'signup',
        meta: {
          authGuarded: false
        },
        component: () => import('../app/auth/signup.vue')
      },
      {
        path: '/login',
        name: 'login',
        meta: {
          authGuarded: false
        },
        component: () => import('../app/auth/login.vue')
      },
      {
        path: '/reset-password',
        name: 'forgot_password',
        meta: {
          authGuarded: false
        },
        component: () => import('../app/auth/f_pass.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'tasktopus',
    component: () => import('../app/app.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          authGuarded: true
        },
        component: () => import('../app/pages/dashboard/main.vue'),
        children: [
          {
            path: '/create-new',
            name: 'create_new',
            meta: {
              authGuarded: true
            },
            component: () => import('../app/pages/dashboard/create_task.vue')
          }
        ]
      },
      {
        path: '/collaborations',
        name: 'collaborations',
        meta: {
          authGuarded: true
        },
        component: () => import('../app/pages/collaborations/main.vue')
      },
      {
        path: '/messages/:id',
        name: 'messages',
        meta: {
          authGuarded: true
        },
        component: () => import('../app/pages/messages/messages.vue')
      },
      {
        path: '/calendar',
        name: 'calendar',
        meta: {
          authGuarded: true
        },
        component: () => import('../app/pages/calendar/main.vue')
      },
      {
        path: '/notifications',
        name: 'noti',
        meta: {
          authGuarded: true
        },
        component: () => import('../app/pages/notifications/main.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        meta: {
          authGuarded: true
        },
        component: () => import('../app/pages/profile/main.vue'),
        children: [
          {
            path: ':id/general-info/',
            name: 'general_info',
            meta: {
              authGuarded: true
            },
            component: () => import('../app/pages/profile/general_info.vue')
          },
          {
            path: ':id/timeline',
            name: 'timeline',
            meta: {
              authGuarded: true
            },
            component: () => import('../app/pages/profile/timeline.vue')
          },
          {
            path: ':id/teams',
            name: 'teams',
            meta: {
              authGuarded: true
            },
            component: () => import('../app/pages/profile/teams.vue')
          },
          {
            path: ':id/collabos',
            name: 'collabos',
            meta: {
              authGuarded: true
            },
            component: () => import('../app/pages/profile/collabos.vue')
          },
          {
            path: ':id/projects',
            name: 'projects',
            meta: {
              authGuarded: true
            },
            component: () => import('../app/pages/profile/projects.vue')
          },
          {
            path: ':id/daily-schedule',
            name: 'schedule',
            meta: {
              authGuarded: true
            },
            component: () => import('../app/pages/profile/daily_schedule.vue')
          },
        ]
      },
      {
        path: '/settings',
        name: 'settings',
        meta: {
          authGuarded: true
        },
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
