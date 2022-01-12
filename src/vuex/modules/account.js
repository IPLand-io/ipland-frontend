
import * as types from "../mutation-types";
const initialState = {
  account: null,
  balances: [],
  initOk: false,
  accountsData: []
};

const _getTotalBalance = balances => {
  let total = 0;
  let precision = 0;
  balances.forEach(asset => {
    total += Number(asset.eq_value);
    precision = asset.precision;
  });

  return Number(precision ? (total / Math.pow(10, precision)).toFixed(precision) : total);
}
const getters = {
  getSelectedAccountBalance: ({ accountsData }) => {
    if (accountsData.length) {
      return accountsData[0].humanFriendlyBalance;
    }
    return 0;
  },
  getAccountName: ({ account }) => {
    return account ? account.account_name : "";
  },
  simpleAddress: ({ account }) => {
    if (account) {
      let address = account.account_name
      if (address) {
        return address.substr(0, 5) + "..." + address.substr(-4);
      }
    }
    return "";
  },
  getAccountId: ({ account }) => {
    return account ? account.account_id : "";
  },
  getTotalBalance: ({ balances }) => {
    return _getTotalBalance(balances);
  },


  getBalances: state => state.balances,
  initOk: state => state.initOk,
  accountsData: state => state.accountsData
}
const actions = {

  setAccount: ({ commit, state, dispatch }, account) => {
    state.initOk = true;
    //  console.log('account',account);
    if (account.account_name) {
      localStorage.setItem("account_name", account.account_name);
    }
    commit(types.SET_ACCOUNT, account);
  },
  setAccountsData: ({ state }, accountsData) => {
    state.accountsData = accountsData;
  },
  setBalances: ({ commit, getters }, balances) => {
    if (_getTotalBalance(balances) != getters.getTotalBalance)
      commit(types.SET_BALANCES, balances);
  },
  logout: ({ commit, dispatch }) => {
    commit(types.LOGOUT);
  }
}




const mutations = {
  [types.SET_ACCOUNT]: (state, account) => {
    state.account = account;
  },
  [types.SET_BALANCES]: (state, balances) => {
    state.balances = balances;
  },
  [types.LOGOUT]: (state) => {
    state.account = null;
  },
};

export default {
  state: initialState,
  actions,
  mutations,
  getters,
  namespaced: true
};
