<template>
  <div class="goodsitem">
    <img :src="goodsitem.show.img" alt="" />
    <div class="mesaage">
      <p>{{ goodsitem.title }}</p>
      <div class="numbox">
        <span class="price">￥{{ goodsitem.price }}</span>

        <span class="collect">库存:{{ goodsitem.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.goodsitem {
  width: 150px;
}
.goodsitem img {
  width: 150px;
}
.mesaage {
  margin-top: 5px;
  text-align: center;
}
.mesaage p {
  text-align: center;
  height: 50px;
  width: 150px;
  overflow: hidden;
}
.numbox {
  display: flex;
  margin-top: 10px;
  margin-bottom: 15px;
}
.numbox span {
  flex: 1;
  color: red;
}
</style>
