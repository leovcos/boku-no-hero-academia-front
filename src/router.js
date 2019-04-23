import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import HeroList from './views/HeroList.vue'
import HeroDetail from './views/HeroDetail.vue'
import Admin from './views/Admin.vue'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cadastrar',
      name: 'cadastrar',
      component: Register
    },
    {
      path: '/herois',
      name: 'heroList',
      component: HeroList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/heroi/:id',
      name: 'heroDetail',
      component: HeroDetail,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        requiresAuth: true,
        onlyAdmin: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta && record.meta.requiresAuth)) {
    console.log(store.commit)
    if (localStorage.getItem('jwt') == null) {
      setTimeout(() => {
        next({
          name: 'home',
          params: { nextUrl: to.fullPath }
        })
      })
    } else {
      store.commit('setAuthorization', { token: localStorage.getItem('jwt') })
      let user = {}
      try {
        user = JSON.parse(localStorage.getItem('user'))
      } catch (e) {
        console.log(e)
      }
      if (to.matched.some(record => record.meta && record.meta.onlyAdmin)) {
        if (user.isAdmin === 1) {
          next()
        } else {
          next({ name: 'heroList' })
        }
      } else {
        next()
      }
    }
  } else {
    next()
  }
})

export default router
