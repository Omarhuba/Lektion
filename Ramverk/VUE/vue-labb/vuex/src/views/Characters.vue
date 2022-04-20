<template>
  <div class="home">
  <button @click="getCharacters"> Fetch SW Characters</button>
  <ul>
    <li v-for=" char in characters" :key="char.name">
      {{char.name}}
    </li>
  </ul>
  </div>
</template>

<script>

export default {
  name: 'Home',
  // data(){return{
  //   characters: []
  // }},
  methods: {
  //  getChar(){
  //    this.$store.state.characters
  //  },
   async getCharacters(){
     await this.$store.dispatch('fetchChar')
   }
  },
  computed:{
    characters(){
      return this.$store.state.characters
    },

  }
  }
</script>
