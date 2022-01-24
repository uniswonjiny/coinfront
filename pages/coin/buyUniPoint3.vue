<template>
    <div class="ps-shopping">
        <div class="container">
            <breadcrumb :dataList="breadcrumb" />
            <h3 class="ps-shopping__title">UNI Point 구매<sup>(3/3)</sup></h3>
            <div class="ps-shopping__content">
                <div class="ps-product--extension mb-5">
                    <div class="ps-product__delivery">
                        <div class="ps-product__attribute">
                            <h5>증빙서류 선택</h5>
                            <v-select
                                :items="selectList"
                                item-text="text"
                                item-value="value"
                                v-model="selected1"
                                dense
                                outlined
                                rounded
                            />
                            <h5>증빙번호입력</h5>
                            <v-text-field
                                placeholder="입력하세요..."
                                rounded
                                outlined
                                dense
                                type="number"
                            />
                        </div>
                        <sub>* 증빙발행은 현금영수증만 가능합니다. 소득공제의 경우 휴대폰 숫자 11자리, 지출 증빙닌 경우 사업자 번호 숫자 10자리를 기재해 주세요</sub>
                    </div>
                    
                </div>
            </div>
            <div class="row ">                                 
                    <div class="col-12">
                        <a
                            class="ps-btn ps-btn--warning"
                            href="#"
                            @click.prevent="dialog=!dialog"
                        >구매신청</a>
                    </div>
                </div>
                 <v-divider/>
        </div>
        
        <v-dialog v-model="dialog" max-width="1100" content-class="ps-dialog ps-compare" >
        <v-card class="ps-dialog__body ">
            <button
                class="ps-dialog__close mt-3"
                type="button"
                @click.prevent="dialog=!dialog"
            >
                <i class="icon-cross"></i>
            </button>

            <div class="ps-compare--product">
                <div class="ps-compare__header">
                    <div class="container">
                        <h2>구매 신청 확인</h2>
                    </div>
                </div>
                <div class="ps-compare__content py-0">
                    <div class="ps-compare__table">
                        <table class="table ps-table">
                            <tbody>
                                <tr>
                                    <td>
                                        <ul class="ps-product__list">
                                            <li class="ps-check-line">최종 구매 금액(부가세 포함)</li>
                                        </ul>
                                    </td>
                                    
                                </tr>
                                <tr>
                                    <td>
                                        <div class="ps-product__price sale text-center">3,300,000 원</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td :style="{'text-align': 'right'}">
                                        <button class="ps-btn ps-btn--warning" :style="{'minWidth':'130px'}" @click.prevent="dialog=!dialog">아니오</button>
                                        <button class="ps-btn ps-btn--primary" :style="{'minWidth':'130px'}" @click.prevent="confirmEvent">네</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </v-card>
    </v-dialog>
    </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import { mapState } from 'vuex';

export default {
    layout: 'coin',
    components: {
        Breadcrumb
    },
    data() {
        return {
            dialog: false,
            confirm: false,
            quantity: 0,
            breadcrumb: [
                {
                    url: '/coin/buyUniPoint1',
                    text: 'UNI Point 구매(1/3)'
                },
                {
                    url: '/coin/buyUniPoint2',
                    text: 'UNI Point 구매(2/3)'
                },
                {
                    url: '/coin/buyUniPoint3',
                    text: 'UNI Point 구매(3/3)'
                }
            ],
            selected1: { text: '소득공제', value: '1' },
            selectList: [
                {
                    text: '소득공제',
                    value: '1'
                },
                {
                    text: '지출증명',
                    value: '2'
                },
            ]
          
        };
    },
    computed: {
        ...mapState({
            loading: state => state.app.loading
        })
    },
    async mounted() {
        this.$store.commit('app/setLoading', true);
    },
    methods: {
        confirmEvent(){
            const message = {
                message: '구매신청완료',
                icon: 'icon-shield-check'
            }
            this.$store.commit('app/setMessageNotify', message)
            this.$store.commit('app/setDialogNotify', true);
            this.dialog=false;
        },
        handleFilter(type, value) {
            // list type: price, color, branch, rating
            console.log(type, value);
        }
    }
};
</script>
