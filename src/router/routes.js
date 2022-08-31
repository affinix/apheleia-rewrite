
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
      { path: '/people', component: () => import('pages/People.vue') },
      { path: '/items', component: () => import('pages/Items.vue') },
      { path: '/loans', component: () => import('pages/Loans.vue') },
      { path: '/notifications', component: () => import('pages/Notifications.vue') },
      
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/help', component: () => import('pages/Help.vue') },
      { path: '/settings', component: () => import('pages/Settings.vue') },
    ]
  },

  // 404 not found
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
