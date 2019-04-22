import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import HeroList from './views/HeroList.vue'
import HeroDetail from './views/HeroDetail.vue'

Vue.use(Router)

export default new Router({
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
      component: HeroList
    },
    {
      path: '/heroi/:id',
      name: 'heroDetail',
      component: HeroDetail
    }
  ]
})
