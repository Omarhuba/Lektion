<template>
  <div>
      <BookCover v-for="book in books" :key="book.Title" :book="book"/>
  </div>
</template>

<script>

import BookCover from './BookCover.vue'
export default {
    components: {BookCover},
    inject: ['books']

}
</script>

<style>

</style>