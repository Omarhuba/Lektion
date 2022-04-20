<template>
  <div class="home">
    <form action="form">
      <input type="text" v-model="email" placeholder="User Email">
      <input type="password" v-model="password" placeholder="password">
      <button>Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){return{
    email: '',
    password: ''
  }}
}
</script>

<style>

</style>