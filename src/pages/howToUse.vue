<template>
  <div class="HowToUse">
    <div class="box">
      <div class="h-top">
        <img src="../assets/img/how_to_use/title.png" />
        <p>
          IPLAND is a metaverse social network portal and a digital content NFT financial protocol built on a new crypto-token economic model.
        </p>
      </div>

      <div class="step">
        <div class="row">
          <div class="line">
            <div class="item"></div>
            <div class="item">
              <div class="circle flex_center">
                1
              </div>
            </div>
          </div>
          <div class="content">
            <div class="left">
              <p>Install IPLand</p>
              <a :href="$config.ipland_down_url"
                 target="_blank">
                <img src="../assets/img/how_to_use/btn.png" />
              </a>

            </div>
            <div class="right">
              <img style="height:1.24rem;margin-left:0.1rem"
                   src="../assets/img/how_to_use/content_right_1.png" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="line">
            <div class="item"></div>
            <div class="item">
              <div class="circle flex_center">
                2
              </div>
            </div>
          </div>
          <div class="content">
            <div class="left">
              <p>Verify your account. You will be instructed after installation.</p>
            </div>
            <div class="right">
              <img src="../assets/img/how_to_use/content_right_2.png" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="line">
            <div class="item"></div>
            <div class="item">
              <div class="circle flex_center">
                3
              </div>
            </div>
          </div>
          <div class="content">
            <div class="left">
              <p>Enjoy the metaverse Socialfi and 'Social to Earn'</p>
            </div>
            <div class="right">
              <img src="../assets/img/how_to_use/content_right_3.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" >
.HowToUse {
  // background-image: url(../assets/img/how_to_use/bg.png);
  // background-repeat: no-repeat;
  // background-position: center 10%;
  // background-size:cover;
  // padding-top:1.1rem;
  height: 100%;
  .box {
    width: 14.4rem;
    margin: 0 auto 0;
    padding-top: 0.96rem;
    .h-top {
      img {
        width: 4.02rem;
      }
      p {
        width: 10.42rem;
        height: 1rem;
        font-size: 0.26rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.8);
        line-height: 0.4rem;
        margin-top: 0.3rem;
        margin-bottom: 0;
      }
    }

    .step {
      padding-left: 0.4rem;
      .row {
        display: flex;
        //  height: 3.15rem;
        height: 2.8rem;

        align-items: center;
        .line {
          display: flex;
          flex-direction: column;
          padding: 0 0.8rem 0 0;
          height: 100%;
          .item {
            flex: 1;
            width: 0;
            border-right: 2px dashed #8601ff;
            border-left: 2px dashed #8601ff;
            position: relative;
          }

          .item:nth-child(2) {
            .circle {
              width: 0.56rem;
              height: 0.56rem;
              background: linear-gradient(154deg, #9601ff 0%, #5000ff 100%);
              border-radius: 50%;
              position: absolute;
              top: -0.28rem;
              left: -0.28rem;
              font-size: 0.28rem;
              color: #fff;
            }
          }
        }

        .content {
          width: 6.4rem;
          // height: 2.15rem;
          height: 2rem;

          background: rgba(255, 255, 255, 0.19);
          border-radius: 0.25rem;
          display: flex;
          justify-content: space-between;
          padding: 0.3rem;
          .left {
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0.1rem 0;
            p {
              font-size: 0.3rem;
              font-weight: 600;
              color: #ffffff;
              // line-height: 0.22rem;
              padding: 0 0.3rem 0 0.1rem;
            }
            img {
              cursor: pointer;
              width: 2.23rem;
            }
          }
          .right {
            width: 1.58rem;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              // width: 1.4rem;
              height: 1.1rem;
            }
          }
        }
      }

      .row:first-child {
        .line .item:nth-child(1) {
          border: 0;
        }
      }
      .row:last-child {
        .line .item:nth-child(2) {
          border: 0;
        }
      }
    }
  }
}
</style>
