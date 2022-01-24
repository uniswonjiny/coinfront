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
                                v-model="userId"
                                required
                                rounded
                            />
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6">
                        <div class="ps-form__group">
                            <label class="ps-form__label">비밀번호를 입력하세요 *</label>
                            <v-text-field
                                class="form-control ps-form__input"
                                v-model="loginPassword"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'"
                                required
                                rounded
                                @click:append="show1 = !show1"
                            />
                        </div>
                    </div>
                </div>    
                <v-divider/>
                <div class="row">
                    <div class="col-12">
                        <div class="ps-form__submit">
                            <button class="ps-btn ps-btn--warning" @click="handleLogin()">
                                로그인
                            </button>
                            
                        </div>
                        <div class="text-right">
                            <nuxt-link class="ps-account__link mr-3" to="/account/findPassWord">
                            비밀번호 찾기
                            </nuxt-link>
                            <nuxt-link class="ps-account__link" to="/account/account1">
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
export default {
    layout: 'empty',
    data() {
        return {
            userId: null,
            show1: false,
            loginPassword: null,
        };
    },
    methods: {

    }
};
</script>

<style scoped>
.ps-form--review .ps-btn {
 
     max-width: 100%; 
}
</style>
