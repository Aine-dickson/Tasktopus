import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../app/pages/home.vue'),
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../app/pages/create.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
