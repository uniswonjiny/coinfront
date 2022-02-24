<template>
    <div class="ps-account my-md-auto">
        <div class="container">
            <div class="ps-form--review">
                <accountHeader beforeUrl="/account/account2" title="회원가입(3/3)" />
                <v-card flat max-width="700" class="mx-auto">
                    <v-list
                        class="transparent"
                        :style="{'color' : 'red'}"
                    >
                        <v-list-item >
                            <v-list-item-action>
                                <v-checkbox
                                    v-model="inputAll"
                                    color="primary"
                                    @click="allChangeEvent()"
                            ></v-checkbox>
                            </v-list-item-action>
                            <v-list-item-title> 전체 동의(필수)</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-action>
                                <v-checkbox
                                    v-model="input1"
                                    color="primary"
                                    @click="checkEvent"
                            ></v-checkbox>
                            </v-list-item-action>
                            <v-list-item-title>만 14세 이상입니다.</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-action>
                                <v-checkbox
                                    v-model="input2"
                                    color="primary"
                                    @click="checkEvent"
                            ></v-checkbox>
                            </v-list-item-action>
                            <v-list-item-title>서비스 이용 약관</v-list-item-title>
                                <v-list-item-icon>
                                    <v-icon color="#103178">
                                        mdi-message-arrow-right-outline
                                    </v-icon>
                                </v-list-item-icon>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-action>
                                <v-checkbox
                                    v-model="input3"
                                    color="primary"
                                    @click="checkEvent"
                            ></v-checkbox>
                            </v-list-item-action>
                            <v-list-item-title>개인정보 처리방침</v-list-item-title>
                                <v-list-item-icon>
                                    <v-icon color="#103178">
                                        mdi-message-arrow-right-outline
                                    </v-icon>
                                </v-list-item-icon>
                        </v-list-item>
                    </v-list>
                </v-card>
            </div>
        </div>
        
        <div class="ps-footer--top" :style="{'margin-bottom': '0px' , 'position': 'fixed','bottom': '0','width': '100%' , 'background-color':'aliceblue'}" >
        <div class="container">
            <div class="row m-0">
                <div class="col-12 p-0">
                    <p class="text-center"><a class="ps-footer__link" @click="confirmEvent" to="#" ><i class="icon-wallet"></i>회원가입</a></p>
                </div>
            </div>
        </div>
    </div>
    <notify-dialog />
    </div>
</template>

<script>
import accountFooter from '~/components/account/accountFooter'
import accountHeader from '~/components/account/accountHeader'
import NotifyDialog from '~/components/elements/commons/NotifyDialog';
export default {
    layout: 'empty',
    components: {
        NotifyDialog,
        accountFooter,
        accountHeader
    },
    mounted() {
      this.userId = this.$route.params.userId;
      this.userPassword = this.$route.params.userPassword;
      this.recommendedId = this.$route.params.recommendedId;
    },

    data() {
        return {
          userId: null,
          userPassword: null,
          recommendedId: null,

          inputAll: false,
          input1: false,
          input2: false,
          input3: false,
        };
    },
    methods: {
      allChangeEvent(){
        if(this.inputAll){
          this.input1= true;
          this.input2= true;
          this.input3= true;
        }else {
          this.input1= false;
          this.input2= false;
          this.input3= false;
        }
      },
      checkEvent(){
        (this.input1 && this.input2 && this.input3) ? this.inputAll = true : this.inputAll = false;
      },
      confirmEvent() {
        if(this.inputAll && this.userId && this.userPassword ) {

        } else this.$toast.warning(`약관등을 동의해 주세요`, { position: "top-left" })
      }
    }

};
</script>

<style lang="scss" scoped>
    .v-list-item__title {
        color: #103178;
    }
</style>
