<template>
    <div class="ps-account my-md-auto">
        <div class="container">
            <div class="ps-form--review">
                <accountHeader beforeUrl="/account/login" title="회원가입(1/3)" />
                <div class="row g-0">
                    <div class="col-12 col-sm-6 col-md-6">
                        <div class="ps-form__group">
                        <label class="ps-form__label">회원이름 *</label>
                            <v-text-field
                                class="form-control ps-form__input"
                                type="text"
                                value="unicore"
                                required
                                rounded
                            />            
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-6">
                        <div class="ps-form__group">
                            <label class="ps-form__label">생년월일 *</label>
                            <div class="row">
                                <div class="col-7 col-sm-9 col-md-9">
                                    <v-text-field
                                        class="form-control ps-form__input"
                                        type="text"
                                        value="1900.01.01"
                                        required
                                        rounded
                                    />
                                </div>
                                <div class="col-5 col-sm-3 col-md-3">
                                    <v-select
                                        class="form-control ps-form__input"
                                        :items="items"
                                        rounded
                                        label="성별"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="ps-form__group">
                            <label class="ps-form__label">전화번호 *</label>
                            <div class="row">
                                <div class="col-8">
                                    <v-text-field
                                        class="form-control ps-form__input"
                                        type="text"
                                        value="010-3999-9999"
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
                                        @click="phoneNumberEvent"
                                    >
                                    중복확인
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <accountFooter nextUrl="/account/account2" :disable="disable" />
    </div>
</template>

<script>
import accountHeader from '~/components/account/accountHeader'
import accountFooter from '~/components/account/accountFooter'
export default {
    layout: 'empty',
    components : {
        accountFooter,
        accountHeader
    },
    data() {
        return {
            items: ['남자', '여자', '미입력'],
            phoneNumberCheck: false,
        };
    },
    computed: {
      disable(){
        // 세부 규칙은 아직 미정상태
        // 보인 인증후 들어오는 값으로 처리할것이다.
        return !(this.phoneNumberCheck);
      }
    },
    methods: {
      phoneNumberEvent(){
        // 핸드폰번호 본인 인증 부분 부착할예정
        this.phoneNumberCheck = true;
      }
    }
};
</script>
