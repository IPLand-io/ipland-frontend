<template>
  <div class="page-home">
    <div class="div-body">
      <div class="open-protocol-ecosystem bg-cover">
        <img src="../assets/img/ip_farming/title.png" style="width: 2.8rem" />
        <div class="list row">
          <div class="col-sm-4">
            <div class="item-box bg-cover">
              <img class="small_img" src="../assets/img/ip_farming/item1.png" />

              <p class="small_p">
                A unique CryptoID-NFT is minted once a creator installs IPland
                and verifies.
              </p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="item-box bg-cover">
              <img class="small_img" src="../assets/img/ip_farming/item2.png" />
              <p class="small_p">
                Fans get IPS （fragment of the CryptoID-NFT）on IP Twitter with
                IPland.
              </p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="item-box bg-cover">
              <img class="small_img" src="../assets/img/ip_farming/item3.png" />
              <p class="small_p">
                Stake IPS on the IP Twitter pool. Owner and IP both earn a split
                of the staking reward
              </p>
              <!-- <p class="small_p_p">Premium</p>
              <p class="small_p">$136M +</p>
              <p class="small_p_p">Yield</p> -->
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "components/Layout/Footer.vue";

export default {
  name: "app",
  components: {
    Footer,
  },
};
</script>

<style lang="scss">
@import "~@assets/css/mixin.scss";
.page-home {
  text-align: center;
  .div-body {
    a {
      text-decoration-line: none;
    }
    section {
      margin: torem(20) auto;
      overflow: hidden;
    }
    .open-protocol-ecosystem {
      background-image: url(../assets/img/ip_farming/bg.png);
      padding: 0.8rem 0 0.4rem;
      .list {
        margin: torem(30) auto 0;
        width: 17.4rem;
        .item-box {
          width: torem(338);
          // height: torem(338);
          max-width: 100%;
          text-align: left;
          //     background: #ecf0f3;
          // box-shadow: -8px 5px 11px 0px #d7dbde, 6px -6px 3px 0px #f7f8fc;
          // border-radius: 16px;
          margin: auto;
          p {
            font-size: 0.24rem;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.7);
            line-height: 0.34rem;
            letter-spacing: 1px;
            padding-left: 0.2rem;
          }
          img {
            width: 2.7rem;
          }
        }
        > div:nth-child(2) {
          margin-top: 0.64rem;
        }
        > div:nth-child(3) {
          margin-top: 1.28rem;
        }
        > div {
          height: 100%;
        }
      }
    }
  }
}
</style>
