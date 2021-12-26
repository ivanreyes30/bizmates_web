import Vue from 'vue'
import Vuex from 'vuex'
import api from '../plugins/axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: '/api',
    apiKey: '75a13e22437f7bd443df0c9d52416628a6351923dc930bf475151a93deacb584'
  },
  mutations: {
  },
  actions: {
    getVenuesInfo(context, params) {
      console.log(context)
      return new Promise(function(myResolve, myReject) {
        api().post('places/show', params).then((result) => {
          myResolve(result); 
        })
        .catch((error) => {
          myReject(error)
        })
      })
    },
    getWeatherInfo(context, params) {
      console.log(context)
      return new Promise(function(myResolve, myReject) {
        api().post('forecast/show', params).then((result) => {
          myResolve(result); 
        })
        .catch((error) => {
          myReject(error)
        })
      })
    },
  },
  modules: {
  }
})
