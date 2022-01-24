<template>
  <v-dialog v-model="dialog"  max-width="500">
        <v-card flat>
            <v-app-bar flat dense dark color="#103178">
                출금계좌 변경요청
                <v-spacer/>
                <v-btn
                    color="white"
                    icon
                    @click="dialog=false"
                    >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-app-bar>
            <v-card-text class="mt-10">
                <v-row>
                    <v-col cols="4" class="my-auto">
                        <div>은행</div>
                    </v-col>
                    <v-col cols="8">
                        <v-select
                            :items="bankList"
                            filled
                            label="은행선택"
                            dense
                            item-text="text"
                            item-value="code"
                            hide-details
                            single-line
                            v-model="bankCode"
                        />
                    </v-col>
                </v-row>
                <v-divider/>
                <v-row>
                    <v-col cols="4" class="my-auto">
                        <div>계좌번호</div>
                    </v-col>
                    <v-col cols="8">
                        <v-text-field
                            label="숫자만 입력해주세요"
                            filled
                            clearable
                            dense
                            hide-details
                            single-line
                            v-model="accountNumber"
                        />
                    </v-col>
                </v-row>
                <v-divider/>
                <v-row>
                    <v-btn class="my-5" :disabled='searchFlag' block text color="light-blue darken-4" @click="searchEvent">
                        <v-icon left>
                            mdi-magnify-expand
                        </v-icon>계좌주조회
                    </v-btn>
                </v-row>
                <v-row>
                    <v-col>
                        <v-alert
                            color="red lighten-2"
                            dark
                            text
                            class="subtitle-2 text-center"
                            >
                            회원님의 이름과 예금주가 일치하지 않습니다.
                        </v-alert>
                    </v-col>
                </v-row>
                <v-divider/>
                 <v-row>
                    <v-col cols="4">
                        <div>예금주</div>
                    </v-col>
                    <v-col cols="8" class="text-left">
                        <v-text-field
                            dense
                            single-line
                            hide-details
                            v-model="accountName"
                            disabled
                        />
                    </v-col>
                </v-row>

                
                </v-card-text>
                <v-card-actions>
                    <v-btn text color="primary" x-large block @click="cashDialog=true" :disabled='!this.accountName'>
                        [<v-icon left>
                            mdi-pencil
                        </v-icon> 계좌 변경 요청 ]
                    </v-btn>
                </v-card-actions>
            </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: {
      dialog: Boolean
  },

  computed: {
      searchFlag() {
          return !(this.accountNumber && this.bankCode)
      }
  },
  data() {
    return {
        bankList: [
            {code:'001',text:'유니코아은행'},
            {code:'002',text:'카카오뱅크'},
            {code:'003',text:'우리은행'},
            {code:'004',text:'케이뱅크'},
            {code:'005',text:'토스뱅크'},
            {code:'006',text:'카카오증권'},
            {code:'007',text:'신한은행'},
            {code:'008',text:'새마을금고'}
        ],
        bankCode: null,
        accountNumber: null,
        accountName: null,

        show1: false,
        show2: false,
        password: null,
        newPassword1: null,
        newPassword2: null,
        rules: {
            passwordMatch: ()=> this.newPassword1 == this.newPassword2 || '신규비밀번호와 일치하지 않습니다.',
            countMatch: val => (val && val.length > 5 && val.length < 17) || '최소 6자리 최대 16자리를 입력하세요'
        }
    }
  },
  methods: {
    searchEvent(){
        this.accountName = '홍길*동'
    },
    closeEvent(){
      $emit('closeEvent', 'false')
    }
  }
}
</script>

<style>

</style>