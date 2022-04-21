<template>
  <div class="app">
      <input v-model="showText" 
             type="text" 
             placeholder="type some text"
             v-bind:class="{error}"
             >
      <p class="error" v-if="error">Text must be grillkorv</p>
      <p>{{showText}}</p>
      <p v-if="showText.length == 0">What type you will be here</p>
      <button @click="send">SEND</button>
  </div>
</template>

<script>

export default {
    name:'App',
    data(){return{
        showText:'',
        error: false,
    }},
    methods:{
        send(){
            if(this.showText != 'grillkorv'){
                this.error =  true
            }else{
                this.error = false
            }
        }
    }
}
</script>

<style>
p.error{
    color: red;

}
input.error{
    border: 2px solid red;
}
</style>