import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formData: {
      name: '',
      occupation: '',
      organisation: ''
    }
  },
  mutations: {
    profileUpdate(state, payload) {
      state.formData = {
        name: payload.name || '',
        occupation: payload.occupation || '',
        organisation: payload.organisation || '',
      }
    },
    profileClear(state) {
      state.formData = {
        name: '',
        occupation: '',
        organisation: ''
      }
    }
  }
})
