import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formData: {
      name: '',
      occupation: '',
      organisation: '',
      email: '',
      phone: '',
    }
  },
  mutations: {
    profileUpdate(state, payload) {
      state.formData = {
        name: payload.name || '',
        occupation: payload.occupation || '',
        organisation: payload.organisation || '',
        email: payload.email || '',
        phone: payload.phone || '',
      }
    },
    profileClear(state) {
      state.formData = {
        name: '',
        occupation: '',
        organisation: '',
        email: '',
        phone: '',
      }
    }
  }
})
