<template>
  <div>
    <button v-on:click="show">click me!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show() {
        alert("Never used alert");
      },
    };
  },
};
</script>

<style>
</style>