<template>
      <div class="div_footer_c">
        <div class="div_footer">
            <div class="item">
                <img src="../../assets/img/footer/logo.png" />
                <p>
                    Buy and sell NFTs from your favorite content creators, earn crypto by interacting with these creators, or mint your own NFTs and start earning rewards today. Powered by Solana.
                </p>
            </div>
            <div class="item" >
                <ul>
                    <li>Product</li>
                    <li><a :href="`${production_system_url}`" target="_bank" >IP Farming</a></li>
                    <li><a :href="`${production_system_url}`" target="_bank" >Conft</a></li>
                     <li><a :href="`${production_system_url}`" target="_bank" >Our Strengths</a></li>
                    <li><a :href="`${production_system_url}`" target="_bank" >Token</a></li>
                     <li><a :href="`${production_system_url}`" target="_bank" >Roadmap</a></li>
                    <li><a :href="`${production_system_url}`" target="_bank"  >Partnerships</a></li>
                </ul>
            </div>
            <div class="item" >
                <ul>
                    <li>Legal</li>
                    <li ><a :href="`${production_system_url}`" target="_bank">Terms and Conditions</a></li>
                </ul>
            </div>
            <div class="item" >
                <ul>
                    <li>Community</li>
                    <li><a href="https://medium.com/@IPLand.io" target="_bank">Medium</a></li>
                    <li><a href="https://twitter.com/@ipland_io" target="_bank">Twitter</a></li>
                     <li><a href="https://t.me/ipland_group" target="_bank">Telegram</a></li>
                    <!-- <li><a :href="`${production_system_url}`" target="_bank">Discord</a></li> -->
                     <li><a href="https://www.facebook.com/ipland.io" target="_bank">Facebook</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script >
  import {mapGetters,mapActions} from 'vuex';
  import {config} from '@config/env';

  export default {
      data(){
          return {
              production_system_url:""
          }
      },
      created(){
        //   this.production_system_url=config.production_system_url;
      },
      computed:{
        ...mapGetters({
            isPC: "global/isPC"
        })
      }
  };
</script>

<style lang="scss" >
    .div_footer_c{
            background: #1B102D;
            color:#fff;
            .div_footer{
                width: 15.8rem;
                display: flex;
                justify-content: space-between;
                padding: 0.8rem 0 0.5rem 0;
                margin: 0 auto;
                 a{
                  color: rgba(255,255,255,0.6);
                }
                .item:nth-child(1){
                    display: flex;
                    flex-direction: column;
                    width: 5rem;
                    img{
                        width: 3.9rem;
                        height: 1.40rem;
                        margin-right: 0.2rem;
                        margin-bottom: 0.2rem;
                    }
                    p{
                        text-align: left;
                        width: 4.71rem;
                        height: 1.79rem;
                        font-size: 0.24rem;
                        font-family: PingFangSC-Semibold, PingFang SC;
                        font-weight: 600;
                        color: rgba(255,255,255,0.6);
                        line-height: 0.3rem;
                        letter-spacing: 1px;
                        padding-left: 0.4rem;
                    }
                    ul{
                        li{
                            margin-bottom: 0.04rem;
                            font-size: 0.24rem;
                            i{
                                margin-right: 0.06rem;
                                font-size: 0.2rem;
                            }
                            display: flex;
                            align-items: center;
                            // justify-content: space-between;
                        }
                        li:nth-child(1){
                           font-size: 0.16rem;
                           letter-spacing: 4px;
                        }
                        li:nth-child(2){
                           font-size: 0.16rem;
                           letter-spacing: 0.18rem;
                        }
                        li:last-child{
                            // justify-content: space-between;
                            i{
                                margin-right: 0.12rem;
                                cursor: pointer;
                            }
                        }
                    }
                }
                .item+.item{

                    ul{
                        li{
                            margin-top: 0.22rem;
                            text-align: left;
                             font-size: 0.24rem;

                        }
                        li:first-child{
                            margin-top: 0;
                               font-size: 0.3rem;
                               color:#fff;

                        }
                    }
                }

                .div_qrcode{
                    width: 3rem;
                    display: flex;
                    justify-content: space-between;
                    img{
                        width:0.72rem;
                    }
                    >div{
                        text-align: center;
                        p{
                            margin-top: 0.04rem;
                        }
                    }

                }
            }
            .botom_c{
                 border-top:2px solid #1A1A1A;
                .bottom{
                    width: 70%;
                    margin: 0 auto;
                    padding: 0.1rem 0 0.1rem;
                    display: flex;
                    justify-content: space-between;
                    font-size: 0.13rem;
                }
            }

        }
</style>
