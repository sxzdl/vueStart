<template>
  <div ref="foodWaper" v-if="allInfo.length" class="goodsRight">
    <div>
      <div v-for="(itemCet,cetIndex) in allInfo">
        <div class="flag" style="text-align:left;color:green;padding: 2px;">{{itemCet.name}}</div>
        <div class="foodInfo" v-for="(item,index) in itemCet.foods">
          <div class="foodLeft"><img :src="'https://fuss10.elemecdn.com/' + item.image_path.split('')[0] + '/'
          + item.image_path.split('')[1] + item.image_path.split('')[2] + '/'
          + item.image_path.split('').slice(3).join('') + '.jpeg'" alt=""></div>
          <div class="foodRight">
            <span>{{item.name}}</span>
            <span>{{item.tips}}</span>
            <span>{{item.specfoods[0].price}}￥</span>
          </div>
          <div class="add">
            <div
              @click="updateAllCountInc({'event':$event,'price':item.specfoods[0].price,'cetIndex':cetIndex,'index':index});updateAllPrice();">
              添加
            </div>
            <div v-show="item.count > 0">{{item.count}}</div>
            <div v-show="item.count > 0"
                 @click="updateAllCountDec({'event':$event,'price':item.specfoods[0].price,'cetIndex':cetIndex,'index':index});updateAllPrice()">减少
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="foodInfo" v-else>没有更多数据</div>-->
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapState, mapActions} from 'vuex';
  import BScroll from 'better-scroll';

  export default {
    props: {
      goodsInfoNow: {
        type: Object
      },
      /*allInfo: {
        type: Array
      },*/
      index: {
        type: Number
      }
    },
    data() {
      return {
        totalPrice: 0,
        count: 0,
        categoryArr: []
      }
    },
    computed: {
      ...mapState({
        allInfo: state => state.allInfo
      })
    },
    updated() {
      /*this.$nextTick(() => {
        this.foodsWaper = new BScroll(this.$refs.foodWaper, {click: true});
      });*/
    },
    watch: {
      index: function () {
        /*let el = this.$refs.foodWaper.getElementsByClassName('flag');
        this.foodsWaper.scrollToElement(el[this.index], 200)*/
        this.$nextTick(function () {
          let el = document.getElementsByClassName('goodsRight')[0];
          el.scrollTop = this.$store.state.foodScrollTop[this.index];
        });
      }
    },
    methods: {
      /*addOrder(price) {
        this.totalPrice += price;
//        console.log(this.totalPrice)
        this.$emit('updataPrice1',this.totalPrice);
      }*/
      ...mapActions([
        'updateAllPrice', // 映射 this.updateAllPrice() 为 this.$store.dispatch('updateAllPrice')
        'updateAllCountInc',
        'updateAllCountDec',
        'updateAllPriceDec'
      ])
    },
    updated() {
      this.$nextTick(function() {
        let foodDom = document.getElementsByClassName('flag');
        for (let i = 0; i < foodDom.length; i ++) {
          this.$store.state.foodScrollTop[i] = foodDom[i].offsetTop;
        }
      });
    }
  }

</script>
<style>
  .goodsRight {
    padding: 3px;
  }

  .foodInfo {
    display: flex;
    font-size: 15px;
  }

  .foodInfo img {
    width: 60px;
    height: 78px;
  }

  .foodLeft {
    flex: 0 0 60px;
    display: inline-block;
    width: 60px;
  }

  .foodRight {
    flex: 1;
    padding: 2px;
    margin-left: 2px;
    display: inline-block;
    overflow: hidden;

  }

  .foodRight span {
    display: block;
    height: 16px;
    padding: 3px;
    text-align: left;
    overflow: hidden;
  }

  .add {
    flex: 0 0 30px;
    display: inline-block;
    width: 30px;
    font-size: 12px;
    /*line-height:80px;*/
    background: #f5f5f7
  }

  .add div {
    height: 25px;
    color:#26b4ef;
  }

</style>
