import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // Same as data
  state: {
    bookList: ['Book 1', 'Book 2', 'Book 3']
  },
  mutations: {
    ADD_Book(state,payload){
      console.log(payload);
    }
  },
  // Same as computed
  getters: {

  },
  // same as methods
  actions: {
    addBook(context,payload){
      context.commit('ADD_Book', payload)
    }
  },

})
export default store