<template>
  <div id="home">
    <Navbar class="home-nav"
      ><div slot="center">vue商城———redu编写</div></Navbar
    >
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentscroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-views />
      <tab-control
        :titles="['流行', '精选', '新款']"
        class="tab-control"
        @listclick="listclick"
      />
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop" />
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
import Scroll from "../../components/common/scroll/Scroll.vue";
import BackTop from "../../components/content/backTop/BackTop.vue";

export default {
  components: {
    Navbar,
    HomeSwiper,
    RecommendView,
    FeatureViews,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
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
      isShowBackTop: false,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
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
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.scroll.finishPullUp();
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
    backClick() {
      console.log("点击了");
      this.$refs.scroll.scroll.scrollTo(0, 0, 1000);
      // document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    contentscroll(position) {
      this.isShowBackTop = -position.y > 1000;
    },
    loadMore() {
      // console.log("444");
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.refresh();
    },
  },
};
</script>

<style scoped>
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
  z-index: 99;
}
.tab-control {
  position: sticky;
  top: 44px;
}
.content {
  height: 90vh;
  /* margin-top: 44px; */
  overflow: hidden;
}
</style>