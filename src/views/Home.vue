<template>
  <div class="home">
    <div>我是读接口的页面2222 {{list}}</div>
   
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  created() {
    this.getList();
     console.log(11111)
    
  },
  data() {
    return {
      list: ''
    };
  },
  methods: {
     getList() {
      this.axios.get("/order/order_list").then(res => {
        var res = res.data;
        this.list = res.list
        
        
      });
    },
    
  }
};
</script>
