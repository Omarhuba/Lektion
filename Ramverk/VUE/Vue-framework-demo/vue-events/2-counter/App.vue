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
        counter: 0,
    }},
    methods:{
        show(){
            this.counter ++
        }
    }
}
</script>

<style>

</style>