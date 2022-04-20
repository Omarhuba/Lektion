import Vue from 'vue'
import Vuex from 'vuex'


import *as api from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'kalle olofson',
    todos: [], //{id,content,done}
    showDone: true,
    characters:[],
  },
  mutations: {
    setName(state,payload){
      state.name = payload
    },
    addTodo(state, content){
      const todo ={
        id: String(Math.floor(Math.random()*Math.pow(10,10)))+Date.now(),
        content,
        done: Math.random() > 0.5
      }
      state.todos.push(todo)
    },
    hideDone(state){
      state.showDone = ! state.showDone
    },
    saveChar(state, chars){
      state.characters = chars
    }
  },
  actions: {
    async fetchChar(context){
      // console.log(context)
      const response = await fetch('http://swapi.dev/api/people/?page=2')
      const data = await response.json()
      context.commit('saveChar', data.results)
    }
  },
  modules: {
  },
  getters:{
    activTodos(state){
      if(state.showDone){
        return state.todos
      }else{
        return state.todos.filter(todo=> !todo.done)
      }
    }
  }
})
