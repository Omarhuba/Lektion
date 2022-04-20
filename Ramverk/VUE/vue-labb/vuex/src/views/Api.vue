<template>
  <div class="api">
      <h1>This is Api</h1>
      <form @submit.prevent="create">
          <input type="text" v-modul="post.title" placeholder="id">
          <input type="text" v-modul="post.content" placeholder="content" >
          <button @click="getPost">Create Post</button>
      </form>
  </div>
</template>

<script>
export default {
    data(){return{
        post:{
            content: '',
            title: '',

        }
    }},
    methods:{
        getPost(){
            console.log('get post')
        }
    }

}
</script>

<style>

</style>