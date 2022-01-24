<template>
    <div class="ps-account my-auto">
        <div class="container">
            <div class="ps-form--review">
                <div class="ps-form__title mb-0">
                    <nuxt-link class="ps-footer__link" to="/account/login">
                        <i class="fa fa-chevron-left"/>
                    </nuxt-link>
                    비밀번호 찾기
                </div>
                <v-divider/>
            <div class="row g-0 ">
                <div class="col-12 col-sm-6 col-md-6">
                    <div class="ps-form__group">
                        <label class="ps-form__label">사용하시는 아이디를 입력하세요 *</label>
                        <div class="row">
                            <div class="col-8">
                                <v-text-field
                                    class="form-control ps-form__input"
                                    type="text"
                                    value="unicore"
                                    required
                                    rounded
                                />            
                            </div>
                            <div class="col-4"> 
                                <button class="ps-btn ps-btn--primary">
                                        확인
                                </button>          
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-6">
                    <div class="ps-form__group">
                        <label class="ps-form__label">SMS 인증 *</label>
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
                                <button class="ps-btn ps-btn--primary">
                                        확인
                                </button>          
                            </div>
                            <div class="col-12 pt-0">
                                <small class="text-muted">
                                    등록된 전화번호를 사용하지 못하는경우.
                                </small>
                                <br/>
                                <small>
                                    <v-btn text class="px-0 " color="red"  href='tel:02-1600-0174'>
                                        <v-icon small>mdi-phone-ring-outline</v-icon>
                                        고객센터로 문의해주세요.(전화걸기)
                                    </v-btn>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12">
                        <div class="ps-form__group">
                            <label class="ps-form__label">인증번호를 입력하세요 *</label>
                            <div class="row">
                                <div class="col-6">
                                    <v-text-field
                                        class="form-control ps-form__input"
                                        type="text"
                                        value="123456"
                                        required
                                        rounded
                                    />
                                </div>
                                <div class="col-3"> 
                                    <v-btn
                                        color="primary"
                                        class="mt-2"
                                        outlined
                                        rounded
                                        block
                                    >
                                        재요청
                                    </v-btn>            
                                </div>
                                <div class="col-3"> 
                                    <v-btn
                                        color="primary"
                                        class="mt-2"
                                        outlined
                                        rounded
                                        block
                                    >
                                        확인
                                    </v-btn>            
                                </div>
                            </div>
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

        };
    },
    computed: {
    },
    methods: {
    }
};
</script>
