<template>
  <div >
      <span  class="todoItem" :class="{'isDone':todos.done}">
          <input type="checkbox" name="done" class="checkbox" @click="$emit('toggle') ">
      <p>{{todos.content}}</p>
          <img src="../assets/delete.svg" @click="$emit('removeTodo')" class="delete">  
      </span>
  </div>
</template>

<script>
export default {
    name:'todo-item',
    props: ['todos']
}
</script>

<style scoped lang="scss">
.todoItem{
    display: flex;
    justify-content: space-between;
    justify-content: space-between;
    width: 350px;
    height: 50px;
    margin: 10px;
    background-color: #eee;
    border-radius: 10px;
      img{
        width: 30px;
        height: 30px;
        margin: 10px ;
    }
}

.isDone{
    text-decoration: line-through;
     color: gray;
}
.checkbox{
    cursor: pointer;
    width: 20px;
    height: 20px;
    margin:15px 0 0 20px;
    border-radius: 50%;
}
</style>