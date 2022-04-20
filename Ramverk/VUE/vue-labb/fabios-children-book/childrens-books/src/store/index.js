import Vue from 'vue'
import Vuex from 'vuex'
import books from '@/assets/books.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   books: [...books],
   readingList:[],

  },
  mutations: {
    pushToReadList(state,book){
    // console.log("hello")
      
      state.readingList.push(book)
      console.log(book)
      
    }

  },

})
