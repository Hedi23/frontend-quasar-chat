import Vue from 'vue'
import Vuex from 'vuex'
import feathersVuex from 'feathers-vuex'
import feathersClient from './feathers-api'
const { service, auth, FeathersVuex } = feathersVuex(feathersClient, {
  idField: '_id'
})

Vue.use(Vuex)
Vue.use(FeathersVuex)

export default new Vuex.Store({
  plugins: [
    service('users'),
    service('messages'),

    auth({
      userService: 'users'
    })
  ],
  state: {}
})
