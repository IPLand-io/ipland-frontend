

const initialState = {
  web3: null,
  _web3: null,
  current_option: null,
  core_asset: "",
  gasPrice: "",
  isConnetWeb3Modal: false,
  cachePrices: {
    USDT: 1
  },
};
const getters = {
  web3: (state) => state.web3,
  current_option: (state) => state.current_option,
  core_asset: (state) => state.core_asset,
  gasPrice: (state) => state.gasPrice,
};
const actions = {
};

const mutations = {};

export default {
  state: initialState,
  actions,
  mutations,
  getters,
  namespaced: true,
};
