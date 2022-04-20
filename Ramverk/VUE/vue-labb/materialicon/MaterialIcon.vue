<template>
  <i class="material-icons"
     :style="{color}"
    >{{icon}}</i>
</template>

<script>
export default {
    // props: ['icon'],
    props: {
        icon:{
            default: 'delete'
        },
        color: String,
        disabled: Boolean
    },
    data(){return{

    }}
}
</script>

<style>
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
</style>