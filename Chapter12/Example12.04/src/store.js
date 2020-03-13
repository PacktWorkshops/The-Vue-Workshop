import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dismissedSubscribeBanner: false
  },
  mutations: {
    dismissSubscribeBanner(state) {
      state.dismissedSubscribeBanner = true
    }
  }
})
