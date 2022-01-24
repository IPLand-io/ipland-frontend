<template>
  <div class="Jops bg-cover">
    <div class="div-box-1 bg-cover">
      <div class="box">
        <div class="h-top">
          <img src="../assets/img/jobs/title_1.png" />
          <p>
            Open Positions
          </p>
          <p>
            What we're currently looking for:
          </p>
        </div>
        <div class="list row">
          <div class="col-sm-4 col-xs-6">
            <img src="../assets/img/jobs/list_item_1.png" />
          </div>
          <div class="col-sm-4 col-xs-6">
            <img src="../assets/img/jobs/list_item_2.png" />
          </div>
          <div class="col-sm-4 col-xs-6">
            <img src="../assets/img/jobs/list_item_3.png" />
          </div>
          <div class="col-sm-4 col-xs-6">
            <img src="../assets/img/jobs/list_item_4.png" />
          </div>
          <div class="col-sm-4 col-xs-6">
            <img src="../assets/img/jobs/list_item_5.png" />
          </div>
          <div class="col-sm-4 col-xs-6">
            <img src="../assets/img/jobs/list_item_6.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="div-box-2 bg-cover">
      <div class="box">
        <div class="h-top">
          <img src="../assets/img/jobs/title_2.png" />
          <p>
            If you think you are up for it, apply to us right away and send us your resume to
            <a>support@ipland.io</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" >
.Jops {
  height: 100%;

  .box {
    width: 14.4rem;
    margin: 0 auto;
    .h-top {
      text-align: center;
      margin-bottom: 0.6rem;
      img {
        width: 2.66rem;
        margin-bottom: 0.2rem;
      }
      p {
        font-size: 0.3rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.8);
        line-height: 0.4rem;
        margin-top: 0.1rem;
        margin-bottom: 0;
      }
    }
    .list {
      > div {
        text-align: center;
        margin: 0.36rem 0;
        img {
          /* width: 3.3rem; */
          height: 2.78rem;
        }
      }
    }
  }

  .div-box-1 {
    // background-image: url(../assets/img/jobs/bg_1.png);
    padding-bottom: 0.7rem;
    padding-top: 1.1rem;
  }
  .div-box-2 {
    background-image: url(../assets/img/jobs/bg_2.png);
    padding: 1.24rem 0;
    .box .h-top {
      margin-bottom: 0;
      p {
        width: 7.9rem;
        height: 1rem;
        font-size: 0.3rem;
        font-weight: 600;
        color: #ffffff;
        line-height: 0.5rem;
        text-align: left;
        margin: 0 auto;
      }
    }
  }
}
</style>

