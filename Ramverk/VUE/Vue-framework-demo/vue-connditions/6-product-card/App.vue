<template>
<body>
    
  <div class="app">
    <div
      class="card"
      v-for="product in products"
      v-bind:key="product.productId"
    >
      <h3>{{ product.productName }}</h3>
      <img v-bind:src="product.productImage" alt="" />
      <h5>productId: {{ product.productId }}</h5>
      <h5>productStock: {{ product.productStock }}</h5>
      <h5>productPrice: {{ product.productPrice }}</h5>
      <h5>productSalePrice: {{ product.productSalePrice }}</h5>
    </div>
  </div>
</body>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          productId: 1000,
          productName: "delightful chocolate Ilise",
          productImage: "https://picsum.photos/400?image=659",
          productStock: 81,
          productPrice: "23488.67",
          productSalePrice: "23488.67",
          rating: 4,
        },
        {
          productId: 1009,
          productName: "indirect indigo Fiona",
          productImage: "https://picsum.photos/400?image=583",
          productStock: 49,
          productPrice: "40702.21",
          productSalePrice: "4477.24",
          rating: 1,
        },
        {
          productId: 1035,
          productName: "complicated maroon Esmaria",
          productImage: "https://picsum.photos/400?image=648",
          productStock: 69,
          productPrice: "3128.23",
          productSalePrice: "938.47",
          rating: 4,
        },
        {
          productId: 1046,
          productName: "voiceless emerald Sarita",
          productImage: "https://picsum.photos/400?image=695",
          productStock: 48,
          productPrice: "21625.98",
          productSalePrice: "8001.61",
          rating: 3,
        },
        {
          productId: 1047,
          productName: "old lime Elvera",
          productImage: "https://picsum.photos/400?image=648",
          productStock: 4,
          productPrice: "30869.36",
          productSalePrice: "30869.36",
          rating: 5,
        },
        {
          productId: 1051,
          productName: "unfortunate tan Maris",
          productImage: "https://picsum.photos/400?image=622",
          productStock: 63,
          productPrice: "39042.14",
          productSalePrice: "11322.22",
          rating: 2,
        },
        {
          productId: 1063,
          productName: "lovely brown Theressa",
          productImage: "https://picsum.photos/400?image=891",
          productStock: 31,
          productPrice: "40426.73",
          productSalePrice: "12936.55",
          rating: 4,
        },
        {
          productId: 1068,
          productName: "primary gold Tera",
          productImage: "https://picsum.photos/400?image=622",
          productStock: 88,
          productPrice: "25121.63",
          productSalePrice: "25121.63",
          rating: 4,
        },
      ],
    };
  },
};
</script>

<style  scoped>
body {
  background-color: #eee;
}
.app {
  display: grid;
  grid-template-columns: repeat(2, 4fr);
  grid-auto-rows: 1fr;
}
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid black;
  color: white;
  background-color: tomato;
  letter-spacing: 1.5px;
  line-height: 1px;
  border-radius: 20px;
  width: 400px;
  margin: 2rem;
}
.card img {
  width: 300px;
}
</style>