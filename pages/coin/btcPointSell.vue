<template>
  <div class="container">
    <div class="ps-product--detail">
      <breadcrumb :dataList="breadcrumb"/>
      <div class="ps-table__name">BTC Point 출금</div>
      <div class="ps-page__content">
        <div class="row">
          <div class="col-12 col-sm-6">
            <div :style="{'background-color': 'lightsteelblue'}" class="px-4 py-0">
              <div class="row">
                <div class="col-5">
                  <div class="subtitle-2 pt-2">잔고</div>
                </div>
                <div class="col-7 text-right ">
                  <h4 class="">{{ bitCoinBalance }}<sub>BTC</sub></h4>

                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="subtitle-2">BTC 시세</div>
                  <div class="caption font-italic" :style="{'color':'#103178'}">
                    {{ this.$store.state.account.bitCoinCurrent.search_time }}
                  </div>
                </div>
                <div class="col-6 text-right">
                  <h4>{{ coinPrice }}<sub>원</sub></h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6">
            <div :style="{'background-color': '#f0f2f5'}" class="px-4 py-0">
              <div class="row">
                <div class="col-5">
                  <div class="subtitle-2 pt-2">환매 수량</div>
                </div>
                <div class="col-7 text-right">
                  <div class="d-flex">
                    <v-badge
                        content="all"
                        bordered
                        color="indigo darken-1"
                        icon="mdi-lock"
                        overlap
                        left
                    >
                      <v-checkbox
                          v-model="checked"
                          hide-details
                          dense
                          color="indigo"
                          @change="allCkecked"

                      />
                    </v-badge>
                    <v-text-field
                        dense
                        hide-details
                        single-line
                        suffix="BTC"
                        v-model="coinAmount"
                        @blur="coinAmountchecked"
                    />
                  </div>
                </div>
              </div>
              <div class="row pb-3">
                <div class="col-4">
                  <sub class="pl-5">환매후 잔액</sub>
                </div>
                <div class="col-8 text-right">
                  <h4>{{ tempAmount }}<sub>btc</sub></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <v-divider class="my-7"/>
        <div class="row">
          <div class="col-12">
            <div :style="{'background-color':'linen'}" class="px-4 py-0">
              <div class="row">
                <div class="col-4">
                  <div class="subtitle-2">출금금액</div>
                </div>
                <div class="col-8 text-right ">
                  <h4 class="">{{ withdrawComma }}<sub>원</sub></h4>
                </div>
              </div>
              <div class="row">
                <div class="col-5">
                  <div class="caption text-right">환매 <sub>수수료</sub></div>
                </div>
                <div class="col-7 text-right">
                  <h4>{{ resaleFeeComma }}<sub>원</sub></h4>
                </div>
              </div>
              <div class="row">
                <div class="col-5">
                  <div class="caption text-right">송금 <sub>수수료</sub></div>
                </div>
                <div class="col-7 text-right">
                  <h4>{{ withdrawalComma }}<sub>원</sub></h4>
                </div>
              </div>
              <div class="row">
                <div class="col-5">
                  <div class="subtitle-2">실제 입금 금액</div>
                </div>
                <div class="col-7 text-right ">
                  <h4 class="">{{ depositAmountComma }}<sub>원</sub></h4>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <div class="subtitle-2">입금계좌</div>
                </div>
                <div class="col-9 text-right">
                  <div class="body-2"><sub>{{ this.$store.state.account.unicoreAccount.bank_name }}</sub>
                    {{ this.$store.state.account.unicoreAccount.account_no }}
                    <sub>{{ this.$store.state.account.unicoreAccount.account_holder }}</sub></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <v-btn
                color="deep-orange darken-2"
                dark
                rounded
                block
                :disabled="confirmFlag"
                @click="emitConfirmEvent(true,false)"
            >
              출금신청
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <v-divider/>
    <!-- 모달창 -->
    <SellBtcConfirm :dialog="dialog" :btcValue="coinAmount" :money="depositAmountComma" @emitEvent="emitConfirmEvent"/>

  </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import {mapState} from 'vuex';
import {commaCurrency} from "~/utilities/helpers";
import SellBtcConfirm from "~/components/coin/sellBtcConfirm";

export default {
  layout: 'coin',
  components: {
    SellBtcConfirm,
    Breadcrumb,
  },
  data() {
    return {
      breadcrumb: [
        {
          url: '/coin/uniMining',
          text: 'Home'
        },
        {
          url: '/coin/btcPoint',
          text: 'BTC Point'
        },
        {
          url: '/coin/btcPointSell',
          text: 'BTC Point 수익출금'
        }
      ],
      items: [
        {
          text: '전체',
          value: 'all'
        }, {
          text: '입고',
          value: '1'
        }, {
          text: '출고',
          value: '2'
        },
      ],
      checked: false,
      coinAmount: 0.00000000, // 환매수량
      dialog: false,

    };
  },
  computed: {
    ...mapState({
      loading: state => state.app.loading,
      coinPrice: state => commaCurrency(state.account.bitCoinCurrent.one_price),
      originalPrice: state => state.account.bitCoinCurrent.one_price,
      bitCoinBalance: state => state.account.userBitCoinBalance,
      withdraw() {
        return Math.floor(Math.floor(this.coinAmount * 100000000 * this.originalPrice) / 100000000)
      },
      // 송금수수료
      withdrawal: state => {
        let returnVal = 0;
        if (state.account.rootFeeList) {
          for (const el of state.account.rootFeeList) {
            if (el.detail_type === 'withdrawal') {
              returnVal = el.value;
            }
          }
        }

        return Number(returnVal);
      }
    }),
    confirmFlag() {
      return this.depositAmount < 1000;


    },
    withdrawalComma() {
      return commaCurrency(this.withdrawal);
    },
    withdrawComma() {
      return commaCurrency(this.withdraw)
    },
    resaleFeeComma() {
      return commaCurrency(this.resaleFee)
    },
    // 환매수수료
    resaleFee() {
      let returnVal = 0;
      let fee = 0.0;

      for (const el of this.$store.state.account.rootFeeList) {
        if (el.detail_type === 'resale') {
          fee = el.value;
        }
      }
      if (Number(fee) === 0) return 0;
      returnVal = Math.floor(this.withdraw * fee / 100)
      return returnVal;
    },

    // 환매후 잔액 임시로 보여주는 부분
    tempAmount() {
      if (isNaN(this.coinAmount)) {
        return;
      }
      if (this.bitCoinBalance <= this.coinAmount) {
        this.coinAmount = this.bitCoinBalance;
        this.checked = true
        return 0
      } else this.checked = false
      return Number.parseFloat(this.bitCoinBalance - this.coinAmount).toFixed(8)
    },

    // 실제입금금액
    depositAmount() {
      if (this.withdraw - this.resaleFee - this.withdrawal < 1) return 0
      else return this.withdraw - this.resaleFee - this.withdrawal;
    },
    // 원래는 필터로 처리해야 하나 필터는 속도 저하의 원인으로 뽑혀서 추후 vue 에서 제거되므로 여기서도 안쓴다.
    depositAmountComma() {
      return commaCurrency(this.depositAmount)
    }

  },
  async mounted() {
    await this.$store.commit('app/setLoading', true);
    await this.$store.dispatch('account/fetchRootFeeList');

  },
  methods: {
    allCkecked() {
      if (this.checked) this.coinAmount = this.bitCoinBalance;
      else this.coinAmount = 0
    },
    coinAmountchecked() {
      if (this.bitCoinBalance > this.coinAmount) this.checked = false;
      if (!Number.isInteger(this.coinAmount * 100000000)) {
        this.coinAmount = Math.floor(this.coinAmount * 100000000) / 100000000
        return
      }

      if (this.bitCoinBalance <= this.coinAmount) {
        this.coinAmount = this.bitCoinBalance;
        this.checked = true;
        return
      }
    },
    emitConfirmEvent(dialogFlag, confirmFlag) {

      this.dialog = dialogFlag;
      if (confirmFlag) {
        console.log('서버로 보내자아!')
      }
    }
  }
};
</script>
