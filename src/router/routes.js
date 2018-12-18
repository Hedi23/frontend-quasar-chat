
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('components/Login.vue') }
    ]
  },
  {
    path: '/chat',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('components/Chat/ChatContainer.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('components/Error404.vue')
  })
}

export default routes
