<template>
  <div
    id="div_page_index"
    class="div_page div_page_index"
    :class="{ isIndex: $route.path == '/' }"
  >
    <div
      class="body bg-cover"
      :class="['body_' + $i18n.locale, `body-bg-${activeMenuIndex}`]"
    >
      <div class="top bg-cover" :class="[`top-bg-${activeMenuIndex}`]">
        <drawer
          v-if="!isPC"
          :display.sync="display"
          :inner="true"
          :width="drawerWidth"
          :mask="false"
        >
          <MobileMenu :active-menu-index="activeMenuIndex" mode="vertical" />
        </drawer>
        <div class="head_menu" v-if="initOk">
          <div class="head_sub">
            <div
              class="div_logo"
              v-if="!isPC"
              @click="$router.push({ path: '/' })"
            >
              <img class="logo_img" src="./assets/img/logo2x.png" />
            </div>
            <img
              v-if="!isPC"
              class="switchMenu"
              @click="display = true"
              style="height: 40px; margin-right: 15px"
              src="./assets/img/icon_sidebar2x.png"
            />
            <NavigationBar
              :breadcrumbs="breadcrumbs"
              :activeMenuIndex="activeMenuIndex"
              v-if="initOk"
            />
          </div>
        </div>
        <div class="top-content" v-if="$route.path == '/official'">
          <div class="north div-icons">
            <img src="./assets/img/top/icon_1.png" />
            <img src="./assets/img/top/icon_2.png" />
            <img src="./assets/img/top/icon_3.png" />
          </div>
          <div class="center">
            <img src="./assets/img/top/title.png" />
            <p>
              IPLand is the next-gen Metaverse blockchain social platform that
              enables you to financialize your social capital.
            </p>
            <div class="div-btns">
              <img @click="$develop" src="./assets/img/top/btn_1.png" />
              <img @click="$develop" src="./assets/img/top/btn_2.png" />
            </div>
          </div>
          <div class="south div-icons">
            <img src="./assets/img/top/icon_4.png" />
            <img src="./assets/img/top/icon_5.png" />
            <img src="./assets/img/top/icon_6.png" />
          </div>
        </div>
      </div>

      <div class="main_content_c">
        <div
          class="main_content"
          v-loading="g_loading.status && g_loading.type == 'page'"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
          :element-loading-text="g_loading.text"
          :class="{ main_content_scroll: $route.path == '/home' }"
        >
          <div
            class="pageContainer"
            :class="{
              no_scroll:
                $route.path != '/' && $route.path.indexOf('/account') == -1,
            }"
            v-if="initOk"
          >
            <!-- <transition :name="transitionName"> -->
            <router-view :key="key" v-if="!$route.meta.keepAlive"></router-view>
            <keep-alive v-if="$route.meta.keepAlive && visible_router_view">
              <router-view v-if="visible_router_view"></router-view>
            </keep-alive>
            <!-- </transition> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NavigationBar from "components/Layout/NavigationBar.vue";
import drawer from "@base/drawer";
import { config } from "./config/env";
import MobileMenu from "components/Layout/MobileMenu.vue";

export default {
  components: {
    MobileMenu,
    NavigationBar,
    drawer,
  },
  data() {
    return {
      transitionName: "scfade-left",
      pathNames: [],
      breadcrumbs: [],
      initOk: false,
      placeholder: "",
      is_dark_theme: true,
      display: false,
      // drawerWidth: "160px",
      drawerWidth: "100%",
      visible_router_view: true,
      isApp: false,
      selectedAccount: "",
      accounts: [],
    };
  },
  computed: {
    ...mapGetters({
      accountName: "account/getAccountName",
      g_loading: "global/getLoading",
      isPC: "global/isPC",
      web3: "web3Modal/web3",
    }),
    key() {
      return this.$route.path + Math.random();
    },
    activeMenuIndex() {
      let paths = ["/official", "/official/how-to-use", "", "/official/jobs"];
      let path = this.$route.path;
      let activeIndex = paths.findIndex((item) => item == path);
      if (path.indexOf("/protocol-pools/") != -1) {
        activeIndex = 2;
      }
      return activeIndex + "";
    },
  },
  watch: {
    $route(to, from) {
      let src = this.$route.query.src;
      if (src && src == "app") {
        this.isApp = true;
      }
    },
    web3(web3) {
      if (web3) {
        this.setLoading({ status: false });
        this.setGas(web3.utils.toWei(config.gas_price, "gwei"));
      }
    },
  },

  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initGlobal();
      this.initOk = true;
      this.setLoading({ status: false });
      // this.initChain();
    },
    ...mapActions({
      setGas: "web3Modal/setGas",
      initGlobal: "global/init",
      setLoading: "global/setLoading",
      setHtmlFS: "global/setHtmlFS",
      initChain: "web3Modal/initChain",
    }),
  },
};
</script>

<style lang="scss">
@import "assets/css/mixin.scss";

.div_page_index {
  overflow: auto;
  height: 100%;
  display: flex;
  /* background-color: #ecf0f3; */
  background: #040916;

  // @include color-background-d();
  //   background-color: #21222c;
  // background-color: $color-background-l;
  font-family: PingFangSC-Regular, PingFang SC;

  font-size: 0.14rem;
  .side_left {
    color: #000;
    display: flex;
    flex-direction: column;
    padding-top: 0.1rem;
    border-right: 1px solid rgb(105, 105, 105);

    .logo {
      width: 150px;
      height: 41px;
      margin: 8px auto 0;
    }
    .side_left_menu {
      .el-menu-item {
        .el-tooltip {
          text-align: center;
        }
      }
    }
    .el-menu {
      border-right: 0;
    }
  }
  .body-bg-1 {
    background-image: url(./assets/img/how_to_use/bg.png);
    background-position: center 36%;
  }
  .body-bg-3 {
    background-image: url(./assets/img/jobs/bg_1.png);
    background-position: 0 0;
    background-repeat: no-repeat;
  }
  > .body {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
    .top-bg-0 {
      background-image: url(./assets/img/top/top_bg.png);
    }

    > .top {
      .top-content {
        width: 17.4rem;
        margin: 0 auto;
        .div-icons {
          position: relative;
          img {
            position: absolute;
            &:nth-child(1) {
              left: 8%;
            }
            &:nth-child(2) {
              left: 50%;
            }
            &:nth-child(3) {
              right: 8%;
            }
          }
        }
        .north {
          height: 1.6rem;
          margin-top: 1.2rem;
          img {
            &:nth-child(1) {
              width: 1.39rem;
            }
            &:nth-child(2) {
              transform: translate(-50%, -36%);
              width: 1.87rem;
            }
            &:nth-child(3) {
              width: 1.48rem;
            }
          }
        }
        .center {
          height: 4rem;
          text-align: center;
          padding-top: 0.2rem;
          img {
            width: 9.2rem;
            margin-bottom: 0.1rem;
          }
          p {
            width: 9.28rem;
            height: 0.66rem;
            font-size: 0.24rem;
            /* font-family: PingFangSC-Regular, PingFang SC; */
            font-weight: 400;
            color: #ffffff;
            line-height: 0.33rem;
            letter-spacing: 1px;
            margin: 0 auto;
          }
          .div-btns {
            margin-top: 0.4rem;
            img {
              width: 2.7rem;
              margin: 0 0.16rem;
              cursor: pointer;
            }
          }
        }
        .south {
          height: 2rem;
          img {
            &:nth-child(1) {
              width: 2.03rem;
              top: -16%;
            }
            &:nth-child(2) {
              transform: translate(-50%, 30%);
              width: 1.04rem;
            }
            &:nth-child(3) {
              width: 1.62rem;
              top: -24%;
            }
          }
        }
      }
    }
    .head_menu {
      display: flex;
      //   border-bottom: 1px solid rgb(105, 105, 105);
      //   height: 50px;
      justify-content: center;
      justify-content: space-between;
      .head_sub {
        // width: 1200px;
        width: 100%;
        padding: 0 0.14rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(151, 151, 151, 0.12);
        .div_logo {
          display: flex;
          align-items: center;
          margin-left: 0.1rem;
          max-width: 60%;
          color: #000;
          font-size: 0.22rem;
          img {
            height: 0.46rem;
          }
        }
      }
      .el-menu.el-menu--horizontal {
        border-bottom: 0;
      }
      .right {
        display: flex;
        padding-right: 0.3rem;
        align-items: center;
        i {
          color: $theme-color;
          font-size: 0.24rem;
        }
      }
    }
    @media screen and (max-width: 768px) {
      .head_menu {
        // height: 50px;
        height: 56px;
      }
    }
    .main_content_c {
      display: flex;
      width: 100%;
      flex: 1;
      /* overflow: hidden; */
    }
    div.main_content_scroll {
      display: block;
    }
    .main_content {
      // flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .div_breadcrumb {
        height: 0.56rem;
        min-height: 0.56rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.1rem 0;
        .el-breadcrumb {
          color: $color-text;
          font-size: 0.15rem;
        }
      }

      .pageContainer {
        flex: 1;
        width: 100%;
        margin: 0 auto;
        padding: 0 0 0;
        * {
          box-sizing: border-box;
        }
        > div {
          // width: 1200px;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
