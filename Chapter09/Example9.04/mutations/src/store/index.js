import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    age:39, 
    name: "Lindy"
  },
  mutations: {
    birthday(state) {
      state.age++;
    },
    fountainOfYouth(state) {
      if(state.age > 0) state.age--;
    },
    setName(state, name) {
      state.name = name;
    }
  },
  actions: {
  },
  modules: {
  }
})
