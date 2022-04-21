<template>
  <div class="color-picker" :style="{backgroundColor: color}">
      <span class="container">
      <input type="text" 
             placeholder="Type some color here"
             v-model="color">
             <ul class="matching">
                 <li v-for="match in matckningColor" 
                     :key="match"
                     @click="color = match"
                     >{{match}}</li>
             </ul>
      </span>
  </div>
</template>

<script>
import colors from './colors.json'
  

export default {
    data(){return{
        color: '',
        colors: [...colors],
    }},
    computed:{
        matckningColor(){
            return this.colors.filter(color => 
            color.toLowerCase().includes(this.color.toLowerCase()))
        }
    }
}
</script>

<style>
html,body, .color-picker{
    height: 100%;
}
.color-picker{
    display: grid;
    place-items: center;
}
input{
    font-size: 1rem;
    padding: 0.3rem;
}
.container{
    position: relativ;
}
ul{
    position: absolute;
}
</style>