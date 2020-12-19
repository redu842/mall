<template>
  <div id="home">
    <Navbar class="home-nav"><div slot="center">屌丝商城</div></Navbar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-views />
    <tab-control
      :titles="['流行', '精选', '新款']"
      class="tab-control"
      @listclick="listclick"
    />
    <goods-list :goods="goods[currentType].list"></goods-list>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar.vue";
import HomeSwiper from "./childComps/HomeSwiper";
import { getHomeMultidata, getHomeGoods } from "../../network/home";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureViews from "./childComps/FeatureViews.vue";
import TabControl from "../../components/content/tabControl/TabControl.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";

export default {
  components: {
    Navbar,
    HomeSwiper,
    RecommendView,
    FeatureViews,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
    listclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
  },
};
</script>

<style>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>