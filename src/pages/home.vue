<template>
  <div class="page-home">
    <div class="div-body">
      <div class="buy-list-box">
        <div class="tab">
          <OMenu :menus="menus"></OMenu>
        </div>
        <div class="list"
             v-loading="loading"
             element-loading-spinner="el-icon-loading"
             element-loading-background="rgba(0, 0, 0, 0.8)">
          <div class="item"
               v-for="(item, index) in tableData"
               :key="item.id">
            <div class="left">
              <span>
                {{ index + 1 + (page - 1) * 10 }}
              </span>
              <a :href="`https://twitter.com/${item.userName}`"
                 target="_bank">
                <Avatar :url="item.twitterAvatar"></Avatar>
                <span>
                  {{ item.userName }}
                </span>
                <div class="circle"
                     :style="{ background: index % 2 ? '#FFA842' : '#4274FF' }"></div>
              </a>
            </div>

            <div class="right flex_center">
              <span class="span-price">$ {{ item.coinPrice }}</span>
              <img src="../assets/img/buy_list/buy.png"
                   @click="$develop" />
              <img src="../assets/img/buy_list/farm.png"
                   @click="$develop" />
            </div>
          </div>
          <empty v-if="!tableData.length" />
        </div>

        <div class="footer">
          <el-pagination @current-change="pageChange"
                         layout="prev,pager,next"
                         :total="total"
                         :page-size="10"
                         :pager-count="5"
                         :current-page.sync="page">
          </el-pagination>
          <div class="div-go-page">
            <input type="text"
                   v-model="input_page"
                   @keyup.enter="page = Number(input_page)" />
            <img @click="page = Number(input_page)"
                 src="../assets/img/buy_list/go_page.png" />
          </div>
        </div>
      </div>
      <div class="open-protocol-ecosystem bg-cover">
        <img src="../assets/img/ip_farming/title.png"
             style="width: 2.8rem" />
        <div class="list row">
          <div class="col-sm-4">
            <div class="item-box bg-cover">
              <img class="small_img"
                   src="../assets/img/ip_farming/item1.png" />

              <p class="small_p">
                A unique CryptoID-NFT is minted once a creator installs IPland
                and verifies.
              </p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="item-box bg-cover">
              <img class="small_img"
                   src="../assets/img/ip_farming/item2.png" />
              <p class="small_p">
                Fans get IPS （fragment of the CryptoID-NFT）on IP Twitter with
                IPland.
              </p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="item-box bg-cover">
              <img class="small_img"
                   src="../assets/img/ip_farming/item3.png" />
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
                <img class="DEFI_img"
                     src="../assets/img/our_strengths/our_item_1.png" />
                <p class="small_p DEFI_p">
                  Financialized social influence through CONFT hunting
                </p>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6">
              <div class="DEFI_group">
                <img class="DEFI_img"
                     src="../assets/img/our_strengths/our_item_2.png" />
                <p class="small_p DEFI_p">
                  Easy to develop new social app extensions
                </p>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6">
              <div class="DEFI_group">
                <img class="DEFI_img"
                     src="../assets/img/our_strengths/our_item_3.png" />
                <p class="small_p DEFI_p">User-controlled data ownership</p>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6">
              <div class="DEFI_group">
                <img class="DEFI_img"
                     src="../assets/img/our_strengths/our_item_4.png" />
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
      <div class="token bg-cover">
        <img src="../assets/img/token.png" />
        <div class="row">
          <div class="col-sm-4 left">
            <div class="item">
              <p class="name">Total token supply</p>
              <p class="value">100,000,000,000</p>
            </div>
            <div class="item">
              <p class="name">Initial market cap</p>
              <p class="value">${{ $config.market_cap }}</p>
            </div>
            <div class="item">
              <p class="name">Public sale price</p>
              <p class="value">${{ $config.sale_price }}</p>
            </div>
          </div>
          <!-- <div class="col-sm-1"></div> -->

          <div class="col-sm-8 right">
            <!-- <div id="token_chart">

                    </div> -->
            <img src="../assets/img/token_pie.png" />
          </div>
        </div>
      </div>
      <div id="road-map"
           class="open-protocol-ecosystem road-map bg-cover">
        <img src="../assets/img/roadmap.png"
             style="width: 2.8rem" />
        <div class="list row">
          <div class="col-sm-4">
            <div class="item-box bg-cover">
              <div class="title bg-cover flex_center">2021 Q4</div>
              <ul>
                <li>Social Node Announcement</li>
                <li>IPland Genesis-NFT Airdrop</li>
                <li>CryptoID Fragments IPS Relaese</li>
                <li>Native assets NFT creation</li>
                <li>Marketplace functionalities</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="item-box bg-cover">
              <div class="title bg-cover flex_center">2022 Q1</div>
              <ul>
                <li>Co-NFT</li>
                <li>NFT Hunting</li>
                <li>IPS Farming</li>
                <li>New Social Platform Expansion</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="item-box bg-cover">
              <div class="title bg-cover flex_center">2022 Q2</div>
              <ul>
                <li>DAO Membership</li>
                <li>NFT Rental/loan/financial service</li>
                <li>Platform Interface Opening</li>
                <li>GameFi Development</li>
              </ul>
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
import OMenu from "components/Layout/OMenu.vue";
import Avatar from "components/Common/Avatar.vue";
export default {
  name: "app",
  components: {
    Footer,
    OMenu,
    Avatar,
  },
  data () {
    return {
      menus: ["Twitter", "YouTube"],
      total: 120,
      page: 1,
      input_page: "",
      loading: false,
      tableData: [],
    };
  },
  methods: {
    pageChange (page) {
      this.page = page;
    }
  }
};
</script>

<style lang="scss">
@import '~@assets/css/mixin.scss';
.page-home {
  text-align: center;
  .div-body {
    .buy-list-box {
      /* max-width: torem(1440); */
      background-image: url(../assets/img/buy_list/bg.png);
      background-size: cover;
      .tab {
        padding: 0.2rem 0;
        .OMenu {
          height: 0.8rem;
          .div-border {
            bottom: -0.1rem;
          }
        }
      }

      .btn {
        font-size: 0.36rem;
      }

      .list {
        width: torem(1440);
        margin: 0 auto;
        background: linear-gradient(
          180deg,
          rgba(119, 80, 198, 0) 0%,
          rgba(119, 80, 198, 0.12) 48%,
          rgba(119, 80, 198, 0) 100%
        );
        border-radius: 0.2rem;
        border: 1px solid rgba(119, 80, 198, 0.52);
        padding: 0 0.46rem;
        margin-top: 0.3rem;
        .item {
          display: flex;
          justify-content: space-between;
          padding: 0.2rem 0;
          border-bottom: 1px solid rgba(176, 155, 246, 0.14);
          .left {
            display: flex;
            align-items: center;
            a {
              display: flex;
              align-items: center;
            }
            span {
              color: #e3e3e3;
              font-size: 0.34rem;
              display: inline-block;
              min-width: 30px;
            }
            .avatar-c {
              margin: 0 0.2rem;
            }

            .circle {
              border: 0.06rem solid #fff;
              width: 0.2rem;
              height: 0.2rem;
              border-radius: 50%;
              margin-left: 0.14rem;
              top: 0.02rem;
              position: relative;
            }
          }
          .right {
            .span-price {
              font-size: 0.34rem;
              font-weight: 600;
              color: #bca6f9;
              margin-right: 0.3rem;
            }
            img {
              width: 1.2rem;
              margin: 0 0.06rem;
              cursor: pointer;
            }
          }
        }
      }

      .footer {
        padding: 0.3rem 0 0.46rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .div-go-page {
          width: 0.84rem;
          height: 0.4rem;
          background: rgba(255, 255, 255, 0.19);
          border-radius: 0.2rem;
          display: flex;
          align-items: center;
          margin-left: 0.22rem;
          input {
            background: transparent;
            width: 0.5rem;
            padding: 0 0.06rem 0 0.12rem;
            color: #fff;
          }
          img {
            cursor: pointer;
            width: 0.34rem;
          }
        }
      }
    }
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

    .token {
      background-image: url(../assets/img/token_bg.png);
      padding: 1rem 0 0.4rem;
      > img {
        margin-bottom: 0.56rem;
      }
      .row {
        width: 14.4rem;
        margin: 0 auto;
        display: flex;
        align-items: center;
        .left {
          .item {
            margin-bottom: 0.48rem;
            p {
              text-align: left;
            }
            .name {
              font-size: 0.24rem;
              font-weight: 400;
              color: rgba(255, 255, 255, 0.7);
              line-height: 0.33rem;
              letter-spacing: 1px;
            }
            .value {
              font-size: 0.54rem;
              color: #ffffff;
              line-height: 0.76rem;
              letter-spacing: 2px;
            }
          }
        }
        .right {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          img {
            width: 7.6rem;
          }
          #token_chart {
            width: 100%;
            height: 5.6rem;
            position: relative;
            top: -0.4rem;
            right: -14%;
          }
        }
      }
    }

    #road-map {
      background-image: url(../assets/img/roadmap_bg.png);
      padding-bottom: 0.8rem;
      padding-top: 1.2rem;
      > img {
        margin-bottom: 0.7rem;
      }
      .title {
        width: 3.6rem;
        height: 1rem;
        background-image: url(../assets/img/roadmap_item_bg.png);
        background-size: 100%;
        background-repeat: no-repeat;
        font-size: 0.4rem;
        color: #ffffff;
        line-height: 0.56rem;
        letter-spacing: 2px;
        margin-bottom: 0.4rem;
      }
      ul {
        margin-left: 0.3rem;
        li {
          font-size: 0.2rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          line-height: 0.5rem;
          letter-spacing: 1px;
          list-style-type: disc;
          text-align: left;
        }
      }
      .list {
        > div {
          margin-top: 0;
        }
        .item-box {
          width: 4.16rem;
        }
      }
    }
  }
}
</style>
