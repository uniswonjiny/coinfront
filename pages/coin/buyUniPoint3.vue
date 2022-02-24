<template>
  <div class="ps-shopping">
    <div class="container">
      <breadcrumb :dataList="breadcrumb"/>
      <h3 class="ps-shopping__title">UNI Point 구매<sup>(3/3)</sup></h3>
      <div class="ps-shopping__content">
        <div class="ps-product--extension mb-5">
          <div class="ps-product__delivery">
            <div class="ps-product__attribute">
              <h5>증빙서류 선택</h5>
              <v-select
                  :items="selectList"
                  item-text="text"
                  item-value="value"
                  v-model="selected1"
                  dense
                  outlined
                  rounded
              />
              <h5>증빙번호입력</h5>
              <v-text-field
                  placeholder="입력하세요..."
                  rounded
                  outlined
                  dense
                  type="number"
                  v-model="regNumber"
              />
            </div>
            <sub>* 증빙발행은 현금영수증만 가능합니다. 소득공제의 경우 휴대폰 숫자 11자리, 지출 증빙닌 경우 사업자 번호 숫자 10자리를 기재해 주세요</sub>
          </div>

        </div>
      </div>
      <div class="row ">
        <div class="col-12">
          <a
              class="ps-btn ps-btn--warning"
              href="#"
              @click.prevent="dialog=!dialog"
          >구매신청</a>
        </div>
      </div>
      <v-divider/>
    </div>

    <v-dialog v-model="dialog" max-width="1100">
      <v-card>
        <v-app-bar flat dense dark color="#103178">
          구매신청확인
          <v-spacer/>
          <v-btn
              color="white"
              icon
              @click="dialog=false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-app-bar>
        <v-card-text>
          <p class="text-subtitle-2 font-weight-black " :style="{'color': '#103178'}">
            <v-icon :style="{'color': '#103178'}">mdi-check-circle</v-icon> 최종 구매 금액(부가세 포함)
          </p>
          <div class="text-h4 text-center font-weight-black" :style="{'color': '#FD8D27'}">
            {{ (this.$store.state.account.buyUniPoint.money + this.$store.state.account.buyUniPoint.tax).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }} 원
          </div>
        </v-card-text>

        <v-card-actions>

            <v-col>
              <v-btn class="ps-btn ps-btn--warning" @click.prevent="dialog=!dialog">
                아니오
              </v-btn>
            </v-col>
            <v-col>
              <v-btn class="ps-btn ps-btn--primary" @click.prevent="confirmEvent">
                예
              </v-btn>
            </v-col>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="confirm" max-width="1100">
      <v-card>
        <v-app-bar flat dense dark color="#103178">
          구매신청완료
          <v-spacer/>
          <v-btn
              color="white"
              icon
              @click="$router.push('/coin/buyUniPoint1')"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-app-bar>
        <v-card-text class="mt-5">
          <div class="text-subtitle-1 font-weight-black " :style="{'color': '#103178'}">
            <v-icon :style="{'color': '#103178'}">mdi-check-circle</v-icon> 구매신청이 완료되었습니다.
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn block class="ps-btn ps-btn--primary" @click="$router.push('/coin/buyUniPoint1')">
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


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
      confirm: false,
      quantity: 0,
      regNumber: '',
      breadcrumb: [
        {
          url: '/coin/buyUniPoint2',
          text: 'UNI Point 구매(2/3)'
        },
        {
          url: '/coin/buyUniPoint3',
          text: 'UNI Point 구매(3/3)'
        }
      ],
      selected1: 'N',
      selectList: [
        {
          text: '미선택',
          value: 'N'
        },
        {
          text: '소득공제',
          value: 'I'
        },
        {
          text: '지출증명',
          value: 'E'
        },
      ]

    };
  },
  computed: {
    ...mapState({
      loading: state => state.app.loading
    })
  },
  async mounted() {
    this.$store.commit('app/setLoading', true);
  },
  methods: {
    confirmEvent() {
      const message = {
        message: '구매신청완료',
        icon: 'icon-shield-check'
      }
      // this.$store.commit('app/setMessageNotify', message)
      // this.$store.commit('app/setDialogNotify', true);
      this.dialog = false;
      this.confirm = true;

      const payload = {
        user_id: (this.$store.state.auth.userInfo && this.$store.state.auth.userInfo.user_id) ? this.$store.state.auth.userInfo.user_id : 'unicore',
        money: this.$store.state.account.buyUniPoint.money,
        tax: this.$store.state.account.buyUniPoint.tax,
        uni_point: this.$store.state.account.buyUniPoint.uniPoint,
        document_type: this.selected1,
        document_number: (this.selected1!=='N') ? this.regNumber : ''
      }

      this.$axios.post('/account/buyUniPoint' , payload)
      .then(res => {
        this.confirm = true;

      }).catch(err => this.$toast.error(`${err}`,{ position: "top-left" }))

    },
    handleFilter(type, value) {
      // list type: price, color, branch, rating
      console.log(type, value);
    }
  }
};
</script>
