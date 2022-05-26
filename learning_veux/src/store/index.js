import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // Same as data
  state: {
    bookList: ['Book 1', 'Book 2', 'Book 3']
  },
  getters: {
    totalBook(state){
      return state.bookList.length;
    }
  },
  mutations: {
    ADD_Book(state,payload){
      state.bookList.push(payload);
    },
    Delete_Book(state, index) {
      state.bookList.splice(index,1)
    }
  },
  // Same as computed
  getters: {

  },
  // same as methods
  actions: {
    addBook(context,payload){
      context.commit('ADD_Book', payload)
    },
    removeBook({ commit }, index) {
      commit('Delete_Book',index)
    }
  },

})
export default store