<template>
	<div id="main">
    hallo
    <h1>{{ message }}</h1>
    <input v-model="message">
    <mdl-card class="demo-card-welcome" title="Welcome" :supporting-text="What" actions="actions" actions-text="Get started"> 
</mdl-card>
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
.demo-card-welcome.mdl-card {
  width: 512px;
}
.demo-card-welcome .mdl-card__title,
.demo-card-welcome .mdl-card__menu {
  color: white;
}
.demo-card-welcome .mdl-card__title {
  height: 176px;
  background: url('http://www.getmdl.io/assets/demos/welcome_card.jpg') center / cover;
}

</style>
