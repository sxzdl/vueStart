<template>
  <div class="carsFloat">
    <ul>
      <li v-for="(item,index) in selectFood">
        <div>{{item.foodInfo.name}}</div>
        <div>{{item.foodInfo.count * item.foodInfo.specfoods[0].price}}</div>
        <div>
          <span @click="updateAllCountInc({'event':$event,'price':item.foodInfo.specfoods[0].price,'cetIndex':item.allIndex,'index':item.foodsIndex});updateAllPrice();">增加</span>
          <span>{{item.foodInfo.count}}</span>
          <span @click="updateAllCountDec({'event':$event,'price':item.foodInfo.specfoods[0].price,'cetIndex':item.allIndex,'index':item.foodsIndex});updateAllPrice();">减少</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapState,mapActions} from 'vuex'

  export default {
    data() {
      return {};
    },
    computed: {
      ...mapState({
        selectFood: state => {
          // 筛选数据
          let selectInfo = [];
          let allInfo = state.allInfo;
          for (let i = 0 ; i < allInfo .length; i ++) {
             for (let j = 0; j < allInfo[i].foods.length; j ++) {
               if (allInfo[i].foods[j].count !==0) {
                 selectInfo.push({
                   foodInfo:allInfo[i].foods[j],
                   allIndex:i,
                   foodsIndex:j
                 });
               }
             }
          }
          return selectInfo;

        }
      })
    },
    methods: {
      ...mapActions([
        'updateAllPrice', // 映射 this.updateAllPrice() 为 this.$store.dispatch('updateAllPrice')
        'updateAllCountInc',
        'updateAllCountDec',
        'updateAllPriceDec'
      ])
    }
  }
</script>
<style>
  .carsFloat {
    position: absolute;
    width: 100%;
    height: 100px;
    top: -100px;
    background-color: aliceblue;
    overflow:auto;
  }
  .carsFloat ul{
    width:100%;
    margin:0;
  }
  .carsFloat li {
    display:flex;
    height:50px;
    width:100%;
    margin:0;
    border-bottom:1px gray solid;
  }
  .carsFloat li div {
    display:inline-block;
    flex:3;
    text-align:center;
    line-height:50px;
    font-size:13px;
    overflow:hidden;
  }
</style>
