<template>
    <div class="container">
        <div class="ps-product--detail">
            <breadcrumb :dataList="breadcrumb" />
            <div class="ps-table__name">BTC Point 출금</div>
            <div class="ps-page__content">
                <div class="row">
                    <div class="col-12 col-sm-6">
                        <div :style="{'background-color': 'lightsteelblue'}" class="px-4 py-0">
                            <div class="row">
                                <div class="col-6">
                                    <div class="subtitle-2 pt-2">잔고</div>
                                </div>
                                <div class="col-6 text-right ">
                                    <h4 class="">0.01122145<sub>BTC</sub></h4>
                                    
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="subtitle-2">BTC 시세</div>
                                    <div class="caption font-italic" :style="{'color':'#103178'}">2021.11.10 15:03:01</div>
                                </div>
                                <div class="col-6 text-right">
                                    <h4>50,000,000<sub>원</sub></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <div :style="{'background-color': '#f0f2f5'}" class="px-4 py-0">
                            <div class="row">
                                <div class="col-5">
                                    <div class="subtitle-2 pt-2">환매 수량</div>
                                </div>
                                <div class="col-7 text-right">
                                    <div class="d-flex">
                                         <v-badge 
                                            content="all"
                                            bordered
                                            color="indigo darken-1"
                                            icon="mdi-lock"
                                            overlap
                                            left
                                        >
                                            <v-checkbox
                                                v-model="enabled"
                                                hide-details
                                                dense 
                                                color="indigo"   
                                            />
                                        </v-badge>
                                        <v-text-field
                                            dense
                                            hide-details
                                            single-line
                                            suffix="BTCP"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="row pb-3">
                                <div class="col-6">
                                    <div class="subtitle-2 text-right">환매후 잔액 <v-icon x-small>mdi-arrow-right-bottom-bold</v-icon></div>
                                </div>
                                <div class="col-6 text-right">
                                    <h4>10.00000140<sub>btcp</sub></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <v-divider class="my-7"/>
                <div class="row">
                    <div class="col-12">
                        <div :style="{'background-color':'linen'}" class="px-4 py-0">
                            <div class="row">
                                <div class="col-4">
                                    <div class="subtitle-2">출금금액</div>
                                </div>
                                <div class="col-8 text-right ">
                                    <h4 class="">159,000,000<sub>원</sub></h4>   
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-5">
                                    <div class="caption text-right">환매 <sub>수수료</sub></div>
                                </div>
                                <div class="col-7 text-right">
                                    <h4>1,500,000<sub>원</sub></h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-5">
                                    <div class="caption text-right">송금 <sub>수수료</sub></div>
                                </div>
                                <div class="col-7 text-right">
                                    <h4>1,500,000<sub>원</sub></h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-5">
                                    <div class="subtitle-2">실제 입금 금액</div>
                                </div>
                                <div class="col-7 text-right ">
                                    <h4 class="">159,000,000<sub>원</sub></h4>   
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <div class="subtitle-2">입금계좌</div>
                                </div>
                                <div class="col-9 text-right">
                                    <div class="body-2"><sub>카카오뱅크</sub> 1234-55-789456 <sub>김희원</sub></div>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <v-btn
                            color="deep-orange darken-2"
                            dark
                            rounded
                            block
                        >
                            출금신청
                        </v-btn>  
                    </div>
                </div>
            </div>
        </div>
        <v-divider/>
        <!-- 모달창 -->
   
            <v-card 
                max-width="400"
                flat
            >
                <v-app-bar
                    flat
                color="rgba(0, 0, 0, 0)"
                >
                    <v-icon>
                        mdi-chili-mild-outline
                    </v-icon>
                    출금신청 확인
                    <v-spacer/>
                    <v-btn
                        color="blue"
                        icon
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-app-bar>
                <v-card-subtitle>
                    * 출금금액(수수료 제외)
                </v-card-subtitle>
                <v-card-text class="text-center">
                    <h3>0.10010000 BTC</h3> 
                    <div class="subtitle-1"> (8,000,000 원)</div>
                </v-card-text>
                <v-card-text >
                     <v-badge 
                        color="orange darken-3"
                        left
                        dot
                    >
                        <span class="subtitle-2 pl-1" color="red">출금요청을 하시겠습니까?</span>
                    </v-badge>
                </v-card-text>
                <v-card-actions class="px-15">
                    <v-btn outlined  color="primary" >아니오</v-btn>
                    <v-spacer/>
                    <v-btn outlined color="red" >출금실행</v-btn>
                </v-card-actions>

            </v-card>
   
    </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import { mapState } from 'vuex';

export default {
    layout: 'coin',
    components: {
        Breadcrumb,
    },
    data() {
        return {
            breadcrumb: [
                {
                    url: '/coin/uniMining',
                    text: 'Home'
                },
                {
                    url: '/coin/btcPoint',
                    text: 'BTC Point'
                },
                {
                    url: '/coin/btcPointSell',
                    text: 'BTC Point 수익출금'
                }
            ],
            items: [
                {
                    text: '전체',
                    value: 'all'
                },{
                    text: '입고',
                    value: '1'
                },{
                    text: '출고',
                    value: '2'
                },
            ],
            btcList: [
                {
                    type:'출금',
                    currency:'0.10000000',
                    total:'2.10000000',
                    unit:'BTCPoint',
                    text: '확인중...',
                },
                {
                    type:'입금',
                    currency:'0.10000000',
                    total:'2.10000000',
                    unit:'BTCPoint',
                    text: '확인중...',
                },
                {
                    type:'출금',
                    currency:'0.13000000',
                    total:'2.10000000',
                    unit:'BTCPoint',
                    text: '2021.12.24 23:59:59',
                },
                {
                    type:'출금',
                    currency:'0.20000000',
                    total:'2.10000000',
                    unit:'BTCPoint',
                    text: '2021.12.23 23:00:59',
                },
                {
                    type:'입금',
                    currency:'0.20000000',
                    total:'2.10000000',
                    unit:'BTCPoint',
                    text: '2021.12.22 03:59:01',
                },

            ],
            sumInfo : {
                title: '구매금액',
                    captions : '최초수익발생일: 2021년12월12일 / 30일경과',
                    data: [
                        {
                            title: '총구매수량\n(UNI point)',
                            text: '10,000'
                        },
                        {
                            title: '누적 투자액\n(원)',
                            text: '3,000,000'
                        }
                    ]
            }
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

    }
};
</script>
