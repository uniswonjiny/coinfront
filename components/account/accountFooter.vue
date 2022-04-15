<template>
  <div>
        <div class="ps-footer--top account-footer">
        <div class="container">
            <div class="row m-0">
                <div class="col-12 p-0">
                    <button type="button" class="btn-block ps-footer__link text-center"  @click="clickEvent"><i class="icon-wallet"></i>다음</button>
                </div>
            </div>
        </div>
        </div>
  </div>
</template>

<script>
export default {
    props: {
        nextUrl: String,
        disable: {
          type: Boolean,
          default: true
        },
        message: {
          type: String,
          default: '필수 사항을 확인하세요'
        },
        userId : {
          type: String,
          default: null
        },
        userPassword : {
          type: String,
          default: null
        },
        recommendedId : {
          type: String,
          default: null
        },

    },
  methods: {
    clickEvent(){
      if(this.disable) {
        this.$toast.warning(`${this.message}`, { position: "top-left" })
      }else {
        if(!this.userId)this.$router.push(this.nextUrl);
        else {
          // params 로 보낼대 될때도 있고  query 로 보내야 될때도 있다. nuxt 내부 오류인듯
          //this.$router.push({path: this.nextUrl , params: { userId : this.userId, userPassword: this.userPassword, recommendedId: this.recommendedId }})
          this.$router.push({name: 'account-account3' , params: { userId : this.userId, userPassword: this.userPassword, recommendedId: this.recommendedId }})
        }

      }

    }
  }
        
    
}
</script>

<style lang="scss" scoped>
    .account-footer {
        margin-bottom: 0px; 
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color:aliceblue;
    }
</style>

