import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // token: null,
    email: null,
    posts: [],
  },
  mutations: {
    saveAuthData(state, authData){
      // state.token = authData.token,
      state.email = authData.email
    },
    savePosts(state, posts){
      state.posts = posts
    }
  },
  actions: {
   async auth(context, credentials){
      const response = await API.login(credentials.email, credentials.password)
      API.saveToken(response.data.token)

      context.commit('saveAuthData', response.data)
    },
   async fetchPosts(context){
      const response = await API.getPosts(context.state.token)

      context.commit('savePosts', response.data )
    }
  },
  getters: {

  },
  modules: {
  }
})
