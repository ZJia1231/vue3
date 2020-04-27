<template>
  <div>
    <div class="wrapper">这是Index页面</div>
    <button v-on:click="()=>{ handleClick('GET') }">发起GET请求</button>
    <br/>
    <br/>
    <button v-on:click="()=>{ handleClick('POST') }">发起POST请求</button>
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import request from "../utils/api.js";
export default {
  data() {
    return {
      list: [0, 0, 0, 0, 0]
    };
  },
  methods: {
    handleClick(method) {
      
      request("/api/list", method).then(
        res => {
          this.list = res.data;
        },
        (err) => {
          console.log('error');
          
        }
      );
    }
  }
};
</script>
<style scoped>
ul {
  background: orchid;
}
</style>