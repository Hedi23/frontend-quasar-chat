import Vue from 'vue'
import Vuex from 'vuex'
import feathersVuex from 'feathers-vuex'
import feathersClient from './feathers-api'
const { service, auth, FeathersVuex } = feathersVuex(feathersClient, {
  idField: '_id'
})

Vue.use(Vuex)
Vue.use(FeathersVuex)

const store = new Vuex.Store({
  plugins: [
    service('users', {
      addOnUpsert: true,
      replaceItems: true,
      idField: '_id',
      instanceDefaults: {
        email: '',
        password: ''
      }
    }),
    service('messages', {
      addOnUpsert: true,
      replaceItems: true,
      idField: '_id',
      instanceDefaults: {
        message: '',
        userId: ''
      }
    }),
    auth({
      userService: 'users'
    })
  ],
  state: {}
})
export default store
