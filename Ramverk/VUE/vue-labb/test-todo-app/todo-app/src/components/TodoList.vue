<template>
  <div>
     <TodoItem v-for="item in todos" :key="item.id" :todos="item"
               @toggle="$emit('toggle', item)"
               @removeTodo="$emit('removeTodo',item)"/> 
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
name:'todo-list',
props:['todos'],
components: {TodoItem}
}
</script>

<style>

</style>