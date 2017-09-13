import Vue from 'vue';
let nowVue = new Vue();
const actions = {
  getAllInfo({commit}){
    let allInfoData = [];
    nowVue.$http.get('http://localhost:1010/api/allInfo').then((data)=>{
      allInfoData = data.data.data;
      commit('getAllInfoMutation',allInfoData);
      console.log('3')
      }
    );
  },
  updateAllPrice({commit},price) {
    commit('updateAllPrice',price);
  },
  updateAllCountInc({commit},option) {
    if (!('ontouchstart' in window) && option.event._constructed) {
      return;
    }
    commit('updateAllCountInc',option);
    // commit('updateFoodsArr',price,cetIndex,foodIndex);
  },
  updateAllCountDec({commit},option) {
    if (!('ontouchstart' in window) && option.event._constructed) {
      return;
    }
    commit('updateAllCountDec',option);
    // commit('updateFoodsArr',price,cetIndex,foodIndex);
  },
  updateAllPriceDec({commit},price) {
    commit('updateAllPriceDec',price)
  }
};
export default actions;
