<template>
  <div class="container">
    <breadcrumb :dataList="breadcrumb"/>

    <div class="card border-0">
      <div class="card-body">
        <div class="row">
          <div class="col-4">회원이름</div>
          <div class="col-8 text-center">{{this.$store.state.auth.userInfo.user_name}}</div>
        </div>
        <div class="dropdown-divider"/>
        <div class="row">
          <div class="col-4">아이디</div>
          <div class="col-8 text-center">{{this.$store.state.auth.userInfo.user_id}}</div>
        </div>
        <div class="dropdown-divider"/>
        <div class="row align-items-end">
          <div class="col-4">비밀번호</div>
          <div class="col-5 text-right">**********</div>
          <div class="col-3 text-right">
            <button type="button" class="btn btn-outline-warning btn-sm" @click.prevent="passWordDialog=true">변경
            </button>
          </div>
        </div>
<!--        <div class="dropdown-divider"/>
        <div class="row align-items-center">
          <div class="col-4">휴대폰번호</div>
          <div class="col-5 text-right">010-****-1234</div>
          <div class="col-3 text-right">
            <button type="button" class="btn btn-outline-warning btn-sm" @click.prevent="mobileDialog=true">변경</button>
          </div>
        </div>-->
        <div class="dropdown-divider"/>
        <div class="row align-items-center">
          <div class="col-4">출금은행</div>
          <div class="col-5">
            <div>{{this.$store.state.auth.userInfo.bank_name}}</div>
            <small>{{this.$store.state.auth.userInfo.bank_account}}</small>
            <div>{{this.$store.state.auth.userInfo.bank_holder}}</div>
          </div>
          <div class="col-3 text-right">
            <button type="button" class="btn btn-outline-warning btn-sm" @click.prevent="accountDialog=true">변경<br/>요청
            </button>
          </div>
        </div>
        <div class="dropdown-divider"/>
        <div class="row align-items-center">
          <div class="col-4">보유 POINT</div>
          <div class="col-5">
            <small>판매가능수량</small>
            <div>{{userUniPoint}} UNIp</div>
          </div>
          <div class="col-3 text-right">
            <button type="button" @click="()=>this.$router.push('/coin/sellUniPoint')" class="btn btn-outline-warning btn-sm">판매<br/>신청</button>
          </div>
        </div>
        <div class="dropdown-divider"/>
        <div class="row">
          <div class="col-4">추천인</div>
          <div class="col-8 text-center">{{this.$store.state.auth.userInfo.recommend_user_name}}</div>
        </div>
        <div class="dropdown-divider"/>
      </div>
    </div>
    <div class="dropdown-divider"/>
    <PassWord :dialog='passWordDialog' @closeEvent="passWordDialog=false"/>
    <MobliePhone :dialog='mobileDialog' @closeEvent="mobileDialog=false"/>
    <AccountModify :dialog='accountDialog' @closeEvent="accountDialog=false"/>
  </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import PassWord from '~/components/setting/passWord.vue'
import MobliePhone from '~/components/setting/mobliePhone.vue'
import AccountModify from '~/components/setting/accountModify.vue'
import {mapState} from 'vuex';

export default {
  layout: 'coin',
  components: {
    Breadcrumb,
    PassWord,
    MobliePhone,
    AccountModify
  },
  data() {
    return {
      passWordDialog: false,
      mobileDialog: false,
      accountDialog: false,
      breadcrumb: [
        {
          url: '/coin/uniMining',
          text: 'Home'
        },
        {
          url: '/setting',
          text: '설정'
        }
      ],
      sellList: [
        {
          type: '출고',
          currency: '0.10000000',
          total: '2.10000000',
          unit: 'BTCP',
          text: '확인중...',
        },
        {
          type: '입고',
          currency: '0.10000000',
          total: '2.10000000',
          unit: 'BTCP',
          text: '확인중...',
        },
        {
          type: '출고',
          currency: '0.13000000',
          total: '2.10000000',
          unit: 'BTCP',
          text: '2021.12.24 23:59:59',
        },
        {
          type: '출고',
          currency: '0.20000000',
          total: '2.10000000',
          unit: 'BTCP',
          text: '2021.12.23 23:00:59',
        },
        {
          type: '입고',
          currency: '0.20000000',
          total: '2.10000000',
          unit: 'BTCP',
          text: '2021.12.22 03:59:01',
        },

      ],
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
      loading: state => state.app.loading,
      userUniPoint: state => state.account.userUniPointInfo.uni_point,
    })
  },
  async mounted() {
    this.$store.commit('app/setLoading', true);
  },
  methods: {}
};
</script>
