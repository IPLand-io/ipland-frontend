<template>
  <div class="drawer" :class="{ drawer_active: display }" @click="closeByMask">
    <div :class="maskClass" @click="closeByMask"></div>
    <div
      :class="mainClass"
      :style="mainStyle"
      class="main"
      @click.stop="1 == 1"
    >
      <div class="drawer-head">
        <span style="font-size: 19px" @click="goHome"> </span>
        <span class="close-btn" v-show="closable" @click="closeByButton">
          <img src="../assets/img/icon_sidebar_close.png" />
        </span>
      </div>
      <div class="drawer-body" @click="closeByMask">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    display: {
      type: Boolean,
    },

    title: {
      type: String,
      default: "",
    },

    closable: {
      type: Boolean,
      default: true,
    },

    mask: {
      type: Boolean,
      default: true,
    },

    maskClosable: {
      type: Boolean,
      default: true,
    },

    width: {
      type: String,
      default: "400px",
    },

    inner: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    maskClass: function () {
      return {
        "mask-show": this.mask && this.display,
        "mask-hide": !(this.mask && this.display),
        inner: this.inner,
      };
    },
    mainClass: function () {
      return {
        "main-show": this.display,
        "main-hide": !this.display,
        inner: this.inner,
      };
    },
    mainStyle: function () {
      return {
        width: this.width,
        right: this.display ? "0" : `-${this.width}`,
        // borderLeft: this.mask ? 'none' : '1px solid #666'
      };
    },
    ...mapGetters({
      accountName: "account/getAccountName",
    }),
  },
  mounted() {
    if (this.inner) {
      let box = this.$el.parentNode;
      box.style.position = "relative";
    }
  },
  methods: {
    closeByMask() {
      this.maskClosable && this.$emit("update:display", false);
    },
    closeByButton() {
      this.$emit("update:display", false);
    },
    goAccount() {
      let path = "/login/0";
      if (this.accountName) {
        path = `/account/${this.accountName}`;
      }
      this.$router.push({ path });
    },
    goHome() {
      this.$router.push({ path: "/" });
      this.closeByButton();
    },
  },
};
</script>

<style lang="scss">
div.drawer_active {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100 !important;
}
.drawer {
  .mask-show {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 8;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
    transition: opacity 0.5s;
  }
  .mask-hide {
    opacity: 0;
    transition: opacity 0.5s;
  }

  .main {
    position: fixed;
    z-index: 10;
    top: 0;
    height: 100%;
    background: #121327;

    transition: all 0.5s;
  }
  .main-show {
    opacity: 1;
  }
  .main-hide {
    opacity: 0;
  }

  .drawer-head {
    display: flex;
    justify-content: space-between;
    // height: 45px;
    // line-height: 45px;
    height: 90px;
    line-height: 40px;
    padding: 0 15px;
    font-size: 12px;
    font-weight: bold;
    border-bottom: 1px solid #eee;
    > .div_logo {
      height: 100%;
      display: flex;
      align-items: center;
      margin-right: 0.3rem;
      cursor: pointer;
      > img {
        // height: 100%;
        height: 30px;
      }
    }
    .close-btn {
      display: inline-block;
      display: flex;
      align-items: center;
      cursor: pointer;
      height: 100%;
      padding-left: 20px;
      img {
        height: 50px;
      }
    }
    > span {
      display: flex;
      align-items: center;
    }
  }
  .drawer-body {
    font-size: 14px;
    // padding: 15px;
  }
}

.drawer {
  .drawer-head {
    // color:rgba(255, 255, 255, 0.8);
    border-bottom-color: #666;
    border-bottom: 0;
    // border-left: 1px solid #666;
  }
  .main {
    background: #121327;
  }
  .main_dark {
    border-left: 1px solid #666;
  }
  .el-menu {
    border-right: 0;

    .el-menu-item {
      height: auto;
      line-height: inherit;
      margin-bottom: 20px;
      .item {
        padding: 16px 15px;
        height: 70px;
        background: #1a1b32;
        box-shadow: 6px 8px 16px 0px #121327, -2px -1px 6px 0px #121327;
        border-radius: 6px;
        display: flex;
        align-items: center;
        .title {
          font-size: 16px;

          color: #fff;
          /* margin-bottom: 6px; */
        }
        .intro {
          font-size: 13px;
          color: #798493;
          display: none;
        }
      }
    }
  }
}
</style>
