<template>
  <header class="layout_head flex_space_between">
    <img class="logo_img" src="../../assets/img/logo.png" />
    <div class="menus flex">
      <OMenu :menus="menus" @click="openMenu" :activeMenuIndex="navIndex"></OMenu>
    </div>

    <!-- <div class="head_left">
            <div class="div_icons" >
                <ul>
                    <li class="hvr-grow"  id="step_1"
                    :class="{activeNavMenu:activeIndex==1}"
                    >
                        <el-button size="small" @click.native="onConnect">
                            <span  v-if="accountName" class="span_account">
                                <svg class="MuiSvgIcon-root-947" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style="color: rgb(76, 175, 80);"><circle cx="12" cy="12" r="8"></circle></svg>
                                {{simpleAddress}} | {{getSelectedAccountBalance}} {{core_asset}}</span>
                            <span v-else>CONNECT</span>
                        </el-button>
                    </li>
                </ul>
            </div>
        </div> -->
  </header>
</template>

<script >
import { mapGetters, mapActions } from "vuex";
import OMenu from "components/Layout/OMenu.vue";
import { config } from "../../config/env";
import { setup } from "../../assets/locales/lang";
import { $c } from "@common/js/common";
import account from '@/vuex/modules/account';

export default {
  components: {
    OMenu,
  },
  props:{
    activeMenuIndex:String|Number
  },
  data() {
    return {
      navIndex: 0,
      menus:["Home","How to use","Whitepaper","Jobs"],
      paths: ["","/how-to-use","","/jobs"],
      // paths: {
      //   "/": 0,
      //   "/login": 1,
      //   "/create-account": 1,
      //   "/proposes": 2,
      // },
      openLangs: false,
      placeholder: "",
      isDark: false,
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
      this.navIndex=this.activeMenuIndex;
      let theme = localStorage.getItem("theme");
      if (theme) {
        this.changeTheme(theme);
      }
    },
    openMenu(index){
        if(index==2){
          window.open("https://ipland.gitbook.io/ipland-whitepaper/")
          return;
        }
        let path="/official"+this.paths[index]
        this.$router.push(path);

    },
    CONNECT() {
      this.onConnect();
    },
    goAccount() {
      let path = "/";
      if (this.accountName) {
        path = `/account/${this.accountName}`;
      }
      this.$router.push({ path });
    },
    changeTheme(theme) {
      this.isDark = !this.isDark;
      let _theme = this.isDark ? "dark" : "day";
      if (theme) {
        _theme = theme;
        this.isDark = theme == "dark";
      }
      this.setTheme(_theme);
      window.document.body.setAttribute("data-theme", _theme);
      localStorage.setItem("theme", _theme);
    },
    switchLang(locale) {
      this.$i18n.locale = locale;
      setup(locale);
      $c.loadRem();
      this.openLangs = false;
    },

    refresh() {
      window.location.reload();
    },
    ...mapActions({
      setLoading: "global/setLoading",
      unlock: "global/unlock",
      setTheme: "global/setTheme",
      onConnect: "web3Modal/onConnect",
    }),
  },
  beforeDestroy() {},
};
</script>

<style lang="scss"  >
@import "~@assets/css/mixin.scss";

.layout_head {
  width: torem(1440);
  margin: auto;
  /* padding: torem(16) 0 torem(16); */
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
      //   box-shadow: torem(2) torem(2) torem(2) #dde1e5;
      /* width: torem(186); */
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
      /* color: #FFFFFF; */
    }
  }
}

// body .popover_langs {
//   max-width: torem(150);
//   min-width: torem(130);
//   padding: torem(6) torem(0);
//   .ul_langs {
//     svg {
//       width: torem(23);
//       height: torem(17);
//       margin-right: torem(6);
//     }
//     li {
//       display: flex;
//       align-items: center;
//       padding: torem(10) torem(10);
//       cursor: pointer;
//       margin: torem(1) 0;
//     }
//     li:hover {
//       background: rgba(255, 255, 255, 0.1);
//     }
//   }
// }
// .active_lang {
//   color: #a0d3e8;
//   //   background: $white-bg-d;
//   @include bg_color_l();
// }
</style>
