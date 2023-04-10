import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'auth',
    component: () => import('@/auth/auth.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/auth/login.vue'),
      },
      {
        path: '/signup',
        name: 'signup',
        component: () => import('@/auth/signup.vue'),
      },
      {
        path: '/forgot password',
        name: 'passwordManager',
        component: () => import('@/auth/passwordManager.vue'),
      },
    ]
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main.vue'),
    children: [
      {
        path: '/home',
        name: 'overview',
        component: () => import('@/views/pages/overview.vue')
      },
      {
        path: '/project',
        name: 'project',
        component: () => import('@/views/pages/project.vue')
      },
      {
        path: '/messages',
        name: 'msg',
        component: () => import('@/views/pages/messages.vue')
      },
      {
        path: '/my-tasks',
        name: 'mytasks',
        component: () => import('@/views/pages/mytasks.vue')
      },
      {
        path: '/notifications',
        name: 'noti',
        component: () => import('@/views/pages/notification.vue')
      },
      {
        path: '/settings',
        name: 'settings',
        component: () => import('@/views/pages/settings.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
