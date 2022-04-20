<template>
  <div class="wrapper">
      <button @click="$emit('click')"
      class="btn">{{ symbol }}</button>
  </div>
</template>

<script>
export default {
  props: ['symbol'],
}
</script>

<style scoped>
  .btn{
    padding: 1rem;
    margin: 1rem;
    font-size: 1.5rem;
  }
</style>