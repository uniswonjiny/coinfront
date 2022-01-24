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
                                        value="unicoreId"
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
                                @click:append="show1 = !show1"
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
                                @click:append="show2 = !show2"
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
                                        value=""
                                        required
                                        rounded
                                        label="추천인의 아이디를 입력하세요"
                                    />
                                </div>
                                <div class="col-4"> 
                                    <v-btn
                                        color="primary"
                                        class="mt-2"
                                        outlined
                                        rounded
                                        block
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
        <accountFooter nextUrl="/account/account3"/>        
    </div>
</template>

<script>
import accountFooter from '~/components/account/accountFooter'
import accountHeader from '~/components/account/accountHeader'

export default {
    layout: 'empty',
    components : {
        accountFooter,
        accountHeader
    },
    data() {
        return {
            show1: false,
            show2: false,
            password1: null,
            password2: null,
            registerEmail: null,
            registerPassword: null,
            rememberLogin: false
        };
    },
    computed: {
    },
    methods: {
    }
};
</script>
