<template>
  <div id="app">
    <div class="content">
      <div class="nav">
        <router-link to="/goods" tag="a" shang-ping="sp">商品</router-link>
      </div>
      <div class="nav">
        <router-link to="/comment" tag="a">评论</router-link>
      </div>
      <div class="nav">
        <router-link to="/detail" tag="a">详情</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :sp="sp" v-on:updataPrice1="updataPrice"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import vuex from 'vuex'
  import {mapState} from 'vuex'

  export default {
    name: 'app',
    created() {
      //console.log(this.$store.state.allInfo);
      this.$store.dispatch('getAllInfo')

      console.log('1')


      // this.allInfo = this.$store.state.allInfo;
      /*this.$http.get('http://localhost:1010/api/allInfo').then((data) => {
        console.log(data.data.data);
        this.allInfo = data.data.data;
        this.flag = true;
      });*/
    },
    data() {
      return {
        'sp': '999999',
        // 'allInfo': [],
        // 'allPrice':0,
        // 'flag': false
      }
    },
    methods: {
      updataPrice(price) {
        console.log(price + '元');
        this.allPrice = price;
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }

  .nav {
    flex: 3;
    height: 50px;
    line-height: 50px;
    background: rgba(0, 0, 0, 0.5);
  }

  .content {
    display: flex;
    overflow: hidden;
  }

  a {
    text-decoration: none;
  }

  .routerActive {
    color: red;
  }

  .shopCar {
    display: flex;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 50px;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
  }

  .shopCarCon {
  }
</style>
