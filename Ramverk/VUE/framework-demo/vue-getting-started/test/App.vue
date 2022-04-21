<template>
  <div>
      {{message}}
      <button @click="toggle">
      {{btnToggle}}
      </button>
      <button @click="counter">add</button>
      <p>{{text}}</p>
  </div>
</template>

<script>
export default {
    name:'app',
    data(){return{
        message: 'hello boy',
        btnToggle: 'Click me!',
        text: '1',
    }},
    methods:{
        toggle(){
            this.btnToggle = "omg boy"
        },
        counter(){
            if(this.text<10){
                this.text ++

            }
            console.log("")
        }
    }
}
</script>

<style>
</style>