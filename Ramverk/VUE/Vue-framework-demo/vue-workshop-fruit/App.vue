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
        {{ newFruit }}
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
    };
  },
  methods: {
    addFruit(ListFruit) {
      this.newFruits.push(ListFruit);
    },
  },
};
</script>

<style>
</style>