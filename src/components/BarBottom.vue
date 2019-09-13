<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item to='/index'>
        <span>首页</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal" />
      </van-tabbar-item>

      <van-tabbar-item to='/chat'>
        <span>聊天</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal" />
      </van-tabbar-item>

      <van-tabbar-item to='/release'>
        <span>发布</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal" />
      </van-tabbar-item>

      <van-tabbar-item to='/find'>
        <span>发现</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal" />
      </van-tabbar-item>

      <van-tabbar-item info="3" to='/my'>
        <span>我的</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal" />
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
        normal: require('@/assets/index.png'),
        active: require('@/assets/index.png')
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../assets/css/index.css";
</style>
