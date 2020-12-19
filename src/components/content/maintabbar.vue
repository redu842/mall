<template>
  <div>
       <router-view></router-view>
    <tab-bar>
     <tab-bar-item path="/home" activeColor="red">
       <img src="../../assets/img/home.png" slot="item-icon" alt="">
       <img src="../../assets/img/homered.png" alt="" slot="item-icon-active">
       <div slot="item-text">首页</div>
       
     </tab-bar-item>
     <tab-bar-item path="/category"> 
       <img src="../../assets/img/pro.png" slot="item-icon" alt="">
       <img src="../../assets/img/prored.png" alt="" slot="item-icon-active">
       <div slot="item-text">分类</div>
       </tab-bar-item>

     <tab-bar-item path="/cart">
       <img src="../../assets/img/car.png" slot="item-icon" alt="">
       <img src="../../assets/img/carred.png" alt="" slot="item-icon-active">
       <div slot="item-text">购物车</div>
       </tab-bar-item>

     <tab-bar-item path="/profile">
       <img src="../../assets/img/user.png" slot="item-icon" alt="">
       <img src="../../assets/img/userred.png" alt="" slot="item-icon-active">
       <div slot="item-text">我的</div>
       </tab-bar-item>

    </tab-bar>


  </div>
</template>

<script>

import TabBar from '../common/tabbar/TabBar.vue'
import TabBarItem from '../common/tabbar/TabBarItem.vue'

// import TabBar from '../TabBar.vue'
// import TabBarItem from '../TabBarItem.vue'

export default {
  components: {TabBar, TabBarItem  },
   name:"maintabbar"
}
</script>

<style>

</style>