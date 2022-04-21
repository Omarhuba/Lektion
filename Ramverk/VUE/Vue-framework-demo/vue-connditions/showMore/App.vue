<template>
  <div class="app">
      <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, quas! Voluptates, aspernatur quia illo quae voluptas, fugiat iste necessitatibus similique animi a deleniti accusantium magni cum illum itaque harum vel ad odio ipsam tempore, sapiente aliquam facere. Similique, magnam nam?
      </p>
      <p v-if="showMore">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti alias saepe aliquam eveniet at voluptatibus porro iure? Modi, assumenda? Mollitia laudantium ducimus animi voluptate. At temporibus velit perspiciatis ipsa sunt iure, doloribus, necessitatibus a obcaecati voluptatibus inventore quos est ipsum?
      </p>
      <a @click="showMore = true" v-if="!showMore" href="#">SHOW MORE</a>
      <a @click="showMore = false" v-else href="#">SHOW LESS</a>
  </div>
</template>

<script>
export default {
    name: 'App',
    data(){return{
        showMore: false
    }}
}
</script>

<style>

</style>