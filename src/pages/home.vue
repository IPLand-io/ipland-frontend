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
      <div class="conft bg-cover">
        <img src="../assets/img/conft.png" />
      </div>
      <div class="div-defi bg-cover">
        <div class="box">
          <p class="D_p_Second">
            <img src="../assets/img/our_strengths/title_1.png" />
          </p>
          <div class="row DEFI_div eliminate">
            <div class="col-sm-3 col-xs-6">
              <div class="DEFI_group">
                <img
                  class="DEFI_img"
                  src="../assets/img/our_strengths/our_item_1.png"
                />
                <p class="small_p DEFI_p">
                  Financialized social influence through CONFT hunting
                </p>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6">
              <div class="DEFI_group">
                <img
                  class="DEFI_img"
                  src="../assets/img/our_strengths/our_item_2.png"
                />
                <p class="small_p DEFI_p">
                  Easy to develop new social app extensions
                </p>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6">
              <div class="DEFI_group">
                <img
                  class="DEFI_img"
                  src="../assets/img/our_strengths/our_item_3.png"
                />
                <p class="small_p DEFI_p">User-controlled data ownership</p>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6">
              <div class="DEFI_group">
                <img
                  class="DEFI_img"
                  src="../assets/img/our_strengths/our_item_4.png"
                />
                <p class="small_p DEFI_p">Mature web3.0 service operation</p>
              </div>
            </div>
          </div>
        </div>
        <div class="box_2">
          <img src="../assets/img/our_strengths/left.png" />
          <div class="row">
            <div class="col-sm-6">
              <div class="item-box">
                <p>Fans gain $IPV farming rewards</p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="item-box">
                <p>$IPV is paid for CONFT hunting fees</p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="item-box">
                <p>
                  Fans stake their $IPV to earn dividends, star-related rare
                  NFTs and governance rights
                </p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="item-box">
                <p>Fans bid for NFTs on IPLAND with $IPV</p>
              </div>
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

    .conft {
      background-image: url(../assets/img/home_bg_4.png);
      padding: 0.8rem 0.4rem;
      img {
        width: 10.7rem;
      }
    }

    .div-defi {
      background-image: url(../assets/img/our_strengths/bg.png);
      padding: 1.4rem 0 0.8rem;

      .box_2 {
        width: 14.8rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1.2rem auto 0.4rem;
        > img {
          height: 4rem;
        }
        > .row {
          flex: 1;
          padding-left: 0.4rem;
          > div {
            margin: 0.2rem 0;
          }
          img {
            width: 4rem;
          }
          > div {
            &:nth-child(1) .item-box {
              background-image: url(../assets/img/our_strengths/ip_item_1.png);
            }
            &:nth-child(2) .item-box {
              background-image: url(../assets/img/our_strengths/ip_item_2.png);
            }
            &:nth-child(3) .item-box {
              background-image: url(../assets/img/our_strengths/ip_item_3.png);
            }
            &:nth-child(4) .item-box {
              background-image: url(../assets/img/our_strengths/ip_item_4.png);
            }
          }
          .item-box {
            background-size: 90%;
            background-position: center;
            background-repeat: no-repeat;
            width: 5rem;
            height: 2.5rem;
            margin: 0 auto 0.1rem;

            p {
              padding: 1rem 0.64rem;
              font-size: 0.24rem;
              color: rgba(255, 255, 255, 0.8);
              line-height: 0.33rem;
              letter-spacing: 1px;
              text-align: left;
            }
          }
        }
      }
      .D_p_Second {
        img {
          width: 3.8rem;
        }
      }
      .DEFI_div {
        margin: 0 auto 0;
        text-align: center;
        width: 14.4rem;
      }

      .DEFI_p {
        text-align: left;
        font-size: torem(26);
        width: 2.7rem;
        font-size: 0.24rem;
        color: #ffffff;
        line-height: 0.33rem;
        letter-spacing: 1px;
        margin-left: 0.2rem;
      }
      .DEFI_img {
        height: torem(96);
        text-align: center;
      }

      .DEFI_div {
        margin-top: 1.1rem;
      }
    }
  }
}
</style>
