<template>
<body>
    
  <div class="app">
      <form action=""
        @submit.prevent="checkLogin"
        @keypress="error = false">
          <label for="">User Name:</label><br>
          <input type="text" 
                 name="username" 
                 placeholder="type your name here"
                 v-model="user">
          <br>
          <br>
          <label for="">Password:</label><br>
          <input type="password" 
                 name="password" 
                 placeholder="type your password here"
                 v-model="pass"><br>
          <br>
          <button>Login</button>
          <div class="text">
            <h4 v-if="error">Error: Wrong use rname or password</h4>
            <h3 v-if="login">Login is successfully and this is a secret view for users.!</h3>

          </div>
      </form>
  </div>
</body>
</template>

<script>
export default {
    data(){return{
        username: 'iths',
        password: '123',
        user: '',
        pass: '',
        error: false,
        login: false,

    }},
    methods:{
        checkLogin(){
            if( this.user === this.username && this.pass === this.password){
                this.login = true,
                this.error = false
            }else{
                this.login = false,
                this.error = true
                console.log('dasdasdaasdasdasdassssssaaaaa')
            }
        }
    }

}
</script>

<style>
body{
    background-color: #ccc;
}
.app{
    width: 300px;
    height: 400px;
    background-color: cadetblue;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}
.text{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem
}
h4{
    color: red;
    text-align: center;

}
h3{
    color: seashell;
    text-align: center;
}
</style>