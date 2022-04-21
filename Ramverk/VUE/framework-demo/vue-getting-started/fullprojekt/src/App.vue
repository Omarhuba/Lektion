<template>
  <div id="app">
    <img  v-bind:src="imgFile" alt="foto of Betty"/>
    <h1>{{name}}</h1>
    <h2>{{job}}</h2>
    <h3>{{life}}</h3>
    <h5>{{quote}}</h5>

  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Betty White",
      job: "Actress",
      life: "January 17, 1922 – December 31, 2021",
      imgFile: "https://i.guim.co.uk/img/media/cf06ebd9defa615a14e697c5c27a8fbb53dd5b2f/377_381_2332_1399/master/2332.jpg?width=620&quality=85&auto=format&fit=max&s=e11f810835740da61d495f48b685ad8e",
      quote:
        "My mother always used to say, “The older you get, the better you get. Unless you’re a banana.”",
    };
  },
};
</script>

<style lang="scss">
#app{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  max-width: 400px;
  margin: auto;
  border: 2px solid orange;
  img{
    width: 300px;
    margin-top: 40px;
  }
}
</style>