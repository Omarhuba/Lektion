<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{todo}}
      </li>
    </ul>
    <input type="text" v-model="content">
    <button @click="uppdate">Add Todo</button>
    <button @click="hideDone">Hide Done</button>
  </div>
</template>

<script>
export default {
  data(){return{
    content: ''
  }},
  methods:{
    uppdate(){
      this.$store.commit('addTodo', this.content)
    },
    hideDone(){
      this.$store.commit('hideDone')
    }
  },
  computed:{
    todos(){
      return this.$store.getters.activTodos
    }
  }

}
</script>

<style>

</style>
