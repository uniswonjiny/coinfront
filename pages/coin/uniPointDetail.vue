<template>
    <div class="container">
        <breadcrumb :dataList="breadcrumb" />
        <div class="ps-product__content ps-product--detail">
            <div class="ps-product__title">
                <a href.stop="#">UNI Point </a>
            </div>
            <div class="dropdown-divider"/>
            <div class="row">
                <div class="col-6"><sub> {{new Date().toLocaleDateString()}} UNIP 시세</sub></div>
                <div class="col-6 text-right"><sub>부가세포함</sub></div>
            </div>
            <div class="card border-0 text-center" >
                <div class="card-body" :style="{'backgroundColor':'#103178'}">
                    <h3 class="text-white">
                        1 Point = 110,000 원
                    </h3>
                </div>
                <div class="card-body">
                    <a
                        class="ps-btn ps-btn--warning w-50"
                        href="#"
                        @click.prevent="dialog=!dialog"
                    >
                        UNI point 구매
                    </a>
                </div>
            </div>
            <div class="dropdown-divider"/>
            <small>보유 UNI point</small>
            <div class="card border-0 bg-light" >
                <div class="card-body text-center">
                    <span class="display-2 font-weight-bold text-danger">
                        12389,457
                    </span>
                    <sub class="font-weight-bold" :style="{'color':'#103178 !important'}">Point</sub>
                </div>
            </div>
            <div class="dropdown-divider"/>
            <div class="row">
                <div class="col-6"><sub>UNI Point 거래내역</sub></div>
                <div class="col-6 text-right">
                    <select class="custom-select custom-select-sm text-right">
                        <option v-for="(item, index) in sortItems" value="item.value" :key="index">{{item.text}}</option>
                    </select>
                </div>
            </div>
            <div class="dropdown-divider"></div>
                <div v-for="(item, index ) in sellList" :key="index">
                    <div class="row" @click.prevent="detailDialogEvent">
                        <div class="col-5">
                            <div>{{item.type1}} 
                                <span v-if="item.type2 == 0" class="ps-badge ps-badge--outstock" >
                                    확인중
                                </span>
                            </div>
                            <small>{{item.desc}}</small>
                        </div>
                        <div class="col-7 text-right">
                            <span :class="item.type1 === '구매' ? 'ps-product__price' : 'ps-product__del' ">{{item.point}}</span> UNIP
                        </div>
                    </div>
                    <div class="dropdown-divider"/>
                </div> 
                <button class="ps-btn ps-btn--primary mt-3 " >더보기</button>  
                <div class="dropdown-divider"/>
            </div>
            <div class="dropdown-divider"/>

    <v-dialog v-model="dialog" max-width="500" >
        <v-card>
            <v-toolbar
            color="#103178"
            dark
            >
                <v-icon>mdi-check-bold</v-icon>
                <v-toolbar-title>구매조건 확인</v-toolbar-title>
                <v-spacer/>
                    <v-btn icon @click.prevent="dialog=!dialog">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
            </v-toolbar>
            <v-container>
                <v-row dense>
                    <v-col cols="12">
                        <div>
                            <v-icon class="pb-1" color="success">
                                mdi-check-circle-outline
                            </v-icon>
                            <span>구매후 1년간 판매할 수 없습니다</span>
                        </div>
                    </v-col>
                    <v-col cols="12">
                        <div>
                            <v-icon  class="pb-1" color="success">
                                mdi-check-circle-outline
                            </v-icon>
                            <span>구매후 채굴수당(BTC point)의 입금은 15일 이후부터 시작합니다.</span>
                        </div>
                    </v-col>
                </v-row>
                <v-card dense flat>
                <v-divider/>
                    <v-card-title>
                        구매하시겠습니까?
                    </v-card-title>
                     <v-card-actions>
                         <v-btn
                            dark
                            color="#103178"
                            rounded
                            min-width="130"
                         >아니오</v-btn>
                         <v-btn
                            dark
                            color="warning"
                            rounded
                            min-width="130"
                         >구매</v-btn>
                     </v-card-actions>
                </v-card>
            </v-container>
        </v-card>
    </v-dialog>
    <!-- 현금영수증 -->
    <v-dialog v-model="currencyDialog" max-width="600" content-class="ps-dialog ps-compare">
        <v-card class="ps-dialog__body">
            <div class="ps-compare--product">
                <div class="ps-compare__table">
                    <table class="table ps-table ps-table--oriented">
                        <tbody>
                            <tr>
                                <th>
                                    거래번호
                                </th>
                                <th colspan="2" class="text-right">
                                    20220101012503
                                </th>              
                            </tr>
                            <tr>
                                <td>
                                    소득공제 양식 출력폼
                                </td>
                                <td>
                                    거래번호
                                </td>
                                <td>
                                    거래번호
                                </td>              
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </v-card>
    </v-dialog>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    <!-- 상세보기화면용 -->
        <v-dialog v-model="detailDialog" class="mb-n10" max-width="600">
            <v-card >
                <v-app-bar flat dense dark color="#103178">
                    No: 202112230001
                    <v-spacer/>
                    <v-btn
                        color="white"
                        icon
                        >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-app-bar>
                <v-card-text>
                        <v-row>
                            <v-col cols="5">
                                <v-icon>mdi-square-small</v-icon>
                                거래유형
                            </v-col>
                            <v-col cols="7" class="text-right">Uni Point 구매</v-col>
                  
                       
                            <v-col cols="5">
                                <v-icon>mdi-square-small</v-icon>
                                요청일시
                            </v-col>
                            <v-col cols="7" class="text-right">2020.01.01. 23:11:01</v-col>
                        
                      
                            <v-col cols="5">
                                <v-icon>mdi-square-small</v-icon>
                                처리일시
                            </v-col>
                            <v-col cols="7" class="text-right">2020.01.02. 23:11:01</v-col>
              
                            <v-col cols="5">
                                <v-icon>mdi-square-small</v-icon>
                                거래수량
                            </v-col>
                            <v-col cols="7" class="text-right">2,000 UNIP</v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="5">
                                <v-icon>mdi-square-small</v-icon>
                                거래단가
                            </v-col>
                            <v-col cols="7" class="text-right">5,200,000 원</v-col>
               
                            <v-col cols="5">
                                <v-icon>mdi-square-small</v-icon>
                                거래금액
                            </v-col>
                            <v-col cols="7" class="text-right">500,200,000 원</v-col>
                
                            <v-col cols="5">
                                <v-icon>mdi-square-small</v-icon>
                                부가세
                            </v-col>
                            <v-col cols="7" class="text-right">200,000 원</v-col>
                    
                            <v-col cols="5">
                                <v-icon>mdi-square-small</v-icon>
                                최종금액
                            </v-col>
                            <v-col cols="7" class="text-right">750,000,000 원</v-col>
                   
                            <v-col cols="5">
                                <v-icon>mdi-square-small</v-icon>
                                거래방법
                            </v-col>
                            <v-col cols="7" class="text-right">
                                <div>은행입금</div>
                                           <div>하나은행 - 유니코아</div>
                                           <div>111-0011-4577-21</div></v-col>
                   
                            <v-col cols="5">
                                <v-icon>mdi-square-small</v-icon>
                                거래증빙
                            </v-col>
                            <v-col cols="7" class="text-right">소득공제</v-col>
                        </v-row>
                </v-card-text>
            </v-card>
            
        </v-dialog>

    </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import VuePrinter from 'vue-dom-printer'
import { mapState } from 'vuex';

export default {
    layout: 'coin',
    components: {
        Breadcrumb,
    },
    data() {
        return {
            dialog: false,
            detailDialog: true,
            currencyDialog: false,
            breadcrumb: [
                {
                    url: '/coin/uniMining',
                    text: 'Home'
                },
                {
                    url: '/coin/uniPoint',
                    text: 'UNI Point'
                }
            ],
            sellList: [
                {
                    point: 100,
                    type1: '판매',
                    type2: 0,
                    desc: '2021.12.20 01:01:01'
                },
                {
                    point: 700,
                    type1: '구매',
                    type2: 0,
                    desc: '2021.12.20 09:29:59'
                },
                {
                    point: 190,
                    type1: '구매',
                    type2: 1,
                    desc: '2021.12.19 22:11:01'
                },
                {
                    point: 170,
                    type1: '판매',
                    type2: 1,
                    desc: '2021.12.18 18:11:01'
                },
                {
                    point: 300,
                    type1: '구매',
                    type2: 1,
                    desc: '2021.12.17 12:11:01'
                },
                {
                    point: 1100,
                    type1: '구매',
                    type2: 1,
                    desc: '2021.12.12 12:11:01'
                }
            ],

            getSort: 'all',
            sortItems: [
                {
                    text: '거래전체',
                    value: 'all'
                },
                {
                    text: '구매',
                    value: 'buy'
                },
                {
                    text: '판매',
                    value: 'sell'
                }
            ],
            coinInfo : {
                title: '누적수익',
                captions : '현재시세 1.0BTC = 85,000,000',
                data: [
                    {
                        title: '채굴수익(BTC/원)',
                        text: '0.000258 bit (1,555,000 원)',
                    },{
                        title: '추천수익(BTC/원)',
                        text: '0.000258 bit (1,555,000 원)',
                    },{
                        title: '추천수익플러스(BTC/원)',
                        text: '0.000258 bit (1,555,000 원)',
                    },{
                        title: '총계\n(BTC/원)',
                        text: '0.000258 bit (1,555,000 원)',
                    },{
                        title: '수익률\n(누적수익+투자금액)',
                        text: '10%',
                    }
                ]
            },
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
        detailDialogEvent(){
            console.log(1);
            this.detailDialog=true;
        },
        printEvent(){
            this.$print(this.$refs['tableContainer'])
        }
    }
};
</script>
