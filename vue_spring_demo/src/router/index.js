import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Layout.vue'

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        redirect: '/login',
        children: [
            {
                path: 'home',
                name: 'Home',
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
                component: () => import("@/views/Home")
            },
            {
                path: 'admin',
                name: 'Admin',
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
                component: () => import("@/views/Admin")
            },
            {
                path: 'admin1',
                name: 'Admin1',
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
                component: () => import("@/views/Admin1")
            },
            {
                path: 'air',
                name: 'Air',
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
                component: () => import("@/views/Air"),
            },
            {
                path: 'shop/:name',
                name: 'Shop',
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
                component: () => import("@/views/Shop"),
                props: true
            },
            {
                path: 'xseats/:title/:cinema/:room/:time',
                name: 'Xseats',
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
                component: () => import("@/views/Xseats"),
                props: true
            },
            {
                path: 'person',
                name: 'Person',
                meta: {
                    requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                },
                component: () => import("@/views/Person"),
                props: true
            },

        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("@/views/Login")
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import("@/views/Register")
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    // next()
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
      if (sessionStorage.getItem('isLogin') == 'true') {
        next()
      } else {
        // 未登录，跳转到登录页面
        next('/login')
      }
    } else {
      next()
    }
  })
 

export default router
