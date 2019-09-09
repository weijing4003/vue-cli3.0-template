<template>
  <div>
    <router-link to="/index">
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
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../assets/css/index.css';

</style>
