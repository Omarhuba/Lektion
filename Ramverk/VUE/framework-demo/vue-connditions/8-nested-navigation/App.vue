<template>
  <div class="app">
      <nav class="navigation">
          <ul class="parent">
              <li v-for="(item, index) in navbarContent" v-bind:key="index"
              @click="category(item.children)"
              >
                {{ item.title }}
              <ul v-if="item.title == 'Categories ▽' && sabCategory.length > 0">
                  <li>{{ sabCategory[0] }}</li>
                  <li>{{ sabCategory[1] }}</li>
                  <li>{{ sabCategory[2] }}</li>
              </ul>
              </li>
          </ul>
      </nav>
  </div>
</template>

<script>
import navbar from "./navbar.json";
export default {
  data() {
    return {
      navbarContent: [...navbar],
      sabCategory: [],
    }},
    methods:{
        category(event){
            if(this.sabCategory.length > 0){
                this.sabCategory = []
            }else{
                for(let i of event){
                    console.log(i.title)
                this.sabCategory.push(i.title)
                }
            }
        }
    }


};
</script>

<style >
.parent{
    /* display: flex; */
    margin: 1rem;
}
.parent li{
    margin: 1rem;
}
</style>