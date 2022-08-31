
const routes = [
  {
    path: '/',
    component: () => import('src/pages/Landing.vue')
  },
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') },
      { path: '/people', component: () => import('pages/People.vue') }
    ]
  },

  // 404 not found
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
