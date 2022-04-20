<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <form @submit.prevent="login">
      <input type="text" v-model="email">
      <input type="password" v-model="password" >
      <button >Login</button>
    </form>
      <p v-if="userEmail"> Logged in as: {{userEmail}}</p>
      <button @click="listPosts">Fetch Posts</button>
      <!-- <p> Logged in as: {{userEmail}}</p> -->
      <p>{{posts}}</p>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){return{
    email : 'kendra.jacobson@yahoo.com',
    password : 'grillkorv',
  }},
  computed: {
    userEmail(){
      return this.$store.state.email
    },
    posts(){
      return this.$store.state.posts
    },
  },
  methods: {
    login(){
      this.$store.dispatch('auth', {email: this.email, password: this.password })
    },
    listPosts(){
      this.$store.dispatch('fetchPosts')
    }
  }
}
</script>
