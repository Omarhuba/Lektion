<template>
  <main>
      <button @click="generateclick"> Insult me!</button>
      <p class="insult" v-if="currentInsult">
          {{currentInsult.insult}}
          </p>
      <p class="play" v-if="currentInsult">
          {{currentInsult.play}}
      </p>
  </main>
</template>

<script>
import insults from './insults.json'
console.log(insults)
export default {
    data(){return{
        insults:[...insults],
        currentInsult: null
    }},
    methods:{
        generateclick(){
            let randomIndex = Math.floor(Math.random()*this.insults.length)
            this.currentInsult = this.insults[randomIndex]
            this.insults.splice(randomIndex,1 )
            if(this.insults.length == 0){
                this.insults = [...insults]
            }
        } 
    }
}
</script>

<style>

</style>