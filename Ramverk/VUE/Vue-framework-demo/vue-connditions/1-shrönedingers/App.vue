<template>
  <div class="app">
      <img v-if="show > 0.5"  src="./bild/frontend.png" alt=""/>
      <img v-else-if="show < 0.5" src="./bild/backend.jpeg" alt=""/>
      <img @click="checkBox" v-else src="./bild/box.jpeg" alt="foto"/>
      <!--om man ska använda --> 
      <!-- <img v-if="show > 0.5"  v-bind:src="frontend" alt=""/>
      <img v-else-if="show < 0.5" v-bind:src="backend" alt=""/> -->
  </div>
</template>

<script>

export default {
    data(){return{
        show: "tommm",
        // frontend: './bild/frontend.png',
        // backend: './bild/backend.jpeg'
        // frontend: 'https://miro.medium.com/max/1400/1*Y4Td-XMRtuFAW_8CpO7KyA.png',
        // backend: 'https://jobsinsweden.se/wp-content/uploads/2020/09/backend-development.png'
    }},
    methods:{
        checkBox(){
            this.show = Math.random()
        },
        
    }
}
</script>

<style>

</style>