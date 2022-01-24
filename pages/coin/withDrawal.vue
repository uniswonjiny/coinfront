<template>
    <div class="container">
        <breadcrumb :dataList="breadcrumb" />
        <div class="card border-0 bg-light">
          <div class="card-body ">
            <div class="row">
                <div class="col-5">잔고</div>
                <div class="col-5 text-right">0.001254871</div>
                <div class="col-2"> <small>BTCp</small> </div>
            </div>
            <div class="dropdown-divider"/>
            <div class="row">
                <div class="col-5 ">
                    BTC 시세
                    <div :style="{'font-size': '0.7rem'}">2021.11.10. 19:10:01</div>
                </div>
                <div class="col-5 text-right">0.001254871</div>
                <div class="col-2"> <small>BTCp</small> </div>
            </div> 
          </div>
        </div>
        <div class="card border-0">
            <div class="card-body">
                <div class="row">
                    <div class="col-5">환매 수량</div>
                    <div class="col-5 text-right">0.000254871</div>
                    <div class="col-2"><small>BTCp</small> </div>
                </div>
                <div class="dropdown-divider"/>
                <div class="row">
                    <div class="col-4 text-right"> <sub>환매후 잔액</sub> </div>
                    <div class="col-6 text-right font-weight-bolder" :style="{'color':'#103178 !important'}">0.000254871</div>
                    <div class="col-2"><small>BTCp</small> </div>
                </div>
            </div>
        </div>

        <div class="card border-0 bg-light">
            <div class="card-body">
                <div class="row">
                    <div class="col-5">출금잔액</div>
                    <div class="col-5 text-right">0.001254871</div>
                    <div class="col-2"><small>원</small></div>
                </div>
                <div class="dropdown-divider"/>
                <div class="row">
                    <div class="col-5 text-right">
                        <sub>환매 수수료</sub>  
                    </div>
                    <div class="col-5 text-right">5,550</div>
                    <div class="col-2"> <small>원</small> </div>
                </div>
                <div class="dropdown-divider"/>
                <div class="row">
                    <div class="col-5 text-right">
                        <sub>송금 수수료</sub>  
                    </div>
                    <div class="col-5 text-right">1,050</div>
                    <div class="col-2"> <small>원</small> </div>
                </div>
                <div class="dropdown-divider"/>
                <div class="row">
                    <div class="col-5">실제입금금액</div>
                    <div class="col-5 text-right">51,987,000</div>
                    <div class="col-2"><small>원</small></div>
                </div>
                <div class="dropdown-divider"/>
                <div class="row">
                    <div class="col-5 my-auto">입금 계좌</div>
                    <div class="col-7 text-right">
                        <div class="text-muted">
                            <small>카카오뱅크 </small> - <span>홍길동</span>
                        </div>
                        <div>
                            1111-8888-77-5555
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="ps-btn ps-btn--primary my-3 " @click="dialog=true" >출금신청</button>  
        <div class="dropdown-divider"/>
        <!-- 출금신청 확인 다이알로고  -->
        <v-dialog
            v-model="dialog"
            max-width="250"
        >
            <v-card>
                <v-system-bar 
                    window 
                    dark
                    height='40'
                >
                    <v-icon>mdi-message</v-icon>
                    <span>출금신청확인</span>
                    <v-spacer/>
                    <v-icon @click.prevent="dialog=false">mdi-close</v-icon>
                </v-system-bar>
                <v-card-text>
                    <div class="mt-4 text-subtitle-1">
                        • 출금 금액 (수수료제외)
                    </div>
                    <v-card-title>0.00100000 BTC</v-card-title>
                    <v-card-subtitle class="text-subtitle-2 text-bold">67,900,000 원</v-card-subtitle>
                    <div class="text--primary">
                        출금요청을 하시겠습니까?
                    </div>
                </v-card-text>
                <v-card-actions class="pt-0">
                    <v-btn
                        text
                        color="red accent-4"
                        @click="reveal = false"
                    >
                        아니오
                    </v-btn>
                    <v-spacer/>
                    <v-btn
                        text
                        color="teal accent-4"
                        @click="reveal = false"
                    >
                        네
                    </v-btn>
                </v-card-actions>
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
        Breadcrumb,
    },
    data() {
        return {
            dialog: true,
            breadcrumb: [
                {
                    url: '/coin/uniMining',
                    text: 'Home'
                },
                {
                    url: '/coin/withDrawal',
                    text: 'BTC 포인트 수익출금'
                }
            ],
            sellList: [
                {
                    type:'출고',
                    currency:'0.10000000',
                    total:'2.10000000',
                    unit:'BTCP',
                    text: '확인중...',
                },
                {
                    type:'입고',
                    currency:'0.10000000',
                    total:'2.10000000',
                    unit:'BTCP',
                    text: '확인중...',
                },
                {
                    type:'출고',
                    currency:'0.13000000',
                    total:'2.10000000',
                    unit:'BTCP',
                    text: '2021.12.24 23:59:59',
                },
                {
                    type:'출고',
                    currency:'0.20000000',
                    total:'2.10000000',
                    unit:'BTCP',
                    text: '2021.12.23 23:00:59',
                },
                {
                    type:'입고',
                    currency:'0.20000000',
                    total:'2.10000000',
                    unit:'BTCP',
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
