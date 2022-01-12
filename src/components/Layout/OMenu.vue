<template>
    <div class="OMenu flex_center">
      <!-- <div class="item">
        <a class="btn developer_btn flex_center" href="https://docs.ipland.finance/" target="_blank">Document</a>
      </div> -->
      <div class="item flex_center"  v-for="(item,index) in menus" :key="item"
           :class="{'active':index==navIndex}">
          <a class="btn flex_center" @click="openMenu(index)" >{{item}}</a>
          <div class="div-border"></div>
      </div>
    </div>
</template>

<script >
import { mapGetters, mapActions } from "vuex";
export default {
  props:{
    menus:Array,

    activeMenuIndex:{
      type:String|Number,
      default:0
    }
  },
  data() {
    return {
      navIndex: 0
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

  },
  watch: {},
  created() {
    this.navIndex=this.activeMenuIndex;
  },
  methods: {
    openMenu(index){
        if(index==1&&this.menus[1]=='YouTube'){
          this.$develop();
          return;
        }
        if(index==2&&this.menus[2]=='Whitepaper'){
        }else{
           this.navIndex=index;
        }
        this.$emit("click",index);
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

  .OMenu {
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
    .item{
      height: 100%;
      position: relative;

    }
    .active{
      .btn{
        color:#fff;
      }
      text-align: center;
      .div-border{
        width: 0.93rem;
        height: 0.12rem;
        background-image: url(../../assets/img/top/border_bottom.png);
        background-size: cover;
        background-position: center;
        margin: 0 auto;
        position: absolute;
        bottom:0;
      }
    }
  }
</style>
