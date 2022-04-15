<template>
  <div class="container">
    <breadcrumb :dataList="breadcrumb"/>
    <div class="ps-product__content ps-product--detail">
      <div class="ps-product__title">
        <a href.stop="#">BTC Point</a>
      </div>
      <div class="dropdown-divider"/>
      <div class="row">
        <div class="col-4">
          <p>누적수입</p></div>
        <div class="col-8 text-right">
          <div>
            <sub>{{ coinSearchTime }}</sub></div>
          <small :style="{'color' : '#103178', 'font-weight' : '700'}"> 1 BIT-COIN = {{ coinPrice }} 원</small>
        </div>
      </div>
      <div class="card border-0 text-center">
        <div class="card-body" :style="{'backgroundColor':'#103178'}">
          <h3 class="text-white">
            {{ this.$store.state.account.userBitCoinSum }}
            <sub class="font-weight-bold">BIT</sub>
          </h3>
        </div>
      </div>
      <div class="dropdown-divider"/>
      <small>BTC Point 잔고</small>
      <div class="card border-0 bg-light">
        <div class="card-body text-center">
                        <span class="display-1 font-weight-bold text-danger">
                        {{ this.$store.state.account.userBitCoinBalance }}
                        </span>
          <sub class="font-weight-bold" :style="{'color':'#103178 !important'}">BIT</sub>
        </div>
        <div class="dropdown-divider"/>
        <v-btn
            dark
            color="warning"
            rounded
            @click="$router.push('/coin/btcPointSell')"
        >
          수익출금
        </v-btn>
      </div>
      <div class="dropdown-divider my-5"/>

      <div class="row">
        <div class="col-6"><sub>입출고내역</sub></div>
        <div class="col-6 text-right">
          <select class="custom-select custom-select-sm text-right" v-model="getSort" @change="searchEvent(0)">
            <option v-for="(item, index) in sortItems" :value="item.value" :key="index">{{ item.text }}</option>
          </select>
        </div>
      </div>
      <div class="dropdown-divider"/>
      <div v-for="(item, index ) in this.$store.state.account.userBitCoinList" :key="index">
        <div class="row" @click.prevent="detailDialogEvent(true ,item )">
          <div class="col-3">
            <div>{{ item.type }}- <small>{{ item.detail_type }}</small></div>
            <div>
              <small>{{ item.date_day }}</small>
              <sup>{{ item.date_time }}</sup>
            </div>
          </div>
          <div class="col-9 text-right">
            <small :class="item.type === '입고' ? 'ps-product__price' : 'ps-product__del' ">{{ item.coin_value }}
              <sub>BIT</sub>
            </small>
            <h4>{{ item.sum_coin_value }}</h4>
          </div>
        </div>
        <div class="dropdown-divider"/>
      </div>
      <button class="ps-btn ps-btn--primary mt-3 "
              v-if="this.$store.state.account.userBitCoinList.length < this.$store.state.account.userBitCoinListCount"
              @click="searchEvent(1)"
      >더보기
      </button>
      <button class="ps-btn ps-btn--primary mt-3 "
              @click="searchEvent(0)"
              v-else
      > 다시조회
      </button>
      <div class="dropdown-divider"/>
    </div>


  </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import {mapState} from 'vuex';
import {commaCurrency} from "~/utilities/helpers";

export default {
  layout: 'coin',
  components: {
    Breadcrumb,
  },
  data() {
    return {
      pageSize : 4,
      breadcrumb: [
        {
          url: '/coin/uniMining',
          text: 'Home'
        },
        {
          url: '/coin/btcPoint',
          text: 'BTC Point'
        }
      ],
      getSort: '',
      sortItems: [
        {
          text: '전체',
          value: ''
        },
        {
          text: '입고',
          value: 'I'
        },
        {
          text: '출고',
          value: 'O'
        }
      ]
    };
  },
  computed: {
    ...mapState({
      loading: state => state.app.loading,
      coinPrice: state => commaCurrency(state.account.bitCoinCurrent.one_price),
      coinSearchTime: state => state.account.bitCoinCurrent.search_time,
    }),
  },
  async mounted() {
    this.getSort = this.$store.state.account.userBitCoinListSort
    this.$store.commit('app/setLoading', true);
    // 비트코인 시세확인
    await this.$store.dispatch('account/fetchBitCoinCurrent');
    if (this.$store.state.account.userBitCoinList.length == 0) {
      // 누적수익확인
      await this.$store.dispatch('account/fetchUserBtcSum');
      // 코인잔고
      await this.$store.dispatch('account/fetchUserBtcBalance');
      // 사용자의 코인입출금내역
      await this.$store.dispatch('account/fetchUserCoinList', {size: this.pageSize, start_num: 0});
    }

  },
  methods: {
    searchEvent(startNum){
      this.$store.commit('account/setUserBitCoinSort', this.getSort)
      if(startNum !== 0) {
        startNum =  this.$store.state.account.userBitCoinList.length;
      } else {
        this.$store.commit('account/setUserBitCoinListEmpty')
      }
      this.$store.dispatch('account/fetchUserCoinList', {size: this.pageSize, start_num: startNum});
    }
  }
};
</script>
