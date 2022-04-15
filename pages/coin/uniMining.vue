<template>
  <div class="container">
    <breadcrumb :dataList="breadcrumb"/>
    <div class=" ps-product--detail">
      <div class="ps-product__title"><a href.stop="#">UNI Mining</a></div>
      <div class="ps-page__content">
        <div class="row ">
          <div class="col-12 col-md-6 ">
            <div class="row">
              <div class="col-3">
                <h6>누적수익</h6>
              </div>
              <div class="col-9 text-right">
                <sub> ({{ coinSearchTime }}) 시세 - {{ coinPrice }} 원 </sub>
              </div>
            </div>
            <table-oriented :dataList="coinBeneFitList" class="my-0"/>
          </div>
          <div class="col-12 col-md-6">
            <div class="row">
              <div class="col-3">
                <h6>구매금액</h6>
              </div>

            </div>
            <table-oriented :dataList="uniBuyList" class="my-0"/>
          </div>
        </div>
      </div>
    </div>
    <v-divider/>
  </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import TableOriented from '~/components/elements/commons/TableOriented';
import {mapState} from 'vuex';
import {commaCurrency} from "~/utilities/helpers";

export default {
  layout: 'coin',
  components: {
    Breadcrumb,
    TableOriented,
  },
  data() {
    return {
      breadcrumb: [
        {
          url: '/',
          text: 'Home'
        },
        {
          url: '/coin/uniMining',
          text: 'UNI mining'
        }
      ],
    };
  },
  computed: {
    ...mapState({
      loading: state => state.app.loading,
      coinPrice: state => commaCurrency(state.account.bitCoinCurrent.one_price),
      coinSearchTime: state => state.account.bitCoinCurrent.search_time,
      uniBuyList: state =>{
        return [
          {title: '총구매수량\n(UNI point)' , text : commaCurrency(state.account.userUniPointInfo.uni_point)},
          {title: '누적 투자액\n(원)' , text : commaCurrency(state.account.userUniPointInfo.money)}
        ]
      },
      coinBeneFitList: state => {
        let sumCoin = 0.0;

        const retArr = state.account.userCoinBenefit.map(item => {
          const currency = Math.floor(state.account.bitCoinCurrent.one_price * item.coin_value * 100) / 100
          sumCoin = Number(sumCoin) + Number(item.coin_value);
          sumCoin = Math.floor(sumCoin * 100000000) / 100000000
          return {title: item.type_string, text: item.coin_value + 'BIT (' + currency + '원)'}
        })
        // 총합금액
        const calcPrice = Math.floor(sumCoin * state.account.bitCoinCurrent.one_price)

        const sumBenefit = [

          {title: '총계', text: sumCoin + 'BIT (' + calcPrice + '원)'},
          {
            title: '수익률(누적수익/투자금액)',
            text:  Number(calcPrice) *100 / Number(state.account.userUniPointInfo.money) +'%'
          }
        ]
        const lastArr = [...retArr, ...sumBenefit]
        return lastArr
      }
    })
  },
  mounted() {
    // 비트코인 시세확인
    this.$store.dispatch('account/fetchBitCoinCurrent');
    // 고객이 보유한 코인정보
    this.$store.dispatch('account/fetchUserCoinBenefit');
    // 고객이 보유한 포인트 정보
    this.$store.dispatch('account/fetchUserUniPointInfo');

  },
  methods: {}
};
</script>
