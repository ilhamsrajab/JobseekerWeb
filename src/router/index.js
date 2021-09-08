import { createRouter, createWebHistory } from 'vue-router'
import HalamanLogin from '../views/HalamanLogin.vue'
import HalamanRegister from '../views/HalamanRegister.vue'
import HalamanNotFound from '../views/NotFound.vue'
import Login from '../components/FormLogin.vue'
import Daftar from '../components/FormDaftar.vue'

const routes = [
  {
    path: '/login',
    name: 'HalamanLogin',
    component: HalamanLogin
  },
  {
    path: '/login',
    name: 'FormLogin',
    component: Login
  },
  {
    path: '/login',
    name: 'FormDaftar',
    component: Daftar
  },
  {
    path: '/daftar',
    name: 'HalamanRegister',
    component: HalamanRegister
  },
  {
    path: '/:catchAll(.*)',
    component: HalamanNotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
