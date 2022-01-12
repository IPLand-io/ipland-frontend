<template>
  <header class="layout_head flex_space_between">
    <img class="logo_img" src="../../assets/img/logo.png" />
    <div class="menus flex">
      <OMenu
        :menus="menus"
        @click="openMenu"
        :activeMenuIndex="navIndex"
      ></OMenu>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import OMenu from "components/Layout/OMenu.vue";

export default {
  components: {
    OMenu,
  },
  props: {
    activeMenuIndex: String | Number,
  },
  data() {
    return {
      navIndex: 0,
      menus: ["Home", "How to use", "Whitepaper", "Jobs"],
      paths: ["", "/how-to-use", "", "/jobs"],
      openLangs: false,
      placeholder: "",
    };
  },
  computed: {
    ...mapGetters({
      accountName: "account/getAccountName",
      isPC: "global/isPC",
      simpleAddress: "account/simpleAddress",
      getSelectedAccountBalance: "account/getSelectedAccountBalance",
      core_asset: "web3Modal/core_asset",
    }),
    activeIndex() {
      let path = this.$route.path;
      return this.paths[path];
    },
  },
  watch: {},
  created() {
    this.init();
  },
  methods: {
    init() {
      this.navIndex = this.activeMenuIndex;
    },
    openMenu(index) {
      if (index == 2) {
        window.open("https://ipland.gitbook.io/ipland-whitepaper/");
        return;
      }
      let path = "/official" + this.paths[index];
      this.$router.push(path);
    },
    CONNECT() {
      this.onConnect();
    },
    refresh() {
      window.location.reload();
    },
    ...mapActions({
      setLoading: "global/setLoading",
      onConnect: "web3Modal/onConnect",
    }),
  },
  beforeDestroy() {},
};
</script>

<style lang="scss">
@import "~@assets/css/mixin.scss";

.layout_head {
  width: torem(1440);
  margin: auto;
  align-items: center;
  height: 0.8rem;
  min-height: 50px;
  .logo_img {
    height: torem(46);
  }
  .menus {
    height: 100%;
    .btn {
      border: none;
      height: torem(42);
      font-size: torem(30);
      padding: 0;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #798493;
      border-radius: torem(6);
      text-decoration-line: none;
      margin: 0 torem(40);
      background-size: cover;
      background-position: center;
    }
  }
}
</style>
