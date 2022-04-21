<template>
  <div class="app">
      <ul>
          <li v-for="item in list" 
              v-bind:key="item"
              @click="log(item)" >
              
             {{item}} 
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){return{
    list:['apple','banan','orange','päron']

    }},
    methods:{
        log(value){
            console.log(value)
        }
    }
}
</script>

<style>

</style>