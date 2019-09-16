<template>
  <div class="wrapper">
    <div class="content">我的字体是自适应的</div>
    <NewsList :data = "data"/>
    
  </div>
</template>

<script>
import axios from "axios";
import NewsList from "@/components/NewsList"

export default {
  created() {
    this.test();
  },
  components: {
    NewsList
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
.wrapper {
  margin: 20px
}
.content {
  font-size: .373333rem
}

</style>
