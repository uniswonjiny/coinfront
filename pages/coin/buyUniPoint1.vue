<template>
  <div class="ps-shopping">
    <div class="container">
      <breadcrumb :dataList="breadcrumb"/>
      <h3 class="ps-shopping__title">UNI Point 구매<sup>(1/3)</sup></h3>
      <div class="ps-shopping__content">
        <div class="row ">
          <div class="col-12 col-md-6">
            <div class="ps-product--extension mb-5">
              <div class="ps-product__delivery ">
                <div class="row">
                  <div class="col-7">
                    <div class="ps-delivery__item">
                      1 UNI Point 가격
                    </div>
                  </div>
                  <div class="col-5">
                    <div class="ps-delivery__item text-right">
                      {{
                        (this.$store.state.account.uniPointPrice) ? this.$store.state.account.uniPointPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0
                      }}
                      원
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="ps-delivery__item">
                      계약기간
                    </div>
                  </div>
                  <div class="col-8">
                    <div class="ps-delivery__item text-right">
                      비트코인 <br/> 채굴종료시까지
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 ">
            <div class="ps-product--detail ">
              <div class="ps-product__info my-0">
                <div class="ps-product__quantity">
                  <h6>구매금액<sub>(구매단위
                    {{
                      (this.$store.state.account.uniPointPrice) ? this.$store.state.account.uniPointPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0
                    }}
                    원)</sub></h6>
                  <div class="align-items-center">
                    <div class="def-number-input number-input safari_only">
                      <button
                          class="minus"
                          @click="quantity > 0 ? quantity-=Number($store.state.account.uniPointPrice) : 0"
                      >
                        <i class="icon-minus"></i>
                      </button>
                      {{ quantityString }}
                      <button class="plus" @click="quantity+= Number($store.state.account.uniPointPrice) ">
                        <i class="icon-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 text-center">
            <div class="ps-product--extension mb-5">
              <div class="ps-product__delivery pb-3">
                <div class="ps-delivery__item">
                  구매포인트
                </div>
                <h3 class="ps-shopping__title ">{{ quantity / this.$store.state.account.uniPointPrice }} </h3>
              </div>
            </div>
          </div>

          <div class="col-12">
            <button
                type="button"
                class="ps-btn ps-btn--warning"
                @click="nextHandler"
            >
              다음
            </button>
          </div>
        </div>
        <v-divider/>
      </div>
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
          url: '/coin/uniPoint',
          text: 'UNI Point 구매(1/3)'
        }
      ],
    };
  },
  computed: {
    quantityString() {
      return this.quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    ...mapState({
      loading: state => state.app.loading
    })
  },
  async mounted() {
    await this.$store.commit('app/setLoading', true);
    await this.$store.commit('account/setBuyPoint', null);
    await this.$store.dispatch('account/fetchUniPointPrice');
  },
  methods: {
    nextHandler() {
      if (this.quantity > 0) {
        this.$store.commit('account/setBuyPoint', {
          uniPoint: this.quantity / this.$store.state.account.uniPointPrice,
          money: this.quantity,
          tax: this.quantity / 10
        });
        this.$router.push("/coin/buyUniPoint2");

      } else this.$toast.error('구매포인트를 정해주세요', {position: "top-left"})
    }
  }
};
</script>
