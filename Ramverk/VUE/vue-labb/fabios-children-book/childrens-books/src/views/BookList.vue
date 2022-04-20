<template>
  <div>
      <!-- <BookCover v-for="book in books" :key="book.id" :book="book"/> -->
      <h1>BookList</h1>
      <router-link :to="'/singlebook/'+book.id" v-for="book in books" :key="book.id" :books="books"> {{book.Title}}<br>{{book.Author}}</router-link>
  </div>
</template>

<script>
// import books from '../assets/books.json'
// import BookCover from '../components/BookCover.vue'
export default {
    // components: {BookCover},
    // data(){
    //   return{
    //     books: [...books]
          computed:{
            books(){
              return this.$store.state.books
            }
          }
    // }
    // }

}
</script>

<style>

</style>