<template>
  <div class="app">
      <button @click="btn1">VY-1</button>
      <button @click="btn2">VY-2</button>
      <button @click="btn3">VY-3</button>
      <div class="vy-1"
            v-if="show1">
          <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam quasi excepturi cumque sed deserunt earum repudiandae debitis, sunt illo veniam dignissimos eveniet est velit sint id reprehenderit. Nihil tempora possimus earum ducimus, neque, numquam velit ipsum vel ex non debitis.
          </p>
      </div>
      <div class="vy-2"
            v-if="show2">
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias assumenda tenetur molestiae laborum ab molestias expedita libero dolor et inventore eius vero nihil incidunt accusantium nulla, culpa, cupiditate eum natus numquam ullam mollitia fugit quod deleniti? Libero, quod. Fugit, sunt.
          </p>
      </div>
      <div class="vy-3"
            v-if="show3">
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam veritatis repudiandae accusamus nihil iusto molestiae fugiat labore sunt, iste, minus ullam a velit perspiciatis! Nostrum temporibus non omnis quaerat ipsam laboriosam, maxime earum, inventore molestias facilis incidunt alias, officiis tempore?
          </p>
      </div>
  </div>
</template>

<script>
export default {
    data(){return{
        show1: false,
        show2: false,
        show3: false

    }},
    methods:{
      
        btn1(){
            this.show1 = !this.show1
            this.show2 = false
            this.show3 = false
        },
        btn2(){
            this.show2 = !this.show2
            this.show1 = false
            this.show3 = false
        },
        btn3(){
            this.show3 = !this.show3
            this.show1 = false
            this.show2 = false
        }
    }
}
</script>

<style>

</style>