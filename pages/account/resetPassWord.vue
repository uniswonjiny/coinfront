<template>
  <div class="ps-account">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 pb-n2">
          <div class="ps-form--review">
            <div class="row">
              <div class="col-10 col-sm-10 pb-n1">
                <h2 class="ps-form__title pl-3 mb-n1">비밀번호 재설정</h2>
              </div>
              <div class="col-2 pb-n2 d-flex justify-content-end">
                <nuxt-link class="ps-footer__link" to="/account/login">
                  <v-icon color="primary">mdi-close</v-icon>
                </nuxt-link>
              </div>
            </div>
            <v-divider></v-divider>
            <div class="ps-form__group">
              <label class="ps-form__label"
              >신규 비밀번호 *</label
              >
              <v-text-field
                  class="form-control ps-form__input"
                  :type="show1 ? 'text' : 'password'"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show1 = !show1"
                  v-model="password1"
                  required
                  rounded
                  @input="$v.loginEmail.$touch()"
                  @blur="$v.loginEmail.$touch()"
                  :error-messages="loginEmailErrors"
              />
            </div>
            <div class="ps-form__group">
              <label class="ps-form__label"
              >신규 비밀번호 재입력 *</label
              >
              <v-text-field
                  class="form-control ps-form__input"
                  :type="show2 ? 'text' : 'password'"
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show2 = !show2"
                  v-model="password2"
                  required
                  rounded
                  :rules="password2Rules"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ps-footer--top"
         :style="{'margin-bottom': '0px' , 'position': 'fixed','bottom': '0','width': '100%' , 'background-color':'aliceblue'}">
      <div class="container">
        <div class="row m-0">
          <div class="col-12 col-sm-12 p-0">
            <p class="text-center">
              <nuxt-link class="ps-footer__link" to="/account/account2"><i class="icon-wallet"></i>변경</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {validationMixin} from 'vuelidate';
import {required, email} from 'vuelidate/lib/validators';

export default {
  layout: 'empty',
  mixins: [validationMixin],
  validations: {
    loginEmail: {required, email},
    loginPassword: {required},
    registerEmail: {required, email},
    registerPassword: {required},
    password2: {required}
  },
  data() {
    return {
      show1: false,
      show2: false,
      loginEmail: null,
      password1: null,
      password2: null,
      loginPassword: null,
      registerEmail: null,
      registerPassword: null,
      rememberLogin: false,
      password2Rules: [
        v => this.password1 == v || '신규비밀번호와 재입력이 일치하지 않습니다'
      ]
    };
  },
  computed: {
    loginEmailErrors() {
      const errors = [];
      if (!this.$v.loginEmail.$dirty) return errors;
      !this.$v.loginEmail.email && errors.push('Must be valid e-mail');
      !this.$v.loginEmail.required && errors.push('E-mail is required');
      return errors;
    },
    loginPasswordErrors() {
      const errors = [];
      if (!this.$v.loginPassword.$dirty) return errors;
      !this.$v.loginPassword.required && errors.push('영문숫자포함6자리이상');
      return errors;
    },
    registerEmailErrors() {
      const errors = [];
      if (!this.$v.registerEmail.$dirty) return errors;
      !this.$v.registerEmail.email && errors.push('Must be valid e-mail');
      !this.$v.registerEmail.required && errors.push('E-mail is required');
      return errors;
    },
    registerPasswordErrors() {
      const errors = [];
      if (!this.$v.registerPassword.$dirty) return errors;
      !this.$v.registerPassword.required && errors.push('Password is required');
      return errors;
    },

    password2Errors() {
      const errors = [];
      if (!this.$v.password2.$dirty) return errors;
      this.$v.password2 != this.$v.password1 && errors.push('신규비밀번호와 재입력이 일치하지 않습니다');
      return errors;
    }
  },
  methods: {
    handleLogin() {
      this.$v.loginEmail.$touch();
      this.$v.loginPassword.$touch();
      if (!this.$v.$invalid) {
        const params = {
          email: this.loginEmail,
          password: this.loginPassword,
          remember: this.rememberLogin
        }
        console.log('params', params)
      }
    },
    handleRegister() {
      this.$v.registerEmail.$touch();
      this.$v.registerPassword.$touch();
      if (!this.$v.$invalid) {
        const params = {
          email: this.registerEmail,
          password: this.registerPassword
        }
        console.log('params', params)
      }
    }
  }
};
</script>
