<template>
  <div>
    <div v-if="data.length > 0" class="item">
      <ul v-for="item in data" :key="item.id">
        <li class="item-list">{{item.address}}<time>{{item.date | timeFiler("MM-DD")}}</time>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.item {
  height: 300px;
  width: 100%;
  .item-list {
    height: 42px;
    line-height: 42px;
    font-size: 14px;
    color: #333;
    border-bottom: 1px solid #dedede;
    time {
      color: #dedede;
      float: right;
    }
  }
}
</style>
