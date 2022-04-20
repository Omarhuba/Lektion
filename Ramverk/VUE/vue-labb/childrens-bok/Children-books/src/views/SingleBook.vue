<template>
  <div>
    <h1>singlebook</h1>
    
  </div>
</template>

<script>

export default {

}
</script>

<style>

</style>

findBook(){
  this.books.find(book => book.Title == this.$router.params)
}