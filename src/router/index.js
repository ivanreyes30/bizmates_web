import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Weather from '../views/Weather.vue'
import WeatherInfo from '../views/WeatherInfo.vue'
import Venues from '../views/Venues.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/weather',
    name: 'Weather',
    component: Weather
  },
  {
    path: '/weather/info',
    name: 'WeatherInfo',
    component: WeatherInfo
  },
  {
    path: '/venues',
    name: 'Venues',
    component: Venues
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
