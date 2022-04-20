<template>
<div class="app">

  <div id="todo">
    <header class="header">
    <img src="./assets/teflon-panna.svg" alt="foto">
    <h1>TEFLON-Todo-App</h1>

    </header>
    <main class="main">
    <TodoList :todos="todos"
        @removeTodo="removeTodo"
        @toggle="toggleDone"
    />

    </main>
    <footer class="footer">
      <input type="text" id="inputBox" placeholder="Type your Todo here"
             v-model="inputValue"
           
      >
      <button @click="pushInput(inputValue)">Add Todo</button>
    </footer>

  </div>
</div>
</template>

<script>
import TodoList from './components/TodoList.vue';
export default {
  name:'App',
  components: {TodoList,},
  data(){return{
    todos: [
      {id: 1, content: 'köp pes', done: false},
      {id: 2, content: 'köp ipad', done: false},
      {id: 3, content: 'köp mobil', done: false}
    ],
    inputValue: ''
  }},
  methods: {
    toggleDone(item){
      console.log(item)
      if(item.done == false){
        return item.done = true;
      }else{
        return item.done = false;
      }
    },

    removeTodo(item){
      this.todos = this.todos.filter(todo => todo.id != item.id)
    },

    pushInput(inputValue){
      console.log(inputValue)

      let todoid = this.todos.length +1;
      let newTodo = {id: todoid, content: this.inputValue, done: false}
      this.todos.push(newTodo)
      this.inputValue = '';

    }
  },



}
</script>

<style lang="scss">
body{
  background-color: #eee;
}
.app{
  display:flex;
  justify-content: center;
  align-items:center;
}
#todo{
  display: flex;
  justify-content: center; 
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  padding: 2rem;
  width: 350px;
  height: 500px;
  border: 0px solid black;
  background-color: #fff;
  box-shadow: 13px 9px 21px -5px rgba(0,0,0,0.8);
  border-radius: 5px;

}
.header{
  img{
    margin-left: 90px;
    width: 140px;

  }
}
.main{
  background-color: chocolate;
}
.footer{
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 50px;
  input{
    font-size: 1.1rem;
    text-align: center;
    padding: 0.7rem;
    
  }
  button{
    font-size: 1.1rem;
    padding: 0.7rem;
    background-color: cadetblue;
    font-weight: 800;
    color: chocolate;
  }

}
</style>