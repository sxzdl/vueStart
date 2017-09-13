import Vue from 'vue'

const mutations = {
  getAllInfoMutation: (state, data) => {
    state.allInfo = data;
    for (let i = 0; i < state.allInfo.length; i++) {
      for (let j = 0; j < state.allInfo[i].foods.length; j++) {
        // state.allInfo[i].foods[j].count = 0;
        Vue.set(state.allInfo[i].foods[j], 'count', 0);
      }
    }
  },
  updateAllPrice: (state) => {
    let allPrice = 0;
    let allCount = 0;
    for (let i = 0; i < state.allInfo.length; i++) {
      for (let j = 0; j < state.allInfo[i].foods.length; j++) {
        allPrice += state.allInfo[i].foods[j].count * state.allInfo[i].foods[j].specfoods[0].price;
        allCount += state.allInfo[i].foods[j].count;
      }
    }
    state.allPrice = allPrice;
    state.allCount = allCount;
    if (allCount === 0) {
      state.ShopCarsDetailFlag = false;
    }
    // state.allFoodArr[index] = {nowFoodPrice: price, count: count} specfoods[0].price
  },
  updateAllCountInc: (state, option) => {
    // state.allCount += 1;
    // state.allInfo[option.cetIndex].foods[option.index].count = state.allInfo[option.cetIndex].foods[option.index].count ++;
    /*Vue.set(
      state.allInfo[option.cetIndex].foods[option.index],
      state.allInfo[option.cetIndex].foods[option.index].count,
      ++state.allInfo[option.cetIndex].foods[option.index].count);*/
    state.allInfo[option.cetIndex].foods[option.index].count ++;
    // console.log(state.allInfo[option.cetIndex].foods[option.index].count);
  },
  updateAllCountDec: (state, option) => {
    // state.allCount -= 1;
    /*Vue.set(
      state.allInfo[option.cetIndex].foods[option.index],
      state.allInfo[option.cetIndex].foods[option.index].count,
      --state.allInfo[option.cetIndex].foods[option.index].count);*/
    state.allInfo[option.cetIndex].foods[option.index].count --;
    // console.log(state.allInfo[option.cetIndex].foods[option.index].count);
  }
  /*updateAllPriceDec: (state, price, cetIndex, foodIndex) => {
    state.allPrice -= price;
  }*/

};
export default mutations;
