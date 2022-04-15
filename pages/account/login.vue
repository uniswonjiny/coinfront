<template>
  <div class="ps-account my-auto">
    <div class="container">
      <div class="ps-form--review">
        <div class="row">
          <div class="col-12">
            <h1>Login</h1>
          </div>
        </div>
        <div class="row ">
          <div class="col-12 col-sm-6 col-md-6">
            <div class="ps-form__group">
              <label class="ps-form__label">
                아이디를 입력해주세요 *
              </label>
              <v-text-field
                  class="form-control ps-form__input"
                  type="text"
                  v-model="user_id"
                  required
                  rounded
                  @keyup.enter="enterEvent('id')"
              />
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-6">
            <div class="ps-form__group">
              <label class="ps-form__label">비밀번호를 입력하세요 *</label>
              <v-text-field
                  ref="userPassRef"
                  class="form-control ps-form__input"
                  v-model="user_password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  required
                  rounded
                  @click:append="show1 = !show1"
                  @keyup.enter="enterEvent"
              />
            </div>
          </div>
        </div>
        <v-divider/>
        <div class="row">
          <div class="col-12">
            <div class="ps-form__submit">
              <button class="ps-btn ps-btn--warning" @click="loginEvent()">
                로그인
              </button>

            </div>
            <div class="text-right">
<!--              <nuxt-link class="ps-account__link mr-3" to="/account/findPassWord">
                비밀번호 찾기
              </nuxt-link>-->
              <nuxt-link class="ps-account__link" to="/account/account2">
                회원가입
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  layout: 'empty',

  data() {
    return {
      user_id: null,
      show1: false,
      user_password: null,
    };
  },
  methods: {
    ...mapActions({
      loginAction: 'auth/login'
    }),
    enterEvent(type) {
      if (type === 'id') {
        if (!this.user_password) this.$refs.userPassRef.focus();
        else this.loginEvent();
      } else {
        if (this.user_id && this.user_password) this.loginEvent();
      }
    },
    loginEvent() {
      if (!this.user_id || this.user_id.trim().length === 0) return this.$toast.warning(`아이디를 입력하세요`, {position: "top-left"})
      if (!this.user_password || this.user_password.trim().length === 0) return this.$toast.error(`비밀번호를 입력하세요`, {position: "top-left"})
      this.loginAction({user_id: this.user_id, user_password: this.user_password})
          .then(() => {
            this.$router.push('/coin');
          })

    }
  }
};
</script>

<style scoped>
.ps-form--review .ps-btn {
  max-width: 100%;
}

.custom-block-class {
  color: white;
}
</style>
