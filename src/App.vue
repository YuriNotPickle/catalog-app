<template>
  <Header></Header>
  <RouterView></RouterView>
</template>
<script >
import Header from './basic_layout/Header.vue';
export default{
  components:{
    Header,
  },
}

</script>

<style>

button{
  cursor: pointer;
  border: none;
  background-color: transparent;
}
</style>
