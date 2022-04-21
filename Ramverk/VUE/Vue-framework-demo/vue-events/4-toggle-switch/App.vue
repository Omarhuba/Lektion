<template>
  <div class="app">
      <button v-on:click="toggle">
        {{text}}
      </button>
  </div>
</template>

<script>
export default {
    data(){return{
        text: "ON",
    }},
    methods:{
        toggle(){
         this.text = "OFF"
        }
    }

    
}
</script>

<style>

</style>