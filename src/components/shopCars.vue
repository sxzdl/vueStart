<template>
  <div class="shopCar">
    <div class="shopCarCon">
        <div class="left">
          <span>总价:{{allPrice}}￥</span>
          <span>总数量:{{allCount}}</span>
        </div>
      <div class="right" :class="{active:allPrice}">
        <span>{{message}}</span>
        <span @click="displayShopCarsDetail()">购物车</span>
      </div>
    </div>
    <ShopCarsDetail v-show="ShopCarsDetailFlag"></ShopCarsDetail>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import ShopCarsDetail from './ShopCarsDetail';
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
        allCount: state => state.allCount,
        ShopCarsDetailFlag: state => state.ShopCarsDetailFlag
      })
    },
    data() {
      return {
        /*ShopCarsDetailFlag: false*/
      };
    },
    components: {
      ShopCarsDetail
    },
    methods: {
      displayShopCarsDetail() {
        if (!this.allCount) {
          return false;
        }
        if (!this.ShopCarsDetailFlag) {
          // this.ShopCarsDetailFlag = true;
          this.$store.state.ShopCarsDetailFlag = true;
        } else {
          // this.ShopCarsDetailFlag = false;
          this.$store.state.ShopCarsDetailFlag = false;
        }
      }
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
