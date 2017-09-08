<template>
  <div>
    <div class="goods">
      <!--<h1>{{ msg }}</h1>

      <h1>{{ shangPing }}</h1>-->
      <div ref="goodsLeft" class="goodsLeft">
        <ul>
          <li class="navItem" :class="{active:index === nowIndex}" v-for="(item,index) in allInfo"
              @click="updataRight(index,$event)"><span>{{item.name}}</span>
          </li>
        </ul>
      </div>
      <ContentRight :index="index" :allInfo="allInfo" :goodsInfoNow="goodsInfoNow"
                    v-on:updataPrice1="updataPrice"></ContentRight>
    </div>
    <ShopCars :allPrice="allPrice"></ShopCars>
  </div>
</template>

<script type="text/ecmascript-6">
  import vuex from 'vuex'
  import ContentRight from './ContentRight.vue'
  import ShopCars from './shopCars';
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll';

  export default {
    // props: ['sp', 'allInfo'],
    created() {
      /*this.$http.get('http://localhost:1010/apiRouter/goods').then((res) => {
        this.goodsInfo = res.data.data;
        console.log(this.allInfo[0]);
        // this.goodsInfoNow = res.data.data[0].foods;
        // this.goodsInfoNow = this.allInfo[0];
      });*/
      /*setTimeout(() => {
         console.log('2')
          let categoryLen = this.$store.state.allInfo;
          for (let i = 0; i < categoryLen; i++) {
            if (i === 0) {
              this.activeFlag[i] = true;
            } else {
              this.activeFlag[i] = false;
            }
          }
        },1000);
      console.log('dsada');*/
    },
    data() {
      return {
        msg: '商品列表',
        goodsInfo: {},
        goodsInfoNow: {},
        index: 0,
        allPrice: 0,
        activeFlag: [],
        categoryLen: '',
        a: '',
        nowIndex:0
      }
    },
    computed: {
      ...mapState({
        allInfo: state => state.allInfo
      })
    },
    methods: {
      updataRight(index,event) {
        if (!event._constructed) {
          return false;
        }
        this.nowIndex = index;
        this.index = index;
        /*let categoryLen = this.allInfo.length;
        for (let i = 0; i < categoryLen; i++) {
          if (i === index) {
            this.activeFlag[i] = true;
          } else {
            this.activeFlag[i] = false;
          }
        }*/
      },
      updataPrice(price) {
        console.log(price);
        this.allPrice = price;
        this.$emit('updataPrice1', price);
      }
    },
    updated(event) {
      let categoryLen = this.$store.state.allInfo.length;
      for (let i = 0; i < categoryLen; i++) {
        if (i === 0) {
          this.activeFlag[i] = true;
        } else {
          this.activeFlag[i] = false;
        }
      }
      this.$nextTick(function () {
        this.menuScroll = new BScroll(this.$refs.goodsLeft, {click:true});
      });
    },
    components: {
      ShopCars,
      ContentRight
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .goods {
    position: absolute;
    display: flex;
    width: 100%;
    top: 50px;
    bottom: 50px;
    /*overflow: auto;*/
    overflow: hidden;
  }

  .goodsLeft {
    display: inline-block;
    flex: 0 0 80px;
    width: 80px;
    background: #f5f5f7;
    /*overflow: auto;*/
    overflow: hidden;
  }

  .goodsRight {
    width: 100%;
    display: inline-block;
    flex: 1;
    /*overflow: auto;*/
    overflow: hidden;
  }

  .navItem {
    width: 80px;
    height: 50px;
    margin: 0 auto;
    font-size: 12px;
    text-align: center;
    line-height: 25px;
    background: #f5f5f7;
  }

  .goodsLeft .active {
    color: red;
  }

  .foodInfo {
    width: 100%;
    height: 80px;
    /*line-height: 80px;*/
    border-bottom: 1px solid gray;
  }
</style>
