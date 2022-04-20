<template>
<div class="number">

  <Buttons v-for="symbol in buttons" 
  :key="symbol" 
  :symbol="symbol"
  @click="$emit('press', symbol)"/>
</div>
</template>

<script>
import Buttons from './Buttons.vue'
export default {
    components:{Buttons},
    data(){return{
        buttons: [1,2,3,4,5,6,7,8,9,'*',0,'#']
    }},
}
</script>

<style scoped>
.number{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
</style>