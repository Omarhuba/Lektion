<template>

<div class="app">
    <Number @press="addNumber" />
    <h1>{{ number }}</h1>
    <div class="icon">

     <!-- <MaterialIcon/> -->
    </div>
</div>
</template>

<script>
import Number from "./Number.vue";
// import MaterialIcon from "./Number.vue";

export default {
  components: {Number, },
  data() {
    return {
      number: "",
    }},
    methods:{
        addNumber(symbol){
            // console.log(symbol)
            this.number += symbol
            }
        }
    }

</script>

<style >
.app{
    width: 300px;
    height: 500px;
    background-color: aquamarine;
}

</style>