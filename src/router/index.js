import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login'
import Home from '../components/Home'
import Welcome from '../components/Welcome'
import Users from '../components/user/users'
import Rights from '../components/power/Rights'
import Roles from '../components/power/Roles.vue'
import Cate from '../components/goods/Cate'
import Params from '../components/goods/Params.vue'
import GoodsList from '../components/goods/List.vue'
import Add from '../components/goods/Add.vue'
import Order from '../components/order/Order.vue'
Vue.use(VueRouter)



const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      redirect: '/Welcome',
      children: [{
          path: '/Welcome',
          component: Welcome
        },
        {
          path: '/users',
          component: Users
        },
        {
          path:'/rights',
          component:Rights
        },
        {
          path:'/roles',
          component:Roles
        },
        {
          path:'/categories',
          component:Cate
        },
        {
          path:'/params',
          component:Params
        },
        {
          path:'/goods',
          component:GoodsList
        },
        {
          path:'/goods/add',
          component:Add
        },
        {
          path:'/orders',
          component:Order
        }
      ]
    },
  ]

})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')

  if (!tokenStr) return next('/login')
  next()
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
