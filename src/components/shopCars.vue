<template>
  <div class="shopCar">
    <div class="shopCarCon">
        <div class="left">
          <span>总价:{{allPrice}}￥</span>
          <span>总数量:{{allCount}}</span>
        </div>
      <div class="right" :class="{active:allPrice}">
        <span>{{message}}</span>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    /*props:{
      allPrice:{
        type: Number
      }
    },*/
    computed:{
      message() {
        if(this.$store.state.allPrice === 0) {
          return '0￥起送';
        } else {
          return '去结算';
        }
      },
      ...mapState({
        allPrice: state => state.allPrice,
        allCount: state => state.allCount
      })
    },
    data() {
      return {
      };
    }
  }
</script>
<style>
  .shopCarCon {
    display:flex;
    width:100%;
    background:transparent;
  }
  .left {
    flex:2;
    color:#fff;
    text-align:left;
    line-height:50px;
  }
  .right {
    flex:2;
    text-align:right;
    color:#fff;
    line-height:50px;
    background:transparent;
  }
  .shopCarCon .active {
    color:#4cd964;
  }
</style>
