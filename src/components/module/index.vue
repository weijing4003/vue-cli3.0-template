<template>
  <div>
    <ul class="item">
      <li v-for="item in data" :key="item.id">{{item.address}}<em>{{item.date}}</em>
      </li>

    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    this.test();
  },
  data() {
    return {
      name: "首页",
      data: []
    };
  },
  methods: {
    test() {
      this.axios.post('/users').then((res) => {
        if (res.status === 200) {
          this.data = res.data;
          console.log(this.data)
        }
      })

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.item {
  background: #00ff00;
  height: 300px;
  width: 100%;
}
</style>
