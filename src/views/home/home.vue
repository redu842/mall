<template>
<div>
  
  <Navbar class="home-nav"><div slot="center">杨军购物</div></Navbar>
  <home-swiper :banners="banners"></home-swiper>
  <recommend-view :recommends="recommends"></recommend-view>
</div>
 
</template>

<script>
import Navbar from '../../components/common/navbar/Navbar.vue'
import HomeSwiper from './childComps/HomeSwiper'
import {getHomeMultidata} from "../../network/home"
import RecommendView from './childComps/RecommendView.vue'




export default {
  components: { Navbar,HomeSwiper, RecommendView},
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },
  created(){
    getHomeMultidata().then(res=>{
      // console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }

}
</script>

<style>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>