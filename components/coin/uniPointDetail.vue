<template>
  <div>
    <v-dialog v-model="cashDialog">
      <v-card>
        <v-card-title>
          현금영수증~~~~
          <v-spacer/>
          <v-btn @click="cashDialog=false">닫기</v-btn>
        </v-card-title>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog" max-width="600">
      <v-card flat class="mb-0 pb-0">
        <v-app-bar flat dense dark color="#103178">
          No: {{ item.no }}
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
          <v-row class="mt-1">
            <v-col cols="5">
              <v-icon>mdi-square-small</v-icon>
              거래유형
            </v-col>
            <v-col cols="7" class="text-right">Uni Point {{ item.title }}
            </v-col>

            <v-col cols="5">
              <v-icon>mdi-square-small</v-icon>
              요청일시
            </v-col>
            <v-col cols="7" class="text-right"> {{ item.created_at }}</v-col>

            <v-col cols="5">
              <v-icon>mdi-square-small</v-icon>
              처리일시
            </v-col>
            <v-col cols="7" class="text-right">{{ item.updated_time }}</v-col>

            <v-col cols="5">
              <v-icon>mdi-square-small</v-icon>
              거래수량
            </v-col>
            <v-col cols="7" class="text-right">{{ item.uni_point }} UNIP</v-col>
          </v-row>
          <v-divider/>
          <v-row>
            <v-col cols="5">
              <v-icon>mdi-square-small</v-icon>
              거래단가
            </v-col>
            <v-col cols="7" class="text-right">{{ item.perCurrency }}</v-col>

            <v-col cols="5">
              <v-icon>mdi-square-small</v-icon>
              거래금액
            </v-col>
            <v-col cols="7" class="text-right">{{ item.money }}</v-col>

            <v-col cols="5">
              <v-icon>mdi-square-small</v-icon>
              부가세
            </v-col>
            <v-col cols="7" class="text-right">{{ item.tax }}</v-col>

            <v-col cols="5">
              <v-icon>mdi-square-small</v-icon>
              최종금액
            </v-col>
            <v-col cols="7" class="text-right">{{ item.sumCurrency }}</v-col>
          </v-row>
          <v-divider/>
          <v-row>
            <v-col cols="5" class="my-auto">
              <v-icon>mdi-square-small</v-icon>
              거래방법
            </v-col>
            <v-col cols="7" class="text-right ">
              <div>은행입금</div>
              <div>{{ item.bank_name }}</div>
              <div>{{ item.account_no }}</div>
              <div>{{ item.account_holder }}</div>
            </v-col>

            <v-col cols="5">
              <v-icon>mdi-square-small</v-icon>
              거래증빙
            </v-col>
            <v-col cols="7" class="text-right">
              <div>{{ item.documentType }}</div>
              <div>{{ item.document_number }}</div>
              <!--                                <v-btn text color="primary" @click="cashDialog=true">[출력]</v-btn>-->
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {commaCurrency} from "~/utilities/helpers";

export default {
  props: {
    dialog: Boolean,
    info: Object
  },
  computed: {
    item() {
      let item = {
        title: '',
        perCurrency: 0,
        sumCurrency: 0,
        created_at: '',
        updated_time: '',
        documentType: '',

      };
      if (!this.info) return item
      item = this.info;
      item.sales_type === 'M' ? item.title = '구매' : item.title = '판매';

      if (item.type === 'R') {
        item.title = item.title + ' - 요청중';
        item.updated_time = '미처리'; // updated_at 이름을 그대로 사용할 경우 알수 없는 예러가 발생한다. 이름변경후 오류없음
      } else {
        item.updated_time = item.updated_at
      }

      // document_type 그래도 상요할경우 에러남
      if (item.document_type === 'E') item.documentType = '지출증빙';
      if (item.document_type === 'I') item.documentType = '소득공제';

      // 거래단가
      item.perCurrency = commaCurrency(item.money / item.uni_point) + '원';
      // 최종금액
      item.sumCurrency = commaCurrency(item.money + item.tax) + '원';
      return item;
    }
  },


  data() {
    return {
      cashDialog: false
    }
  },
  methods: {
    closeEvent() {
      $emit('closeEvent', 'false')
    }
  }
}
</script>

<style>

</style>
