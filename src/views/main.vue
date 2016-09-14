<template>
	<div id="main">
    hallo
    <h1>{{ message }}</h1>
    <input v-model="message">
  </div>
</template>
<script>
export default {
  data (){
    return{
      message:'hello World'
    }
  }
};
</script>
<style>

</style>
