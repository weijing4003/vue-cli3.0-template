<template>
  <div>
    <!-- <router-link to="/index">
      <label>首页</label>
    </router-link>
    <router-link to="/find">
    <label>发现</label>
    </router-link>
    <router-link to="/order">
    <label>订单</label>
    </router-link>
    <router-link to="/my">
      <label>我的</label>
    </router-link> -->

<van-tabbar v-model="active">
      <van-tabbar-item info="3">
    <span>首页</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.normal"
    >
  </van-tabbar-item>

  <van-tabbar-item info="3">
    <span>发现</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.normal"
    >
  </van-tabbar-item>

  <van-tabbar-item info="3">
    <span>订单</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.normal"
    >
  </van-tabbar-item>

  <van-tabbar-item info="3">
    <span>我的</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.normal"
    >
  </van-tabbar-item>
  
   </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        normal: '//img.yzcdn.cn/icon-normal.png',
        active: '//img.yzcdn.cn/icon-active.png'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../assets/css/index.css';

</style>
