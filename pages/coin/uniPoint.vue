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
            1 Point = {{
              (this.$store.state.account.uniPointPrice) ? this.$store.state.account.uniPointPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0
            }} 원
          </h3>
        </div>
        <div class="card-body">
          <a
              class="ps-btn ps-btn--warning w-50"
              href="#"
              @click.prevent="buyDialog=!buyDialog"
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
            {{ this.$store.state.account.uniPointSum }}
          </span>
          <sub class="font-weight-bold" :style="{'color':'#103178 !important'}">Point</sub>
        </div>
      </div>
      <div class="dropdown-divider"/>
      <div class="row">
        <div class="col-6"><sub>UNI Point 거래내역</sub></div>
        <div class="col-6 text-right">
          <select class="custom-select custom-select-sm text-right" v-model="getSort">
            <option v-for="(item, index) in sortItems" :value="item.value" :key="index">{{ item.text }}</option>
          </select>
        </div>
      </div>
      <div class="dropdown-divider"></div>
      <div v-for="(item, index ) in this.sellList" :key="index">
        <div class="row" @click.prevent="detailDialogEvent(true ,item )">
          <div class="col-5">
            <div>{{ item.sales_type === 'M' ? '구매' : '판매' }}
              <span v-if="item.type ==='R'|| item.type ==='S' " class="ps-badge ps-badge--outstock">
                 요청중
              </span>
            </div>
            <small v-if="item.type === 'R' || item.type === 'S'">{{ item.created_at }}</small>
            <small v-if="item.type !== 'R' || item.type !== 'P'">{{ item.updated_at }}</small>
          </div>
          <div class="col-7 text-right">
            <span :class="item.sales_type === 'M' ? 'ps-product__price' : 'ps-product__del' ">{{
                item.uni_point
              }}</span> UNIP
          </div>
        </div>
        <div class="dropdown-divider"/>
      </div>
      <div class="row" v-if="this.sellList.length ===0">
        <div class="col-12 text-center">내역이 없습니다.</div>
        <div class="dropdown-divider"/>
      </div>
    </div>
    <div class="dropdown-divider"/>
    <v-dialog v-model="buyDialog" max-width="500">
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
          <v-divider class="mt-2 mb-0"/>
          <v-card-text>
            <div class="text-h5 text-center font-weight-black" :style="{'color': '#FD8D27'}">
              구매하시겠습니까?
            </div>
          </v-card-text>
          <v-divider class="my-0"/>
          <v-card-actions>
            <v-col>
              <v-btn
                  dark
                  color="#103178"
                  rounded
                  min-width="130"
                  @click="buyDialog=false"
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
      buyDialog: false,
      detailDialog: false,
      detailInfo: null,
      selected: 'all',
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
    };
  },
  computed: {
    ...mapState({
      loading: state => state.app.loading
    }),
    sellList() {
      let arr = [];
      if (this.getSort === 'all') return this.$store.state.account.uniPointList;
      if (this.getSort === 'buy') {
        arr = this.$store.state.account.uniPointList.filter(item => (item.sales_type === 'M'))
      }
      if (this.getSort === 'sell') {
        arr = this.$store.state.account.uniPointList.filter(item => (item.sales_type !== 'M'))
      }
      if (!arr) arr = [];
      return arr;
    }
  },
  async mounted() {
    // 현유니포인트 시세
    await this.$store.dispatch('account/fetchUniPointPrice');
    // 보유 유니포인트
    await this.$store.dispatch('account/fetchUniPointList', this.$store.state.auth.userInfo.user_id);
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
