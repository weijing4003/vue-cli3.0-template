<template>
  <div class="home">
    <Home />
  </div>
</template>

<script>


let request = new XMLHttpRequest()
request.open('get','http://jack.com:8002/xxx')
request.send()
request.onreadystatechange = ()=>{
  if(request.readyState === 4){
    if(request.status >=200 && request.status < 300){
      let str = request.responseText
      let obj = window.JSON.parse(str) 
    }
  }
} 

let xml = new XMLHttpRequest()
xml.open('get', 'www.baidu.com')
xml.send()
xml.onreadystatechange = () => {
  if (xml.status >= 200 && xml.status < 300) {
    let str = request.responseText
    let obj = window.JSON.parse(str)
  }
}



import Home from "@/components/Home";

export default {
  name: "App",
  components: {
    Home
  },
  created() {
  },
  data() {
    return {
    };
  },
  methods: {
   
  }
};
</script>
