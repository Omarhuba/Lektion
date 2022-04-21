<template>
  <div class="main">
      <!-- <h1>Main</h1> -->
      <div class="productCard"
            v-for="objekt in ProductArray"
            v-bind:key="objekt.Id">
            <h3>{{ objekt.productName}}</h3>
            <img v-bind:src="objekt.productImage" alt="foto">
            <p>ID: {{objekt.productId}}</p>
            <p>In Store: {{objekt.productStock}}</p>
            <p>Original Price: {{objekt.productPrice}}</p>
            <p>Sale Price: {{objekt.productSalePrice}}</p>
            <button>Add to card</button>
      </div>
      <!-- <ProductList/> -->
  </div>
</template>

<script>
// import ProductList from './ProductList.vue'
export default {
    props: ["ProductArray"],
    // components:{ProductList}
}
</script>

<style lang="scss" scoped>
.main{
    height: 900px;
    background-color: brown;
    h1{
        text-align: center;
        // margin-top: 150px;
    }
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    // grid-column-gap: 15px;
    grid-row-gap: 0px;
}
.productCard{
    width: 200px;
    height: 410px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 7px;
    border: 2px solid black;
    img{
        width: 150px;
        height: auto;
    }

}
</style>