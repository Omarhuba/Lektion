<template>
  <div class="reading-list">
     <div class="top">
       <img @click="viewChange" src="../assets/left.png" alt="">
     </div>
     <div class="middle">
       <h1>Reading List</h1>
       <div class="container">
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, incidunt.</p>

       </div>
     </div>
  </div>
  
</template>

<script>
export default {
data(){return{

}},
methods:{
  viewChange(){
    console.log('changeview')
  }
}
}
</script>

<style lang="scss" >

.reading-list{
  background-color: rgb(27, 27, 27);
  width: 100%;
  height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 500px;
    margin-bottom: 100px ;
    background-color: white;
  }
}
.middle h1{
  margin: 10px;
  color: white;
}
.container{
  width: 550px;
  height: 400px;
  background-color: rgb(78, 76, 76);

}
</style>