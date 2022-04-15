<template>
    <div class="ps-account my-md-auto">
        <div class="container">
            <div class="ps-form--review">
                <accountHeader beforeUrl="/account/account1" title="회원가입(2/3)" />
                <div class="row g-0">
                    <div class="col-12">
                        <div class="ps-form__group">
                            <label class="ps-form__label">아이디입력 *</label>
                            <div class="row">
                                <div class="col-8">
                                    <v-text-field
                                        class="form-control ps-form__input"
                                        type="text"
                                        v-model="unicoreId"
                                        required
                                        rounded
                                    />
                                </div>
                                <div class="col-4"> 
                                    <v-btn
                                        color="primary"
                                        class="mt-2"
                                        outlined
                                        rounded
                                        block
                                        @click="idCheckEvent"
                                    >
                                        중복확인
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6">
                        <div class="ps-form__group">
                            <label class="ps-form__label"
                                >비밀번호 *</label
                            >
                            <v-text-field
                                class="form-control ps-form__input"
                                v-model="password1"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'"
                                required
                                rounded
                                @click.prevent:append="show1 = !show1"
                            />
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6">
                        <div class="ps-form__group">
                            <label class="ps-form__label"
                                >비밀번호 확인 *</label
                            >
                            <v-text-field
                                class="form-control ps-form__input"
                                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                                v-model="password2"
                                required
                                rounded
                                :type="show2 ? 'text' : 'password'"
                                @click.prevent:append="show2 = !show2"
                            />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="ps-form__group">
                            <label class="ps-form__label">추천인아이디(선택)</label>
                            <div class="row">
                                <div class="col-8">
                                    <v-text-field
                                        class="form-control ps-form__input"
                                        type="text"
                                        v-model="recommendSendId"
                                        required
                                        rounded

                                    />
                                </div>
                                <div class="col-4"> 
                                    <v-btn
                                        color="primary"
                                        class="mt-2"
                                        outlined
                                        rounded
                                        block
                                        @click="recommendedEvent"
                                    >
                                        조회
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <accountFooter
            nextUrl="/account/account3"
            :disable="disable"
            :userId="this.unicoreId"
            :userPassword="this.password1"
            :recommendedId="this.recommendSendId" />
        <accountInfoConfirm @closeEvent="accountCloseEvent" :userId="recommendedId" :userName="recommendedName" :dialog="accountDialog"/>
    </div>
</template>

<script>
import accountFooter from '~/components/account/accountFooter'
import accountHeader from '~/components/account/accountHeader'
import accountInfoConfirm from '~/components/account/accountInfoConfirm'

export default {
    layout: 'empty',
    components : {
        accountFooter,
        accountHeader,
        accountInfoConfirm
    },
    data() {
        return {
            show1: false,
            show2: false,
            password1: null,
            password2: null,
            registerEmail: null,
            registerPassword: null,
            rememberLogin: false,
            unicoreId: null,
            accountDialog: false,
            recommendSendId:'',
            recommendedId: '',
            recommendedName: '',
            idCheck: false

        };
    },
    computed: {
      disable(){
        return !(this.idCheck && this.password1 && this.password1 === this.password2);
      }
    },
    methods: {
      accountCloseEvent(){
        this.accountDialog = false;
      },
      idCheckEvent(){
        if(!this.unicoreId){
          this.$toast.info('아이디를 입력하세요.', { position: "top-left" })
          return;
        }
        this.$axios.get(`/auth/userCount/${this.unicoreId}`)
        .then((res)=>{
          if(res.data.count !== 0){
            this.$toast.info('이미 가입한 아이디입니다.', { position: "top-left" })
            this.idCheck= false;
          } else {
            this.$toast.info('사용가능한 아이디입니다..', { position: "bottom-right" })
            this.idCheck= true;
          }
        })
        .catch(err=> {
          this.idCheck= false;
          this.$toast.warning(`${err.message}`, { position: "top-left" })
        })
      },
      recommendedEvent(){
        if(!this.recommendSendId){
          this.$toast.info(`추천인아이들 입력하세요`, { position: "top-left" });
          return;
        }
        this.$axios.get(`/auth/userName/${this.recommendSendId}`)
        .then((res) => {
            if(res.data) {
              this.recommendedId= res.data.user_id;
              this.recommendedName= res.data.user_name;
              this.accountDialog = true;
            } else {
              this.accountDialog = false;
              this.$toast.warning(`추천인이 존재하지 않습니다.`, { position: "top-left" })
            }
        }).catch(err=> {
          this.$toast.warning(`${err.message}`, { position: "top-left" })
          this.accountDialog = false;
        })
      }
    },
};
</script>
