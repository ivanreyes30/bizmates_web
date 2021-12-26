import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Weather from '../views/Weather.vue'
import WeatherInfo from '../views/WeatherInfo.vue'
import Venues from '../views/Venues.vue'
import VenuesInfo from '../views/VenuesInfo.vue'
import PageNotFound from '../views/PageNotFound.vue'

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
    path: '/venues/info',
    name: 'VenuesInfo',
    component: VenuesInfo
  },
  { 
    path: "*", 
    component: 
    PageNotFound 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
