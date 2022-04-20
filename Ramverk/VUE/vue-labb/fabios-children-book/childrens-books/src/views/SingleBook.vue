<template>
  <div>
    <h1>singlebook</h1>
    <p>{{book}}</p>
    <button @click="sendToReadList">Send To ReadingList</button>
    
  </div>
</template>

<script>

export default {
  data(){
    return{
      // newArr:[]

    }
  },

computed:{
    book(){
     return this.$store.state.books.find(book => book.id == this.$route.params.id)
  }
},
methods:{
  sendToReadList(){
    // let newArr=[]
    this.$store.commit('pushToReadList', this.book)
    // this.newArr.push(this.book)
    // console.log(this.newArr)
  }
}
}
</script>

<style>

</style>

// findBook(){
//   this.books.find(book => book.Title == this.$router.params)
// }