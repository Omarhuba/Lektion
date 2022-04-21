<template>
  <div class="app">
      <input v-model="text" type="text">
      <p>{{text}}</p>
  </div>
</template>

<script>
export default {
    data(){return{
        text: 'Default Text',
    }}
}
</script>

<style>

</style>