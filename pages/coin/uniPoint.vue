<template>
  <div class="container">
    <breadcrumb :dataList="breadcrumb"/>
    <div class="ps-product__content ps-product--detail">
      <div class="ps-product__title">
        <a href.stop="#">UNI Point </a>
      </div>
      <div class="dropdown-divider"/>
      <div class="row">
        <div class="col-6"><small> {{ new Date().toLocaleDateString() }} UNIP 시세</small></div>
        <div class="col-6 text-right"><small>*부가세포함</small></div>
      </div>
      <div class="card border-0 text-center">
        <div class="card-body" :style="{'backgroundColor':'#103178'}">
          <h3 class="text-white">
            1 Point = {{ (this.$store.state.account.uniPointPrice) ? this.$store.state.account.uniPointPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0 }} 원
          </h3>
        </div>
        <div class="card-body">
          <a
              class="ps-btn ps-btn--warning w-50"
              href="#"
              @click.prevent="dialog=!dialog"
          >
            UNI point 구매
          </a>
        </div>
      </div>
      <div class="dropdown-divider"/>
      <small>보유 UNI point</small>
      <div class="card border-0 bg-light">
        <div class="card-body text-center">
                    <span class="display-2 font-weight-bold text-danger">
                        12389,457
                    </span>
          <sub class="font-weight-bold" :style="{'color':'#103178 !important'}">Point</sub>
        </div>
      </div>
      <div class="dropdown-divider"/>
      <div class="row">
        <div class="col-6"><sub>UNI Point 거래내역</sub></div>
        <div class="col-6 text-right">
          <select class="custom-select custom-select-sm text-right">
            <option v-for="(item, index) in sortItems" value="item.value" :key="index">{{ item.text }}</option>
          </select>
        </div>
      </div>
      <div class="dropdown-divider"></div>
      <div v-for="(item, index ) in sellList" :key="index">
        <div class="row" @click.prevent="detailDialogEvent(true ,item )">
          <div class="col-5">
            <div>{{ item.type1 }}
              <span v-if="item.type2 == 0" class="ps-badge ps-badge--outstock">
                                    확인중
                                </span>
            </div>
            <small>{{ item.desc }}</small>
          </div>
          <div class="col-7 text-right">
            <span :class="item.type1 === '구매' ? 'ps-product__price' : 'ps-product__del' ">{{ item.point }}</span> UNIP
          </div>
        </div>
        <div class="dropdown-divider"/>
      </div>
      <button class="ps-btn ps-btn--primary mt-3 ">더보기</button>
      <div class="dropdown-divider"/>
    </div>
    <div class="dropdown-divider"/>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-toolbar
            color="#103178"
            dark
        >
          <v-icon class="mr-2">mdi-check-bold</v-icon>
          <v-toolbar-title>구매조건 확인</v-toolbar-title>
          <v-spacer/>
          <v-btn icon @click="dialog=false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container>
          <v-row>
            <v-col cols="12">
              <div>
                <v-icon class="pb-1" color="orange">
                  mdi-check-circle-outline
                </v-icon>
                <span>구매후 1년간 판매할 수 없습니다</span>
              </div>
            </v-col>
            <v-col cols="12">
              <div>
                <v-icon class="pb-1" color="orange">
                  mdi-check-circle-outline
                </v-icon>
                <span>구매후 채굴수당(BTC point)의 입금은 15일 이후부터 시작합니다.</span>
              </div>
            </v-col>
          </v-row>
          <v-divider class="mt-2 mb-0" />
          <v-card-text >
            <div class="text-h5 text-center font-weight-black" :style="{'color': '#FD8D27'}">
              구매하시겠습니까?
            </div>
          </v-card-text>
          <v-divider class="my-0" />
          <v-card-actions>
            <v-col>
              <v-btn
                  dark
                  color="#103178"
                  rounded
                  min-width="130"
                  @click="dialog=false"
              >아니오
              </v-btn>
            </v-col>
            <v-col>
              <v-btn
                  dark
                  color="warning"
                  rounded
                  min-width="130"
                  @click="$router.push('/coin/buyUniPoint1')"
              >구매
              </v-btn>
            </v-col>
          </v-card-actions>

        </v-container>
      </v-card>
    </v-dialog>

    <!-- 상세보기화면용 -->
    <uniPointDetail :dialog='this.detailDialog' :info='this.detailInfo'/>
  </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import uniPointDetail from "~/components/coin/uniPointDetail";
import {mapState} from 'vuex';

export default {
  layout: 'coin',
  components: {
    Breadcrumb,
    uniPointDetail
  },
  data() {
    return {
      dialog: false,
      detailDialog: false,
      detailInfo: null,
      breadcrumb: [
        {
          url: '/coin/uniMining',
          text: 'Home'
        },
        {
          url: '/coin/uniPoint',
          text: 'UNI Point'
        }
      ],
      sellList: [
        {
          id: 111,
          point: 100,
          type1: '판매',
          type2: 0,
          desc: '2021.12.20 01:01:01'
        },
        {
          id: 112,
          point: 700,
          type1: '구매',
          type2: 0,
          desc: '2021.12.20 09:29:59'
        },
        {
          id: 113,
          point: 190,
          type1: '구매',
          type2: 1,
          desc: '2021.12.19 22:11:01'
        },
        {
          id: 114,
          point: 170,
          type1: '판매',
          type2: 1,
          desc: '2021.12.18 18:11:01'
        },
        {
          id: 115,
          point: 300,
          type1: '구매',
          type2: 1,
          desc: '2021.12.17 12:11:01'
        },
        {
          id: 116,
          point: 1100,
          type1: '구매',
          type2: 1,
          desc: '2021.12.12 12:11:01'
        }
      ],

      getSort: 'all',
      sortItems: [
        {
          text: '거래전체',
          value: 'all'
        },
        {
          text: '구매',
          value: 'buy'
        },
        {
          text: '판매',
          value: 'sell'
        }
      ],
      coinInfo: {
        title: '누적수익',
        captions: '현재시세 1.0BTC = 85,000,000',
        data: [
          {
            title: '채굴수익(BTC/원)',
            text: '0.000258 bit (1,555,000 원)',
          }, {
            title: '추천수익(BTC/원)',
            text: '0.000258 bit (1,555,000 원)',
          }, {
            title: '추천수익플러스(BTC/원)',
            text: '0.000258 bit (1,555,000 원)',
          }, {
            title: '총계\n(BTC/원)',
            text: '0.000258 bit (1,555,000 원)',
          }, {
            title: '수익률\n(누적수익+투자금액)',
            text: '10%',
          }
        ]
      },
      sumInfo: {
        title: '구매금액',
        captions: '최초수익발생일: 2021년12월12일 / 30일경과',
        data: [
          {
            title: '총구매수량\n(UNI point)',
            text: '10,000'
          },
          {
            title: '누적 투자액\n(원)',
            text: '3,000,000'
          }
        ]
      }
    };
  },
  computed: {
    ...mapState({
      loading: state => state.app.loading
    })
  },
  async mounted() {
    await this.$store.dispatch('account/fetchUniPointPrice');
  },
  methods: {
    detailDialogEvent(val, item) {
      this.detailDialog = val;
      this.detailInfo = item;
    },
    printEvent() {
      this.$print(this.$refs['printEvent'])
    }
  }
};
</script>
