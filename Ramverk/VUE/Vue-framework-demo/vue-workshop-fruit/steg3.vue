<template>
  <div class="app">
    <p>List-1</p>
    <ul>
      <button 
        v-for="fruit in fruits" 
        v-bind:key="fruit" 
        v-on:click="addFruit(fruit)"
        >
        {{ fruit }}
      </button>
    </ul>
    <p>List-2</p>
    <ul>
      <li v-for="newFruit in newFruits" v-bind:key="newFruit">
        {{ newFruit.quantity }} St {{newFruit.fruitName}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: [
          "apple", 
          "päron", 
          "orange", 
          "banan", 
          "mango"
          ],
      newFruits: [],
      addThisFruit: "",
      i: null,
    };
  },
  methods: {
    addFruit(ListFruit) {
      let matchedFruit = this.newFruits.find(fruit1 => fruit1.fruitName == ListFruit)
      if(matchedFruit){
          matchedFruit.quantity += 1
      }else{
          this.newFruits.push({quantity:1 , fruitName:ListFruit})
      }
    
    },
  },
};
</script>

<style>
</style>