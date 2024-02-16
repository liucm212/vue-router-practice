import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/router',
    name: '饒特',
    component: () => import(/* webpackChunkName: "router" */ '../views/RouterView.vue')
  },
  {
    path: '/sidebar',
    name: 'sidebar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SideView.vue'),
    children: [
      {
        path: 'A',
        component: () => import('../components/ComponentA.vue')
      },
      {
        path: 'B',
        component: () => import('../components/ComponentB.vue')
      },
      {
        path: 'NamedView',
        name: 'NamedView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/NamedView.vue'),
        children: [
          {
            path: 'AtoC',
            components: {
              left: () => import('../components/ComponentA.vue'),
              right: () => import('../components/ComponentC.vue')
            }
          },
          {
            path: 'CtoB',
            components: {
              left: () => import('../components/ComponentC.vue'),
              right: () => import('../components/ComponentB.vue')
            }
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
