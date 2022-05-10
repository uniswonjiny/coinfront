<template>
  <v-dialog v-model="dialog" max-width="500">
    <v-card flat>
      <v-app-bar flat dense dark color="#103178">
        출금계좌 변경요청
        <v-spacer/>
        <v-btn
            color="white"
            icon
            @click="closeEvent"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-app-bar>
      <v-card-text class="my-10">
        <v-row>
          <v-col cols="4" class="my-auto">
            <div>은행</div>
          </v-col>
          <v-col cols="8">
            <v-text-field
                label="은행이름을 입력"
                filled
                clearable
                dense
                hide-details
                single-line
                v-model="bank_name"
            />
            <!--                        <v-select-->
            <!--                            :items="bankList"-->
            <!--                            filled-->
            <!--                            label="은행선택"-->
            <!--                            dense-->
            <!--                            item-text="text"-->
            <!--                            item-value="code"-->
            <!--                            hide-details-->
            <!--                            single-line-->
            <!--                            v-model="bankCode"-->
            <!--                        />-->
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" class="my-auto">
            <div>계좌번호</div>
          </v-col>
          <v-col cols="8">
            <v-text-field
                label="계좌번호를 입력"
                filled
                clearable
                dense
                hide-details
                single-line
                v-model="bank_account"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <div>예금주</div>
          </v-col>
          <v-col cols="8" class="text-left">
            <v-text-field
                dense
                single-line
                filled
                hide-details
                label="예금주 이름 입력"
                v-model="bank_holder"
            />
          </v-col>
        </v-row>
        <v-divider/>

        <v-row>
          <v-col>
            <v-alert
                color="red lighten-2"
                dark
                text
                class="subtitle-2 text-center"
            >
              계좌정보가 부정확 할 경우 출금이 지연됩니다
            </v-alert>
          </v-col>
        </v-row>
        <v-btn text color="primary" x-large block @click="saveEvent"
               :disabled='!(this.bank_name && this.bank_account && this.bank_holder)'>
          [
          <v-icon left>
            mdi-pencil
          </v-icon>
          계좌 변경 요청 ]
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: Boolean
  },

  mounted() {
    this.bank_name = '';
    this.bank_account = '';
    this.bank_holder = '';
  },
  data() {
    return {
      bankList: [
        {code: '001', text: '유니코아은행'},
        {code: '002', text: '카카오뱅크'},
        {code: '003', text: '우리은행'},
        {code: '004', text: '케이뱅크'},
        {code: '005', text: '토스뱅크'},
        {code: '006', text: '카카오증권'},
        {code: '007', text: '신한은행'},
        {code: '008', text: '새마을금고'}
      ],
      bankCode: null,
      /* 디비컬럼명과 일치 시킨것뿐 '_' 별의미 없음*/
      bank_name: '',
      bank_account: null,
      bank_holder: null,
    }
  },
  methods: {
    closeEvent() {
      this.$emit('closeEvent')
    },
    saveEvent() {
      this.$axios.post('/auth/userBankModify', {
        bank_name: this.bank_name,
        bank_account: this.bank_account,
        bank_holder: this.bank_holder,
        user_id: this.$store.state.auth.userInfo.user_id
      }).then(res => {
        this.$store.dispatch('auth/authLogin')
        this.$toast.success(`변경되었습니다.`, {position: "top-left"})
        return res
      }).then(_ => {
        this.$emit('closeEvent');
      })

    }
  }
}
</script>

<style>

</style>
