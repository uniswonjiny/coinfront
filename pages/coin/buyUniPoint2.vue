<template>
  <div class="ps-shopping">
    <div class="container">
      <breadcrumb :dataList="breadcrumb"/>
      <h3 class="ps-shopping__title">UNI Point 구매<sup>(2/3)</sup></h3>
      <div class="ps-shopping__content">
        <div class="ps-product--extension mb-5">
          <div class="ps-product__delivery">
            <div class="row">
              <div class="col-6">
                <div class="ps-delivery__item">
                  구매총액
                </div>
              </div>
              <div class="col-6">
                <div class="ps-delivery__item text-right">
                  {{ this.$store.state.account.buyUniPoint.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} 원
                </div>
              </div>
              <div class="col-6">
                <div class="ps-delivery__item">
                  부가세<sup>(10%)</sup>
                </div>
              </div>
              <div class="col-6">
                <div class="ps-delivery__item text-right">
                  {{
                    (this.$store.state.account.buyUniPoint.tax) ? this.$store.state.account.buyUniPoint.tax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0
                  }}
                  원
                </div>
              </div>
              <div class="col-6" :style="{'background-color':'white'}">
                <div class="ps-delivery__item" :style="{'color' : 'red'}">
                  총 입금금액
                </div>
              </div>
              <div class="col-6" :style="{'background-color':'white'}">
                <div class="ps-delivery__item text-right">
                  {{
                    (this.$store.state.account.buyUniPoint.money + this.$store.state.account.buyUniPoint.tax).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }}
                  원
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ps-shopping__label">결제정보</div>
        <div class="ps-shopping__box">
          <div class="ps-shopping__row">
            <div class="ps-shopping__label">결제방법</div>
            <div class="ps-shopping__price">은행입금</div>
          </div>
          <div class="ps-shopping__row">
            <div class="ps-shopping__label">입금은행</div>
            <div class="ps-shopping__price">{{ this.$store.state.account.unicoreAccount.bank_name }}</div>
          </div>
          <div class="ps-shopping__row">
            <div class="ps-shopping__label">예금주</div>
            <div class="ps-shopping__price">{{ this.$store.state.account.unicoreAccount.account_holder }}</div>
          </div>
          <div class="ps-shopping__row">
            <div class="ps-shopping__label">계좌번호</div>
            <div class="ps-shopping__price">{{ this.$store.state.account.unicoreAccount.account_no }}</div>
          </div>
        </div>
      </div>
      <div class="row ">
        <div class="col-12">
          <a
              class="ps-btn ps-btn--warning"
              @click="nextHandler"
          >다음</a>
        </div>
      </div>
      <v-divider/>
    </div>

  </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import {mapState} from 'vuex';

export default {
  layout: 'coin',
  components: {
    Breadcrumb
  },
  data() {
    return {
      dialog: false,
      quantity: 0,
      breadcrumb: [
        {
          url: '/coin/uniMining',
          text: 'Home'
        },
        {
          url: '/coin/buyUniPoint1',
          text: 'UNI Point 구매(1/3)'
        },
        {
          url: '/coin/buyUniPoint2',
          text: 'UNI Point 구매(2/3)'
        }
      ],
    };
  },
  computed: {
    ...mapState({
      loading: state => state.app.loading,
    })
  },
  async mounted() {
    await this.$store.dispatch('account/fetchUnicoreAccount');
  },
  methods: {
    nextHandler() {
      this.$router.push("/coin/buyUniPoint3");
    },
  }
};
</script>
