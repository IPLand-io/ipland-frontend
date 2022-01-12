import * as types from "../mutation-types";

const initialState = {
  assets: [],
  loading: {
    status: true,
    text: "Loading...",
    type: "page",
  },
  isPC: true,
  winWidth: 0,
  initOk: false,
  theme: "day",
  web3: null,
  isTool: false,
};
const getters = {
  getLoading: (state) => state.loading,
  isPC: (state) => state.isPC,
  winWidth: state => state.winWidth,
  isDark: (state) => state.theme == "dark",
  gTheme: (state) => state.theme,
  web3: (state) => state.web3,
};
const actions = {
  setWeb3: ({ state }, web3) => {
    state.web3 = web3;
  },
  init: ({ commit, dispatch, state }) => {
    // dispatch("setHtmlFS");
    const setFontSize = () => {
      commit(types.SET_DEVICE_TYPE);
      dispatch("setHtmlFS", state.isTool);
    }
    setFontSize();

    window.addEventListener(
      "resize",
      () => {
        setFontSize();
      },
      false
    );
  },
  setHtmlFS: ({ state }, isTool = false) => {
    state.isTool = isTool;
    const win_w = window.innerWidth;
    state.winWidth = win_w;

    let font_size_value = win_w / 23.8;
    let min_value = 46;
    if (isTool) {
      min_value = 68;
      if (win_w < 768) {
        font_size_value = win_w / 4.14;
      }
    }
    font_size_value = font_size_value < min_value ? min_value : font_size_value;
    document.documentElement.style.fontSize = font_size_value + "px";
    var div_global_loading = document.querySelector(".div_loading_c");
    div_global_loading &&
      div_global_loading.remove &&
      div_global_loading.remove();
  },
  setTheme: ({ state }, theme) => {
    state.theme = theme;
  },
  setLoading: (
    { commit, rootGetters },
    { status = true, text = "Loading...", type = "page" }
  ) => {
    commit(types.SET_LOADING, {
      status,
      text,
      type,
    });
  }
};

const mutations = {
  [types.SET_LOADING]: (state, params) => {
    state.loading = Object.assign(state.loading, params);
  },
  [types.SET_DEVICE_TYPE]: (state) => {
    state.isPC = window.innerWidth >= 768;
  },
};

export default {
  state: initialState,
  actions,
  mutations,
  getters,
  namespaced: true,
};
