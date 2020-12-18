<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 3px 3px rgba(70, 69, 69, 0.2);
}
.left, .right{
    width: 60px;

}
.center{
    flex: 1;

}
</style>