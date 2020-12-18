<template>
  <div class="recommend">
      
      <div v-for="(item,index) in recommends" :key="index" class="recommenditem">
          <a :href="item.kink">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
props:{
    recommends:{
        type:Array,
        default(){
            return []
        }
    }
}
}
</script>

<style>
.recommend{
    display: flex;
    text-align: center;
    padding: 10px 0 30px;
    border-bottom: 8px solid #eee;
}
.recommenditem{
    flex: 1;
    font-size: 12px;

  /* width: 80px;
  height: 80px; */
}
.recommenditem img{
 
  width: 65px;
  height: 65px;
  margin-bottom: 5px;
}
</style>