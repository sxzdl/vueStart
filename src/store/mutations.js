const mutations = {
  getAllInfoMutation: (state,data) => {
    state.allInfo = data;
  },
  updateAllPrice:(state,price) => {
    state.allPrice += price;
  },
  updateAllCountInc:(state)=> {
    state.allCount += 1;
  },
  updateAllCountDec:(state) => {
    state.allCount -= 1;
  },
  updateAllPriceDec: (state,price) => {
    state.allPrice -= price;
  }

};
export default mutations;
