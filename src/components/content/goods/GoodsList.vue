<template>
  <div class="goods">
    <goods-listitem
      v-for="(item, index) in goods"
      :key="index"
      :goodsitem="item"
      class="listitem"
    />
  </div>
</template>

<script>
import GoodsListitem from "./GoodsListitem.vue";
export default {
  components: { GoodsListitem },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>