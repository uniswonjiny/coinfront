<template>
  <div class="container">
    <breadcrumb :dataList="breadcrumb"/>
    <h4 :style="{'color':'#103178'}"> • UNI POINT 판매</h4>
    <div class="card border-0" :style="{'backgroundColor':'#103178' , 'color': 'white'}">
      <div class="card-body">
        <div class="row">
          <div class="col-5 col-sm-3">보유포인트</div>
          <div class="col-4 col-sm-7 col-md-8 text-right">{{
              this.$store.state.account.userUniPointInfo.uni_point
            }}
          </div>
          <div class="col-3 col-sm-2 col-md-1 text-right">UNIp</div>
        </div>
        <div class="row">
          <div class="col-5 col-sm-3">판매요청중</div>
          <div class="col-4 col-sm-7 col-md-8 text-right">{{ this.$store.state.account.sellRSumInfo.uni_point }}</div>
          <div class="col-3 col-sm-2 col-md-1 text-right">UNIp</div>
        </div>
        <div class="row">
          <div class="col-5 col-sm-3">판매가능</div>
          <div class="col-4 col-sm-7 col-md-8 text-right">{{ userUniPoint }}</div>
          <div class="col-3 col-sm-2 col-md-1 text-right">UNIp</div>
        </div>
        <div class="dropdown-divider"/>
        <!--                <div class="row">
                            <div class="col-5 col-sm-3">
                                판매 가능 UNIp
                            </div>
                            <div class="col-4 col-sm-7 col-md-8 text-right">1,013,675</div>
                            <div class="col-3 col-sm-2 col-md-1 text-right">UNIp</div>
                        </div>
                        <div class="dropdown-divider"/>-->
        <div class="row">
          <div class="col-5 col-sm-3">1 UNIPoint 가격</div>
          <div class="col-4 col-sm-7 col-md-8 text-right">{{
              (this.$store.state.account.uniPointPrice) ? this.$store.state.account.uniPointPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0
            }}
          </div>
          <div class="col-3 col-sm-2 col-md-1 text-right">원</div>
        </div>
      </div>
    </div>
    <div class="card border-0">
      <div class="card-body">
        <div class="row ">
          <div class="col-6 col-sm-3 col-md-2">
            <h4>
              판매수량
            </h4>
          </div>
          <div class="col-6 col-sm-9 col-md-10">
            <v-text-field
                label="숫자만 입력해주세요"
                flat
                dense
                hide-details="auto"
                v-model="sellPoint"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="card border-0" :style="{'backgroundColor':'#103178' , 'color': 'white'}">
      <div class="card-body">
        <div class="row">
          <div class="col-5 col-sm-3">판매금액</div>
          <div class="col-4 col-sm-7 col-md-8 text-right">{{
              sellPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }}
          </div>
          <div class="col-3 col-sm-2 col-md-1 text-right">원</div>
        </div>
        <div class="dropdown-divider"/>
        <div class="row">
          <div class="col-5 col-sm-3 text-right">
            <sub> 판매수수료</sub>
          </div>
          <div class="col-4 col-sm-7 col-md-8 text-right">
            {{ resaleFeePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
          </div>
          <div class="col-3 col-sm-2 col-md-1 text-right">원</div>
        </div>
        <div class="dropdown-divider"/>
        <div class="row">
          <div class="col-5 col-sm-3">입금금액</div>
          <div class="col-4 col-sm-7 col-md-8 text-right">
            {{ depositAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
          </div>
          <div class="col-3 col-sm-2 col-md-1 text-right">원</div>
        </div>
        <div class="dropdown-divider"/>
        <div class="row">
          <div class="col-3 col-sm-3 my-auto">출금계좌</div>
          <div class="col-6 col-sm-7 col-md-8 text-center">
            <small>{{ this.$store.state.auth.userInfo.bank_name }}</small>
            <div>{{ this.$store.state.auth.userInfo.bank_account }}</div>
          </div>
          <div class="col-3 col-sm-2 col-md-1 my-auto text-right">{{
              this.$store.state.auth.userInfo.bank_holder
            }}
          </div>
        </div>
      </div>

    </div>
    <div class="dropdown-divider"/>
    <div class="row">
      <div class="col-12">
        <button
            type="button"
            class="ps-btn ps-btn--warning"
            @click="clickEvent"
        >
          판매요청
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import {mapState} from "vuex";

export default {
  layout: 'coin',
  components: {
    Breadcrumb,
  },
  async mounted() {
    await this.$store.commit('app/setLoading', true);
    await this.$store.commit('account/setBuyPoint', null);
    await this.$store.dispatch('account/fetchUniPointPrice');
  },
  computed: {
    ...mapState({
      loading: state => state.app.loading,
      userUniPoint: state => {
        return state.account.userUniPointInfo.uni_point - state.account.sellRSumInfo.uni_point
      }
    }),
    sellPrice() {
      if (isNaN(this.sellPoint)) this.sellPoint = 0;
      if (Number(this.userUniPoint) < Number(this.sellPoint)) this.sellPoint = this.userUniPoint;
      return this.sellPoint * this.$store.state.account.uniPointPrice;
    },

    // 환매수수료
    resaleFeePrice() {
      let returnVal = 0;
      let fee = 0.0;
      for (const el of this.$store.state.account.rootFeeList) {
        if (el.detail_type === 'resale') {
          fee = el.value;
        }
      }
      if (Number(fee) === 0) return 0;
      returnVal = Math.floor(this.sellPrice * fee / 100)
      return returnVal;
    },

    // 입금금액
    depositAmount() {
      return this.sellPrice - this.resaleFeePrice
    }
  },
  data() {
    return {
      breadcrumb: [
        {
          url: '/coin/uniMining',
          text: 'Home'
        },
        {
          url: '/coin/sellUniPoint',
          text: 'UNI POINT 판매'
        }
      ],
      sellPoint: 0,
    }
  },
  methods: {
    clickEvent() {
      if (this.sellPoint === 0 || isNaN(this.sellPoint)) {
        this.$toast.error(`판매포인트를 확인하세요`, {position: "top-left"})
        return
      }
      this.$axios.post('/account/sellUniPoint', {
        user_no: this.$store.state.auth.userInfo.user_no,
        money: this.depositAmount,
        tax: this.resaleFeePrice,
        uni_point: this.sellPoint
      }).then(_ => {
        this.$store.dispatch('account/fetchUniPointList', this.$store.state.auth.userInfo.user_id)
        this.$toast.success(`판매요청되었습니다.`, {position: "top-left"})
      })
    }
  }
}
</script>

<style>

</style>
