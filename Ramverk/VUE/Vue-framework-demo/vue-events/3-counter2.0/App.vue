<template>
  <div>
      <h1>räknare</h1>
      <p>{{counter}}</p>
      <button v-on:click="show">räknare</button>
  </div>
</template>

<script>
export default {
    data(){return{
        counter: 10,
    }},
    methods:{
        show(){
            if(this.counter>0){
                this.counter--

            }
        
        }
    }
}
</script>

<style>

</style>