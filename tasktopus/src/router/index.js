import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../app/app.vue'),
    children: [
      
    ]
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;
