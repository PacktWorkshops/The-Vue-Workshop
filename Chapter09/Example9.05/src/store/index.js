import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books:[]
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    }
  },
  actions: {
    loadBooks(context) {
      fetch('https://api.jsonbin.io/b/5dd318e22e22356f234dea21')
      .then(res => res.json())
      .then(res => {
        context.commit('setBooks', res);
      });
    }
  }
})
